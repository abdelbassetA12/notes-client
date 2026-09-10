 
import {
    FiStar,
    FiArrowRight
} from "react-icons/fi";

export default function Testimonials() {

    const testimonials = [
        {
            name: "Youssef A.",
            role: "Freelance Developer",
            country: "Morocco",
            text: "The platform helps me keep my contacts, projects, and follow-ups organized. I can manage my professional outreach without losing track of anything.",
            initials: "YA"
        },
        {
            name: "Sara M.",
            role: "Marketing Professional",
            country: "Tunisia",
            text: "The templates and contact management save me a lot of time. Everything I need for professional communication is finally in one place.",
            initials: "SM"
        },
        {
            name: "Adam K.",
            role: "Business Consultant",
            country: "Algeria",
            text: "The dashboard gives me a clear view of my contacts, opportunities, and activity. It makes managing my professional workflow much easier.",
            initials: "AK"
        }
    ];

    return (
        <section
            className="jr-testimonials"
            id="testimonials"
        >
            <div className="jr-section-container">
                <div className="jr-section-heading">
                    <h2>
                        Loved by Professionals
                    </h2>
                    <p className="jr-section-subtitle">
                        Real people. Real connections. Real progress.
                    </p>
                </div>

                <div className="jr-testimonials-grid">
                    {testimonials.map((item, index) => (
                        <article
                            className="jr-testimonial-card"
                            key={index}
                        >
                            <div className="jr-testimonial-stars">
                                <FiStar />
                                <FiStar />
                                <FiStar />
                                <FiStar />
                                <FiStar />
                            </div>

                            <p>
                                “{item.text}”
                            </p>

                            <div className="jr-testimonial-author">
                                <div className="jr-testimonial-avatar">
                                    {item.initials}
                                </div>
                                <div>
                                    <strong>
                                        {item.name}
                                    </strong>
                                    <span>
                                        {item.role}
                                    </span>
                                    <small>
                                        {item.country}
                                    </small>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
 
