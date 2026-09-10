 
import {
    FiArrowRight,
    FiCheck
} from "react-icons/fi";

export default function FinalCTA() {
    return (
        <section className="jr-final-cta">
            <div className="jr-final-cta-glow jr-final-glow-one" />
            <div className="jr-final-cta-glow jr-final-glow-two" />

            <div className="jr-final-cta-content">
                <div className="jr-final-cta-badge">
                    <span>
                        ✦
                    </span>
                    Your next opportunity is waiting.
                </div>

                <h2>
                    Stop Managing Everything

                    <br />

                    <span>
                        Start Growing.
                    </span>
                </h2>

                <p>
                    Everything you need to manage contacts, opportunities,
                    emails, resumes, and professional workflows — in one
                    powerful platform.
                </p>

                <div className="jr-final-cta-actions">
                    <button className="jr-final-primary">
                        Get Started Now
                        <FiArrowRight />
                    </button>

                    <button className="jr-final-secondary">
                        Explore Features
                    </button>
                </div>

                <div className="jr-final-checks">
                    <span>
                        <FiCheck />
                        Free to start
                    </span>

                    <span>
                        <FiCheck />
                        No credit card
                    </span>

                    <span>
                        <FiCheck />
                        Cancel anytime
                    </span>
                </div>
            </div>
        </section>
    );
}
 
