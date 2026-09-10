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

                        ✦ All-in-One Platform for Opportunities & Growth

                    </div>


                    <h1>

                         
                        Manage Opportunities.
                        <br />

                        Build Connections.
                        <br />

                        <span>
                            Grow Your Career.
                        </span>

                    </h1>


                    <p className="jr-hero-description">

                        Manage your contacts, opportunities, emails, resumes,
                         and follow-ups — all in one powerful platform. Whether 
                         you're looking for a job, finding freelance projects,
                          or managing clients, everything you need to organize
                           your professional journey is in one place.

                    </p>


                    <div className="jr-hero-buttons">

                        <button className="jr-primary-btn">

                           Get Started

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
                              Contact Management
                        </span>

                       

                        <span>
                            <FiCheck />
                            Email & Follow-ups
                        </span>

                        <span>
                            <FiCheck />
                            Resume Builder
                        </span>
                        <span>
                            <FiCheck />
                            Opportunity Tracking
                        </span>

                        <span>
                            <FiCheck />
                            Built for Professionals
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