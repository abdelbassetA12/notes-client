import {
    FiMail,
    FiBriefcase,
    FiTrendingUp,
    FiUploadCloud,
    FiGlobe,
    FiSend
} from "react-icons/fi";

export default function Features() {

    const features = [

        {
            icon: <FiMail />,
            title: "Smart Email Templates",
            text: "Create reusable templates with dynamic variables to personalize every email in seconds."
        },

        {
            icon: <FiBriefcase />,
            title: "Contacts & Opportunities",
            text: "Store and organize clients, companies, leads, projects, and professional opportunities in one place."
        },

        {
            icon: <FiTrendingUp />,
            title: "Pipeline Tracking",
            text: "Track every application status from email sent to interview and acceptance."
        },

        {
            icon: <FiUploadCloud />,
            title: "CSV & Excel Import",
            text: "Import thousands of companies at once and start applying immediately."
        },

        {
            icon: <FiGlobe />,
            title: "Country & City Filters",
            text: "Find opportunities in any country or city with powerful search and filters."
        },

        {
            icon: <FiSend />,
            title: "Bulk Outreach with Gmail",
            text: "Open Gmail with hundreds of recipients and send applications faster than ever."
        }

    ];


    return (

        <section
            className="jr-features"
            id="features"
        >

            <div className="jr-section-container">

                <div className="jr-section-heading">

                    <h2>
                        Everything You Need to Manage Your{" "}
                        <span>Professional Opportunities</span>
                    </h2>

                </div>


                <div className="jr-features-grid">

                    {features.map((feature, index) => (

                        <article
                            className="jr-feature-card"
                            key={index}
                        >

                            <div className="jr-feature-icon">
                                {feature.icon}
                            </div>


                            <div className="jr-feature-content">

                                <h3>
                                    {feature.title}
                                </h3>

                                <p>
                                    {feature.text}
                                </p>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );
}