import {
    useEffect,
    useMemo,
    useState
} from "react";

import {
    FiEye,
    FiChevronDown
} from "react-icons/fi";

import axios from "axios";

import API_BASE from "../../config/api";


export default function TemplatePreview({

    subject,

    body

}) {

    const [companies, setCompanies] =
        useState([]);

    const [selected, setSelected] =
        useState(null);


    useEffect(() => {

        loadCompanies();

    }, []);


    const loadCompanies = async () => {

        try {

            const res = await axios.get(

                `${API_BASE}/api/job-leads`,

                {

                    params: {
                        limit: 500
                    },

                    withCredentials: true

                }

            );

            const leads =
                res.data.leads || [];

            setCompanies(leads);

            if (leads.length > 0) {

                setSelected(leads[0]);

            }

        } catch (err) {

            console.error(err);

        }

    };


    const profile = {

        yourName:
            "Abdelbasset El Hajiri",

        yourEmail:
            "abdelbasset.elhajiri1@gmail.com",

        yourPhone:
            "+212700592987",

        yourNationality:
            "Moroccan",

        yourLinkedin:
            "linkedin.com/in/abdelbasset",

        yourPortfolio:
            "portfolio.com"

    };


    const replaceVariables = (text) => {

        if (!text) return "";

        const company =
            selected || {};

        return text

            .replaceAll(
                "{{companyName}}",
                company.companyName || ""
            )

            .replaceAll(
                "{{contactPerson}}",
                company.contactPerson || ""
            )

            .replaceAll(
                "{{email}}",
                company.email || ""
            )

            .replaceAll(
                "{{website}}",
                company.website || ""
            )

            .replaceAll(
                "{{country}}",
                company.country || ""
            )

            .replaceAll(
                "{{city}}",
                company.city || ""
            )

            .replaceAll(
                "{{desiredJob}}",
                company.desiredJob || ""
            )

            .replaceAll(
                "{{yourName}}",
                profile.yourName
            )

            .replaceAll(
                "{{yourEmail}}",
                profile.yourEmail
            )

            .replaceAll(
                "{{yourPhone}}",
                profile.yourPhone
            )

            .replaceAll(
                "{{yourNationality}}",
                profile.yourNationality
            )

            .replaceAll(
                "{{yourLinkedin}}",
                profile.yourLinkedin
            )

            .replaceAll(
                "{{yourPortfolio}}",
                profile.yourPortfolio
            )

            .replaceAll(
                "{{today}}",
                new Date()
                    .toLocaleDateString()
            )

            .replaceAll(
                "{{year}}",
                String(
                    new Date()
                        .getFullYear()
                )
            );

    };


    const previewSubject = useMemo(

        () =>
            replaceVariables(subject),

        [
            subject,
            selected
        ]

    );


    const previewBody = useMemo(

        () =>
            replaceVariables(body),

        [
            body,
            selected
        ]

    );


    return (

        <aside className="preview-card">

            <div className="preview-top">

                <div>

                    <span className="preview-eyebrow">
                        PREVIEW
                    </span>

                    <h2>

                        <FiEye />

                        Live Preview

                    </h2>

                </div>

            </div>


            <div className="preview-company">

                <label>
                    Preview as company
                </label>

                <div className="company-select">

                    <select

                        value={
                            selected?.companyName || ""
                        }

                        onChange={(e) => {

                            const company =
                                companies.find(

                                    c =>
                                        c.companyName ===
                                        e.target.value

                                );

                            setSelected(company);

                        }}

                    >

                        {companies.map(
                            (company, index) => (

                                <option

                                    key={
                                        company._id ||
                                        company.companyName ||
                                        index
                                    }

                                    value={
                                        company.companyName
                                    }

                                >

                                    {
                                        company.companyName
                                    }

                                </option>

                            )
                        )}

                    </select>

                    <FiChevronDown />

                </div>

            </div>


            <div className="email-preview">

                <div className="email-preview-bar">

                    <span />

                    <span />

                    <span />

                </div>


                <div className="email-meta">

                    <div>

                        <small>
                            To
                        </small>

                        <strong>
                            {
                                selected?.email ||
                                "company@example.com"
                            }
                        </strong>

                    </div>


                    <div>

                        <small>
                            From
                        </small>

                        <strong>
                            {profile.yourEmail}
                        </strong>

                    </div>

                </div>


                <div className="email-subject">

                    {previewSubject ||
                        "Your email subject"}

                </div>


                <div

                    className="preview-body"

                    dangerouslySetInnerHTML={{
                        __html:
                            previewBody ||
                            "<p>Start writing your email...</p>"
                    }}

                />

            </div>


            <div className="preview-note">

                <FiEye />

                <span>
                    This is a live preview.
                    Variables are replaced with
                    the selected company's data.
                </span>

            </div>


            <style>{`

                .preview-card {

                    background: #fff;

                    border:
                        1px solid
                        #eaecf0;

                    border-radius: 16px;

                    overflow: hidden;

                    position: sticky;

                    top: 20px;

                    box-shadow:
                        0 3px 12px
                        rgba(16,24,40,.03);

                }


                .preview-top {

                    padding:
                        20px;

                    border-bottom:
                        1px solid
                        #f2f4f7;

                }


                .preview-eyebrow {

                    font-size: 9px;

                    font-weight: 800;

                    letter-spacing: 1.3px;

                    color: #98a2b3;

                }


                .preview-top h2 {

                    margin:
                        5px 0
                        0;

                    display: flex;

                    align-items: center;

                    gap: 7px;

                    font-size: 18px;

                }


                .preview-top h2 svg {

                    color: #6366f1;

                    font-size: 17px;

                }


                .preview-company {

                    padding:
                        14px
                        16px;

                    background: #fafbfc;

                    border-bottom:
                        1px solid
                        #f2f4f7;

                }


                .preview-company label {

                    display: block;

                    margin-bottom: 7px;

                    color: #667085;

                    font-size: 10px;

                    font-weight: 600;

                }


                .company-select {

                    position: relative;

                }


                .company-select select {

                    width: 100%;

                    height: 40px;

                    padding:
                        0
                        32px
                        0
                        11px;

                    border:
                        1px solid
                        #d0d5dd;

                    border-radius: 8px;

                    background: #fff;

                    outline: none;

                    color: #344054;

                    font-size: 11px;

                    appearance: none;

                    cursor: pointer;

                }


                .company-select svg {

                    position: absolute;

                    right: 10px;

                    top: 50%;

                    transform:
                        translateY(-50%);

                    pointer-events: none;

                    color: #667085;

                }


                .email-preview {

                    margin: 16px;

                    border:
                        1px solid
                        #eaecf0;

                    border-radius: 10px;

                    overflow: hidden;

                    background: #fff;

                }


                .email-preview-bar {

                    height: 28px;

                    padding: 0 10px;

                    display: flex;

                    align-items: center;

                    gap: 5px;

                    background: #f8fafc;

                    border-bottom:
                        1px solid
                        #eaecf0;

                }


                .email-preview-bar span {

                    width: 6px;

                    height: 6px;

                    border-radius: 50%;

                    background: #d0d5dd;

                }


                .email-meta {

                    padding:
                        13px;

                    display: flex;

                    flex-direction: column;

                    gap: 8px;

                    border-bottom:
                        1px solid
                        #f2f4f7;

                }


                .email-meta div {

                    display: flex;

                    gap: 8px;

                    align-items: center;

                }


                .email-meta small {

                    width: 30px;

                    color: #98a2b3;

                    font-size: 9px;

                }


                .email-meta strong {

                    overflow: hidden;

                    text-overflow: ellipsis;

                    white-space: nowrap;

                    color: #475467;

                    font-size: 10px;

                    font-weight: 500;

                }


                .email-subject {

                    padding:
                        14px;

                    border-bottom:
                        1px solid
                        #f2f4f7;

                    color: #101828;

                    font-size: 13px;

                    font-weight: 700;

                    line-height: 1.5;

                }


                .preview-body {

                    min-height: 330px;

                    max-height: 550px;

                    overflow-y: auto;

                    padding:
                        16px;

                    color: #344054;

                    font-size: 12px;

                    line-height: 1.75;

                    word-break: break-word;

                }


                .preview-body p {

                    margin:
                        0 0
                        12px;

                }


                .preview-body h1 {

                    font-size: 21px;

                }


                .preview-body h2 {

                    font-size: 18px;

                }


                .preview-body h3 {

                    font-size: 16px;

                }


                .preview-body a {

                    color: #4f46e5;

                }


                .preview-note {

                    margin:
                        0 16px
                        16px;

                    padding: 10px;

                    display: flex;

                    gap: 8px;

                    background: #f8faff;

                    border:
                        1px solid
                        #e0e7ff;

                    border-radius: 8px;

                    color: #667085;

                    font-size: 10px;

                    line-height: 1.5;

                }


                .preview-note svg {

                    flex-shrink: 0;

                    color: #6366f1;

                    margin-top: 1px;

                }

            `}</style>

        </aside>

    );

}















