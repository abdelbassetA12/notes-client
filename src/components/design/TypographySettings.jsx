import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

const fonts = [
  // Classic
  "Arial",
  "Georgia",
  "Times New Roman",
  "Calibri",
  "Verdana",

  // Sans Serif
  "Inter",
  "Roboto",
  "Poppins",
  "Montserrat",
  "Lato",
  "Open Sans",
  "Manrope",
  "Nunito",

  // Serif
  "Playfair Display",
  "Merriweather",
  "Lora",
  "Cormorant Garamond",
  "Libre Baskerville",

  // Slab Serif
  "Roboto Slab",
  "Bitter",

  // Monospace
  "JetBrains Mono",
  "Fira Code",

  // Display / Condensed
  "Bebas Neue",
  "Oswald",
  "Abril Fatface",

  // Handwriting / Script
  "Dancing Script",
  "Caveat"
];

 

const typographyGroups = [
    {
        title: "Header",
        items: [
            {
                key: "nameFontSize",
                label: "Name",
                description: "Main name",
                min: 20,
                max: 48
            },
            {
                key: "jobTitleFontSize",
                label: "Job title",
                description: "Professional title",
                min: 7,
                max: 16
            }
        ]
    },

    {
        title: "Sections",
        items: [
            {
                key: "sectionTitleFontSize",
                label: "Section titles",
                description: "Experience, Education, Skills...",
                min: 8,
                max: 18
            },
            {
                key: "headingFontSize",
                label: "Headings",
                description: "Job, degree, project names",
                min: 8,
                max: 18
            },
            {
                key: "subheadingFontSize",
                label: "Subheadings",
                description: "Company, school, organization...",
                min: 7,
                max: 15
            }
        ]
    },

    {
        title: "Content",
        items: [
            {
                key: "textFontSize",
                label: "Body text",
                description: "Descriptions and paragraphs",
                min: 7,
                max: 15
            },
            {
                key: "dateFontSize",
                label: "Dates",
                description: "Experience and education dates",
                min: 6,
                max: 13
            },
            {
                key: "locationFontSize",
                label: "Locations",
                description: "Cities and locations",
                min: 6,
                max: 13
            },
            {
                key: "linkFontSize",
                label: "Links",
                description: "Website and project links",
                min: 6,
                max: 13
            }
        ]
    },

    {
        title: "Sidebar",
        items: [
            {
                key: "profileFontSize",
                label: "Profile",
                description: "Sidebar profile text",
                min: 7,
                max: 14
            },
            {
                key: "contactFontSize",
                label: "Contact",
                description: "Email, phone, location...",
                min: 7,
                max: 14
            },
            {
                key: "languageFontSize",
                label: "Languages",
                description: "Language names and levels",
                min: 7,
                max: 14
            },
            {
                key: "interestFontSize",
                label: "Interests",
                description: "Interests list",
                min: 7,
                max: 14
            }
        ]
    },

    {
        title: "Skills",
        items: [
            {
                key: "skillFontSize",
                label: "Skill names",
                description: "Names of skills",
                min: 7,
                max: 14
            }
        ]
    }
];

