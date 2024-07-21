import React, { useState } from "react";

const Section5 = () => {
    const [inputTab, setInputTab] = useState("Tab 1");
    const [tabs, setTabs] = useState("Tab 1");
    return (
        <div className="splash-section cc-campaigns">
            <div className="splash-container">
                <div className="row">
                    <div id="w-node-_16963d8b-634b-57b9-9ae2-ba694241454e-01f2b897">
                        <div className="splash_subheading">
                            <div className="splash_subheading-top">
                                <div className="splash_subheading-title">
                                    <h3 className="splash-h3">Video Campaign API</h3>
                                    <h2 className="eyebrow">Coming Soon</h2>
                                </div>
                                <p className="splash-body-2 u-text-white-secondary">
                                    The Video Campaign API allows developers to provide an
                                    end-to-end video campaign experience out of the box, within
                                    their solutions.
                                    <br />
                                    <br />
                                    We provide a data orchestration layer to deliver personalized
                                    video at scale and enable easy integration with delivery
                                    channels like SMS, email, or in-app.
                                    <br />
                                </p>
                                <a
                                    href="https://8sknqov6kzm.typeform.com/tavus-API-list"
                                    aria-label="Get Started Link"
                                    target="_blank"
                                    className="btn w-inline-block"
                                    aria-describedby="audioeye_new_window_message"
                                >
                                    <div>Join Waitlist</div>
                                    <div className="button-background"></div>
                                </a>
                            </div>
                            <div className="splash_subheading-bottom" style={{
                                zIndex: "12"
                            }}>
                                <div
                                    data-current="Tab 1"
                                    data-easing="ease-in-out"
                                    data-duration-in="300"
                                    data-duration-out="300"
                                    className="w-tabs"
                                >
                                    <div className="splash_tabs-menu w-tab-menu" role="tablist" >
                                        <a
                                            data-w-tab="Tab 1"
                                            className={`splash_tabs-link w-inline-block w-tab-link ${tabs === "Tab 1" && "w--current"}`}
                                            id="w-tabs-2-data-w-tab-0"

                                            role="tab"
                                            aria-selected={tabs === "Tab 1"}
                                            onClick={() => {
                                                setTabs("Tab 1");
                                            }}
                                        >
                                            <div>Capabilities</div>
                                        </a>
                                        <a
                                            data-w-tab="Tab 2"
                                            className={`splash_tabs-link w-inline-block w-tab-link ${tabs === "Tab 2" && "w--current"}`}
                                            tabIndex="-1"
                                            id="w-tabs-2-data-w-tab-1"
                                            role="tab"
                                            aria-controls="w-tabs-2-data-w-pane-1"
                                            aria-selected={tabs === "Tab 2"}
                                            onClick={() => {
                                                setTabs("Tab 2");
                                            }}
                                        >
                                            <div>How It Works</div>
                                        </a>
                                        <a
                                            data-w-tab="Tab 3"
                                            className={`splash_tabs-link w-inline-block w-tab-link ${tabs === "Tab 3" && "w--current"}`}
                                            tabIndex="-1"
                                            id="w-tabs-2-data-w-tab-2"
                                            role="tab"
                                            aria-controls="w-tabs-2-data-w-pane-2"
                                            aria-selected={tabs === "Tab 3"}
                                            onClick={() => {
                                                setTabs("Tab 3");
                                            }}
                                        >
                                            <div>Use Cases</div>
                                        </a>
                                    </div>
                                    <div className="tabs-content w-tab-content">
                                        {tabs === "Tab 1" && <div
                                            data-w-tab="Tab 1"
                                            className={`w-tab-pane ${tabs === "Tab 1" && "w--tab-active"}`}

                                            id="w-tabs-3-data-w-pane-0"
                                            role="tabpanel"
                                            aria-labelledby="w-tabs-3-data-w-tab-0"
                                        >
                                            <div className="splash-rtf cc-tab w-richtext">
                                                <ul role="list">
                                                    <li>
                                                        Pulls data from a source, e.g. CRM, to enable
                                                        personalization with variables
                                                    </li>
                                                    <li>
                                                        Pushes personalized videos to delivery channels like
                                                        email, SMS, or in-app
                                                    </li>
                                                    <li>
                                                        Campaign analytics, personalized landing pages,
                                                        video CDN/hosting
                                                    </li>
                                                    <li>Pair with the Lip Sync or Replica APIs</li>
                                                </ul>
                                            </div>
                                        </div>}
                                        {tabs === "Tab 2" && <div
                                            data-w-tab="Tab 2"
                                            className={`w-tab-pane ${tabs === "Tab 2" && "w--tab-active"}`}

                                            id="w-tabs-3-data-w-pane-1"
                                            role="tabpanel"
                                            aria-labelledby="w-tabs-3-data-w-tab-1"
                                        >
                                            <div className="splash-rtf cc-tab w-richtext">
                                                <ul role="list">
                                                    <li>
                                                        Users create a video template or structure and add
                                                        variable sections
                                                    </li>
                                                    <li>
                                                        Generate thousands of personalized videos using
                                                        unique customer data
                                                    </li>
                                                    <li>
                                                        Personalize scripts, video backgrounds, thumbnails,
                                                        and landing pages.
                                                    </li>
                                                    <li>
                                                        Choose your approach:
                                                        <ul role="list">
                                                            <li>
                                                                <strong>
                                                                    Record & Replace (Lip Sync API):
                                                                </strong>{" "}
                                                                record video template, add variables, generate
                                                                personalized videos using in-place lip syncing.
                                                            </li>
                                                            <li>
                                                                <strong>Fully Generated (Replica API):</strong>{" "}
                                                                write script, add variables, generate entire
                                                                personalized videos using a digital replica.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>}
                                        {tabs === "Tab 3" && <div
                                            data-w-tab="Tab 3"
                                            className={`w-tab-pane ${tabs === "Tab 3" && "w--tab-active"}`}

                                            id="w-tabs-3-data-w-pane-2"
                                            role="tabpanel"
                                            aria-labelledby="w-tabs-3-data-w-tab-2"
                                        >
                                            <div className="splash-rtf cc-tab w-richtext">
                                                <p>
                                                    Increase engagement by making mass communication
                                                    personalized to each viewer with video.
                                                </p>
                                                <p>For example:</p>
                                                <ul role="list">
                                                    <li>eCommerce campaigns</li>
                                                    <li>Fan engagement</li>
                                                    <li>Customer marketing</li>
                                                    <li>Software onboarding</li>
                                                </ul>
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-_16963d8b-634b-57b9-9ae2-ba694241453b-01f2b897">
                        <img
                            src="https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f/65ef9d4c8ec9a59ee38c690a_video-campaigns.svg"
                            loading="lazy"
                            width="323.5"
                            alt=""
                            className="u-width-100p u-border-radius-22"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section5;
