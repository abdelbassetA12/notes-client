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
            title: "Import Leads",
            text: "Import companies from CSV or Excel files."
        },

        {
            number: "2",
            icon: <FiFileText />,
            title: "Choose Template",
            text: "Select or create email templates with variables."
        },

        {
            number: "3",
            icon: <FiMail />,
            title: "Open Gmail",
            text: "Open Gmail with hundreds of recipients instantly."
        },

        {
            number: "4",
            icon: <FiSend />,
            title: "Send Applications",
            text: "Send personalized applications in bulk."
        },

        {
            number: "5",
            icon: <FiClock />,
            title: "Track Replies",
            text: "Track replies and update application status."
        },

        {
            number: "6",
            icon: <FiAward />,
            title: "Get Interviews",
            text: "Move forward and land your dream job."
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