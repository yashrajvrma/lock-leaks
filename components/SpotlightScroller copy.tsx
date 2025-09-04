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

      {/* First Row - Emails */}
      <div className={styles.contentRow}>
        <div className={styles.contentScroll}>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            admin@autoco.com
          </div>
          <div className={styles.contentItem}>tech.support@autoco.net</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            hr.department@autoco.org
          </div>
          <div className={styles.contentItem}>dev.team@autoco.dev</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            security@autoco.sec
          </div>
          <div className={styles.contentItem}>network.admin@autoco.net</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            admin@autoco.com
          </div>
          <div className={styles.contentItem}>tech.support@autoco.net</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            hr.department@autoco.org
          </div>
          <div className={styles.contentItem}>dev.team@autoco.dev</div>
          {/* Duplicate for seamless loop */}
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            admin@autoco.com
          </div>
          <div className={styles.contentItem}>tech.support@autoco.net</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            hr.department@autoco.org
          </div>
          <div className={styles.contentItem}>dev.team@autoco.dev</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            security@autoco.sec
          </div>
          <div className={styles.contentItem}>network.admin@autoco.net</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            admin@autoco.com
          </div>
          <div className={styles.contentItem}>tech.support@autoco.net</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            hr.department@autoco.org
          </div>
          <div className={styles.contentItem}>dev.team@autoco.dev</div>
        </div>
      </div>

      {/* Second Row - IP Addresses */}
      <div className={styles.contentRow} style={{ animationDuration: "30s" }}>
        <div className={styles.contentScroll}>
          <div className={styles.contentItem}>192.168.1.1</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>10.0.0.1</div>
          <div className={styles.contentItem}>172.16.0.1</div>
          <div className={styles.contentItem}>192.168.0.100</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>10.10.10.1</div>
          <div className={styles.contentItem}>172.31.255.254</div>
          <div className={styles.contentItem}>192.168.1.1</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>10.0.0.1</div>
          <div className={styles.contentItem}>172.16.0.1</div>
          <div className={styles.contentItem}>192.168.0.100</div>
          {/* Duplicate for seamless loop */}
          <div className={styles.contentItem}>192.168.1.1</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>10.0.0.1</div>
          <div className={styles.contentItem}>172.16.0.1</div>
          <div className={styles.contentItem}>192.168.0.100</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>10.10.10.1</div>
          <div className={styles.contentItem}>172.31.255.254</div>
          <div className={styles.contentItem}>192.168.1.1</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>10.0.0.1</div>
          <div className={styles.contentItem}>172.16.0.1</div>
          <div className={styles.contentItem}>192.168.0.100</div>
        </div>
      </div>

      {/* Third Row - Devices */}
      <div className={styles.contentRow} style={{ animationDuration: "35s" }}>
        <div className={styles.contentScroll}>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Dell Precision 3560
          </div>
          <div className={styles.contentItem}>Apple MacBook Pro M2</div>
          <div className={styles.contentItem}>HP EliteBook 840</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Lenovo ThinkPad X1
          </div>
          <div className={styles.contentItem}>Microsoft Surface Laptop</div>
          <div className={styles.contentItem}>Asus ZenBook Pro</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Dell Precision 3560
          </div>
          <div className={styles.contentItem}>Apple MacBook Pro M2</div>
          <div className={styles.contentItem}>HP EliteBook 840</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Lenovo ThinkPad X1
          </div>
          {/* Duplicate for seamless loop */}
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Dell Precision 3560
          </div>
          <div className={styles.contentItem}>Apple MacBook Pro M2</div>
          <div className={styles.contentItem}>HP EliteBook 840</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Lenovo ThinkPad X1
          </div>
          <div className={styles.contentItem}>Microsoft Surface Laptop</div>
          <div className={styles.contentItem}>Asus ZenBook Pro</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Dell Precision 3560
          </div>
          <div className={styles.contentItem}>Apple MacBook Pro M2</div>
          <div className={styles.contentItem}>HP EliteBook 840</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Lenovo ThinkPad X1
          </div>
        </div>
      </div>

      {/* Fourth Row - Technologies */}
      <div className={styles.contentRow} style={{ animationDuration: "40s" }}>
        <div className={styles.contentScroll}>
          <div className={styles.contentItem}>Kubernetes Cluster</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Docker Swarm
          </div>
          <div className={styles.contentItem}>VMware ESXi</div>
          <div className={styles.contentItem}>Microsoft Hyper-V</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            AWS EC2
          </div>
          <div className={styles.contentItem}>Azure VM</div>
          <div className={styles.contentItem}>Kubernetes Cluster</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Docker Swarm
          </div>
          <div className={styles.contentItem}>VMware ESXi</div>
          <div className={styles.contentItem}>Microsoft Hyper-V</div>
          {/* Duplicate for seamless loop */}
          <div className={styles.contentItem}>Kubernetes Cluster</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Docker Swarm
          </div>
          <div className={styles.contentItem}>VMware ESXi</div>
          <div className={styles.contentItem}>Microsoft Hyper-V</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            AWS EC2
          </div>
          <div className={styles.contentItem}>Azure VM</div>
          <div className={styles.contentItem}>Kubernetes Cluster</div>
          <div className={`${styles.contentItem} ${styles.highlight}`}>
            Docker Swarm
          </div>
          <div className={styles.contentItem}>VMware ESXi</div>
          <div className={styles.contentItem}>Microsoft Hyper-V</div>
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
              <h5 className="modal-title">User Authorized</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>Admin User</h4>
              <p>admin@autoco.com</p>
              <div
                className="badge"
                style={{ backgroundColor: "rgba(197, 50, 157, 0.9)", color: "white" }}
              >
                <i className="fas fa-check-circle me-2"></i>
                <span>Authorized User</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightScroller;