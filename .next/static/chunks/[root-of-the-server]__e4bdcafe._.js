(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s({
    "connect": (()=>connect),
    "setHooks": (()=>setHooks),
    "subscribeToUpdate": (()=>subscribeToUpdate)
});
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case "issues":
            break;
        case "partial":
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === "notFound") {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}}),
"[project]/public/images/lockleaks.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/lockleaks.49e5809e.svg");}}),
"[project]/public/images/lockleaks.svg.mjs { IMAGE => \"[project]/public/images/lockleaks.svg (static in ecmascript)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/lockleaks.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 186,
    height: 51,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/icons/Animated GIF BG.gif (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Animated GIF BG.f0f7c30b.gif");}}),
"[project]/public/icons/Animated GIF BG.gif.mjs { IMAGE => \"[project]/public/icons/Animated GIF BG.gif (static in ecmascript)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/Animated GIF BG.gif (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif__$28$static__in__ecmascript$29$__["default"],
    width: 50,
    height: 30,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/megaphone-icon.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/megaphone-icon.575f38e1.svg");}}),
"[project]/public/images/megaphone-icon.svg.mjs { IMAGE => \"[project]/public/images/megaphone-icon.svg (static in ecmascript)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/megaphone-icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 17,
    height: 18,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/newheader.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/lockleaks.svg.mjs { IMAGE => "[project]/public/images/lockleaks.svg (static in ecmascript)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/Animated GIF BG.gif.mjs { IMAGE => "[project]/public/icons/Animated GIF BG.gif (static in ecmascript)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/megaphone-icon.svg.mjs { IMAGE => "[project]/public/images/megaphone-icon.svg (static in ecmascript)" } [client] (structured image object, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Header() {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messages = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            width: 50,
            height: 30,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Get 20% OFF:"
                    }, void 0, false, {
                        fileName: "[project]/components/newheader.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "top-bar-underline",
                        children: [
                            "Follow us on Twitter(X) (",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://twitter.com/lock_leaks",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: 'white',
                                    textDecoration: 'none'
                                },
                                children: "@lock_leaks"
                            }, void 0, false, {
                                fileName: "[project]/components/newheader.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            ") and leave a review — get 20% discount on your next service."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/newheader.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            width: 20,
            height: 30,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Game-Changer:"
                    }, void 0, false, {
                        fileName: "[project]/components/newheader.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "top-bar-underline",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/services",
                            style: {
                                color: 'white',
                                textDecoration: 'none'
                            },
                            children: "Boost Your Traffic – Recover Lost Subscribers from Pirated Sites!"
                        }, void 0, false, {
                            fileName: "[project]/components/newheader.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/newheader.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const interval = setInterval({
                "Header.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "Header.useEffect.interval": (prevIndex)=>(prevIndex + 1) % messages.length
                    }["Header.useEffect.interval"]);
                }
            }["Header.useEffect.interval"], 5000);
            return ({
                "Header.useEffect": ()=>clearInterval(interval)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    setIsScrolled(scrollTop > 10);
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // run once on load
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "top-bar-custom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "top-bar-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            src: messages[currentIndex].icon,
                            alt: "notification icon",
                            width: messages[currentIndex].width,
                            height: messages[currentIndex].height,
                            className: `top-bar-icon ${currentIndex !== 0 ? 'bell-animate' : ''}`
                        }, void 0, false, {
                            fileName: "[project]/components/newheader.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "top-bar-text-wrap",
                            children: messages[currentIndex].content
                        }, void 0, false, {
                            fileName: "[project]/components/newheader.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/newheader.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/newheader.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `header-custom ${isScrolled ? 'scrolled' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-6 col-md-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "logo-hover-effect",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                alt: "Logo",
                                                width: 185,
                                                height: 50
                                            }, void 0, false, {
                                                fileName: "[project]/components/newheader.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/newheader.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "menu-wrapper d-none d-md-flex col-md-4 justify-content-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services",
                                            className: "nav-link-custom",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/pricing",
                                            className: "nav-link-custom",
                                            children: "Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/agencies",
                                            className: "nav-link-custom",
                                            children: "Agencies"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/blogs",
                                            className: "nav-link-custom",
                                            children: "Blog"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-6 col-md-4 d-flex justify-content-end align-items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-none d-md-flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/login",
                                                    className: "btn-login",
                                                    children: "Log in"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/newheader.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/start",
                                                    className: "btn-start",
                                                    children: "Start Free"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/newheader.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-md-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "hamburger-btn",
                                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                                "aria-label": "Toggle menu",
                                                children: "☰"
                                            }, void 0, false, {
                                                fileName: "[project]/components/newheader.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/newheader.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mobile-nav d-flex flex-column align-items-end pe-3 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/services",
                                    className: "nav-link-custom mb-1",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/pricing",
                                    className: "nav-link-custom mb-1",
                                    children: "Pricing"
                                }, void 0, false, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/agencies",
                                    className: "nav-link-custom mb-1",
                                    children: "Agencies"
                                }, void 0, false, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blogs",
                                    className: "nav-link-custom",
                                    children: "Blog"
                                }, void 0, false, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/newheader.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/newheader.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/newheader.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "GopJjuOLPgl4pp1KV9h1z7UrW+g=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/utils.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/input.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/CheckPrivateContentFree.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import React, { useState, useEffect } from "react";
// import "../styles/CheckPrivateContent.css";
// import "../styles/Newheader.css";
// import Image from "next/image";
// import proimg from "../public/images/pro.png";
// type PlatformKey =
//   | "OnlyFans"
//   | "Fansly"
//   | "Fanvue"
//   | "My.Club"
//   | "Patreon"
//   | "Manyvids"
//   | "Just For Fans"
//   | "Fancentro"
//   | "iFans"
//   | "LoyalFans"
//   | "Chaturbate"
//   | "MFC"
//   | "Stripchat"
//   | "Streamate"
//   | "LiveJasmin"
//   | "BongaCams"
//   | "CAM4"
//   | "CamSoda"
//   | "Jerkmate"
//   | "Twitter(X)"
//   | "TikTok"
//   | "Instagram"
//   | "Reddit"
//   | "Facebook"
//   | "Custom";
// const subscriptionPlatforms: PlatformKey[] = [
//   "OnlyFans",
//   "Fansly",
//   "Fanvue",
//   "My.Club",
//   "Patreon",
//   "Manyvids",
//   "Just For Fans",
//   "Fancentro",
//   "iFans",
//   "LoyalFans",
// ];
// const streamingPlatforms: PlatformKey[] = [
//   "Chaturbate",
//   "MFC",
//   "Stripchat",
//   "Streamate",
//   "LiveJasmin",
//   "BongaCams",
//   "CAM4",
//   "CamSoda",
//   "Jerkmate",
// ];
// const socialPlatforms: PlatformKey[] = [
//   "Twitter(X)",
//   "TikTok",
//   "Instagram",
//   "Reddit",
//   "Facebook",
// ];
// const TOTAL_STEPS = 5; // Added Step 5
// const CheckPrivateContent: React.FC = () => {
//   const [step, setStep] = useState<number>(1);
//   const [selectedPlatforms, setSelectedPlatforms] = useState<Set<PlatformKey>>(
//     new Set()
//   );
//   const [accountUrls, setAccountUrls] = useState<string[]>([""]);
//   const [verificationMethod, setVerificationMethod] = useState<
//     "email" | "dns" | "file" | "none"
//   >("email");
//   const togglePlatform = (p: PlatformKey) => {
//     setSelectedPlatforms((prev) => {
//       const next = new Set(prev);
//       if (next.has(p)) next.delete(p);
//       else next.add(p);
//       return next;
//     });
//   };
//   const addUrlField = () => setAccountUrls((u) => [...u, ""]);
//   const updateUrl = (idx: number, val: string) =>
//     setAccountUrls((u) => u.map((v, i) => (i === idx ? val : v)));
//   const resetWizard = () => {
//     setStep(1);
//     setSelectedPlatforms(new Set());
//     setAccountUrls([""]);
//     setVerificationMethod("email");
//   };
//   const nextStep = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
//   const prevStep = () => setStep((s) => Math.max(1, s - 1));
//   const handleFinish = () => {
//     const el = document.getElementById("closePlatformModalBtn");
//     el?.click();
//   };
//   const handleCopy = () => {
//     navigator.clipboard.writeText(
//       "Content protected and enforced by lockleaks.com."
//     );
//     alert("Copied to clipboard!");
//   };
//   const StepFooter = () => (
//     <div className="d-flex justify-content-end align-items-center mt-4">
//       <div className="d-flex gap-2">
//         <button
//           type="button"
//           className="btn btn-outline-light"
//           onClick={prevStep}
//           disabled={step === 1}
//         >
//           Back
//         </button>
//         {step < TOTAL_STEPS ? (
//           <button
//             type="button"
//             className="btn btn-pink px-4"
//             onClick={nextStep}
//           >
//             Next
//           </button>
//         ) : (
//           <button
//             type="button"
//             className="btn btn-pink px-4"
//             onClick={handleFinish}
//           >
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
//   // --------------------- STEP 1 ----------------------
//   const Step1Platforms = () => (
//     <>
//       <h6 className="platform-heading">Subscription Platforms</h6>
//       <div className="platform-grid">
//         {subscriptionPlatforms.map((platform, idx) => (
//           <button
//             key={idx}
//             type="button"
//             className={`platform-btn ${
//               selectedPlatforms.has(platform) ? "active" : ""
//             }`}
//             onClick={() => togglePlatform(platform)}
//           >
//             {platform}
//           </button>
//         ))}
//       </div>
//       <h6 className="platform-heading mt-4">Streaming Platforms</h6>
//       <div className="platform-grid">
//         {streamingPlatforms.map((platform, idx) => (
//           <button
//             key={idx}
//             type="button"
//             className={`platform-btn ${
//               selectedPlatforms.has(platform) ? "active" : ""
//             }`}
//             onClick={() => togglePlatform(platform)}
//           >
//             {platform}
//           </button>
//         ))}
//       </div>
//       <h6 className="platform-heading mt-4">Social Media Platforms</h6>
//       <div className="platform-grid">
//         {socialPlatforms.map((platform, idx) => (
//           <button
//             key={idx}
//             type="button"
//             className={`platform-btn ${
//               selectedPlatforms.has(platform) ? "active" : ""
//             }`}
//             onClick={() => togglePlatform(platform)}
//           >
//             {platform}
//           </button>
//         ))}
//       </div>
//       <h6 className="platform-heading mt-4">Other Platforms</h6>
//       <div className="platform-grid">
//         <button
//           type="button"
//           className={`platform-btn ${
//             selectedPlatforms.has("Custom") ? "active" : ""
//           }`}
//           onClick={() => togglePlatform("Custom")}
//         >
//           + Add Custom Platform
//         </button>
//       </div>
//     </>
//   );
//   // --------------------- STEP 2 ----------------------
//   const Step2Urls = () => (
//     <div>
//       <div className="text-center my-3">
//         <h5 className="form-heading">Just enter your username</h5>
//         <div className="d-flex justify-content-center">
//           <div className="input-group mb-3 custom-input-group">
//             <input
//               type="url"
//               className="form-control custom-input"
//               placeholder="https://onlyfans.com/@username"
//               value={accountUrls[0]}
//               onChange={(e) => updateUrl(0, e.target.value)}
//             />
//             <button
//               type="button"
//               className="btn btn-pink"
//               onClick={() => console.log("Save clicked")}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="mt-3">
//         <button
//           type="button"
//           className="btn custom-btn-free p-0"
//           onClick={addUrlField}
//         >
//           Add Account from Another Platform
//         </button>
//       </div>
//     </div>
//   );
//   // --------------------- STEP 3 ----------------------
//   const Step3Verify = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState({ email: "", password: "" });
//     const validate = () => {
//       const newErrors = { email: "", password: "" };
//       if (!email.includes("@"))
//         newErrors.email = "Please enter a valid email address";
//       if (password.length < 6)
//         newErrors.password = "Don't forget to set your password!";
//       setErrors(newErrors);
//       return !newErrors.email && !newErrors.password;
//     };
//     const handleNextStep = () => {
//       if (validate()) nextStep();
//     };
//     return (
//       <div className="step3-container">
//         <p className="text-muted text-center mb-4">
//           Enter your email and set a password for your free scan account.
//         </p>
//         <div className="d-flex gap-3 mb-2">
//           <div className="flex-fill">
//             <label>Email Address</label>
//             <input
//               type="email"
//               className={`form-control ${errors.email ? "is-invalid" : ""}`}
//               placeholder="your@email.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && (
//               <small className="text-danger">{errors.email}</small>
//             )}
//           </div>
//           <div className="flex-fill">
//             <label>Password</label>
//             <input
//               type="password"
//               className={`form-control ${errors.password ? "is-invalid" : ""}`}
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && (
//               <small className="text-danger">{errors.password}</small>
//             )}
//           </div>
//         </div>
//         <p className="text-center text-muted mb-3">
//           Note: (Required for scan updates and account creation.)
//         </p>
//         <h6 className="text-center mb-2">
//           Select Your Preferred Contact Method
//         </h6>
//         <div className="list-group mb-3">
//           <label className="list-group-item">
//             <input
//               type="radio"
//               name="verify"
//               className="me-2"
//               checked={verificationMethod === "email"}
//               onChange={() => setVerificationMethod("email")}
//             />
//             Your WhatsApp Number
//           </label>
//           <label className="list-group-item">
//             <input
//               type="radio"
//               name="verify"
//               className="me-2"
//               checked={verificationMethod === "dns"}
//               onChange={() => setVerificationMethod("dns")}
//             />
//             Phone Number
//           </label>
//           <label className="list-group-item">
//             <input
//               type="radio"
//               name="verify"
//               className="me-2"
//               checked={verificationMethod === "file"}
//               onChange={() => setVerificationMethod("file")}
//             />
//             Live Chat
//           </label>
//           <label className="list-group-item">
//             <input
//               type="radio"
//               name="verify"
//               className="me-2"
//               checked={verificationMethod === "none"}
//               onChange={() => setVerificationMethod("none")}
//             />
//             Email Only
//           </label>
//         </div>
//         <div className="text-center">
//           <button
//             type="button"
//             className="btn btn-pink px-4"
//             onClick={handleNextStep}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     );
//   };
//   // --------------------- STEP 4 ----------------------
//   const Step4Protect = () => (
//     <div className="step text-center">
//       <h3 className="popup-heading">Protect Your Content</h3>
//       <p className="popup-description">
//         To ensure your content is protected and enforced, add the following line
//         to your profile description:
//       </p>
//       <p className="popup-instruction">
//         Just copy the text above and paste it into your profile description on
//         OnlyFans or any other platform.
//       </p>
//       <input
//         type="text"
//         className="input-field gradient-text"
//         readOnly
//         value="Content protected and enforced by lockleaks.com."
//       />
//       <div className="text-start mb-4">
//         <button
//           className="btn text-white"
//           style={{ backgroundColor: "#CF3CA6" }}
//           onClick={handleCopy}
//         >
//           Copy to Clipboard
//         </button>
//       </div>
//       <h5 className="profile-preview-heading">
//         How It Should Look on Your Profile:
//       </h5>
//       <Image
//         src={proimg}
//         alt="Example Preview"
//         className="popup-image mb-3 d-block mx-auto"
//       />
//     </div>
//   );
//   // --------------------- STEP 5 (NEW) ----------------------
//   const Step5Scanning = () => {
//     const [progress, setProgress] = useState(0);
//     const [iconIndex, setIconIndex] = useState(0);
//     const icons = [
//       "/icons/folder.svg",
//       "/icons/1download.svg",
//       "/icons/11search.svg",
//     ]; // Replace with your actual icon paths
//     // Progress simulation
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setProgress((prev) => {
//           let newVal = prev + (Math.random() * 10 - 5);
//           if (newVal < 0) newVal = 0;
//           if (newVal > 100) newVal = 100;
//           return parseFloat(newVal.toFixed(2));
//         });
//       }, 800);
//       return () => clearInterval(interval);
//     }, []);
//     // Icon rotation
//     useEffect(() => {
//       const iconTimer = setInterval(() => {
//         setIconIndex((prev) => (prev + 1) % icons.length);
//       }, 1500);
//       return () => clearInterval(iconTimer);
//     }, []);
//     return (
//       <div className="step5-scanning text-center">
//         <h3 className="popup-heading mb-3">Scanning in Progress</h3>
//         <p className="popup-description">
//           Please note: The full scan and review may take between 12 to 24 hours.
//           You will be contacted as soon as the results are ready.
//         </p>
//         <p className="popup-instruction mb-4">
//           Stay tuned! We’ll send you updates as soon as your scan is ready.
//         </p>
//         <div className="scanning-box">
//           <div className="scanning-text gradient-loading">Scanning...</div>
//           <div className="scan-progress">{progress.toFixed(2)}%</div>
//           <div className="scan-icons">
//             <Image src={icons[iconIndex]} width={50} height={50} alt="icon" />
//           </div>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100">
//       <div className="dailogs-login-slider-section d-flex flex-md-row flex-column">
//         {/* Left Column */}
//         <div className="col-md-6 platform-login-box text-center">
//           <div className="check-header">
//             Check if your private content has been leaked
//           </div>
//           <div className="check-sub">Free & Secure</div>
//           <p className="check-instruction">
//             Please provide the URLs of your primary accounts across all
//             platforms you use, even if they are{" "}
//             <strong>no longer active</strong>. This helps ensure comprehensive
//             protection.
//           </p>
//           <div
//             className="add-account-box"
//             data-bs-toggle="modal"
//             data-bs-target="#platformModal"
//             onClick={resetWizard}
//           >
//             <span>Add Your Accounts</span>
//             <Image
//               src="/icons/accountfinger.svg"
//               width={24}
//               height={24}
//               alt="account"
//             />
//           </div>
//         </div>
//         {/* Right Column */}
//         <div className="col-md-6 dailogs-info-box p-0">
//           {/* carousel remains unchanged */}
//         </div>
//       </div>
//       {/* Modal */}
//       <div
//         className="modal fade"
//         id="platformModal"
//         tabIndex={-1}
//         aria-labelledby="platformModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
//           <div className="modal-content custom-popup text-white">
//             <div className="modal-header border-0">
//               <h5
//                 className="modal-title w-100 text-center"
//                 id="platformModalLabel"
//               >
//                 {step === 1 && "Select your platform"}
//                 {step === 2 && "Add your OnlyFans account"}
//                 {step === 3 && "Add your contact information"}
//                 {step === 4 && "Protect Your Content"}
//                 {step === 5 && "Scanning in Progress"}
//               </h5>
//               <button
//                 id="closePlatformModalBtn"
//                 type="button"
//                 className="btn-close btn-close-white"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               {step === 1 && <Step1Platforms />}
//               {step === 2 && <Step2Urls />}
//               {step === 3 && <Step3Verify />}
//               {step === 4 && <Step4Protect />}
//               {step === 5 && <Step5Scanning />}
//               <StepFooter />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CheckPrivateContent;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const subscriptionPlatforms = [
    "OnlyFans",
    "Fansly",
    "Fanvue",
    "My.Club",
    "Patreon",
    "Manyvids",
    "Just For Fans",
    "Fancentro",
    "iFans",
    "LoyalFans"
];
const streamingPlatforms = [
    "Chaturbate",
    "MFC",
    "Stripchat",
    "Streamate",
    "LiveJasmin",
    "BongaCams",
    "CAM4",
    "CamSoda",
    "Jerkmate"
];
const socialPlatforms = [
    "Twitter(X)",
    "TikTok",
    "Instagram",
    "Reddit",
    "Facebook"
];
const TOTAL_STEPS = 5;
const CheckPrivateContent = ()=>{
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedPlatform, setSelectedPlatform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customPlatform, setCustomPlatform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showCustomInput, setShowCustomInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [contactMethod, setContactMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("whatsapp");
    const [contactValue, setContactValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [agreedToTerms, setAgreedToTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const resetWizard = ()=>{
        setStep(1);
        setSelectedPlatform("");
        setCustomPlatform("");
        setShowCustomInput(false);
        setUsername("");
        setEmail("");
        setPassword("");
        setContactMethod("whatsapp");
        setContactValue("");
        setAgreedToTerms(false);
        setErrors({});
    };
    const validateStep = (currentStep)=>{
        const newErrors = {};
        switch(currentStep){
            case 1:
                if (!selectedPlatform) {
                    newErrors.platform = "Please select a platform";
                }
                if (selectedPlatform === "Custom" && !customPlatform.trim()) {
                    newErrors.customPlatform = "Please enter custom platform name";
                }
                break;
            case 2:
                if (!username.trim()) {
                    newErrors.username = "Please enter your username";
                }
                break;
            case 3:
                if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    newErrors.email = "Please enter a valid email address";
                }
                if (!password.trim() || password.length < 6) {
                    newErrors.password = "Password must be at least 6 characters";
                }
                if (!contactValue.trim()) {
                    newErrors.contactValue = `Please enter your ${getContactLabel()}`;
                }
                // Validate phone numbers (WhatsApp and Phone)
                if (contactMethod === "phone" || contactMethod === "whatsapp") {
                    const phoneRegex = /^[\+]?[1-9][\d]{7,15}$/;
                    const cleanNumber = contactValue.replace(/[\s\-\(\)]/g, "");
                    if (!phoneRegex.test(cleanNumber)) {
                        newErrors.contactValue = "Please enter a valid phone number with country code (e.g., +1234567890)";
                    }
                }
                // Validate email format if email is selected as contact method
                if (contactMethod === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue)) {
                    newErrors.contactValue = "Please enter a valid email address";
                }
                break;
            case 4:
                if (!agreedToTerms) {
                    newErrors.terms = "Please agree to the terms and conditions";
                }
                break;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const nextStep = ()=>{
        if (validateStep(step)) {
            setStep((s)=>Math.min(TOTAL_STEPS, s + 1));
        }
    };
    const prevStep = ()=>setStep((s)=>Math.max(1, s - 1));
    const handlePlatformSelect = (platform)=>{
        if (platform === "Custom") {
            setShowCustomInput(true);
            setSelectedPlatform("Custom");
        } else {
            setShowCustomInput(false);
            setSelectedPlatform(platform);
            setCustomPlatform("");
        }
    };
    const handleSubmit = async ()=>{
        if (!validateStep(4)) return;
        setIsLoading(true);
        try {
            const platformName = selectedPlatform === "Custom" ? customPlatform : selectedPlatform;
            const requestBody = {
                pricingName: "FREE",
                billed: "MONTHLY",
                platform: platformName.toLowerCase(),
                username: username,
                email: email,
                password: password
            };
            // Add contact method based on selection
            switch(contactMethod){
                case "whatsapp":
                    requestBody.contactWhatsappNumber = contactValue;
                    break;
                case "phone":
                    requestBody.contactPhoneNumber = contactValue;
                    break;
                case "email":
                    requestBody.contactEmail = contactValue;
                    break;
                case "livechat":
                    requestBody.contactLiveChat = contactValue;
                    break;
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:8080/v1/api/auth/signup", requestBody, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].success("Account created successfully!");
                // Move to step 5 (scanning) instead of closing modal immediately
                setStep(5);
                // After 3 seconds, close modal and redirect
                setTimeout(()=>{
                    const closeButton = document.getElementById("closePlatformModalBtn");
                    closeButton?.click();
                    setTimeout(()=>{
                        router.push("/");
                    }, 500);
                }, 3000);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage);
            console.error("Registration error:", error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleFinish = ()=>{
        const el = document.getElementById("closePlatformModalBtn");
        el?.click();
        router.push("/");
    };
    const getContactPlaceholder = ()=>{
        switch(contactMethod){
            case "whatsapp":
                return "+1234567890";
            case "phone":
                return "+1234567890";
            case "email":
                return "contact@email.com";
            case "livechat":
                return "Enter your live chat username";
            default:
                return "";
        }
    };
    const getContactLabel = ()=>{
        switch(contactMethod){
            case "whatsapp":
                return "WhatsApp Number";
            case "phone":
                return "Phone Number";
            case "email":
                return "Email Address";
            case "livechat":
                return "Live Chat Username";
            default:
                return "Contact Information";
        }
    };
    const StepFooter = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-end align-items-center mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex gap-2",
                children: [
                    step < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn btn-outline-light",
                        onClick: prevStep,
                        disabled: step === 1,
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                        lineNumber: 838,
                        columnNumber: 11
                    }, this),
                    step < 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn btn-pink px-4",
                        onClick: nextStep,
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                        lineNumber: 849,
                        columnNumber: 11
                    }, this) : step === 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn btn-pink px-4",
                        onClick: handleSubmit,
                        disabled: isLoading,
                        children: isLoading ? "Creating Account..." : "Submit"
                    }, void 0, false, {
                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                        lineNumber: 857,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn btn-pink px-4",
                        onClick: handleFinish,
                        children: "Finish"
                    }, void 0, false, {
                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                        lineNumber: 866,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CheckPrivateContentFree.tsx",
                lineNumber: 836,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/CheckPrivateContentFree.tsx",
            lineNumber: 835,
            columnNumber: 5
        }, this);
    // Step 1 - Platform Selection (Single Selection)
    const Step1Platforms = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    className: "platform-heading",
                    children: "Subscription Platforms"
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 881,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "platform-grid",
                    children: subscriptionPlatforms.map((platform, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `platform-btn ${selectedPlatform === platform ? "active" : ""}`,
                            onClick: ()=>handlePlatformSelect(platform),
                            children: platform
                        }, idx, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 884,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 882,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    className: "platform-heading mt-4",
                    children: "Streaming Platforms"
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 897,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "platform-grid",
                    children: streamingPlatforms.map((platform, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `platform-btn ${selectedPlatform === platform ? "active" : ""}`,
                            onClick: ()=>handlePlatformSelect(platform),
                            children: platform
                        }, idx, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 900,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 898,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    className: "platform-heading mt-4",
                    children: "Social Media Platforms"
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 913,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "platform-grid",
                    children: socialPlatforms.map((platform, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `platform-btn ${selectedPlatform === platform ? "active" : ""}`,
                            onClick: ()=>handlePlatformSelect(platform),
                            children: platform
                        }, idx, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 916,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 914,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    className: "platform-heading mt-4",
                    children: "Other Platforms"
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 929,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "platform-grid",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `platform-btn ${selectedPlatform === "Custom" ? "active" : ""}`,
                        onClick: ()=>handlePlatformSelect("Custom"),
                        children: "+ Add Custom Platform"
                    }, void 0, false, {
                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                        lineNumber: 931,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 930,
                    columnNumber: 7
                }, this),
                showCustomInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: `form-control ${errors.customPlatform ? "is-invalid" : ""}`,
                            placeholder: "Enter custom platform name",
                            value: customPlatform,
                            onChange: (e)=>setCustomPlatform(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 944,
                            columnNumber: 11
                        }, this),
                        errors.customPlatform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: "text-danger",
                            children: errors.customPlatform
                        }, void 0, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 954,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 943,
                    columnNumber: 9
                }, this),
                errors.platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-danger mt-2",
                    children: errors.platform
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 960,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    // Step 2 - Username Input
    const Step2Username = ()=>{
        const platformName = selectedPlatform === "Custom" ? customPlatform : selectedPlatform;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center my-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "form-heading text-white",
                            children: [
                                "Add your ",
                                platformName,
                                " account"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 973,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted mb-3",
                            children: "Just enter your username"
                        }, void 0, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 976,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex justify-content-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "input-group mb-3 custom-input-group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: `form-control custom-input ${errors.username ? "is-invalid" : ""}`,
                                    placeholder: "Enter your username",
                                    value: username,
                                    onChange: (e)=>setUsername(e.target.value),
                                    style: {
                                        backgroundColor: "#2a2a2a",
                                        border: "1px solid #555",
                                        color: "#ffffff",
                                        borderRadius: "8px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 979,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                lineNumber: 978,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 977,
                            columnNumber: 11
                        }, this),
                        errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: "text-danger",
                            children: errors.username
                        }, void 0, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 997,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 972,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Input"], {
                    className: "bg-neutral-50"
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1000,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "text-sm text-neutral-50",
                    variant: "default",
                    children: "Hii"
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1001,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CheckPrivateContentFree.tsx",
            lineNumber: 971,
            columnNumber: 7
        }, this);
    };
    // Step 3 - Contact Information
    const Step3Contact = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step3-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted text-center mb-4",
                    children: "Enter your email and set a password for your free scan account."
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1011,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex gap-3 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-fill",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "form-label",
                                    children: "Email Address"
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1017,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    className: `form-control ${errors.email ? "is-invalid" : ""}`,
                                    placeholder: "your@email.com",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1018,
                                    columnNumber: 11
                                }, this),
                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: "text-danger",
                                    children: errors.email
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1026,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1016,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-fill",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "form-label",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    className: `form-control ${errors.password ? "is-invalid" : ""}`,
                                    placeholder: "Enter password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1032,
                                    columnNumber: 11
                                }, this),
                                errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: "text-danger",
                                    children: errors.password
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1040,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1030,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1015,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-muted mb-3",
                    children: "Note: (Required for scan updates and account creation.)"
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1045,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    className: "text-center mb-3",
                    children: "Select Your Preferred Contact Method"
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1049,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "list-group mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "list-group-item d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "contactMethod",
                                    className: "me-2",
                                    checked: contactMethod === "whatsapp",
                                    onChange: ()=>setContactMethod("whatsapp")
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1052,
                                    columnNumber: 11
                                }, this),
                                "WhatsApp Number"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1051,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "list-group-item d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "contactMethod",
                                    className: "me-2",
                                    checked: contactMethod === "phone",
                                    onChange: ()=>setContactMethod("phone")
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1062,
                                    columnNumber: 11
                                }, this),
                                "Phone Number"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1061,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "list-group-item d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "contactMethod",
                                    className: "me-2",
                                    checked: contactMethod === "livechat",
                                    onChange: ()=>setContactMethod("livechat")
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1072,
                                    columnNumber: 11
                                }, this),
                                "Live Chat"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1071,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "list-group-item d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "contactMethod",
                                    className: "me-2",
                                    checked: contactMethod === "email",
                                    onChange: ()=>setContactMethod("email")
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1082,
                                    columnNumber: 11
                                }, this),
                                "Email Only"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1081,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1050,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "form-label",
                            children: getContactLabel()
                        }, void 0, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1094,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: `form-control ${errors.contactValue ? "is-invalid" : ""}`,
                            placeholder: getContactPlaceholder(),
                            value: contactValue,
                            onChange: (e)=>setContactValue(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1095,
                            columnNumber: 9
                        }, this),
                        errors.contactValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: "text-danger",
                            children: errors.contactValue
                        }, void 0, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1093,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CheckPrivateContentFree.tsx",
            lineNumber: 1010,
            columnNumber: 5
        }, this);
    // Step 4 - Terms and Submit
    const Step4Terms = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "popup-heading",
                    children: "Ready to Protect Your Content?"
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1112,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "popup-description",
                    children: [
                        "You've selected the Free Plan for",
                        " ",
                        selectedPlatform === "Custom" ? customPlatform : selectedPlatform
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1113,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "popup-instruction",
                    children: "By proceeding, you confirm your registration to Lock Leaks."
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1117,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "d-flex align-items-center justify-content-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    className: `me-2 ${errors.terms ? "is-invalid" : ""}`,
                                    checked: agreedToTerms,
                                    onChange: (e)=>setAgreedToTerms(e.target.checked)
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1123,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "You agree to our",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-pink",
                                            children: "Terms and Conditions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                            lineNumber: 1131,
                                            columnNumber: 13
                                        }, this),
                                        " ",
                                        "and",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-pink",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                            lineNumber: 1135,
                                            columnNumber: 13
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                    lineNumber: 1129,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1122,
                            columnNumber: 9
                        }, this),
                        errors.terms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: "text-danger d-block mt-1",
                            children: errors.terms
                        }, void 0, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1121,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CheckPrivateContentFree.tsx",
            lineNumber: 1111,
            columnNumber: 5
        }, this);
    // Step 5 - Scanning
    const Step5Scanning = ()=>{
        _s1();
        const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
        const [iconIndex, setIconIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
        const icons = [
            "/icons/folder.svg",
            "/icons/1download.svg",
            "/icons/11search.svg"
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "CheckPrivateContent.Step5Scanning.useEffect": ()=>{
                const interval = setInterval({
                    "CheckPrivateContent.Step5Scanning.useEffect.interval": ()=>{
                        setProgress({
                            "CheckPrivateContent.Step5Scanning.useEffect.interval": (prev)=>{
                                let newVal = prev + Math.random() * 5;
                                if (newVal > 100) newVal = 100;
                                return parseFloat(newVal.toFixed(2));
                            }
                        }["CheckPrivateContent.Step5Scanning.useEffect.interval"]);
                    }
                }["CheckPrivateContent.Step5Scanning.useEffect.interval"], 200);
                return ({
                    "CheckPrivateContent.Step5Scanning.useEffect": ()=>clearInterval(interval)
                })["CheckPrivateContent.Step5Scanning.useEffect"];
            }
        }["CheckPrivateContent.Step5Scanning.useEffect"], []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "CheckPrivateContent.Step5Scanning.useEffect": ()=>{
                const iconTimer = setInterval({
                    "CheckPrivateContent.Step5Scanning.useEffect.iconTimer": ()=>{
                        setIconIndex({
                            "CheckPrivateContent.Step5Scanning.useEffect.iconTimer": (prev)=>(prev + 1) % icons.length
                        }["CheckPrivateContent.Step5Scanning.useEffect.iconTimer"]);
                    }
                }["CheckPrivateContent.Step5Scanning.useEffect.iconTimer"], 1500);
                return ({
                    "CheckPrivateContent.Step5Scanning.useEffect": ()=>clearInterval(iconTimer)
                })["CheckPrivateContent.Step5Scanning.useEffect"];
            }
        }["CheckPrivateContent.Step5Scanning.useEffect"], []);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "step5-scanning text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "popup-heading mb-3",
                    children: "Account Created Successfully!"
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "popup-description",
                    children: "Please note: The full scan and review may take between 12 to 24 hours. You will be contacted as soon as the results are ready."
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1179,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "popup-instruction mb-4",
                    children: "Stay tuned! We'll send you updates as soon as your scan is ready."
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1183,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scanning-box",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scanning-text gradient-loading",
                            children: "Initializing Scan..."
                        }, void 0, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scan-progress",
                            children: [
                                progress.toFixed(2),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scan-icons",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                src: icons[iconIndex],
                                width: 50,
                                height: 50,
                                alt: "icon"
                            }, void 0, false, {
                                fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                lineNumber: 1193,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CheckPrivateContentFree.tsx",
                            lineNumber: 1192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1187,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CheckPrivateContentFree.tsx",
            lineNumber: 1177,
            columnNumber: 7
        }, this);
    };
    _s1(Step5Scanning, "XdrhKGNcB4SFD5uZQdWEMBjvba0=");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex justify-content-center align-items-center min-vh-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dailogs-login-slider-section d-flex flex-md-row flex-column",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-6 platform-login-box text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "check-header",
                                children: "Check if your private content has been leaked"
                            }, void 0, false, {
                                fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                lineNumber: 1205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "check-sub",
                                children: "Free & Secure"
                            }, void 0, false, {
                                fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                lineNumber: 1208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "check-instruction",
                                children: [
                                    "Please provide the URLs of your primary accounts across all platforms you use, even if they are",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "no longer active"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                        lineNumber: 1212,
                                        columnNumber: 13
                                    }, this),
                                    ". This helps ensure comprehensive protection."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                lineNumber: 1209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "add-account-box",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#platformModal",
                                onClick: resetWizard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add Your Accounts"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                        lineNumber: 1222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/icons/accountfinger.svg",
                                        width: 24,
                                        height: 24,
                                        alt: "account"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                        lineNumber: 1223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                lineNumber: 1216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                        lineNumber: 1204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-6 dailogs-info-box p-0"
                    }, void 0, false, {
                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                        lineNumber: 1233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CheckPrivateContentFree.tsx",
                lineNumber: 1202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal fade",
                id: "platformModal",
                tabIndex: -1,
                "aria-labelledby": "platformModalLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-content custom-popup text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-header border-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "modal-title w-100 text-center",
                                        id: "platformModalLabel",
                                        children: [
                                            step === 1 && "Select your platform",
                                            step === 2 && `Add your ${selectedPlatform === "Custom" ? customPlatform : selectedPlatform} account`,
                                            step === 3 && "Add your contact information",
                                            step === 4 && "Ready to Protect Your Content?",
                                            step === 5 && "Account Created Successfully!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                        lineNumber: 1249,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        id: "closePlatformModalBtn",
                                        type: "button",
                                        className: "btn-close btn-close-white",
                                        "data-bs-dismiss": "modal",
                                        "aria-label": "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                        lineNumber: 1264,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                lineNumber: 1248,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-body",
                                children: [
                                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step1Platforms, {}, void 0, false, {
                                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                        lineNumber: 1274,
                                        columnNumber: 30
                                    }, this),
                                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step2Username, {}, void 0, false, {
                                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                        lineNumber: 1275,
                                        columnNumber: 30
                                    }, this),
                                    step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step3Contact, {}, void 0, false, {
                                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                        lineNumber: 1276,
                                        columnNumber: 30
                                    }, this),
                                    step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step4Terms, {}, void 0, false, {
                                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                        lineNumber: 1277,
                                        columnNumber: 30
                                    }, this),
                                    step === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step5Scanning, {}, void 0, false, {
                                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                        lineNumber: 1278,
                                        columnNumber: 30
                                    }, this),
                                    step < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepFooter, {}, void 0, false, {
                                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                        lineNumber: 1279,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CheckPrivateContentFree.tsx",
                                lineNumber: 1273,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CheckPrivateContentFree.tsx",
                        lineNumber: 1247,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CheckPrivateContentFree.tsx",
                    lineNumber: 1246,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CheckPrivateContentFree.tsx",
                lineNumber: 1239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CheckPrivateContentFree.tsx",
        lineNumber: 1201,
        columnNumber: 5
    }, this);
};
_s(CheckPrivateContent, "/0mOLKo0Eq1gcSg23XWQxepq/Bk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CheckPrivateContent;
const __TURBOPACK__default__export__ = CheckPrivateContent;
var _c;
__turbopack_context__.k.register(_c, "CheckPrivateContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/icons/twitter.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/twitter.fb75b8c1.svg");}}),
"[project]/public/icons/twitter.svg.mjs { IMAGE => \"[project]/public/icons/twitter.svg (static in ecmascript)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$twitter$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/twitter.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$twitter$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 17,
    height: 16,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/icons/instagram.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/instagram.ec74aac7.svg");}}),
