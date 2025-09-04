import { useEffect, useRef } from "react";
import styles from "../styles/SpotlightScroller.module.css";
import Script from "next/script";

declare global {
  interface Window {
    bootstrap?: any;
  }
}

const SpotlightScroller = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initSpotlight = () => {
        const highlightedItems = document.querySelectorAll(
          `.${styles.contentItem}.${styles.highlight}`
        );
        
        const contentModalElement = modalRef.current;
        
        if (!contentModalElement) {
          console.error("Modal element not found");
          return;
        }
        
        const contentModal = new window.bootstrap.Modal(contentModalElement);

        highlightedItems.forEach((item) => {
          item.addEventListener("click", () => {
            contentModal.show();
          });
        });

        const container = document.querySelector(`.${styles.containerSpotlight}`);
        const contentItems = document.querySelectorAll(`.${styles.contentItem}`);
        const spotlight = document.querySelector(`.${styles.spotlight}`);

        const checkSpotlight = () => {
          if (!spotlight) return;

          const spotlightRect = spotlight.getBoundingClientRect();

          contentItems.forEach((item) => {
            const itemRect = item.getBoundingClientRect();
            const itemCenterX = itemRect.left + itemRect.width / 2;
            const itemCenterY = itemRect.top + itemRect.height / 2;

            const distance = Math.sqrt(
              Math.pow(itemCenterX - (spotlightRect.left + spotlightRect.width / 2), 2) +
              Math.pow(itemCenterY - (spotlightRect.top + spotlightRect.height / 2), 2)
            );

            if (distance < spotlightRect.width / 2) {
              item.classList.add(styles.inSpotlight);
            } else {
              item.classList.remove(styles.inSpotlight);
            }
          });

          requestAnimationFrame(checkSpotlight);
        };

        checkSpotlight();
      };

      if (window.bootstrap) {
        initSpotlight();
      } else {
        const bootstrapScript = document.createElement("script");
        bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
        bootstrapScript.integrity = "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz";
        bootstrapScript.crossOrigin = "anonymous";
        bootstrapScript.onload = initSpotlight;
        document.body.appendChild(bootstrapScript);

        return () => {
          document.body.removeChild(bootstrapScript);
        };
      }
    }
  }, []);

  return (
    <div className={styles.containerSpotlight}>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
        strategy="lazyOnload"
        integrity="sha512-fD9DI5bZwQxOi7MhYWnnNPlvXdp/2Pj3XSTRrFs5FQa4mizyGLnJcN6tuvUS6LbmgN1ut+XGSABKvjN0H6Aoow=="
        crossOrigin="anonymous"
      />
      
      <div className={styles.spotlight}></div>

      {/* First Row - Fake to Verified Pages */}
      <div className={styles.contentRow}>
        <div className={styles.contentScroll}>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Fake Fan Page
          </div>
          <div className={styles.contentItem}>fraudpage.org</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            fakesite.com
          </div>
          <div className={styles.contentItem}>cloneprofile.xyz</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            imposterpage.com
          </div>
          <div className={styles.contentItem}>fakebrand.net</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Fake Fan Page
          </div>
          <div className={styles.contentItem}>fraudpage.org</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            fakesite.com
          </div>
          <div className={styles.contentItem}>cloneprofile.xyz</div>
          {/* Duplicate for seamless loop */}
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Fake Fan Page
          </div>
          <div className={styles.contentItem}>fraudpage.org</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            fakesite.com
          </div>
          <div className={styles.contentItem}>cloneprofile.xyz</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            imposterpage.com
          </div>
          <div className={styles.contentItem}>fakebrand.net</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Fake Fan Page
          </div>
          <div className={styles.contentItem}>fraudpage.org</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            fakesite.com
          </div>
          <div className={styles.contentItem}>cloneprofile.xyz</div>
        </div>
      </div>

      {/* Second Row - Recovered Stats */}
      <div className={styles.contentRow} style={{ animationDuration: "30s" }}>
        <div className={styles.contentScroll}>
          <div className={styles.contentItem}>+10 Real Fans</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>+500 Visits</div>
          <div className={styles.contentItem}>+15 Real Fans</div>
          <div className={styles.contentItem}>+25 Subscribers</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>$500 Income</div>
          <div className={styles.contentItem}>+30 Engagements</div>
          <div className={styles.contentItem}>+10 Real Fans</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>+500 Visits</div>
          <div className={styles.contentItem}>+15 Real Fans</div>
          <div className={styles.contentItem}>+25 Subscribers</div>
          {/* Duplicate for seamless loop */}
          <div className={styles.contentItem}>+10 Real Fans</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>+500 Visits</div>
          <div className={styles.contentItem}>+15 Real Fans</div>
          <div className={styles.contentItem}>+25 Subscribers</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>$500 Income</div>
          <div className={styles.contentItem}>+30 Engagements</div>
          <div className={styles.contentItem}>+10 Real Fans</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>+500 Visits</div>
          <div className={styles.contentItem}>+15 Real Fans</div>
          <div className={styles.contentItem}>+25 Subscribers</div>
        </div>
      </div>

      {/* Third Row - Verified Pages */}
      <div className={styles.contentRow} style={{ animationDuration: "35s" }}>
        <div className={styles.contentScroll}>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Verified Creator
          </div>
          <div className={styles.contentItem}>YourOfficial.com</div>
          <div className={styles.contentItem}>RealBrand.com</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            RealCreator.com
          </div>
          <div className={styles.contentItem}>YourRealFans.com</div>
          <div className={styles.contentItem}>OfficialPage.net</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Verified Creator
          </div>
          <div className={styles.contentItem}>YourOfficial.com</div>
          <div className={styles.contentItem}>RealBrand.com</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            RealCreator.com
          </div>
          {/* Duplicate for seamless loop */}
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Verified Creator
          </div>
          <div className={styles.contentItem}>YourOfficial.com</div>
          <div className={styles.contentItem}>RealBrand.com</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            RealCreator.com
          </div>
          <div className={styles.contentItem}>YourRealFans.com</div>
          <div className={styles.contentItem}>OfficialPage.net</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Verified Creator
          </div>
          <div className={styles.contentItem}>YourOfficial.com</div>
          <div className={styles.contentItem}>RealBrand.com</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            RealCreator.com
          </div>
        </div>
      </div>

      {/* Fourth Row - Transformation Effects */}
      <div className={styles.contentRow} style={{ animationDuration: "40s" }}>
        <div className={styles.contentScroll}>
          <div className={styles.contentItem}>Breaking Apart</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Smooth Zoom
          </div>
          <div className={styles.contentItem}>Glitch Effect</div>
          <div className={styles.contentItem}>Flashy Reward</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Crumbling Away
          </div>
          <div className={styles.contentItem}>Traffic Shift</div>
          <div className={styles.contentItem}>Breaking Apart</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Smooth Zoom
          </div>
          <div className={styles.contentItem}>Glitch Effect</div>
          <div className={styles.contentItem}>Flashy Reward</div>
          {/* Duplicate for seamless loop */}
          <div className={styles.contentItem}>Breaking Apart</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Smooth Zoom
          </div>
          <div className={styles.contentItem}>Glitch Effect</div>
          <div className={styles.contentItem}>Flashy Reward</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Crumbling Away
          </div>
          <div className={styles.contentItem}>Traffic Shift</div>
          <div className={styles.contentItem}>Breaking Apart</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Smooth Zoom
          </div>
          <div className={styles.contentItem}>Glitch Effect</div>
          <div className={styles.contentItem}>Flashy Reward</div>
        </div>
      </div>

      {/* Modal */}
      <div 
        className="modal fade" 
        id="contentModal" 
        ref={modalRef}
        tabIndex={-1} 
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div
              className="modal-header"
              style={{ backgroundColor: "rgba(197, 50, 157, 0.9)", borderBottom: "none" }}
            >
              <h5 className="modal-title">Transformation Complete</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>Verified Profile</h4>
              <p>RealBrand.com</p>
              <div
                className="badge"
                style={{ backgroundColor: "rgba(197, 50, 157, 0.9)", color: "white" }}
              >
                <i className="fas fa-check-circle me-2"></i>
                <span>Verified Account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightScroller;