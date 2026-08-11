import {
    FiStar,
    FiArrowRight
} from "react-icons/fi";

export default function Testimonials() {

    const testimonials = [
        {
            name: "Youssef A.",
            role: "Hotel Receptionist",
            country: "Morocco",
            text: "JobReach made it much easier to contact hotels across Europe. I stopped losing track of where I had applied.",
            initials: "YA"
        },
        {
            name: "Sara M.",
            role: "Hospitality Professional",
            country: "Tunisia",
            text: "The templates and lead management are exactly what I needed. I can send applications much faster now.",
            initials: "SM"
        },
        {
            name: "Adam K.",
            role: "Restaurant Manager",
            country: "Algeria",
            text: "The dashboard gives me a clear view of every application. It feels like having my own job search assistant.",
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
                        Loved by Job Seekers
                    </h2>

                    <p className="jr-section-subtitle">
                        Real people. Real applications. Real progress.
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