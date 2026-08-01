import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
    FiSave,
    FiCheckCircle,
    FiAlertCircle
} from "react-icons/fi";

import VariablePanel from "../components/email/VariablePanel";
import SubjectEditor from "../components/email/SubjectEditor";
import TemplateEditor from "../components/email/TemplateEditor";
import TemplatePreview from "../components/email/TemplatePreview";

import API_BASE from "../config/api";

export default function EmailTemplate() {

    const { id } = useParams();

    const editorRef = useRef(null);

    const [name, setName] = useState(
        "Job Application Template"
    );

    const [subject, setSubject] = useState(
        "Job Application - {{desiredJob}}"
    );

    const [body, setBody] = useState(`
<p>Dear {{companyName}} Recruitment Team,</p>

<p>I hope you are doing well.</p>

<p>
I would like to apply for the position of
<strong>{{desiredJob}}</strong>
in your company.
</p>

<p>
Kind regards,<br/>
{{yourName}}<br/>
{{yourPhone}}<br/>
{{yourEmail}}
</p>
`);

    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        if (!id || id === "new") {
            return;
        }

        loadTemplate();

    }, [id]);


    const loadTemplate = async () => {

        try {

            setError("");

            const res = await axios.get(

                `${API_BASE}/api/email-templates/${id}`,

                {
                    withCredentials: true
                }

            );

            setName(
                res.data.name || "Email Template"
            );

            setSubject(
                res.data.subject || ""
            );

            setBody(
                res.data.body || ""
            );

        } catch (err) {

            console.error(err);

            setError(
                "Unable to load this template."
            );

        }

    };


    const insertVariable = (variable) => {

        const editor =
            editorRef.current?.getEditor();

        if (!editor) {

            setBody(prev =>
                `${prev}${variable}`
            );

            return;
        }

        editor.focus();

        const range =
            editor.getSelection(true);

        if (!range) {

            editor.insertText(
                editor.getLength() - 1,
                variable
            );

            return;
        }

        editor.insertText(
            range.index,
            variable,
            "user"
        );

        editor.setSelection(
            range.index + variable.length,
            0,
            "silent"
        );

    };


    const saveTemplate = async () => {

        if (!name.trim()) {

            setError(
                "Please enter a template name."
            );

            return;
        }

        if (!subject.trim()) {

            setError(
                "Please enter an email subject."
            );

            return;
        }

        setSaving(true);
        setSaved(false);
        setError("");

        try {

            const payload = {

                name: name.trim(),

                subject,

                body

            };


            if (id && id !== "new") {

                await axios.put(

                    `${API_BASE}/api/email-templates/${id}`,

                    payload,

                    {
                        withCredentials: true
                    }

                );

            } else {

                await axios.post(

                    `${API_BASE}/api/email-templates`,

                    payload,

                    {
                        withCredentials: true
                    }

                );

            }

            setSaved(true);

            setTimeout(() => {

                setSaved(false);

            }, 3000);

        } catch (err) {

            console.error(err);

            setError(
                err.response?.data?.message ||
                "Unable to save template."
            );

        } finally {

            setSaving(false);

        }

    };


    return (

        <div className="template-page">

            {/* PAGE HEADER */}

            <header className="template-header">

                <div>

                    <span className="template-eyebrow">
                        EMAIL WORKSPACE
                    </span>

                    <h1>
                        Email Template Builder
                    </h1>

                    <p>
                        Create reusable and professional
                        emails for your job applications.
                    </p>

                </div>


                <button
                    className="save-btn"
                    onClick={saveTemplate}
                    disabled={saving}
                >

                    {saving ? (

                        <>
                            <span className="save-spinner" />
                            Saving...
                        </>

                    ) : (

                        <>
                            <FiSave />
                            Save Template
                        </>

                    )}

                </button>

            </header>


            {/* STATUS */}

            {(saved || error) && (

                <div
                    className={
                        saved
                            ? "template-status success"
                            : "template-status error"
                    }
                >

                    {saved ? (
                        <>
                            <FiCheckCircle />
                            Template saved successfully.
                        </>
                    ) : (
                        <>
                            <FiAlertCircle />
                            {error}
                        </>
                    )}

                </div>

            )}


            {/* SUBJECT */}

            <SubjectEditor

                name={name}
                setName={setName}

                subject={subject}
                setSubject={setSubject}

            />


            {/* MAIN WORKSPACE */}

            <main className="template-content">

                <VariablePanel
                    onInsert={insertVariable}
                />


                <TemplateEditor

                    ref={editorRef}

                    body={body}

                    setBody={setBody}

                />


                <TemplatePreview

                    subject={subject}

                    body={body}

                />

            </main>


            {/* FOOTER */}

            <footer className="template-footer">

                <div className="footer-info">

                    <span>
                        Your changes are saved only when
                        you click Save Template.
                    </span>

                </div>


                <button
                    className="save-btn footer-save"
                    onClick={saveTemplate}
                    disabled={saving}
                >

                    <FiSave />

                    {saving
                        ? "Saving..."
                        : "Save Template"
                    }

                </button>

            </footer>


            <style>{`

                * {
                    box-sizing: border-box;
                }


                .template-page {

                    min-height: 100vh;

                    padding:
                        34px
                        38px
                        50px;

                    background:
                        #f6f8fc;

                    color: #101828;

                }


                /* HEADER */

                .template-header {

                    max-width: 1800px;

                    margin:
                        0 auto
                        25px;

                    display: flex;

                    align-items: center;

                    justify-content: space-between;

                    gap: 30px;

                }


                .template-eyebrow {

                    display: inline-block;

                    margin-bottom: 8px;

                    font-size: 11px;

                    font-weight: 800;

                    letter-spacing: 1.5px;

                    color: #667085;

                }


                .template-header h1 {

                    margin: 0;

                    font-size: 31px;

                    font-weight: 750;

                    letter-spacing: -.6px;

                }


                .template-header p {

                    margin:
                        8px
                        0
                        0;

                    color: #667085;

                    font-size: 14px;

                }


                /* SAVE */

                .save-btn {

                    min-height: 48px;

                    padding:
                        0
                        21px;

                    border: none;

                    border-radius: 12px;

                    display: inline-flex;

                    align-items: center;

                    justify-content: center;

                    gap: 9px;

                    background:
                        #4f46e5;

                    color: #fff;

                    font-size: 14px;

                    font-weight: 700;

                    cursor: pointer;

                    transition:
                        .2s ease;

                    white-space: nowrap;

                }


                .save-btn:hover {

                    background:
                        #4338ca;

                    transform:
                        translateY(-1px);

                }


                .save-btn:disabled {

                    opacity: .65;

                    cursor: not-allowed;

                    transform: none;

                }


                .save-spinner {

                    width: 15px;

                    height: 15px;

                    border:
                        2px solid
                        rgba(255,255,255,.35);

                    border-top-color:
                        #fff;

                    border-radius: 50%;

                    animation:
                        spin .7s linear infinite;

                }


                @keyframes spin {

                    to {
                        transform: rotate(360deg);
                    }

                }


                /* STATUS */

                .template-status {

                    max-width: 1800px;

                    margin:
                        0 auto
                        18px;

                    padding:
                        12px
                        15px;

                    border-radius: 10px;

                    display: flex;

                    align-items: center;

                    gap: 9px;

                    font-size: 13px;

                    font-weight: 600;

                }


                .template-status.success {

                    background: #ecfdf3;

                    color: #027a48;

                    border:
                        1px solid
                        #abefc6;

                }


                .template-status.error {

                    background: #fef3f2;

                    color: #b42318;

                    border:
                        1px solid
                        #fecdca;

                }


                /* WORKSPACE */

                .template-content {

                    max-width: 1800px;

                    margin: 0 auto;

                    display: grid;

                    grid-template-columns:
                        270px
                        minmax(480px, 1fr)
                        440px;

                    gap: 20px;

                    align-items: start;

                }


                /* FOOTER */

                .template-footer {

                    max-width: 1800px;

                    margin:
                        22px auto
                        0;

                    padding:
                        16px
                        18px;

                    background: #fff;

                    border:
                        1px solid
                        #eaecf0;

                    border-radius: 14px;

                    display: flex;

                    align-items: center;

                    justify-content: space-between;

                    gap: 20px;

                }


                .footer-info {

                    color: #98a2b3;

                    font-size: 12px;

                }


                @media(max-width: 1250px) {

                    .template-content {

                        grid-template-columns:
                            230px
                            minmax(400px, 1fr);

                    }

                    .preview-card {

                        grid-column:
                            1 / -1;

                        position: relative !important;

                    }

                }


                @media(max-width: 850px) {

                    .template-page {

                        padding: 20px 15px 35px;

                    }

                    .template-header {

                        align-items: flex-start;

                        flex-direction: column;

                    }

                    .template-header h1 {

                        font-size: 25px;

                    }

                    .template-header .save-btn {

                        width: 100%;

                    }

                    .template-content {

                        grid-template-columns: 1fr;

                    }

                    .variable-panel {

                        position: relative !important;

                        max-height: none !important;

                    }

                    .preview-card {

                        grid-column: auto;

                    }

                    .template-footer {

                        flex-direction: column;

                        align-items: stretch;

                    }

                    .footer-save {

                        width: 100%;

                    }

                }

            `}</style>

        </div>

    );

}