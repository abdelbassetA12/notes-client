import {
    FiHome,
    FiUser,
    FiMail,
    FiPhone,
    FiGlobe,
    FiMapPin,
    FiBriefcase,
    FiCalendar,
    FiCopy
} from "react-icons/fi";


const variables = [

    {

        title: "Company",

        description:
            "Information about the company",

        items: [

            {
                label: "Company Name",
                value: "{{companyName}}",
                icon: <FiHome />
            },

            {
                label: "Contact Person",
                value: "{{contactPerson}}",
                icon: <FiUser />
            },

            {
                label: "Company Email",
                value: "{{email}}",
                icon: <FiMail />
            },

            {
                label: "Website",
                value: "{{website}}",
                icon: <FiGlobe />
            },

            {
                label: "Country",
                value: "{{country}}",
                icon: <FiMapPin />
            },

            {
                label: "City",
                value: "{{city}}",
                icon: <FiMapPin />
            }

        ]

    },


    {

        title: "Job",

        description:
            "Information about the position",

        items: [

            {
                label: "Desired Job",
                value: "{{desiredJob}}",
                icon: <FiBriefcase />
            }

        ]

    },


    {

        title: "My Profile",

        description:
            "Your personal information",

        items: [

            {
                label: "My Name",
                value: "{{yourName}}",
                icon: <FiUser />
            },

            {
                label: "My Email",
                value: "{{yourEmail}}",
                icon: <FiMail />
            },

            {
                label: "My Phone",
                value: "{{yourPhone}}",
                icon: <FiPhone />
            },

            {
                label: "Nationality",
                value: "{{yourNationality}}",
                icon: <FiMapPin />
            },

            {
                label: "LinkedIn",
                value: "{{yourLinkedin}}",
                icon: <FiGlobe />
            },

            {
                label: "Portfolio",
                value: "{{yourPortfolio}}",
                icon: <FiGlobe />
            }

        ]

    },


    {

        title: "Date",

        description:
            "Dynamic date values",

        items: [

            {
                label: "Today",
                value: "{{today}}",
                icon: <FiCalendar />
            },

            {
                label: "Current Year",
                value: "{{year}}",
                icon: <FiCalendar />
            }

        ]

    }

];


