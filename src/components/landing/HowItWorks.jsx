 
import {
    FiDownload,
    FiFileText,
    FiMail,
    FiSend,
    FiClock,
    FiAward,
    FiArrowRight
} from "react-icons/fi";

export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            icon: <FiDownload />,
            title: "Import Your Data",
            text: "Import contacts, companies, projects, and opportunities from CSV or Excel files."
        },
        {
            number: "2",
            icon: <FiFileText />,
            title: "Create Your Workspace",
            text: "Organize your information, create email templates, and build your professional profile."
        },
        {
            number: "3",
            icon: <FiMail />,
            title: "Connect & Reach Out",
            text: "Prepare personalized emails and connect with contacts, clients, companies, or opportunities."
        },
        {
            number: "4",
            icon: <FiSend />,
            title: "Take Action",
            text: "Send messages, apply for opportunities, follow up with clients, or move projects forward."
        },
        {
            number: "5",
            icon: <FiClock />,
            title: "Track Everything",
            text: "Track conversations, replies, follow-ups, contacts, and the progress of every opportunity."
        },
        {
            number: "6",
            icon: <FiAward />,
            title: "Grow & Succeed",
            text: "Turn your connections and opportunities into jobs, projects, clients, and professional growth."
        }
    ];

    return (
        <section
            className="jr-how-it-works"
            id="how-it-works"
        >
            <div className="jr-how-container">
                <div className="jr-section-heading jr-how-heading">
                    <h2>
                        How It Works
                    </h2>
                </div>

                <div className="jr-steps">
                    {steps.map((step, index) => (
                        <div
                            className="jr-step-wrapper"
                            key={step.number}
                        >
                            <div className="jr-step">
                                <div className="jr-step-icon">
                                    {step.icon}
                                </div>

                                <div className="jr-step-number">
                                    {step.number}.
                                </div>

                                <h3>
                                    {step.title}
                                </h3>

                                <p>
                                    {step.text}
                                </p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="jr-step-arrow">
                                    <FiArrowRight />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
 
