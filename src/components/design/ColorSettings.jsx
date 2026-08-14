import { useResume } from "../context/ResumeContext";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

export default function ColorSettings() {

    const {
        design,
        updateDesign
    } = useResume();


    const ColorControl = ({
        label,
        description,
        field
    }) => {

        return (

            <div className="color-control">

                <div className="color-control-info">

                    <span className="color-control-label">
                        {label}
                    </span>

                    <span className="color-control-description">
                        {description}
                    </span>

                </div>


                <div className="color-control-picker">

                    <input
                        type="color"
                        value={design[field]}
                        onChange={(e) =>
                            updateDesign(
                                field,
                                e.target.value
                            )
                        }
                    />

                    <span>
                        {design[field].toUpperCase()}
                    </span>

                </div>

            </div>

        );

    };


    return (

        <Section>

            <SectionHeader
                title="Colors"
                subtitle="Customize the main colors of your resume"
            />


            {/* ==================================
                PAGE
            ================================== */}

            <div className="color-group">

                <div className="color-group-header">

                    <div className="color-group-icon">
                        ◫
                    </div>

                    <div>

                        <strong>
                            Page
                        </strong>

                        <span>
                            Main resume surfaces
                        </span>

                    </div>

                </div>


                <ColorControl
                    label="Main Background"
                    description="The main page background"
                    field="mainBackground"
                />


                <ColorControl
                    label="Sidebar Background"
                    description="Background of the left or right sidebar"
                    field="sidebarBackground"
                />

            </div>


            {/* ==================================
                HEADER
            ================================== */}

            <div className="color-group">

                <div className="color-group-header">

                    <div className="color-group-icon">
                        ▱
                    </div>

                    <div>

                        <strong>
                            Header
                        </strong>

                        <span>
                            Name and introduction area
                        </span>

                    </div>

                </div>


                <ColorControl
                    label="Header Background"
                    description="Background behind the header"
                    field="headerBackground"
                />


                <ColorControl
                    label="Name"
                    description="Your main name"
                    field="nameColor"
                />

            </div>


            {/* ==================================
                HEADINGS
            ================================== */}

            <div className="color-group">

                <div className="color-group-header">

                    <div className="color-group-icon">
                        T
                    </div>

                    <div>

                        <strong>
                            Headings
                        </strong>

                        <span>
                            Titles and important information
                        </span>

                    </div>

                </div>


                <ColorControl
                    label="Section Titles"
                    description="Experience, Education, Skills..."
                    field="headingColor"
                />


                <ColorControl
                    label="Subheadings"
                    description="Job titles, degrees and secondary titles"
                    field="subheadingColor"
                />


                <ColorControl
                    label="Primary Accent"
                    description="Main accent used throughout the resume"
                    field="primaryColor"
                />

            </div>


            {/* ==================================
                TEXT
            ================================== */}

            <div className="color-group">

                <div className="color-group-header">

                    <div className="color-group-icon">
                        Aa
                    </div>

                    <div>

                        <strong>
                            Text
                        </strong>

                        <span>
                            Regular resume content
                        </span>

                    </div>

                </div>


                <ColorControl
                    label="Body Text"
                    description="Descriptions and general text"
                    field="textColor"
                />


                <ColorControl
                    label="Links"
                    description="Websites, emails and clickable links"
                    field="linkColor"
                />

            </div>


            {/* ==================================
                DETAILS
            ================================== */}

            <div className="color-group">

                <div className="color-group-header">

                    <div className="color-group-icon">
                        —
                    </div>

                    <div>

                        <strong>
                            Details
                        </strong>

                        <span>
                            Small visual separators
                        </span>

                    </div>

                </div>


                <ColorControl
                    label="Dividers"
                    description="Lines separating resume sections"
                    field="dividerColor"
                />

            </div>


            <style>{`

                .color-group{

                    margin-top:18px;

                    padding:16px;

                    border:1px solid #e5e7eb;

                    border-radius:14px;

                    background:#ffffff;

                }


                .color-group-header{

                    display:flex;

                    align-items:center;

                    gap:11px;

                    margin-bottom:14px;

                    padding-bottom:13px;

                    border-bottom:1px solid #f1f5f9;

                }


                .color-group-icon{

                    width:34px;

                    height:34px;

                    display:flex;

                    align-items:center;

                    justify-content:center;

                    flex-shrink:0;

                    border-radius:9px;

                    background:#eff6ff;

                    color:#2563eb;

                    font-size:14px;

                    font-weight:700;

                }


                .color-group-header div:last-child{

                    display:flex;

                    flex-direction:column;

                    gap:2px;

                }


                .color-group-header strong{

                    color:#111827;

                    font-size:13px;

                    font-weight:700;

                }


                .color-group-header span{

                    color:#9ca3af;

                    font-size:11px;

                }


                .color-control{

                    display:flex;

                    align-items:center;

                    justify-content:space-between;

                    gap:15px;

                    padding:11px 0;

                }


                .color-control + .color-control{

                    border-top:1px solid #f3f4f6;

                }


                .color-control-info{

                    min-width:0;

                    display:flex;

                    flex-direction:column;

                    gap:3px;

                }


                .color-control-label{

                    color:#374151;

                    font-size:13px;

                    font-weight:600;

                }


                .color-control-description{

                    color:#9ca3af;

                    font-size:11px;

                    line-height:1.4;

                }


                .color-control-picker{

                    display:flex;

                    align-items:center;

                    gap:8px;

                    flex-shrink:0;

                    padding:4px 7px 4px 4px;

                    border:1px solid #e5e7eb;

                    border-radius:8px;

                    background:#fff;

                }


                .color-control-picker input{

                    width:30px;

                    height:30px;

                    padding:0;

                    border:0;

                    border-radius:6px;

                    background:transparent;

                    cursor:pointer;

                }


                .color-control-picker input::-webkit-color-swatch-wrapper{

                    padding:0;

                }


                .color-control-picker input::-webkit-color-swatch{

                    border:1px solid #d1d5db;

                    border-radius:5px;

                }


                .color-control-picker span{

                    min-width:67px;

                    color:#6b7280;

                    font-family:monospace;

                    font-size:10px;

                    font-weight:600;

                }


                .color-control:hover .color-control-label{

                    color:#2563eb;

                }


                @media(max-width:500px){

                    .color-control{

                        align-items:flex-start;

                    }

                    .color-control-picker{

                        margin-top:1px;

                    }

                }

            `}</style>

        </Section>

    );

}
 
