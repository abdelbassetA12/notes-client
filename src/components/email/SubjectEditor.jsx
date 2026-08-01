import {
    FiFileText,
    FiMail
} from "react-icons/fi";

export default function SubjectEditor({

    name,
    setName,

    subject,
    setSubject

}) {

    return (

        <section className="subject-card">

            <div className="subject-field">

                <div className="subject-label">

                    <div className="subject-icon">
                        <FiFileText />
                    </div>

                    <div>

                        <label>
                            Template Name
                        </label>

                        <span>
                            Internal name for this template
                        </span>

                    </div>

                </div>


                <input

                    type="text"

                    value={name}

                    onChange={(e) =>
                        setName(e.target.value)
                    }

                    placeholder="e.g. Job Application Template"

                />

            </div>


            <div className="subject-divider" />


            <div className="subject-field">

                <div className="subject-label">

                    <div className="subject-icon">
                        <FiMail />
                    </div>

                    <div>

                        <label>
                            Email Subject
                        </label>

                        <span>
                            You can use variables inside the subject
                        </span>

                    </div>

                </div>


                <input

                    type="text"

                    value={subject}

                    onChange={(e) =>
                        setSubject(e.target.value)
                    }

                    placeholder="Job Application - {{desiredJob}}"

                />

                <div className="subject-hint">

                    Example:

                    <code>
                        Application for  
                    </code>

                    <span>
                        Variables will automatically be replaced
                        before sending.
                    </span>

                </div>

            </div>


            <style>{`

                .subject-card {

                    max-width: 1800px;

                    margin:
                        0 auto
                        20px;

                    padding: 22px 24px;

                    background: #fff;

                    border:
                        1px solid
                        #eaecf0;

                    border-radius: 16px;

                    box-shadow:
                        0 3px 12px
                        rgba(16,24,40,.03);

                }


                .subject-field {

                    display: flex;

                    flex-direction: column;

                    gap: 12px;

                }


                .subject-label {

                    display: flex;

                    align-items: center;

                    gap: 11px;

                }


                .subject-icon {

                    width: 36px;

                    height: 36px;

                    border-radius: 9px;

                    display: flex;

                    align-items: center;

                    justify-content: center;

                    background: #eef2ff;

                    color: #4f46e5;

                    font-size: 17px;

                }


                .subject-label label {

                    display: block;

                    font-size: 14px;

                    font-weight: 700;

                    color: #101828;

                }


                .subject-label span {

                    display: block;

                    margin-top: 3px;

                    color: #98a2b3;

                    font-size: 11px;

                }


                .subject-field input {

                    width: 100%;

                    height: 48px;

                    padding:
                        0
                        15px;

                    border:
                        1px solid
                        #d0d5dd;

                    border-radius: 10px;

                    outline: none;

                    background: #fff;

                    color: #101828;

                    font-size: 14px;

                    transition: .2s;

                }


                .subject-field input:focus {

                    border-color:
                        #6366f1;

                    box-shadow:
                        0 0 0 3px
                        rgba(99,102,241,.10);

                }


                .subject-divider {

                    height: 1px;

                    background:
                        #f2f4f7;

                    margin:
                        21px
                        0;

                }


                .subject-hint {

                    display: flex;

                    align-items: center;

                    flex-wrap: wrap;

                    gap: 8px;

                    color: #98a2b3;

                    font-size: 11px;

                }


                .subject-hint code {

                    padding:
                        4px
                        7px;

                    background: #f2f4f7;

                    border-radius: 5px;

                    color: #475467;

                    font-family:
                        monospace;

                }


                @media(max-width:600px) {

                    .subject-card {

                        padding: 18px;

                    }

                }

            `}</style>

        </section>

    );

}

















/*

export default function SubjectEditor({

    subject,
    setSubject,
    name,
    setName

}) {

    return (

        <div className="subject-card">
            <label>

                Name Project

            </label>

            <input

                type="text"

                value={name}

                onChange={(e)=>
                    setName(e.target.value)
                }

            />

            <label>

                Email Subject

            </label>

            <input

                type="text"

                value={subject}

                onChange={(e)=>
                    setSubject(e.target.value)
                }

            />

        </div>

    );

}*/