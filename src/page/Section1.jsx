import React from 'react';

const Section1 = () => {
    return (
        <div className="splash-section cc-hero">
            <div
                data-poster-url="https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f/65e7c1d5aa6371ad74a34c4a_DBC-Head-Scan-Hero-Dotpocalypse (1)-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f/65e7c1d5aa6371ad74a34c4a_DBC-Head-Scan-Hero-Dotpocalypse (1)-transcode.mp4,https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f/65e7c1d5aa6371ad74a34c4a_DBC-Head-Scan-Hero-Dotpocalypse (1)-transcode.webm"
                data-autoplay="true"
                data-loop="false"
                data-wf-ignore="true"
                className="splash_hero-video-container w-background-video w-background-video-atom"
            >
                <video
                    id="9a3af370-d3b5-c75a-2260-2622b1928fc1-video"
                    autoPlay
                    style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f/65e7c1d5aa6371ad74a34c4a_DBC-Head-Scan-Hero-Dotpocalypse (1)-poster-00001.jpg)' }}
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                >
                    <source src="https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f/65e7c1d5aa6371ad74a34c4a_DBC-Head-Scan-Hero-Dotpocalypse (1)-transcode.mp4" data-wf-ignore="true" />
                    <source src="https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f/65e7c1d5aa6371ad74a34c4a_DBC-Head-Scan-Hero-Dotpocalypse (1)-transcode.webm" data-wf-ignore="true" />
                </video>
                <div className="splash_hero-video-bg"></div>
            </div>
            <div className="splash-container cc-hero">
                <div className="row">
                    <div id="w-node-_1adef715-b71b-6961-8caa-780a761690ba-01f2b897" className="splash_feature-heading cc-align-center cc-hero">
                        <div className="u-opacity-50 eyebrow">Introducing Phoenix</div>
                        <h1 className="splash-d1 text-align-center u-text-white">Powering Human-like Videos From Text</h1>
                        <p className="splash_hero-subheading u-text-white-secondary">Advanced replica & text-to-video models, available to developers via APIs.</p>
                        <div className="button-group cc-hero">
                            <a aria-label="Get Started Link" className="btn w-inline-block">
                                <div className="text-block-4">Sign Up</div>
                                <div className="w-embed">
                                    <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8.5H19M19 8.5L12 1.5M19 8.5L12 15.5" stroke="white" strokeWidth="2"></path>
                                    </svg>
                                </div>
                                <div className="button-background"></div>
                            </a>
                            <a aria-label="Get Started Link" className="btn cc-secondary w-inline-block">
                                <div className="text-block-5">Read Documentation</div>
                                <div className="w-embed">
                                    <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8.5H19M19 8.5L12 1.5M19 8.5L12 15.5" stroke="currentColor" strokeWidth="2"></path>
                                    </svg>
                                </div>
                                <div className="button-background"></div>
                            </a>
                        </div>
                        <a href="#pricing" className="link-2">See Pricing ↓</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