export default function TypographySettings() {

    const {
        design,
        updateDesign
    } = useResume();

    return (

        <Section>

            <SectionHeader
                title="Typography"
                subtitle="Control every text element independently"
            />

            {/* =====================================================
                FONT FAMILY
            ===================================================== */}

            <div className="typography-block">

                <div className="typography-label">

                    <div>
                        <strong>Font family</strong>

                        <small>
                            Choose the main font for your resume
                        </small>
                    </div>

                    <span
                        className="current-font"
                        style={{
                            fontFamily:
                                design.fontFamily
                        }}
                    >
                        {design.fontFamily}
                    </span>

                </div>

                <div className="font-list">

                    {fonts.map(font => (

                        <button
                            key={font}
                            type="button"
                            className={
                                design.fontFamily === font
                                    ? "font-card active"
                                    : "font-card"
                            }
                            style={{
                                fontFamily: font
                            }}
                            onClick={() =>
                                updateDesign(
                                    "fontFamily",
                                    font
                                )
                            }
                        >

                            <strong>
                                {font}
                            </strong>

                            <small>
                                The quick brown fox
                            </small>

                        </button>

                    ))}

                </div>

            </div>

            {/* =====================================================
                FONT SIZE GROUPS
            ===================================================== */}

            <div className="font-size-groups">

                {typographyGroups.map(group => (

                    <div
                        className="font-group"
                        key={group.title}
                    >

                        <div className="font-group-header">

                            <strong>
                                {group.title}
                            </strong>

                        </div>

                        {group.items.map(item => {

                            const value =
                                Number(
                                    design[item.key]
                                ) ||
                                item.min;

                            return (

                                <div
                                    className="font-control"
                                    key={item.key}
                                >

                                    <div className="font-control-top">

                                        <div>

                                            <strong>
                                                {item.label}
                                            </strong>

                                            <small>
                                                {item.description}
                                            </small>

                                        </div>

                                        <span>
                                            {value}px
                                        </span>

                                    </div>

                                    <input
                                        type="range"
                                        min={item.min}
                                        max={item.max}
                                        step="0.5"
                                        value={value}
                                        onChange={(e) =>
                                            updateDesign(
                                                item.key,
                                                Number(
                                                    e.target.value
                                                )
                                            )
                                        }
                                    />

                                    <div className="range-labels">

                                        <span>
                                            {item.min}px
                                        </span>

                                        <span>
                                            {item.max}px
                                        </span>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                ))}

            </div>

            <style>{`

                .typography-block {
                    margin-top: 20px;
                }

                .typography-label {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    margin-bottom: 14px;
                }

                .typography-label > div {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .typography-label strong {
                    font-size: 14px;
                    color: #111827;
                }

                .typography-label small {
                    color: #6b7280;
                    font-size: 12px;
                }

                .current-font {
                    padding: 6px 10px;
                    border-radius: 8px;
                    background: #f3f4f6;
                    color: #374151;
                    font-size: 12px;
                    font-weight: 600;
                }

                .font-list {
                    display: grid;
                    gap: 10px;
                }

                .font-card {
                    width: 100%;
                    text-align: left;
                    border: 1px solid #e5e7eb;
                    background: #ffffff;
                    border-radius: 12px;
                    padding: 13px 14px;
                    cursor: pointer;
                    transition:
                        border-color .2s ease,
                        background .2s ease,
                        box-shadow .2s ease,
                        transform .2s ease;
                }

                .font-card:hover {
                    border-color: #93c5fd;
                    box-shadow:
                        0 5px 18px
                        rgba(37, 99, 235, .08);
                }

                .font-card:active {
                    transform: scale(.99);
                }

                .font-card.active {
                    border: 2px solid #2563eb;
                    background: #eff6ff;
                    padding: 12px 13px;
                }

                .font-card strong {
                    display: block;
                    color: #111827;
                    font-size: 17px;
                    margin-bottom: 5px;
                }

                .font-card small {
                    display: block;
                    color: #6b7280;
                    font-size: 12px;
                }

                .font-size-groups {
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                    margin-top: 28px;
                }

                .font-group {
                    border: 1px solid #e5e7eb;
                    border-radius: 14px;
                    background: #ffffff;
                    overflow: hidden;
                }

                .font-group-header {
                    padding: 13px 15px;
                    background: #f8fafc;
                    border-bottom: 1px solid #e5e7eb;
                    color: #111827;
                    font-size: 13px;
                }

                .font-control {
                    padding: 15px;
                    border-bottom: 1px solid #f1f5f9;
                }

                .font-control:last-child {
                    border-bottom: none;
                }

                .font-control-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    margin-bottom: 12px;
                }

                .font-control-top > div {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .font-control-top strong {
                    color: #1f2937;
                    font-size: 13px;
                }

                .font-control-top small {
                    color: #94a3b8;
                    font-size: 11px;
                }

                .font-control-top > span {
                    min-width: 42px;
                    text-align: center;
                    padding: 5px 7px;
                    border-radius: 7px;
                    background: #eff6ff;
                    color: #2563eb;
                    font-size: 11px;
                    font-weight: 700;
                }

                .font-control input[type="range"] {
                    width: 100%;
                    margin: 0;
                    cursor: pointer;
                    accent-color: #2563eb;
                }

                .range-labels {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 5px;
                    color: #94a3b8;
                    font-size: 10px;
                }

            `}</style>

        </Section>
    );
}

 