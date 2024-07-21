import React, { useState } from "react";

export const NavbarHeader = () => {
  const [open, setOpen] = useState(false);
  const [product, setproduct] = useState(false);
  const [devVisible, setdevVisible] = useState(false);
  const [resVisible, setresVisible] = useState(false);
  {
    console.log("dev", devVisible);
  }
  const handleShow = () => {
    setOpen(!open);
  };
  const handleDev = () => {
    setdevVisible(!devVisible);
  };
  const handleRes = () => {
    setresVisible(!resVisible);
  };
  const handleProduct = () => {
    setproduct(!product);
  };
  console.log("data", devVisible);
  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar cc-transparent-new w-nav"
    >
      <div className="nav-container cc-splash w-container">
        <a
          // href="https://www.tavus.io/"
          aria-label="Go back to home"
          className="brand cc-splash w-nav-brand"
        >
          <div className="splash_logo w-embed">
            <svg
              width="auto"
              height="100%"
              viewBox="0 0 703 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M118.252 199.788C136.573 199.788 149.275 191.238 158.069 180.001V196.368H183.23V80.3357H158.069V94.2595C150.497 84.9769 136.329 76.9158 118.985 76.9158C85.5191 76.9158 62.0684 102.076 62.0684 138.23C62.0684 174.627 84.542 199.788 118.252 199.788ZM87.7176 138.23C87.7176 116.977 100.664 99.8779 116.542 99.8779H131.932C147.077 99.8779 157.337 113.069 157.337 128.458V148.734C157.337 164.612 146.344 176.825 131.932 176.825H116.542C100.664 176.825 87.7176 159.726 87.7176 138.23Z"
                fill="#F5F3EF"
              ></path>
              <path
                d="M233.053 196.368H270.183L311.955 80.3357H287.283L254.061 172.428H250.152L216.931 80.3357H191.281L233.053 196.368Z"
                fill="#F5F3EF"
              ></path>
              <path
                d="M364.613 199.788C383.422 199.788 395.636 192.459 402.72 180.49V196.368H427.637V80.3357H401.987V148.978C401.987 164.856 391.239 175.848 379.27 175.848H365.346C354.109 175.848 345.559 165.833 345.559 148.978V80.3357H319.91V153.375C319.91 183.421 336.521 199.788 364.613 199.788Z"
                fill="#F5F3EF"
              ></path>
              <path
                d="M487.609 199.788C522.785 199.788 538.663 186.597 538.663 162.657C538.663 144.092 528.404 132.123 506.174 129.436L478.815 126.016C468.311 124.55 463.426 119.42 463.426 111.848C463.426 104.275 468.556 98.4122 479.548 98.4122H494.205C506.907 98.4122 511.06 105.496 512.281 115.512H536.953C535.976 88.8854 517.9 76.9158 488.098 76.9158C456.83 76.9158 439.487 89.6183 439.487 113.069C439.487 130.901 449.746 144.581 472.708 147.268L499.823 150.688C510.327 152.153 514.724 157.283 514.724 164.612C514.724 172.428 509.35 178.291 497.869 178.291H481.747C468.556 178.291 462.204 171.696 460.983 161.436H436.311C437.288 186.841 453.899 199.788 487.609 199.788Z"
                fill="#F5F3EF"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M54.9116 196.368L26.5104 196.367C11.8698 196.366 0.00145032 184.498 0.00128713 169.857L0 54.3832H25.895V80.334H54.9116V102.808H25.895V167.858C25.895 170.786 28.2686 173.16 31.1966 173.16L54.9116 173.161V196.368Z"
                fill="#F5F3EF"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M552.474 48.7975C552.474 21.8474 574.321 0 601.271 0H653.676C680.626 0 702.474 21.8474 702.474 48.7975C702.474 75.7476 680.626 97.595 653.676 97.595H601.271C574.321 97.595 552.474 75.7476 552.474 48.7975ZM628.69 48.7975C628.69 63.6704 616.62 75.7273 601.731 75.7273C586.841 75.7273 574.771 63.6704 574.771 48.7975C574.771 33.9246 586.841 21.8678 601.731 21.8678C616.62 21.8678 628.69 33.9246 628.69 48.7975ZM637.203 74.9174L683.014 48.7975L637.203 22.6777V74.9174Z"
                fill="#F230AA"
              ></path>
              <path
                d="M601.731 75.7273C616.62 75.7273 628.69 63.6704 628.69 48.7975C628.69 33.9246 616.62 21.8678 601.731 21.8678C586.841 21.8678 574.771 33.9246 574.771 48.7975C574.771 63.6704 586.841 75.7273 601.731 75.7273Z"
                fill="#F5F3EF"
              ></path>
              <path
                d="M683.014 48.7975L637.203 74.9174V22.6777L683.014 48.7975Z"
                fill="#F5F3EF"
              ></path>
            </svg>
          </div>
        </a>

        {}
        <nav role="navigation" className="nav-menu cc-splash w-nav-menu">
          <div
            data-hover="false"
            data-delay="0"
            className="dropdown show w-dropdown"
            style={{ maxWidth: "940px" }}
          >
            <div
              onClick={handleProduct}
              className="dropdown-toggle show w-dropdown-toggle touchable-opacity"
              id="w-dropdown-toggle-0"
              aria-controls="w-dropdown-list-0"
              aria-haspopup="menu"
              aria-expanded="false"
              role="button"
              tabIndex={0}
            >
              <div
                className="icon icon-dropdown cc-splash-new developer w-icon-dropdown-toggle"
                aria-hidden="true"
              ></div>
              <div
                className="nav-dropdown mobile cc-splash-new developer"
                onClick={() => {
                  console.log("inisdee");
                }}
              >
                Product
              </div>
            </div>

            {product && (
              <nav
                className="dropdown-list mobile w-dropdown-list w--open"
                id="w-dropdown-list-0"
                aria-labelledby="w-dropdown-toggle-0"
              >
                <a
                  href="/developer"
                  target="_blank"
                  aria-current="page"
                  className="dropdown-link w-dropdown-link w--current"
                  tabIndex={0}
                  aria-describedby="audioeye_new_window_message"
                >
                  Tavus for Developers
                </a>
                <a
                  href="/product"
                  className="dropdown-link w-dropdown-link"
                  tabIndex={0}
                >
                  Tavus for Sales &amp;&nbsp;Marketing
                </a>
              </nav>
            )}
          </div>
          <div className="link-wrapper show"></div>
          <div className="link-wrapper show hide-override">
            <div
              data-delay="0"
              data-hover="false"
              className="dropdown show w-dropdown"
              style={{ maxWidth: "940px" }}
            >
              <div
                onClick={handleDev}
                className="dropdown-toggle show dark-copy w-dropdown-toggle touchable-opacity"
                id="w-dropdown-toggle-1"
                aria-controls="w-dropdown-list-1"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div
                  className="icon icon-dropdown dark w-icon-dropdown-toggle"
                  aria-hidden="true"
                ></div>
                <div className="nav-dropdown mobile dark">Developers</div>
              </div>

              {devVisible && (
                <nav
                  className="dropdown-list mobile w-dropdown-list  w--open"
                  id="w-dropdown-list-1"
                  aria-labelledby="w-dropdown-toggle-1"
                >
                  <a
                    // href="/developer"
                    aria-current="page"
                    className="dropdown-link w-dropdown-link w--current"
                    tabIndex={0}
                  >
                    Developer APIs
                  </a>
                  <a
                    // href="http://docs.tavus.io"
                    className="dropdown-link w-dropdown-link"
                    tabIndex={0}
                  >
                    Developer Docs
                  </a>
                  <a
                    // href="https://www.tavus.io/developer#pricing"
                    className="dropdown-link w-dropdown-link"
                    tabIndex={0}
                  >
                    Developer Pricing
                  </a>
                </nav>
              )}
            </div>
          </div>
          <div
            data-delay="0"
            data-hover="false"
            className="dropdown show w-dropdown"
            style={{ maxWidth: "940px" }}
          >
            <div
              onClick={handleRes}
              className="dropdown-toggle show dark-copy w-dropdown-toggle touchable-opacity"
              id="w-dropdown-toggle-2"
              aria-controls="w-dropdown-list-2"
              aria-haspopup="menu"
              aria-expanded="false"
              role="button"
              tabIndex={0}
            >
              <div
                className="icon icon-dropdown dark w-icon-dropdown-toggle"
                aria-hidden="true"
              ></div>
              <div className="nav-dropdown mobile dark">Resources</div>
            </div>
            {resVisible && (
              <nav
                className="dropdown-list mobile w-dropdown-list  w--open"
                id="w-dropdown-list-2"
                aria-labelledby="w-dropdown-toggle-2"
              >
                <a
                  href="/use-case-library"
                  className="dropdown-link w-dropdown-link"
                  tabIndex={0}
                >
                  Use Cases
                </a>
                <a
                  href="/blog"
                  className="dropdown-link w-dropdown-link"
                  tabIndex={0}
                >
                  Blog
                </a>
                <a
                  href="/support"
                  className="dropdown-link w-dropdown-link"
                  tabIndex={0}
                >
                  Support
                </a>
              </nav>
            )}
          </div>
          <div className="link-wrapper show">
            <a
              // href="https://www.tavus.io/developer#pricing"
              className="nav-link mobile cc-splash-new developer"
            >
              Pricing
            </a>
          </div>
          <div className="link-wrapper show">
            <a
              // href="https://www.tavus.io/careers"
              className="nav-link mobile cc-splash-new developer"
            >
              Careers
            </a>
          </div>
          <div className="_2-nav-links mobile">
            <a
              // href="http://app.tavus.io/login"
              className="nav-link login cc-splash"
            >
              Log in
            </a>
            <a
              href="/demo"
              aria-label="Get Started Link"
              className="button small test menu cc-splash w-inline-block"
            >
              <div className="button-overflow">
                <div className="button-text-wrap">
                  <div className="button-text small test">Get Started</div>
                </div>
                <div className="button-text-wrap">
                  <div className="button-text small test">Get Started</div>
                </div>
              </div>
              <div className="button-background"></div>
            </a>
          </div>
        </nav>
        <div
          className="menu-button-2 w-nav-button"
          style={{ WebkitUserSelect: "text" }}
          aria-label="menu"
          role="button"
          tabIndex={0}
          aria-controls="w-nav-overlay-0"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <div className="icon-2 w-icon-nav-menu" onClick={handleShow}></div>
        </div>
      </div>
      <div
        className="w-nav-overlay"
        data-wf-ignore=""
        id="w-nav-overlay-0"
        style={{ height: "11991.1px", display: open ? "block" : "none" }}
      >
        <nav
          role="navigation"
          className="nav-menu cc-splash w-nav-menu"
          style={{
            transform: "translateY(0px) translateX(0px)",
            transition: "transform 400ms ease 0s",
          }}
          data-nav-menu-open=""
        >
          <div
            data-hover="false"
            data-delay="0"
            className="dropdown show w-dropdown w--nav-dropdown-open"
            style={{
              maxWidth: "728px",
              zIndex: "901",
            }}
          >
            <div
              onClick={handleProduct}
              className="dropdown-toggle show w-dropdown-toggle w--nav-dropdown-toggle-open w--open"
              id="w-dropdown-toggle-0"
              aria-controls="w-dropdown-list-0"
              aria-haspopup="menu"
              aria-expanded="false"
              role="button"
            >
              <div
                className="icon icon-dropdown cc-splash-new developer w-icon-dropdown-toggle"
                aria-hidden="true"
              ></div>
              <div className="nav-dropdown mobile cc-splash-new developer">
                Product
              </div>
            </div>
            {product && (
              <nav
                className="dropdown-list mobile w-dropdown-list w--nav-dropdown-list-open w--open"
                id="w-dropdown-list-0"
                aria-labelledby="w-dropdown-toggle-0"
              >
                <a
                  href="/developer"
                  target="_blank"
                  aria-current="page"
                  className="dropdown-link w-dropdown-link w--current"
                  aria-describedby="audioeye_new_window_message"
                  style={{ backgroundColor: "pink" }}
                >
                  Tavus for Developers
                </a>
                <a href="/product" className="dropdown-link w-dropdown-link">
                  Tavus for Sales &amp;&nbsp;Marketing
                </a>
              </nav>
            )}
          </div>
          <div className="link-wrapper show"></div>
          <div className="link-wrapper show hide-override">
            <div
              data-delay="0"
              data-hover="false"
              className="dropdown show w-dropdown w--nav-dropdown-open"
              style={{
                maxWidth: "728px",
                zIndex: "901",
              }}
            >
              <div
                onClick={handleDev}
                className="dropdown-toggle show dark-copy w-dropdown-toggle w--nav-dropdown-toggle-open w--open"
                id="w-dropdown-toggle-1"
                aria-controls="w-dropdown-list-1"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
              >
                <div
                  className="icon icon-dropdown dark w-icon-dropdown-toggle"
                  aria-hidden="true"
                ></div>
                <div className="nav-dropdown mobile dark">Developers</div>
              </div>
              {devVisible && (
                <nav
                  className="dropdown-list mobile w-dropdown-list w--nav-dropdown-list-open w--open"
                  id="w-dropdown-list-1"
                  aria-labelledby="w-dropdown-toggle-1"
                >
                  <a
                    href="/developer"
                    aria-current="page"
                    className="dropdown-link w-dropdown-link w--current"
                  >
                    Developer APIs
                  </a>
                  <a
                    // href="http://docs.tavus.io"
                    className="dropdown-link w-dropdown-link"
                  >
                    Developer Docs
                  </a>
                  <a
                    // href="https://www.tavus.io/developer#pricing"
                    className="dropdown-link w-dropdown-link"
                  >
                    Developer Pricing
                  </a>
                </nav>
              )}
            </div>
          </div>
          <div
            data-delay="0"
            style={{
              maxWidth: "728px",
              zIndex: "901",
            }}
            data-hover="false"
            className="dropdown show w-dropdown w--nav-dropdown-open"
          >
            <div
              onClick={handleRes}
              className="dropdown-toggle show dark-copy w-dropdown-toggle w--nav-dropdown-toggle-open w--open"
              id="w-dropdown-toggle-2"
              aria-controls="w-dropdown-list-2"
              aria-haspopup="menu"
              aria-expanded="false"
              role="button"
            >
              <div
                className="icon icon-dropdown dark w-icon-dropdown-toggle"
                aria-hidden="true"
              ></div>
              <div className="nav-dropdown mobile dark">Resources</div>
            </div>
            {resVisible && (
              <nav
                className="dropdown-list mobile w-dropdown-list w--nav-dropdown-list-open w--open"
                id="w-dropdown-list-2"
                aria-labelledby="w-dropdown-toggle-2"
              >
                <a
                  href="/use-case-library"
                  className="dropdown-link w-dropdown-link"
                >
                  Use Cases
                </a>
                <a href="/blog" className="dropdown-link w-dropdown-link">
                  Blog
                </a>
                <a href="/support" className="dropdown-link w-dropdown-link">
                  Support
                </a>
              </nav>
            )}
          </div>
          <div className="link-wrapper show">
            <a
              // href="https://www.tavus.io/developer#pricing"
              className="nav-link mobile cc-splash-new developer"
            >
              Pricing
            </a>
          </div>
          <div className="link-wrapper show">
            <a
              // href="https://www.tavus.io/careers"
              className="nav-link mobile cc-splash-new developer"
            >
              Careers
            </a>
          </div>
          <div className="_2-nav-links mobile">
            <a
              // href="http://app.tavus.io/login"
              className="nav-link login cc-splash"
            >
              Log in
            </a>
            <a
              href="/demo"
              aria-label="Get Started Link"
              className="button small test menu cc-splash w-inline-block"
            >
              <div className="button-overflow">
                <div className="button-text-wrap">
                  <div className="button-text small test">Get Started</div>
                </div>
                <div className="button-text-wrap">
                  <div className="button-text small test">Get Started</div>
                </div>
              </div>
              <div className="button-background"></div>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