"[project]/public/icons/instagram.svg.mjs { IMAGE => \"[project]/public/icons/instagram.svg (static in ecmascript)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$instagram$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/instagram.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$instagram$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 17,
    height: 16,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/icons/tiktok.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/tiktok.66934813.svg");}}),
"[project]/public/icons/tiktok.svg.mjs { IMAGE => \"[project]/public/icons/tiktok.svg (static in ecmascript)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/tiktok.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 17,
    height: 16,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/icons/reddit.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/reddit.b76a105c.svg");}}),
"[project]/public/icons/reddit.svg.mjs { IMAGE => \"[project]/public/icons/reddit.svg (static in ecmascript)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$reddit$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/reddit.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$reddit$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 18,
    height: 20,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/icons/youtube.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/youtube.fabd2197.svg");}}),
"[project]/public/icons/youtube.svg.mjs { IMAGE => \"[project]/public/icons/youtube.svg (static in ecmascript)\" } [client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$youtube$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/youtube.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$youtube$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 26,
    height: 26,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/footer.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/lockleaks.svg.mjs { IMAGE => "[project]/public/images/lockleaks.svg (static in ecmascript)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$twitter$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$twitter$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/twitter.svg.mjs { IMAGE => "[project]/public/icons/twitter.svg (static in ecmascript)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$instagram$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$instagram$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/instagram.svg.mjs { IMAGE => "[project]/public/icons/instagram.svg (static in ecmascript)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/tiktok.svg.mjs { IMAGE => "[project]/public/icons/tiktok.svg (static in ecmascript)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$reddit$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$reddit$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/reddit.svg.mjs { IMAGE => "[project]/public/icons/reddit.svg (static in ecmascript)" } [client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$youtube$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$youtube$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/youtube.svg.mjs { IMAGE => "[project]/public/icons/youtube.svg (static in ecmascript)" } [client] (structured image object, ecmascript)');
'use client';
;
;
;
;
;
;
;
;
;
;
function Footer() {
    // Icon and link pairs
    const socialLinks = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$twitter$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$twitter$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: 'Twitter',
            url: 'https://x.com/lock_leaks'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: 'TikTok',
            url: 'https://www.tiktok.com/@lockleaks'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$instagram$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$instagram$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: 'Instagram',
            url: 'https://www.instagram.com/lockleaks/'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$reddit$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$reddit$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: 'Threads',
            url: 'https://www.threads.com/@lockleaks'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$youtube$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$youtube$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: 'Youtube',
            url: 'https://www.youtube.com/@lockleaks'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "custom-footer text-white pt-5 pb-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex flex-column flex-md-row justify-content-between align-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-md-start mb-3 mb-md-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: "Logo",
                                        width: 185,
                                        height: 50
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex align-items-center mt-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex gap-2",
                                        children: socialLinks.map(({ icon, alt, url }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "bg-white d-flex align-items-center justify-content-center",
                                                style: {
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '4px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: icon,
                                                    alt: alt,
                                                    width: 20,
                                                    height: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-3 mb-md-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-unstyled d-flex gap-4 mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services",
                                            className: "text-white text-decoration-none nav-link-custom",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/pricing",
                                            className: "text-white text-decoration-none nav-link-custom",
                                            children: "Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/agencies",
                                            className: "text-white text-decoration-none nav-link-custom",
                                            children: "Agencies"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/blogs",
                                            className: "text-white text-decoration-none nav-link-custom",
                                            children: "Blog"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-md-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/start",
                                className: "btn btn-start-free px-4",
                                children: "Start Free"
                            }, void 0, false, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "border-secondary my-4"
                }, void 0, false, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex flex-column flex-md-row justify-content-between align-items-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 mb-md-0",
                            children: "Copyright: © 2025 Lock Leaks. All Right Reserved."
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/terms",
                                    className: "text-white text-decoration-none",
                                    children: "Terms Of Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy",
                                    className: "text-white text-decoration-none",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/footer.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/pages/start-free.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$newheader$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/newheader.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CheckPrivateContentFree$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CheckPrivateContentFree.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [client] (ecmascript)");
;
;
;
;
const Start = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$newheader$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/start-free.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CheckPrivateContentFree$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/start-free.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/start-free.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c = Start;
const __TURBOPACK__default__export__ = Start;
var _c;
__turbopack_context__.k.register(_c, "Start");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/start-free.tsx [client] (ecmascript)\" } [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const PAGE_PATH = "/start-free";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/start-free.tsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}}),
"[project]/pages/start-free (hmr-entry)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, m: module } = __turbopack_context__;
{
__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/start-free.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__e4bdcafe._.js.map