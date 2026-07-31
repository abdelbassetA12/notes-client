import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";
import { useNavigate } from "react-router-dom";

import {
    FiPlus,
    FiEdit,
    FiCopy,
    FiTrash2,
    FiStar
} from "react-icons/fi";

export default function EmailTemplates(){

    const navigate=useNavigate();

    const [templates,setTemplates]=useState([]);

    const loadTemplates=async()=>{

        const res=await axios.get(

            `${API_BASE}/api/email-templates`,

            {

                withCredentials:true

            }

        );

        setTemplates(res.data);

    };

    useEffect(()=>{

        loadTemplates();

    },[]);

    const deleteTemplate=async(id)=>{

        if(!window.confirm("Delete template ?"))
            return;

        await axios.delete(

            `${API_BASE}/api/email-templates/${id}`,

            {

                withCredentials:true

            }

        );

        loadTemplates();

    };

    const duplicateTemplate=async(id)=>{

        await axios.post(

            `${API_BASE}/api/email-templates/${id}/duplicate`,

            {},

            {

                withCredentials:true

            }

        );

        loadTemplates();

    };

    const setDefault=async(id)=>{

        await axios.patch(

            `${API_BASE}/api/email-templates/${id}/default`,

            {},

            {

                withCredentials:true

            }

        );

        loadTemplates();

    };

    return(

        <div className="templates-page">

            <div className="templates-header">

                <div>

                    <h1>Email Templates</h1>

                    <p>Manage all your templates.</p>

                </div>

                <button

                    className="new-btn"

                    onClick={()=>navigate("/email-template/new")}

                >

                    <FiPlus/>

                    New Template

                </button>

            </div>

            <div className="templates-grid">

                {

                    templates.map(template=>(

                        <div

                            className="template-card"

                            key={template._id}

                        >

                            <div className="template-card-header">

                                <h3>

                                    {template.name}

                                </h3>

                                {

                                    template.isDefault &&

                                    <FiStar className="default-icon"/>

                                }

                            </div>

                            <small>

                                {template.subject}

                            </small>

                            <p>

                                Updated

                                {

                                    new Date(

                                        template.updatedAt

                                    ).toLocaleDateString()

                                }

                            </p>

                            <div className="card-actions">

                                <button

                                    onClick={()=>navigate(

                                        `/email-template/${template._id}`

                                    )}

                                >

                                    <FiEdit/>

                                </button>

                                <button

                                    onClick={()=>duplicateTemplate(

                                        template._id

                                    )}

                                >

                                    <FiCopy/>

                                </button>

                                <button

                                    onClick={()=>setDefault(

                                        template._id

                                    )}

                                >

                                    <FiStar/>

                                </button>

                                <button

                                    onClick={()=>deleteTemplate(

                                        template._id

                                    )}

                                >

                                    <FiTrash2/>

                                </button>

                            </div>

                        </div>

                    ))

                }

            </div>

            <style>
                {`
                /* ================================
   Email Templates Page
================================ */

.templates-page {
    min-height: 100vh;
    padding: 40px;
    background:
        radial-gradient(circle at top left, rgba(99, 102, 241, 0.08), transparent 30%),
        #f7f8fc;
    color: #171923;
    box-sizing: border-box;
}


/* ================================
   Header
================================ */

.templates-header {
    max-width: 1400px;
    margin: 0 auto 35px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
}

.templates-header h1 {
    margin: 0 0 8px;

    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.8px;

    color: #151827;
}

.templates-header p {
    margin: 0;

    font-size: 15px;
    color: #7b8194;
}


/* ================================
   New Template Button
================================ */

.new-btn {
    border: none;
    outline: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;

    padding: 13px 20px;

    border-radius: 12px;

    background: linear-gradient(
        135deg,
        #6366f1,
        #4f46e5
    );

    color: white;

    font-size: 14px;
    font-weight: 700;

    cursor: pointer;

    box-shadow:
        0 8px 20px rgba(79, 70, 229, 0.22);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        filter 0.2s ease;
}

.new-btn svg {
    width: 18px;
    height: 18px;
}

.new-btn:hover {
    transform: translateY(-2px);

    box-shadow:
        0 12px 28px rgba(79, 70, 229, 0.28);

    filter: brightness(1.04);
}

.new-btn:active {
    transform: translateY(0);
}


/* ================================
   Templates Grid
================================ */

.templates-grid {
    max-width: 1400px;
    margin: 0 auto;

    display: grid;

    grid-template-columns:
        repeat(auto-fill, minmax(280px, 1fr));

    gap: 22px;
}


/* ================================
   Template Card
================================ */

.template-card {
    position: relative;

    min-height: 190px;

    padding: 22px;

    background: rgba(255, 255, 255, 0.95);

    border: 1px solid #e8eaf1;

    border-radius: 18px;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    box-shadow:
        0 5px 20px rgba(20, 25, 45, 0.04);

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        border-color 0.25s ease;
}


/* top accent */

.template-card::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;
    right: 0;

    height: 3px;

    background: linear-gradient(
        90deg,
        #6366f1,
        #8b5cf6,
        #a855f7
    );

    opacity: 0;

    transition: opacity 0.25s ease;
}

.template-card:hover {
    transform: translateY(-5px);

    border-color: #dddff0;

    box-shadow:
        0 18px 40px rgba(25, 30, 55, 0.09);
}

.template-card:hover::before {
    opacity: 1;
}


/* ================================
   Card Header
================================ */

.template-card-header {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 12px;

    margin-bottom: 12px;
}

.template-card-header h3 {
    margin: 0;

    min-width: 0;

    font-size: 17px;
    font-weight: 750;

    color: #1b1e2b;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


/* ================================
   Default Star
================================ */

.default-icon {
    flex-shrink: 0;

    width: 18px;
    height: 18px;

    color: #f59e0b;

    fill: #f59e0b;

    filter:
        drop-shadow(
            0 3px 5px rgba(245, 158, 11, 0.25)
        );
}


/* ================================
   Subject
================================ */

.template-card > small {
    display: block;

    margin-bottom: 10px;

    padding: 9px 11px;

    border-radius: 9px;

    background: #f6f7fb;

    border: 1px solid #eef0f5;

    color: #5f6679;

    font-size: 13px;
    font-weight: 500;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


/* ================================
   Updated
================================ */

.template-card > p {
    margin: 0;

    color: #9298a9;

    font-size: 12px;
    font-weight: 500;
}


/* ================================
   Actions
================================ */

.card-actions {
    display: flex;

    align-items: center;

    gap: 8px;

    margin-top: auto;
    padding-top: 20px;
}

.card-actions button {
    width: 38px;
    height: 38px;

    padding: 0;

    border: 1px solid #e8eaf0;

    border-radius: 10px;

    background: #ffffff;

    color: #717789;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition:
        color 0.2s ease,
        background 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.card-actions button svg {
    width: 16px;
    height: 16px;
}

.card-actions button:hover {
    transform: translateY(-2px);

    color: #4f46e5;

    background: #f5f5ff;

    border-color: #dfe0ff;

    box-shadow:
        0 5px 12px rgba(79, 70, 229, 0.1);
}


/* Delete */

.card-actions button:last-child:hover {
    color: #ef4444;

    background: #fff5f5;

    border-color: #ffdcdc;

    box-shadow:
        0 5px 12px rgba(239, 68, 68, 0.1);
}


/* Star action */

.card-actions button:nth-child(3):hover {
    color: #f59e0b;

    background: #fffaf0;

    border-color: #ffe5ae;
}


/* ================================
   Empty State
================================ */

.templates-grid:empty::before {
    content: "No email templates yet";

    grid-column: 1 / -1;

    min-height: 280px;

    display: flex;

    align-items: center;
    justify-content: center;

    border: 2px dashed #e1e4ed;

    border-radius: 18px;

    color: #9aa0b1;

    font-size: 15px;
    font-weight: 600;
}


/* ================================
   Responsive
================================ */

@media (max-width: 900px) {

    .templates-page {
        padding: 30px 24px;
    }

    .templates-header h1 {
        font-size: 28px;
    }

    .templates-grid {
        grid-template-columns:
            repeat(auto-fill, minmax(250px, 1fr));
    }
}


@media (max-width: 600px) {

    .templates-page {
        padding: 22px 16px;
    }

    .templates-header {
        align-items: flex-start;
        flex-direction: column;

        margin-bottom: 25px;
    }

    .templates-header h1 {
        font-size: 25px;
    }

    .templates-header p {
        font-size: 14px;
    }

    .new-btn {
        width: 100%;
    }

    .templates-grid {
        grid-template-columns: 1fr;

        gap: 15px;
    }

    .template-card {
        padding: 18px;
    }
}


/* ================================
   Smooth appearance
================================ */

.template-card {
    animation: templateCardIn 0.4s ease both;
}

@keyframes templateCardIn {

    from {
        opacity: 0;
        transform: translateY(12px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}`}
            </style>

        </div>

    );

}