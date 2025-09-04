const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[externals]_bootstrap_dist_js_bootstrap_bundle_min_401fe11e.js");
runtime.loadChunk("server/chunks/ssr/node_modules_3187ccab._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__92c3704b._.js");
runtime.getOrInstantiateRuntimeModule("[project]/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
