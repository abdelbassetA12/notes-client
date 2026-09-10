 
import {
    useState
} from "react";

import {
    FiPlus,
    FiMinus
} from "react-icons/fi";

export default function FAQ() {
    const questions = [
        {
            question: "Can I import Excel or CSV files?",
            answer: "Yes. You can import contacts, companies, projects, and opportunities from CSV and Excel files and organize them directly inside your dashboard."
        },
        {
            question: "Can I create my own email templates?",
            answer: "Yes. You can create and save reusable templates and personalize them using dynamic information from your contacts and opportunities."
        },
        {
            question: "Can I personalize every email?",
            answer: "Yes. Templates can contain dynamic variables such as contact name, company name, location, project details, and other information from your data."
        },
        {
            question: "Is Gmail integration safe?",
            answer: "The platform is designed to work with your existing Gmail workflow. You remain in control of your emails and the sending process."
        },
        {
            question: "Can I use the platform for free?",
            answer: "Yes. The Starter plan lets you begin organizing your contacts, opportunities, templates, and professional workflow without paying."
        },
        {
            question: "Can I build a professional CV?",
            answer: "Yes. The platform includes a resume builder with professional templates designed to help you create a polished and professional CV."
        }
    ];

    const [active, setActive] = useState(0);

    const toggle = (index) => {
        setActive(
            active === index
                ? -1
                : index
        );
    };

    return (
        <section className="jr-faq">
            <div className="jr-faq-container">
                <div className="jr-section-heading">
                    <h2>
                        Frequently Asked Questions
                    </h2>

                    <p className="jr-section-subtitle">
                        Everything you need to know about the platform.
                    </p>
                </div>

                <div className="jr-faq-list">
                    {questions.map((item, index) => {
                        const isOpen = active === index;

                        return (
                            <div
                                className={`jr-faq-item ${
                                    isOpen ? "open" : ""
                                }`}
                                key={index}
                            >
                                <button
                                    className="jr-faq-question"
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span>
                                        {item.question}
                                    </span>

                                    <span className="jr-faq-icon">
                                        {isOpen ? (
                                            <FiMinus />
                                        ) : (
                                            <FiPlus />
                                        )}
                                    </span>
                                </button>

                                <div className="jr-faq-answer">
                                    <p>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
 
