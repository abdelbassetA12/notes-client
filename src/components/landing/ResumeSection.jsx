import {
    FiCheck,
    FiArrowRight
} from "react-icons/fi";


function ResumeMockup({
    dark = false,
    accent = false
}) {

    return (

        <div className={`jr-resume-mockup ${dark ? "dark" : ""}`}>

            <div className="jr-resume-top">

                <div className="jr-resume-photo">
                    A
                </div>

                <div className="jr-resume-name">

                    <strong>
                        Abdelbaset
                    </strong>

                    <span>
                        El Hajri
                    </span>

                </div>

            </div>


            <div className="jr-resume-layout">

                <div className="jr-resume-left">

                    <div className="jr-resume-line large" />
                    <div className="jr-resume-line" />
                    <div className="jr-resume-line short" />

                    <div className="jr-resume-section-title">
                        About Me
                    </div>

                    <div className="jr-resume-text">
                        <i />
                        <i />
                        <i />
                        <i />
                    </div>


                    <div className="jr-resume-section-title">
                        Experience
                    </div>

                    <div className="jr-resume-text">
                        <i />
                        <i />
                        <i />
                    </div>


                    <div className="jr-resume-section-title">
                        Education
                    </div>

                    <div className="jr-resume-text">
                        <i />
                        <i />
                    </div>

                </div>


                <div className="jr-resume-right">

                    <div className="jr-resume-section-title">
                        Skills
                    </div>

                    <div className="jr-resume-skill" />
                    <div className="jr-resume-skill" />
                    <div className="jr-resume-skill short" />

                    <div className="jr-resume-section-title">
                        Languages
                    </div>

                    <div className="jr-resume-skill" />
                    <div className="jr-resume-skill" />

                </div>

            </div>

        </div>
    );
}


export default function ResumeSection() {

    return (

        <section
            className="jr-resume-section"
            id="templates"
        >

            <div className="jr-resume-section-inner">


                {/* Text */}

                <div className="jr-resume-copy">

                    <div className="jr-resume-new">
                        New
                    </div>


                    <h2>
                        Create Professional
                        <br />
                        Resumes That Get You Hired
                    </h2>


                    <p>
                        Stand out with modern, ATS-friendly resumes.
                        Choose templates, customize, and download
                        in minutes.
                    </p>


                    <div className="jr-resume-benefits">

                        <span>
                            <FiCheck />
                            Professional Templates
                        </span>

                        <span>
                            <FiCheck />
                            Easy to Customize
                        </span>

                        <span>
                            <FiCheck />
                            ATS Optimized
                        </span>

                        <span>
                            <FiCheck />
                            Export PDF / Word
                        </span>

                    </div>


                    <button className="jr-resume-button">

                        Build My Resume

                        <FiArrowRight />

                    </button>

                </div>


                {/* Resume previews */}

                <div className="jr-resume-previews">

                    <ResumeMockup />

                    <ResumeMockup />

                    <ResumeMockup dark />

                    <ResumeMockup accent />

                </div>

            </div>

        </section>

    );
}