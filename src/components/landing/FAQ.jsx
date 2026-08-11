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
            answer: "Yes. You can import your job leads from CSV and Excel files and organize them directly inside your JobReach dashboard."
        },

        {
            question: "Can I create my own email templates?",
            answer: "Yes. You can create and save reusable templates and personalize them using dynamic information from your leads."
        },

        {
            question: "Can I personalize every email?",
            answer: "Yes. Templates can contain dynamic variables such as company name, location, contact name, and other lead information."
        },

        {
            question: "Is Gmail integration safe?",
            answer: "JobReach is designed to work with your existing Gmail workflow. You remain in control of your emails and sending process."
        },

        {
            question: "Can I try JobReach for free?",
            answer: "Yes. The Starter plan lets you begin building your lead database and organizing your job search without paying."
        },

        {
            question: "Can I build a professional CV?",
            answer: "Yes. JobReach includes a resume builder with professional templates designed to help you create a polished application."
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
                        Everything you need to know about JobReach.
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