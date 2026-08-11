import {
    FiArrowRight,
    FiPlay,
    FiCheck
} from "react-icons/fi";

import DashboardPreview from "./DashboardPreview";


export default function Hero() {

    return (

        <section className="jr-hero">

            <div className="jr-hero-container">

                {/* Left */}

                <div className="jr-hero-content">

                    <div className="jr-hero-badge">

                        <span>
                            ✦
                        </span>

                        All-in-One Platform for Job Seekers

                    </div>


                    <h1>

                        Find Hotels.
                        <br />

                        Send Applications.
                        <br />

                        <span>
                            Get Hired Faster.
                        </span>

                    </h1>


                    <p className="jr-hero-description">

                        Manage your job leads, build professional email
                        templates, create stunning resumes, contact
                        hundreds of hotels and restaurants, and track
                        every opportunity — all in one place.

                    </p>


                    <div className="jr-hero-buttons">

                        <button className="jr-primary-btn">

                            Start Applying Now

                            <FiArrowRight />

                        </button>


                        <button className="jr-demo-btn">

                            <span>
                                <FiPlay />
                            </span>

                            Watch Demo

                        </button>

                    </div>


                    <div className="jr-hero-checks">

                        <span>
                            <FiCheck />
                            Gmail Ready
                        </span>

                        <span>
                            <FiCheck />
                            CSV Import
                        </span>

                        <span>
                            <FiCheck />
                            Email Templates
                        </span>

                        <span>
                            <FiCheck />
                            Resume Builder
                        </span>

                        <span>
                            <FiCheck />
                            Europe Ready
                        </span>

                    </div>

                </div>


                {/* Right */}

                <div className="jr-hero-dashboard">

                    <DashboardPreview />

                </div>

            </div>

        </section>

    );

}