export default function VariablePanel({
    onInsert
}) {

    return (

        <aside className="variable-panel">

            <div className="variable-header">

                <span className="variable-eyebrow">
                    DYNAMIC CONTENT
                </span>

                <h2>
                    Variables
                </h2>

                <p>
                    Click any variable to insert it
                    into your email.
                </p>

            </div>


            <div className="variable-search-hint">

                <FiCopy />

                <span>
                    Variables are automatically replaced
                    before sending.
                </span>

            </div>


            <div className="variable-list">

                {variables.map(section => (

                    <div
                        key={section.title}
                        className="variable-section"
                    >

                        <div className="variable-section-header">

                            <strong>
                                {section.title}
                            </strong>

                            <span>
                                {section.items.length}
                            </span>

                        </div>


                        <small className="variable-description">

                            {section.description}

                        </small>


                        <div className="variable-items">

                            {section.items.map(item => (

                                <button

                                    type="button"

                                    key={item.value}

                                    className="variable-item"

                                    onClick={() =>
                                        onInsert(item.value)
                                    }

                                >

                                    <span className="variable-icon">

                                        {item.icon}

                                    </span>


                                    <span className="variable-text">

                                        <strong>
                                            {item.label}
                                        </strong>

                                        <small>
                                            {item.value}
                                        </small>

                                    </span>


                                    <span className="variable-add">
                                        +
                                    </span>

                                </button>

                            ))}

                        </div>

                    </div>

                ))}

            </div>


            <style>{`

                .variable-panel {

                    background: #fff;

                    border:
                        1px solid
                        #eaecf0;

                    border-radius: 16px;

                    overflow: hidden;

                    position: sticky;

                    top: 20px;

                    max-height:
                        calc(100vh - 40px);

                    overflow-y: auto;

                    box-shadow:
                        0 3px 12px
                        rgba(16,24,40,.03);

                }


                .variable-header {

                    padding:
                        20px
                        18px
                        15px;

                    border-bottom:
                        1px solid
                        #f2f4f7;

                }


                .variable-eyebrow {

                    font-size: 9px;

                    font-weight: 800;

                    letter-spacing: 1.3px;

                    color: #98a2b3;

                }


                .variable-header h2 {

                    margin:
                        5px 0
                        4px;

                    font-size: 18px;

                }


                .variable-header p {

                    margin: 0;

                    color: #98a2b3;

                    font-size: 11px;

                    line-height: 1.5;

                }


                .variable-search-hint {

                    margin: 12px;

                    padding: 10px;

                    display: flex;

                    gap: 8px;

                    align-items: flex-start;

                    background: #f8faff;

                    border:
                        1px solid
                        #e0e7ff;

                    border-radius: 9px;

                    color: #667085;

                    font-size: 10px;

                    line-height: 1.5;

                }


                .variable-search-hint svg {

                    flex-shrink: 0;

                    color: #6366f1;

                    margin-top: 1px;

                }


                .variable-section {

                    padding:
                        7px
                        12px
                        13px;

                }


                .variable-section
                + .variable-section {

                    border-top:
                        1px solid
                        #f2f4f7;

                }


                .variable-section-header {

                    display: flex;

                    align-items: center;

                    justify-content:
                        space-between;

                    margin-bottom: 3px;

                }


                .variable-section-header strong {

                    font-size: 12px;

                    color: #344054;

                }


                .variable-section-header span {

                    min-width: 20px;

                    height: 20px;

                    padding: 0 5px;

                    border-radius: 6px;

                    display: flex;

                    align-items: center;

                    justify-content: center;

                    background: #f2f4f7;

                    color: #667085;

                    font-size: 9px;

                    font-weight: 700;

                }


                .variable-description {

                    display: block;

                    margin-bottom: 9px;

                    color: #98a2b3;

                    font-size: 9px;

                }


                .variable-item {

                    width: 100%;

                    padding: 9px;

                    margin-bottom: 5px;

                    border:
                        1px solid
                        #f2f4f7;

                    border-radius: 9px;

                    background: #fff;

                    display: flex;

                    align-items: center;

                    gap: 9px;

                    text-align: left;

                    cursor: pointer;

                    transition: .18s;

                }


                .variable-item:hover {

                    background: #f8faff;

                    border-color:
                        #c7d2fe;

                    transform:
                        translateX(2px);

                }


                .variable-icon {

                    width: 31px;

                    height: 31px;

                    flex-shrink: 0;

                    display: flex;

                    align-items: center;

                    justify-content: center;

                    border-radius: 8px;

                    background: #f5f3ff;

                    color: #6366f1;

                    font-size: 14px;

                }


                .variable-text {

                    min-width: 0;

                    flex: 1;

                }


                .variable-text strong {

                    display: block;

                    color: #344054;

                    font-size: 11px;

                    font-weight: 650;

                }


                .variable-text small {

                    display: block;

                    margin-top: 2px;

                    overflow: hidden;

                    text-overflow: ellipsis;

                    white-space: nowrap;

                    color: #98a2b3;

                    font-size: 9px;

                    font-family: monospace;

                }


                .variable-add {

                    width: 22px;

                    height: 22px;

                    display: flex;

                    align-items: center;

                    justify-content: center;

                    border-radius: 6px;

                    background: #f8fafc;

                    color: #98a2b3;

                    font-size: 16px;

                    transition: .18s;

                }


                .variable-item:hover
                .variable-add {

                    background: #4f46e5;

                    color: #fff;

                }


                .variable-panel::-webkit-scrollbar {

                    width: 5px;

                }


                .variable-panel::-webkit-scrollbar-thumb {

                    background: #d0d5dd;

                    border-radius: 20px;

                }

            `}</style>

        </aside>

    );

}
/*
import {
    FiHome,
    FiUser,
    FiMail,
    FiPhone,
    FiGlobe,
    FiMapPin,
    FiBriefcase,
    FiCalendar
} from "react-icons/fi";

const variables = [

    {
        title: "Company",
        items: [

            {
                label: "Company Name",
                value: "{{companyName}}",
                icon: <FiHome />
            },

            {
                label: "Contact Person",
                value: "{{contactPerson}}",
                icon: <FiUser />
            },

            {
                label: "Company Email",
                value: "{{email}}",
                icon: <FiMail />
            },

            {
                label: "Website",
                value: "{{website}}",
                icon: <FiGlobe />
            },

            {
                label: "Country",
                value: "{{country}}",
                icon: <FiMapPin />
            },

            {
                label: "City",
                value: "{{city}}",
                icon: <FiMapPin />
            }

        ]
    },

    {
        title: "Job",

        items: [

            {
                label: "Desired Job",
                value: "{{desiredJob}}",
                icon: <FiBriefcase />
            }

        ]
    },

    {
        title: "My Profile",

        items: [

            {
                label: "My Name",
                value: "{{yourName}}",
                icon: <FiUser />
            },

            {
                label: "My Email",
                value: "{{yourEmail}}",
                icon: <FiMail />
            },

            {
                label: "My Phone",
                value: "{{yourPhone}}",
                icon: <FiPhone />
            },

            {
                label: "Nationality",
                value: "{{yourNationality}}",
                icon: <FiMapPin />
            },

            {
                label: "LinkedIn",
                value: "{{yourLinkedin}}",
                icon: <FiGlobe />
            },

            {
                label: "Portfolio",
                value: "{{yourPortfolio}}",
                icon: <FiGlobe />
            }

        ]
    },

    {
        title: "Date",

        items: [

            {
                label: "Today",
                value: "{{today}}",
                icon: <FiCalendar />
            },

            {
                label: "Current Year",
                value: "{{year}}",
                icon: <FiCalendar />
            }

        ]
    }

];

export default function VariablePanel({ onInsert }) {

    return (

        <div className="variable-panel">

            {variables.map(section => (

                <div
                    key={section.title}
                    className="variable-section"
                >

                    <h3>

                        {section.title}

                    </h3>

                    {section.items.map(item => (

                        <button

                            key={item.value}

                            className="variable-item"

                            onClick={() =>
                                onInsert(item.value)
                            }

                        >

                            <span>

                                {item.icon}

                            </span>

                            <div>

                                <strong>

                                    {item.label}

                                </strong>

                                <small>

                                    {item.value}

                                </small>

                            </div>

                        </button>

                    ))}

                </div>

            ))}

        </div>

    );

}*/