/*
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import API_BASE from "../../config/api";
export default function TemplatePreview({

    subject,
    body

}) {
    const [companies, setCompanies] = useState([]);

const [selected, setSelected] = useState(null);
useEffect(() => {

    axios.get(
        `${API_BASE}/api/job-leads`,
        {
            params:{ limit:500 },
            withCredentials:true
        }
    )
.then(res => {

    const leads = res.data.leads;

    console.log(leads);

    setCompanies(leads);

    if (leads.length > 0) {
        setSelected(leads[0]);
    }

})
  
.catch(console.error);
   

},[]);




    const profile = {

        yourName: "Abdelbasset El Hajiri",

        yourEmail: "abdelbasset.elhajiri1@gmail.com",

        yourPhone: "+212700592987",

        yourNationality: "Moroccan",

        yourLinkedin: "linkedin.com/in/abdelbasset",

        yourPortfolio: "portfolio.com"

    };

    

   const replaceVariables = (text) => {

    if (!selected) return text;

    return text

        .replaceAll(
            "{{companyName}}",
            selected.companyName || ""
        )

            .replaceAll(
                "{{contactPerson}}",
                selected.contactPerson || ""
            )

            .replaceAll(
                "{{email}}",
                selected.email || ""
            )

            .replaceAll(
                "{{website}}",
                selected.website || ""
            )

            .replaceAll(
                "{{country}}",
                selected.country || ""
            )

            .replaceAll(
                "{{city}}",
                selected.city || ""
            )

            .replaceAll(
                "{{desiredJob}}",
                selected.desiredJob || ""
            )

            .replaceAll(
                "{{yourName}}",
                profile.yourName
            )

            .replaceAll(
                "{{yourEmail}}",
                profile.yourEmail
            )

            .replaceAll(
                "{{yourPhone}}",
                profile.yourPhone
            )

            .replaceAll(
                "{{yourNationality}}",
                profile.yourNationality
            )

            .replaceAll(
                "{{yourLinkedin}}",
                profile.yourLinkedin
            )

            .replaceAll(
                "{{yourPortfolio}}",
                profile.yourPortfolio
            )

            .replaceAll(
                "{{today}}",
                new Date().toLocaleDateString()
            )

            .replaceAll(
                "{{year}}",
                new Date().getFullYear()
            );

    };

    const previewSubject = useMemo(

        () => replaceVariables(subject),

        [subject, selected]

    );

    const previewBody = useMemo(

        () => replaceVariables(body),

        [body, selected]

    );
console.log(selected);
    return (

        <div className="preview-card">

            <div className="preview-header">

                <h3>

                    Live Preview

                </h3>

                <select

                 
                    value={selected?.companyName || ""}

                    onChange={(e)=>{

                        const company = companies.find(

                            c=>c.companyName===e.target.value

                        );

                        setSelected(company);

                    }}

                >

                    {

                        companies.map(company=>(

                            <option

                                key={company.companyName }

                                value={company.companyName}

                            >

                                {company.companyName}

                            </option>

                        ))

                    }

                </select>

            </div>

            <div className="preview-subject">

                <strong>

                    Subject

                </strong>

                <p>

                    {previewSubject}

                </p>

            </div>

            <div

                className="preview-body"

                dangerouslySetInnerHTML={{

                    __html: previewBody

                }}

            />

        </div>

    );

}*/