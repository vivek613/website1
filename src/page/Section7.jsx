import React, { useState } from "react";

const Section7 = () => {
  const [Visible, setVisible] = useState(false);
  const [Provisible, setProVisible] = useState(false);
  const [customVisible, setcustomVisible] = useState(false);
  const handleCustom = () => {
    setcustomVisible(!customVisible);
  };
  const handleClick = () => {
    setVisible(!Visible);
  };
  const handleClickPro = () => {
    setProVisible(!Provisible);
  };
  console.log(Visible);
  return (
    <div class="splash-section cc-plans">
      <div class="splash-container">
        <div class="row">
          <div
            id="pricing"
            class="splash_pricing-top w-node-_69516d60-8684-268b-16af-a3336436a7e8-01f2b897"
          >
            <h2
              id="w-node-_2d75c70a-9aae-3cb1-59ae-b2ba505568b9-01f2b897"
              class="splash-h1 cc-pricing"
            >
              Pricing that scales with you
            </h2>
            <div
              id="w-node-_044438b3-38a5-d8c1-1740-9018a2ab290f-01f2b897"
              class="splash_pricing-cols"
            >
              <div class="splash_pricing-card _1">
                <div class="splash_pricing-card-inner">
                  <div>
                    <h3 class="splash_pricing-plan-title u-text-black">
                      Starter
                    </h3>
                    <h4 class="splash-body-3 u-text-black u-sm-hide">
                      Quick test APIs
                    </h4>
                  </div>
                  <div>
                    <div class="splash-d2">$1</div>
                    <div class="splash-caption">per month</div>
                  </div>
                  <div class="splash_pricing-includes">
                    <p class="splash-body-3 u-text-black">Includes:</p>
                    <ul class="splash_pricing-ul">
                      <li class="splash_pricing-li">
                        <div>
                          300 tokens <br />
                          (100 tokens = 1 minute)
                        </div>
                        <div class="splash_pricing-tooltip-parent">
                          <img
                            src="https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f/65e91f99f0b930d0e43902cb_tavus-tooltip.svg"
                            loading="lazy"
                            alt="Show tooltip"
                          />
                          <div
                            class="splash_pricing-caption"
                            style={{
                              display: "none",
                              opacity: "0",
                              transform:
                                "translate3d(0px, 0.5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            <div class="splash-caption">
                              ~3 mins total video
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="splash_pricing-li">
                        <div>
                          <strong>✓</strong> Stock Replicas
                        </div>
                      </li>
                      <li class="splash_pricing-li">
                        <div>✘ No Personal Replicas</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  aria-label="Get Started Link"
                  class="btn cc-pricing w-inline-block"
                >
                  <div>Sign Up</div>
                  <div class="button-background"></div>
                </a>
                <div class="splash_plans-table">
                  <div
                    class="splash_plans-table-top touchable-opacity"
                    onClick={handleClick}
                  >
                    <h3 class="splash-body-3 u-text-black">More Information</h3>
                    <div class="splash_plans-table-collapse">
                      <div class="splash_pricing-table-collapse-arrow w-embed">
                        <svg
                          width="18"
                          height="10"
                          viewBox="0 0 18 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            transform: Visible
                              ? "translate3d(0px, 0.5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                              : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          <path
                            d="M16.5 9L9 2L1.5 9"
                            stroke="black"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {Visible && (
                    <div className="splash_plans-table-bottom">
                      <div className="splash_plans-table-row cc-header">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">Tokens</div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3"></div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Included Tokens
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3">300 tokens</div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Additional Tokens
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="w-embed">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                y1="-1"
                                x2="21.9725"
                                y2="-1"
                                transform="matrix(0.685383 0.728182 -0.685383 0.728182 1 2)"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></line>
                              <line
                                y1="-1"
                                x2="21.9725"
                                y2="-1"
                                transform="matrix(0.685383 -0.728182 0.685383 0.728182 1.94141 18)"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row cc-header">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Replica API
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3"></div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Stock Replicas
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="w-embed">
                            <svg
                              width="24"
                              height="19"
                              viewBox="0 0 24 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.8316 0.983155L7.77197 16.9832C5.67562 14.5592 1 10.2112 1 10.2112"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Personal Replicas
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="w-embed">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                y1="-1"
                                x2="21.9725"
                                y2="-1"
                                transform="matrix(0.685383 0.728182 -0.685383 0.728182 1 2)"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></line>
                              <line
                                y1="-1"
                                x2="21.9725"
                                y2="-1"
                                transform="matrix(0.685383 -0.728182 0.685383 0.728182 1.94141 18)"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            <strong>
                              Video Length Limit
                              <br />
                              &zwj;
                            </strong>
                            <span className="splash-body-3">per video</span>
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3">3 minutes</div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            <strong>
                              Total Video Minutes
                              <br />
                            </strong>
                            <span className="splash-body-3">per plan</span>
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3">
                            ~3 minutes
                            <br />
                          </div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row cc-header">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Additional APIs
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3"></div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">Free</div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3">
                            Use{" "}
                            <a target="_blank" rel="noreferrer noopener">
                              Docs
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Standard
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3">
                            $1 per additional minute
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div class="splash_pricing-card _2">
                <div class="splash_pricing-card-inner">
                  <div>
                    <h3 class="splash_pricing-plan-title u-text-black">Pro</h3>
                    <h4 class="splash-body-3 u-text-black u-sm-hide">
                      Custom avatars, audio support, and more.
                    </h4>
                  </div>
                  <div>
                    <div class="splash-d2">$10</div>
                    <div class="splash-caption">per month</div>
                  </div>
                  <div class="splash_pricing-includes">
                    <p class="splash-body-3 u-text-black">Includes:</p>
                    <ul class="splash_pricing-ul">
                      <li class="splash_pricing-li">
                        <div>
                          1500 tokens <br />
                          (100 tokens = 1 minute)
                        </div>
                        <div class="splash_pricing-tooltip-parent">
                          <img
                            src="https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f/65e91f99f0b930d0e43902cb_tavus-tooltip.svg"
                            loading="lazy"
                            alt="Show tooltip"
                          />
                          <div
                            class="splash_pricing-caption"
                            style={{
                              display: "none",
                              opacity: "0",
                              transform:
                                "translate3d(0px, 0.5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            <div class="splash-caption">
                              ~15 mins total video
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="splash_pricing-li">
                        <div>
                          <strong>✓</strong> Stock Replicas
                        </div>
                      </li>
                      <li class="splash_pricing-li">
                        <div>
                          <strong>✓</strong> Personal Replicas
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  aria-label="Get Started Link"
                  class="btn cc-pricing w-inline-block"
                >
                  <div>Sign Up</div>
                  <div class="button-background"></div>
                </a>
                <div class="splash_plans-table">
                  <div
                    class="splash_plans-table-top touchable-opacity"
                    onClick={handleClickPro}
                  >
                    <h3 class="splash-body-3 u-text-black">More Information</h3>
                    <div class="splash_plans-table-collapse">
                      <div class="splash_pricing-table-collapse-arrow w-embed">
                        <svg
                          width="18"
                          height="10"
                          viewBox="0 0 18 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            transform: Provisible
                              ? "translate3d(0px, 0.5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                              : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          <path
                            d="M16.5 9L9 2L1.5 9"
                            stroke="black"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {Provisible && (
                    <div className="splash_plans-table-bottom">
                      <div className="splash_plans-table-row cc-header">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">Tokens</div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3"></div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Included Tokens
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3">300 tokens</div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Additional Tokens
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="w-embed">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                y1="-1"
                                x2="21.9725"
                                y2="-1"
                                transform="matrix(0.685383 0.728182 -0.685383 0.728182 1 2)"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></line>
                              <line
                                y1="-1"
                                x2="21.9725"
                                y2="-1"
                                transform="matrix(0.685383 -0.728182 0.685383 0.728182 1.94141 18)"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row cc-header">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Replica API
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3"></div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Stock Replicas
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="w-embed">
                            <svg
                              width="24"
                              height="19"
                              viewBox="0 0 24 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.8316 0.983155L7.77197 16.9832C5.67562 14.5592 1 10.2112 1 10.2112"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Personal Replicas
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="w-embed">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                y1="-1"
                                x2="21.9725"
                                y2="-1"
                                transform="matrix(0.685383 0.728182 -0.685383 0.728182 1 2)"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></line>
                              <line
                                y1="-1"
                                x2="21.9725"
                                y2="-1"
                                transform="matrix(0.685383 -0.728182 0.685383 0.728182 1.94141 18)"
                                stroke="currentColor"
                                strokeWidth="2"
                              ></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            <strong>
                              Video Length Limit
                              <br />
                              &zwj;
                            </strong>
                            <span className="splash-body-3">per video</span>
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3">3 minutes</div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            <strong>
                              Total Video Minutes
                              <br />
                            </strong>
                            <span className="splash-body-3">per plan</span>
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3">
                            ~3 minutes
                            <br />
                          </div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row cc-header">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Additional APIs
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3"></div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">Free</div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3">
                            Use{" "}
                            <a target="_blank" rel="noreferrer noopener">
                              Docs
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="splash_plans-table-row">
                        <div className="splash_pricing-table-th">
                          <div className="splash_plans-row-heading">
                            Standard
                          </div>
                        </div>
                        <div className="splash_pricing-table-tr">
                          <div className="splash-body-3">
                            $1 per additional minute
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div class="splash_pricing-card _3">
                <div class="splash_pricing-card-inner">
                  <div>
                    <h3 class="splash_pricing-plan-title u-text-black">
                      Enterprise
                    </h3>
                    <h4 class="splash-body-3 u-text-black u-sm-hide">
                      Everything in Pro, plus additional customization.
                    </h4>
                  </div>
                  <div>
                    <div class="splash-d2">Custom</div>
                    <div class="splash-caption">per month</div>
                  </div>
                  <div class="splash_pricing-includes">
                    <p class="splash-body-3 u-text-black">Includes:</p>
                    <ul class="splash_pricing-ul">
                      <li class="splash_pricing-li">
                        <div>
                          Unlimited tokens <br />
                          (100 tokens = 1 minute)
                        </div>
                        <div class="splash_pricing-tooltip-parent">
                          <img
                            src="https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f/65e91f99f0b930d0e43902cb_tavus-tooltip.svg"
                            loading="lazy"
                            alt="Show tooltip"
                          />
                          <div
                            class="splash_pricing-caption"
                            style={{
                              display: "none",
                              opacity: "0",
                              transform:
                                "translate3d(0px, 0.5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            <div class="splash-caption">
                              Unlimited video length
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="splash_pricing-li">
                        <div>
                          <strong>✓</strong> Custom Replicas
                        </div>
                      </li>
                      <li class="splash_pricing-li">
                        <div>
                          <strong>✓</strong> Priority Support
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  aria-label="Get Started Link"
                  class="btn cc-pricing w-inline-block"
                >
                  <div>Contact Us</div>
                  <div class="button-background"></div>
                </a>
                <div class="splash_plans-table">
                  <div
                    class="splash_plans-table-top touchable-opacity"
                    onClick={handleCustom}
                  >
                    <h3 class="splash-body-3 u-text-black">More Information</h3>
                    <div class="splash_plans-table-collapse">
                      <div class="splash_pricing-table-collapse-arrow w-embed">
                        <svg
                          width="18"
                          height="10"
                          viewBox="0 0 18 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            transform: customVisible
                              ? "translate3d(0px, 0.5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                              : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          <path
                            d="M16.5 9L9 2L1.5 9"
                            stroke="black"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {customVisible && (
                    <div class="splash_plans-table-bottom">
                      <div class="splash_plans-table-row cc-header">
                        <div class="splash_pricing-table-th">
                          <div class="splash_plans-row-heading">Tokens</div>
                        </div>
                        <div class="splash_pricing-table-tr">
                          <div class="splash-body-3"></div>
                        </div>
                      </div>
                      <div class="splash_plans-table-row">
                        <div class="splash_pricing-table-th">
                          <div class="splash_plans-row-heading">
                            Included Tokens
                          </div>
                        </div>
                        <div class="splash_pricing-table-tr">
                          <div class="splash-body-3">Unlimited</div>
                        </div>
                      </div>
                      <div class="splash_plans-table-row">
                        <div class="splash_pricing-table-th">
                          <div class="splash_plans-row-heading">
                            Additional Tokens
                          </div>
                        </div>
                        <div class="splash_pricing-table-tr">
                          <div class="splash-body-3">Included</div>
                        </div>
                      </div>
                      <div class="splash_plans-table-row cc-header">
                        <div class="splash_pricing-table-th">
                          <div class="splash_plans-row-heading">
                            Replica API
                          </div>
                        </div>
                        <div class="splash_pricing-table-tr">
                          <div class="splash-body-3"></div>
                        </div>
                      </div>
                      <div class="splash_plans-table-row">
                        <div class="splash_pricing-table-th">
                          <div class="splash_plans-row-heading">
                            Custom Replicas
                          </div>
                        </div>
                        <div class="splash_pricing-table-tr">
                          <div class="w-embed">
                            <svg
                              width="24"
                              height="19"
                              viewBox="0 0 24 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.8316 0.983155L7.77197 16.9832C5.67562 14.5592 1 10.2112 1 10.2112"
                                stroke="currentColor"
                                stroke-width="2"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="splash_plans-table-row">
                        <div class="splash_pricing-table-th">
                          <div class="splash_plans-row-heading">
                            <strong>
                              Video Length Limit
                              <br />
                              &zwj;
                            </strong>
                            <span class="splash-body-3">per video</span>
                          </div>
                        </div>
                        <div class="splash_pricing-table-tr">
                          <div class="splash-body-3">Unlimited</div>
                        </div>
                      </div>
                      <div class="splash_plans-table-row cc-header">
                        <div class="splash_pricing-table-th">
                          <div class="splash_plans-row-heading">
                            Additional APIs
                          </div>
                        </div>
                        <div class="splash_pricing-table-tr">
                          <div class="splash-body-3"></div>
                        </div>
                      </div>
                      <div class="splash_plans-table-row">
                        <div class="splash_pricing-table-th">
                          <div class="splash_plans-row-heading">
                            Replica API
                          </div>
                        </div>
                        <div class="splash_pricing-table-tr">
                          <div class="w-embed">
                            <svg
                              width="24"
                              height="19"
                              viewBox="0 0 24 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.8316 0.983155L7.77197 16.9832C5.67562 14.5592 1 10.2112 1 10.2112"
                                stroke="currentColor"
                                stroke-width="2"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
