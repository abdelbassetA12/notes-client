import { useResume } from "../context/ResumeContext";

export default function ProTemplate({ resume }) {

    const { design } = useResume();

    /* =========================================================
       SAFE HELPERS
    ========================================================= */

    const safe = (value) => value ?? "";

    const hasValue = (value) =>
        value !== undefined &&
        value !== null &&
        String(value).trim() !== "";

    const hasArray = (value) =>
        Array.isArray(value) &&
        value.length > 0;

    const personal =
        resume?.personal || {};

    /* =========================================================
       COLORS
    ========================================================= */

    const sidebarBackground =
        design?.sidebarBackground ||
        "#1f2937";

    const mainBackground =
        design?.mainBackground ||
        design?.backgroundColor ||
        "#ffffff";

    const headerBackground =
        design?.headerBackground ||
        "#ffffff";

    const primaryColor =
        design?.primaryColor ||
        "#2563eb";

    const nameColor =
        design?.nameColor ||
        "#111827";

    const headingColor =
        design?.headingColor ||
        "#111827";

    const subheadingColor =
        design?.subheadingColor ||
        "#374151";

    const textColor =
        design?.textColor ||
        "#4b5563";

    const linkColor =
        design?.linkColor ||
        primaryColor;

    const dividerColor =
        design?.dividerColor ||
        "#d1d5db";

    const sidebarText =
        design?.sidebarTextColor ||
        "#ffffff";

    /* =========================================================
       TYPOGRAPHY
    ========================================================= */

    const font =
        design?.fontFamily ||
        "Arial";

    const baseFontSize =
        Number(design?.baseFontSize) || 10;

    const nameFontSize =
        Number(design?.nameFontSize) || 32;

    const jobTitleFontSize =
        Number(design?.jobTitleFontSize) || 10;

    const sectionTitleFontSize =
        Number(design?.sectionTitleFontSize) || 12;

    const headingFontSize =
        Number(design?.headingFontSize) || 11.5;

    const subheadingFontSize =
        Number(design?.subheadingFontSize) || 9.5;

    const textFontSize =
        Number(design?.textFontSize) || 9.3;

    const dateFontSize =
        Number(design?.dateFontSize) || 8.5;

    const locationFontSize =
        Number(design?.locationFontSize) || 8.5;

    const linkFontSize =
        Number(design?.linkFontSize) || 8.5;

    const profileFontSize =
        Number(design?.profileFontSize) || 10.5;

    const contactFontSize =
        Number(design?.contactFontSize) || 10;

    const languageFontSize =
        Number(design?.languageFontSize) || 10.5;

    const interestFontSize =
        Number(design?.interestFontSize) || 10.5;

    const skillFontSize =
        Number(design?.skillFontSize) || 9.5;

    const skillPercentageFontSize =
        Number(design?.skillPercentageFontSize) || 8;


        /* =========================================================
   PHOTO SETTINGS
========================================================= */

const showPhoto =
    design?.showPhoto !== false;

const photoStyle =
    design?.photoStyle || "circle";

const photoSize =
    Number(design?.photoSize) || 145;

const photoBorderWidth =
    Number(design?.photoBorderWidth) || 0;

const photoBorderStyle =
    design?.photoBorderStyle || "solid";

const photoBorderColor =
    design?.photoBorderColor || "#ffffff";

const photoObjectFit =
    design?.photoObjectFit || "cover";
    const photoObjectPosition =
    design?.photoObjectPosition || "center center";

const photoScale =
    Number(design?.photoScale) || 100;

const photoRotation =
    Number(design?.photoRotation) || 0;

const photoOpacity =
    Number(design?.photoOpacity) || 100;

const photoShadow =
    design?.photoShadow || "none";

const photoMargin =
    Number(design?.photoMargin) || 25;

    /* =========================================================
       SECTION TITLE
    ========================================================= */
    const sectionTitle = (
    textValue,
    dark = false
) => (

    <h2
        className={`
            eu2-section-title
            ${dark ? "eu2-section-title--dark" : ""}
            ${
                design?.sectionTitleStyle === "minimal"
                    ? "eu2-section-title--minimal"
                    : ""
            }
            ${
                design?.sectionTitleStyle === "plain"
                    ? "eu2-section-title--plain"
                    : ""
            }
        `}
        style={{
            textAlign:
                design?.sectionTitleAlign || "left",

            textTransform:
                design?.uppercaseTitles
                    ? "uppercase"
                    : "none",

            fontWeight:
                design?.sectionTitleWeight ?? 700,

            letterSpacing:
                `${design?.sectionTitleLetterSpacing ?? 1.8}px`
        }}
    >
        <span>
            {textValue}
        </span>
    </h2>
);
    /*
    const sectionTitle = (
        textValue,
        dark = false
    ) => (

        <h2
            className={`eu2-section-title ${
                dark
                    ? "eu2-section-title--dark"
                    : ""
            }`}
            style={{
                textAlign:
                    design?.sectionTitleAlign ||
                    "left",

                textTransform:
                    design?.uppercaseTitles
                        ? "uppercase"
                        : "none"
            }}
        >
            <span>
                {textValue}
            </span>
        </h2>
    );*/

    /* =========================================================
       CONTACT
    ========================================================= */

    const contactItem = (
        icon,
        value
    ) => {

        if (!hasValue(value)) {
            return null;
        }

        return (

            <div className="eu2-contact-item">

                {design?.showIcons && (

                    <span className="eu2-contact-icon">
                        {icon}
                    </span>

                )}

                <span className="eu2-contact-value">
                    {value}
                </span>

            </div>
        );
    };

    /* =========================================================
       DATE
    ========================================================= */

    const renderDate = (
        start,
        end,
        present = false
    ) => {

        return (

            <div
                className={`eu2-date ${
                    !hasValue(start) &&
                    !hasValue(end)
                        ? "eu2-date--empty"
                        : ""
                }`}
            >

                {hasValue(start) && (

                    <span>
                        {start}
                    </span>

                )}

                {hasValue(start) &&
                    hasValue(end) && (

                    <span className="eu2-date-dash">
                        —
                    </span>

                )}

                {hasValue(end) ? (

                    <span>
                        {end}
                    </span>

                ) : (

                    present && (
                        <span>
                            Present
                        </span>
                    )

                )}

            </div>
        );
    };

    /* =========================================================
       SKILL LEVEL
    ========================================================= */

    const skillLevel = (level) => {

        const number =
            Number(level);

        if (Number.isNaN(number)) {
            return 0;
        }

        return Math.min(
            100,
            Math.max(0, number)
        );
    };

    /* =========================================================
       RETURN
    ========================================================= */

    return (

        <div
            className="eu2-paper"
            data-show-dividers={
        design?.showDividers ? "true" : "false"
    }
    data-show-timeline={
    design?.showTimeline ? "true" : "false"
}

data-show-timeline-dots={
    design?.showTimelineDots ? "true" : "false"
}

data-show-item-dividers={
    design?.showItemDividers ? "true" : "false"
}

            style={{

                "--eu2-sidebar-background":
                    sidebarBackground,

                "--eu2-background":
                    mainBackground,

                "--eu2-header-background":
                    headerBackground,

                "--eu2-primary":
                    primaryColor,

                "--eu2-name":
                    nameColor,

                "--eu2-heading":
                    headingColor,

                "--eu2-subheading":
                    subheadingColor,

                "--eu2-text":
                    textColor,

                "--eu2-link":
                    linkColor,

                "--eu2-divider":
                    dividerColor,

                "--eu2-font":
                    font,

                "--eu2-base-size":
                    `${baseFontSize}px`,

                "--eu2-name-size":
                    `${nameFontSize}px`,

                "--eu2-job-size":
                    `${jobTitleFontSize}px`,

                "--eu2-section-size":
                    `${sectionTitleFontSize}px`,

                "--eu2-heading-size":
                    `${headingFontSize}px`,

                "--eu2-subheading-size":
                    `${subheadingFontSize}px`,

                "--eu2-text-size":
                    `${textFontSize}px`,

                "--eu2-date-size":
                    `${dateFontSize}px`,

                "--eu2-location-size":
                    `${locationFontSize}px`,

                "--eu2-link-size":
                    `${linkFontSize}px`,

                "--eu2-profile-size":
                    `${profileFontSize}px`,

                "--eu2-contact-size":
                    `${contactFontSize}px`,

                "--eu2-language-size":
                    `${languageFontSize}px`,

                "--eu2-interest-size":
                    `${interestFontSize}px`,

                "--eu2-skill-size":
                    `${skillFontSize}px`,

                "--eu2-skill-percent-size":
                    `${skillPercentageFontSize}px`,

                "--eu2-secondary":
                    textColor,

                "--eu2-border":
                    dividerColor,

                "--eu2-surface":
                    mainBackground,

                "--eu2-sidebar-text":
                    sidebarText,

                "--eu2-section-spacing":
    `${design?.sectionSpacing ?? 29}px`,

"--eu2-section-title-spacing":
    `${design?.sectionTitleSpacing ?? 19}px`,

"--eu2-entry-spacing":
    `${design?.entrySpacing ?? 20}px`,

"--eu2-divider-width":
    `${design?.sectionDividerWidth ?? 40}px`,

"--eu2-divider-thickness":
    `${design?.sectionDividerThickness ?? 2}px`
            }}
        >

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="eu2-sidebar">

                {/* PHOTO */}
               {/*
               <div className="eu2-photo-wrap">
                     <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0kRPah-wj6NkcDY28AaLSbo9_skjIS9uOPjiqUzx9w&s=10"    
                            alt=""
                            className={`eu2-photo ${
                                design?.photoStyle ||
                                "circle"
                            }`}

                             
                        />

                   

                </div>
                */}
       

    {showPhoto && (

    <div className="eu2-photo-wrap">

        <img
            src={
                personal.photo ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0kRPah-wj6NkcDY28AaLSbo9_skjIS9uOPjiqUzx9w&s=10"
            }

            alt="Profile"

            className={`eu2-photo ${photoStyle}`}

            style={{
                width: `${photoSize}px`,
                height: `${photoSize}px`,

                objectFit: photoObjectFit,
                objectPosition: photoObjectPosition,

                borderWidth: `${photoBorderWidth}px`,
                borderStyle: photoBorderStyle,
                borderColor: photoBorderColor,

                transform: `
                    scale(${photoScale / 100})
                    rotate(${photoRotation}deg)
                `,

                opacity: photoOpacity / 100,

                boxShadow:
                    photoShadow === "none"
                        ? "none"
                        : photoShadow,

                margin: `${photoMargin}px auto`
            }}
        />

    </div>

)}

                
            

                <div className="eu2-sidebar-body">

                    {/* PROFILE */}

                    {hasValue(
                        resume?.profile
                    ) && (

                        <section
                            className="eu2-side-section"
                        >

                            {sectionTitle(
                                "Profile",
                                true
                            )}

                            <p className="eu2-profile">
                                {resume.profile}
                            </p>

                        </section>

                    )}


                    {/* CONTACT */}

                    <section
                        className="eu2-side-section"
                    >

                        {sectionTitle(
                            "Contact",
                            true
                        )}

                        <div className="eu2-contact">

                            {contactItem(
                                "✉",
                                personal.email
                            )}

                            {contactItem(
                                "☎",
                                personal.phone
                            )}

                            {contactItem(
                                "⌖",
                                personal.city
                            )}

                            {contactItem(
                                "↗",
                                personal.website
                            )}

                        </div>

                    </section>


                    {/* LANGUAGES */}

                    {hasArray(
                        resume?.languages
                    ) && (

                        <section
                            className="eu2-side-section"
                        >

                            {sectionTitle(
                                "Languages",
                                true
                            )}

                            <div className="eu2-languages">

                                {resume.languages.map(
                                    language => (

                                        <div
                                            className="eu2-language"
                                            key={
                                                language.id ||
                                                language.name
                                            }
                                        >

                                            <span>
                                                {
                                                    language.name
                                                }
                                            </span>

                                            <strong>
                                                {
                                                    language.level
                                                }
                                            </strong>

                                        </div>
                                    )
                                )}

                            </div>

                        </section>

                    )}


                    {/* INTERESTS */}

                    {hasArray(
                        resume?.interests
                    ) && (

                        <section
                            className="eu2-side-section"
                        >

                            {sectionTitle(
                                "Interests",
                                true
                            )}

                            <div className="eu2-interests">

                                {resume.interests
                                    .map(
                                        item =>
                                            item?.name
                                    )
                                    .filter(Boolean)
                                    .map(
                                        (
                                            interest,
                                            index
                                        ) => (

                                            <div
                                                className="eu2-interest"
                                                key={
                                                    `${interest}-${index}`
                                                }
                                            >

                                                <span className="eu2-interest-dot" />

                                                <span>
                                                    {interest}
                                                </span>

                                            </div>
                                        )
                                    )}

                            </div>

                        </section>
                    )}

                </div>

            </aside>


            {/* =================================================
                MAIN
            ================================================= */}

            <main className="eu2-main">

                {/* HEADER */}

                <header
                    className="eu2-header"
                    style={{
                        textAlign:
                            design?.headerAlign ||
                            "left"
                    }}
                >

                    <div className="eu2-name">

                        <h1>

                            {safe(
                                personal.firstName
                            ) || "First Name"}

                            {" "}

                            <span>

                                {safe(
                                    personal.lastName
                                ) || "Last Name"}

                            </span>

                        </h1>

                        {hasValue(
                            personal.jobTitle
                        ) && (

                            <div className="eu2-job-title">
                                {
                                    personal.jobTitle
                                }
                            </div>

                        )}

                    </div>

                </header>


                {/* =================================================
                    EDUCATION
                ================================================= */}

                {hasArray(
                    resume?.education
                ) && (

                    <section className="eu2-section">

                        {sectionTitle(
                            "Education"
                        )}

                        <div className="eu2-timeline">

                            {resume.education.map(
                                education => (

                                    <article
                                        className="eu2-entry"
                                        key={
                                            education.id
                                        }
                                    >

                                        {renderDate(
                                            education.startDate,
                                            education.endDate,
                                            false
                                        )}

                                        <div className="eu2-entry-content">

                                            {hasValue(
                                                education.degree
                                            ) && (

                                                <h3>
                                                    {
                                                        education.degree
                                                    }
                                                </h3>

                                            )}

                                            {hasValue(
                                                education.school
                                            ) && (

                                                <strong>
                                                    {
                                                        education.school
                                                    }
                                                </strong>

                                            )}

                                            {hasValue(
                                                education.city
                                            ) && (

                                                <div className="eu2-location">
                                                    {
                                                        education.city
                                                    }
                                                </div>

                                            )}

                                            {hasValue(
                                                education.description
                                            ) && (

                                                <p>
                                                    {
                                                        education.description
                                                    }
                                                </p>

                                            )}

                                        </div>

                                    </article>
                                )
                            )}

                        </div>

                    </section>
                )}


                {/* =================================================
                    EXPERIENCE
                ================================================= */}

                {hasArray(
                    resume?.experience
                ) && (

                    <section className="eu2-section">

                        {sectionTitle(
                            "Experience"
                        )}

                        <div className="eu2-timeline">

                            {resume.experience.map(
                                exp => (

                                    <article
                                        className="eu2-entry"
                                        key={exp.id}
                                    >

                                        {renderDate(
                                            exp.startDate,
                                            exp.endDate,
                                            true
                                        )}

                                        <div className="eu2-entry-content">

                                            {hasValue(
                                                exp.position
                                            ) && (

                                                <h3>
                                                    {
                                                        exp.position
                                                    }
                                                </h3>

                                            )}

                                            {hasValue(
                                                exp.company
                                            ) && (

                                                <strong>
                                                    {
                                                        exp.company
                                                    }
                                                </strong>

                                            )}

                                            {hasValue(
                                                exp.city
                                            ) && (

                                                <div className="eu2-location">
                                                    {
                                                        exp.city
                                                    }
                                                </div>

                                            )}

                                            {hasValue(
                                                exp.description
                                            ) && (

                                                <p>
                                                    {
                                                        exp.description
                                                    }
                                                </p>

                                            )}

                                        </div>

                                    </article>
                                )
                            )}

                        </div>

                    </section>
                )}


                {/* =================================================
                    SKILLS
                ================================================= */}

                {hasArray(
                    resume?.skills
                ) && (

                    <section className="eu2-section">

                        {sectionTitle(
                            "Skills"
                        )}

                        <div className="eu2-skills">

                            {resume.skills.map(
                                skill => {

                                    const level =
                                        skillLevel(
                                            skill.level
                                        );

                                    return (

                                        <div
                                            className="eu2-skill"
                                            key={
                                                skill.id ||
                                                skill.name
                                            }
                                        >

                                            <div className="eu2-skill-top">

                                                <span>
                                                    {
                                                        skill.name
                                                    }
                                                </span>

                                                {design?.skillStyle ===
                                                    "text" && (

                                                    <strong>
                                                        {level}%
                                                    </strong>

                                                )}

                                            </div>

                                            {design?.skillStyle ===
                                                "dots" ? (

                                                <div className="eu2-skill-dots">

                                                    {[
                                                        20,
                                                        40,
                                                        60,
                                                        80,
                                                        100
                                                    ].map(
                                                        value => (

                                                            <span
                                                                key={
                                                                    value
                                                                }
                                                                className={
                                                                    level >=
                                                                    value
                                                                        ? "active"
                                                                        : ""
                                                                }
                                                            />

                                                        )
                                                    )}

                                                </div>

                                            ) : (

                                                <div className="eu2-skill-bar">

                                                    <span
                                                        style={{
                                                            width:
                                                                `${level}%`
                                                        }}
                                                    />

                                                </div>

                                            )}

                                        </div>
                                    );
                                }
                            )}

                        </div>

                    </section>
                )}


                {/* =================================================
                    PROJECTS
                ================================================= */}

                {hasArray(
                    resume?.projects
                ) && (

                    <section className="eu2-section">

                        {sectionTitle(
                            "Projects"
                        )}

                        {resume.projects.map(
                            project => (

                                <article
                                    className="eu2-simple-entry"
                                    key={project.id}
                                >

                                    <div>

                                        {hasValue(
                                            project.name
                                        ) && (

                                            <h3>
                                                {
                                                    project.name
                                                }
                                            </h3>

                                        )}

                                        {hasValue(
                                            project.role
                                        ) && (

                                            <strong>
                                                {
                                                    project.role
                                                }
                                            </strong>

                                        )}

                                        {hasValue(
                                            project.description
                                        ) && (

                                            <p>
                                                {
                                                    project.description
                                                }
                                            </p>

                                        )}

                                        {hasValue(
                                            project.link
                                        ) && (

                                            <a
                                                href={
                                                    project.link
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className="eu2-link"
                                            >
                                                {
                                                    project.link
                                                }
                                            </a>

                                        )}

                                    </div>

                                    {renderDate(
                                        project.startDate,
                                        project.endDate,
                                        false
                                    )}

                                </article>
                            )
                        )}

                    </section>
                )}


                {/* =================================================
                    CERTIFICATES
                ================================================= */}

                {hasArray(
                    resume?.certificates
                ) && (

                    <section className="eu2-section">

                        {sectionTitle(
                            "Certificates"
                        )}

                        {resume.certificates.map(
                            item => (

                                <article
                                    className="eu2-simple-entry"
                                    key={item.id}
                                >

                                    <div>

                                        <h3>
                                            {
                                                item.name
                                            }
                                        </h3>

                                        {hasValue(
                                            item.issuer
                                        ) && (

                                            <strong>
                                                {
                                                    item.issuer
                                                }
                                            </strong>

                                        )}

                                        {hasValue(
                                            item.link
                                        ) && (

                                            <a
                                                href={
                                                    item.link
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className="eu2-link"
                                            >
                                                {
                                                    item.link
                                                }
                                            </a>

                                        )}

                                    </div>

                                    {hasValue(
                                        item.date
                                    ) && (

                                        <span className="eu2-simple-date">
                                            {
                                                item.date
                                            }
                                        </span>

                                    )}

                                </article>
                            )
                        )}

                    </section>
                )}


                {/* =================================================
                    COURSES
                ================================================= */}

                {hasArray(
                    resume?.courses
                ) && (

                    <section className="eu2-section">

                        {sectionTitle(
                            "Courses"
                        )}

                        {resume.courses.map(
                            item => (

                                <article
                                    className="eu2-simple-entry"
                                    key={item.id}
                                >

                                    <div>

                                        <h3>
                                            {
                                                item.name
                                            }
                                        </h3>

                                        {hasValue(
                                            item.provider
                                        ) && (

                                            <strong>
                                                {
                                                    item.provider
                                                }
                                            </strong>

                                        )}

                                        {hasValue(
                                            item.link
                                        ) && (

                                            <a
                                                href={
                                                    item.link
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className="eu2-link"
                                            >
                                                {
                                                    item.link
                                                }
                                            </a>

                                        )}

                                    </div>

                                    {hasValue(
                                        item.date
                                    ) && (

                                        <span className="eu2-simple-date">
                                            {
                                                item.date
                                            }
                                        </span>

                                    )}

                                </article>
                            )
                        )}

                    </section>
                )}


                {/* =================================================
                    VOLUNTEER
                ================================================= */}

                {hasArray(
                    resume?.volunteer
                ) && (

                    <section className="eu2-section">

                        {sectionTitle(
                            "Volunteer Experience"
                        )}

                        <div className="eu2-timeline">

                            {resume.volunteer.map(
                                item => (

                                    <article
                                        className="eu2-entry"
                                        key={item.id}
                                    >

                                        {renderDate(
                                            item.startDate,
                                            item.endDate,
                                            true
                                        )}

                                        <div className="eu2-entry-content">

                                            <h3>
                                                {
                                                    item.role
                                                }
                                            </h3>

                                            {hasValue(
                                                item.organization
                                            ) && (

                                                <strong>
                                                    {
                                                        item.organization
                                                    }
                                                </strong>

                                            )}

                                            {hasValue(
                                                item.city
                                            ) && (

                                                <div className="eu2-location">
                                                    {
                                                        item.city
                                                    }
                                                </div>

                                            )}

                                            {hasValue(
                                                item.description
                                            ) && (

                                                <p>
                                                    {
                                                        item.description
                                                    }
                                                </p>

                                            )}

                                        </div>

                                    </article>
                                )
                            )}

                        </div>

                    </section>
                )}


                {/* =================================================
                    AWARDS
                ================================================= */}

                {hasArray(
                    resume?.awards
                ) && (

                    <section className="eu2-section">

                        {sectionTitle(
                            "Awards"
                        )}

                        {resume.awards.map(
                            item => (

                                <article
                                    className="eu2-simple-entry"
                                    key={item.id}
                                >

                                    <div>

                                        <h3>
                                            {
                                                item.title
                                            }
                                        </h3>

                                        {hasValue(
                                            item.issuer
                                        ) && (

                                            <strong>
                                                {
                                                    item.issuer
                                                }
                                            </strong>

                                        )}

                                        {hasValue(
                                            item.description
                                        ) && (

                                            <p>
                                                {
                                                    item.description
                                                }
                                            </p>

                                        )}

                                    </div>

                                    {hasValue(
                                        item.date
                                    ) && (

                                        <span className="eu2-simple-date">
                                            {
                                                item.date
                                            }
                                        </span>

                                    )}

                                </article>
                            )
                        )}

                    </section>
                )}


                {/* =================================================
                    PUBLICATIONS
                ================================================= */}

                {hasArray(
                    resume?.publications
                ) && (

                    <section className="eu2-section">

                        {sectionTitle(
                            "Publications"
                        )}

                        {resume.publications.map(
                            item => (

                                <article
                                    className="eu2-simple-entry"
                                    key={item.id}
                                >

                                    <div>

                                        <h3>
                                            {
                                                item.title
                                            }
                                        </h3>

                                        {hasValue(
                                            item.publisher
                                        ) && (

                                            <strong>
                                                {
                                                    item.publisher
                                                }
                                            </strong>

                                        )}

                                        {hasValue(
                                            item.description
                                        ) && (

                                            <p>
                                                {
                                                    item.description
                                                }
                                            </p>

                                        )}

                                        {hasValue(
                                            item.link
                                        ) && (

                                            <a
                                                href={
                                                    item.link
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className="eu2-link"
                                            >
                                                {
                                                    item.link
                                                }
                                            </a>

                                        )}

                                    </div>

                                    {hasValue(
                                        item.date
                                    ) && (

                                        <span className="eu2-simple-date">
                                            {
                                                item.date
                                            }
                                        </span>

                                    )}

                                </article>
                            )
                        )}

                    </section>
                )}


                {/* =================================================
                    ORGANIZATIONS
                ================================================= */}

                {hasArray(
                    resume?.organizations
                ) && (

                    <section className="eu2-section">

                        {sectionTitle(
                            "Organizations"
                        )}

                        <div className="eu2-timeline">

                            {resume.organizations.map(
                                item => (

                                    <article
                                        className="eu2-entry"
                                        key={item.id}
                                    >

                                        {renderDate(
                                            item.startDate,
                                            item.endDate,
                                            true
                                        )}

                                        <div className="eu2-entry-content">

                                            <h3>
                                                {
                                                    item.organization
                                                }
                                            </h3>

                                            {hasValue(
                                                item.role
                                            ) && (

                                                <strong>
                                                    {
                                                        item.role
                                                    }
                                                </strong>

                                            )}

                                            {hasValue(
                                                item.description
                                            ) && (

                                                <p>
                                                    {
                                                        item.description
                                                    }
                                                </p>

                                            )}

                                        </div>

                                    </article>
                                )
                            )}

                        </div>

                    </section>
                )}


                {/* =================================================
                    REFERENCES
                ================================================= */}

                {hasArray(
                    resume?.references
                ) && (

                    <section className="eu2-section">

                        {sectionTitle(
                            "References"
                        )}

                        <div className="eu2-references">

                            {resume.references.map(
                                item => (

                                    <article
                                        className="eu2-reference"
                                        key={item.id}
                                    >

                                        <h3>
                                            {
                                                item.name
                                            }
                                        </h3>

                                        {hasValue(
                                            item.position
                                        ) && (

                                            <strong>
                                                {
                                                    item.position
                                                }
                                            </strong>

                                        )}

                                        {hasValue(
                                            item.company
                                        ) && (

                                            <p>
                                                {
                                                    item.company
                                                }
                                            </p>

                                        )}

                                        {hasValue(
                                            item.email
                                        ) && (

                                            <p>
                                                {
                                                    item.email
                                                }
                                            </p>

                                        )}

                                        {hasValue(
                                            item.phone
                                        ) && (

                                            <p>
                                                {
                                                    item.phone
                                                }
                                            </p>

                                        )}

                                    </article>
                                )
                            )}

                        </div>

                    </section>
                )}


                {/* =================================================
                    CUSTOM SECTIONS
                ================================================= */}

                {hasArray(
                    resume?.customSections
                ) &&
                    resume.customSections.map(
                        section => (

                            <section
                                className="eu2-section"
                                key={section.id}
                            >

                                {sectionTitle(
                                    section.title
                                )}

                                {hasValue(
                                    section.description
                                ) && (

                                    <p className="eu2-custom-description">
                                        {
                                            section.description
                                        }
                                    </p>

                                )}

                            </section>

                        )
                    )}

            </main>


            {/* =====================================================
                STYLES
            ===================================================== */}

            <style>{`

                /* =================================================
                   PAPER
                ================================================= */

                .eu2-paper {

                    width: 794px;
                    min-height: 1123px;

                    margin: 0 auto;

                    display: grid;

                    grid-template-columns:
                        250px minmax(0, 1fr);

                    background:
                        var(--eu2-background);

                    color:
                        var(--eu2-text);

                    font-family:
                        var(--eu2-font);

                    font-size:
                        var(--eu2-base-size);

                    line-height: 1.48;

                    box-sizing:
                        border-box;

                    overflow:
                        hidden;

                    box-shadow:
                        0 12px 38px
                        rgba(15,23,42,.14);

                    -webkit-print-color-adjust:
                        exact;

                    print-color-adjust:
                        exact;
                }


                /* =================================================
                   SIDEBAR
                ================================================= */

                .eu2-sidebar {

                    background:
                        var(--eu2-sidebar-background);

                    color:
                        var(--eu2-sidebar-text);

                    min-height:
                        1123px;
                }


                .eu2-photo-wrap {

                    width:
                        100%;

                    background:
                        var(--eu2-sidebar-background);

                    overflow:
                        hidden;
                }

           
                /* =================================================
   PHOTO
================================================= */

.eu2-photo-wrap {

    width: 100%;

    display: flex;

    justify-content: center;

    align-items: center;

    background: var(--eu2-sidebar-background);

    overflow: visible;

    box-sizing: border-box;
}


.eu2-photo {

    display: block;

    max-width: 100%;

    box-sizing: border-box;

    transition:
        transform .2s ease,
        opacity .2s ease,
        box-shadow .2s ease;
}


/* CIRCLE */

.eu2-photo.circle {

    border-radius: 50%;
}


/* ROUNDED */

.eu2-photo.rounded {

    border-radius: 18px;
}

/* SOFT */

.eu2-photo.soft {
    border-radius: 28px;
}


/* SQUARE */

.eu2-photo.square {

    border-radius: 0;
}

/* PILL */

.eu2-photo.pill {
    border-radius: 999px;
}

/* TOP ROUNDED */

.eu2-photo.top-rounded {
    border-radius: 28px 28px 0 0;
}


/* BOTTOM ROUNDED */

.eu2-photo.bottom-rounded {
    border-radius: 0 0 28px 28px;
}

 
 


   


                .eu2-sidebar-body {

                    padding:
                        28px 22px 32px;
                }


                .eu2-side-section {

                    margin:
                        0 0 28px;
                }


                .eu2-side-section:last-child {

                    margin-bottom:
                        0;
                }


                /* =================================================
                   SECTION TITLES
                ================================================= */

               


                .eu2-section-title {

    position: relative;

    margin: 0 0 var(--eu2-section-title-spacing);

    padding: 0 0 9px;

    color: var(--eu2-heading);

    font-size: var(--eu2-section-size);

    line-height: 1.2;

    font-weight: 700;

    letter-spacing: 1.8px;

    overflow-wrap: anywhere;
}

.eu2-section-title::after {

    content: "";

    position: absolute;

    left: 0;

    bottom: 0;

    width: var(--eu2-divider-width);

    height: var(--eu2-divider-thickness);

    background: var(--eu2-primary);

    transition:
        width .2s ease,
        height .2s ease;
}


.eu2-section-title--plain {
    padding-bottom: 0;
}

.eu2-section-title--plain::after {
    display: none;
}

.eu2-section-title--minimal::after {
    width: 100%;
    height: 1px;
    opacity: .45;
}

.eu2-section-title--minimal {
    padding-bottom: 7px;
}

.eu2-paper[data-show-dividers="false"]
.eu2-section-title::after {
    display: none;
}

.eu2-paper[data-show-dividers="false"]
.eu2-section-title {
    padding-bottom: 0;
}

.eu2-paper[data-show-timeline="false"]
.eu2-entry-content {
    border-left: none;
    padding-left: 0;
}

.eu2-paper[data-show-timeline="false"]
.eu2-entry-content::before {
    display: none;
}

.eu2-paper[data-show-timeline="false"]
.eu2-entry {
    grid-template-columns: 70px minmax(0, 1fr);
}

.eu2-paper[data-show-timeline="true"]
.eu2-entry-content::before {
    display: block;
}

.eu2-paper[data-show-timeline-dots="false"]
.eu2-entry-content::before {
    display: none;
}
.eu2-paper[data-show-item-dividers="false"]
.eu2-simple-entry {
    border-bottom: none;
    padding-bottom: 0;
}

                .eu2-section-title--dark {

                    color:
                        var(--eu2-sidebar-text);

                    font-size:
                        var(--eu2-section-size);

                    letter-spacing:
                        1.7px;
                }


                .eu2-section-title--dark::after {

                    background:
                        rgba(255,255,255,.9);

                    width:
                        30px;
                }


                /* =================================================
                   PROFILE
                ================================================= */

                .eu2-profile {

                    margin:
                        0;

                    color:
                        rgba(255,255,255,.84);

                    font-size:
                        var(--eu2-profile-size);

                    line-height:
                        1.6;

                    text-align:
                        left;

                    overflow-wrap:
                        anywhere;
                }


                /* =================================================
                   CONTACT
                ================================================= */

                .eu2-contact {

                    display:
                        flex;

                    flex-direction:
                        column;

                    gap:
                        12px;
                }


                .eu2-contact-item {

                    display:
                        grid;

                    grid-template-columns:
                        20px minmax(0,1fr);

                    align-items:
                        start;

                    gap:
                        7px;

                    color:
                        rgba(255,255,255,.88);

                    font-size:
                        var(--eu2-contact-size);

                    line-height:
                        1.45;
                }


                .eu2-contact-icon {

                    width:
                        18px;

                    height:
                        18px;

                    display:
                        flex;

                    align-items:
                        center;

                    justify-content:
                        center;

                    color:
                        #ffffff;

                    font-size:
                        var(--eu2-contact-size);

                    font-weight:
                        700;
                }


                .eu2-contact-value {

                    min-width:
                        0;

                    overflow-wrap:
                        anywhere;
                }


                /* =================================================
                   LANGUAGES
                ================================================= */

                .eu2-languages {

                    display:
                        flex;

                    flex-direction:
                        column;

                    gap:
                        9px;
                }


                .eu2-language {

                    display:
                        flex;

                    justify-content:
                        space-between;

                    align-items:
                        center;

                    gap:
                        10px;

                    color:
                        rgba(255,255,255,.9);

                    font-size:
                        var(--eu2-language-size);

                    border-bottom:
                        1px solid
                        rgba(255,255,255,.14);

                    padding-bottom:
                        7px;
                }


                .eu2-language:last-child {

                    border-bottom:
                        none;

                    padding-bottom:
                        0;
                }


                .eu2-language strong {

                    font-size:
                        calc(var(--eu2-language-size) - 1px);

                    font-weight:
                        600;

                    color:
                        rgba(255,255,255,.68);

                    text-transform:
                        uppercase;

                    letter-spacing:
                        .5px;
                }


                /* =================================================
                   INTERESTS
                ================================================= */

                .eu2-interests {

                    display:
                        flex;

                    flex-direction:
                        column;

                    gap:
                        9px;
                }


                .eu2-interest {

                    display:
                        flex;

                    align-items:
                        flex-start;

                    gap:
                        8px;

                    color:
                        rgba(255,255,255,.84);

                    font-size:
                        var(--eu2-interest-size);

                    line-height:
                        1.4;
                }


                .eu2-interest-dot {

                    width:
                        5px;

                    height:
                        5px;

                    margin-top:
                        6px;

                    flex:
                        0 0 5px;

                    border-radius:
                        50%;

                    background:
                        #ffffff;
                }


                /* =================================================
                   MAIN
                ================================================= */

                .eu2-main {

                    min-width:
                        0;

                    width:
                        100%;

                    padding:
                        45px 38px 50px;

                    box-sizing:
                        border-box;

                    background:
                        var(--eu2-background);
                }


                /* =================================================
                   HEADER
                ================================================= */

                .eu2-header {

                    width:
                        100%;

                    padding:
                        0 0 27px;

                    margin-bottom:
                        3px;

                    border-bottom:
                        1px solid
                        var(--eu2-divider);

                    background:
                        var(--eu2-header-background);
                }


                .eu2-name {

                    min-width:
                        0;

                    width:
                        100%;
                }


                .eu2-name h1 {

                    margin:
                        0;

                    color:
                        var(--eu2-name);

                    font-size:
                        var(--eu2-name-size);

                    line-height:
                        1.08;

                    font-weight:
                        300;

                    letter-spacing:
                        1px;

                    overflow-wrap:
                        anywhere;
                }


                .eu2-name h1 span {

                    font-weight:
                        700;
                }


                .eu2-job-title {

                    margin-top:
                        9px;

                    color:
                        var(--eu2-primary);

                    font-size:
                        var(--eu2-job-size);

                    line-height:
                        1.35;

                    font-weight:
                        600;

                    text-transform:
                        uppercase;

                    letter-spacing:
                        2px;

                    overflow-wrap:
                        anywhere;
                }


                /* =================================================
                   SECTIONS
                ================================================= */

                .eu2-section {

                    width:
                        100%;

                    min-width:
                        0;

                    
                        margin-top: var(--eu2-section-spacing);

                    page-break-inside:
                        avoid;
                }


              

                .eu2-section >
.eu2-section-title {

    margin-bottom:
        var(--eu2-section-title-spacing);
}


                /* =================================================
                   TIMELINE
                ================================================= */

               
                .eu2-timeline {

    width: 100%;

    min-width: 0;

    display: flex;

    flex-direction: column;

    gap: var(--eu2-entry-spacing);
}


                .eu2-entry {

                    display:
                        grid;

                    width:
                        100%;

                    min-width:
                        0;

                    grid-template-columns:
                        70px minmax(0,1fr);

                    gap:
                        17px;

                    page-break-inside:
                        avoid;
                }


                .eu2-date {

                    padding-top:
                        2px;

                    color:
                        var(--eu2-secondary);

                    font-size:
                        var(--eu2-date-size);

                    line-height:
                        1.35;

                    text-transform:
                        uppercase;

                    letter-spacing:
                        .3px;

                    display:
                        flex;

                    flex-direction:
                        column;

                    gap:
                        1px;

                    min-width:
                        0;

                    overflow-wrap:
                        anywhere;
                }


                .eu2-date--empty {

                    min-height:
                        1px;
                }


                .eu2-date-dash {

                    color:
                        var(--eu2-secondary);

                    opacity:
                        .7;
                }


                .eu2-entry-content {

                    width:
                        100%;

                    min-width:
                        0;

                    position:
                        relative;

                    padding-left:
                        15px;

                    border-left:
                        1px solid
                        var(--eu2-border);
                }


                .eu2-entry-content::before {

                    content:
                        "";

                    position:
                        absolute;

                    left:
                        -4px;

                    top:
                        5px;

                    width:
                        7px;

                    height:
                        7px;

                    border-radius:
                        50%;

                    background:
                        var(--eu2-primary);
                }


                .eu2-entry-content h3 {

                    margin:
                        0;

                    color:
                        var(--eu2-text);

                    font-size:
                        var(--eu2-heading-size);

                    line-height:
                        1.35;

                    font-weight:
                        700;

                    overflow-wrap:
                        anywhere;
                }


                .eu2-entry-content strong {

                    display:
                        block;

                    margin-top:
                        3px;

                    color:
                        var(--eu2-subheading);

                    font-size:
                        var(--eu2-subheading-size);

                    line-height:
                        1.35;

                    font-weight:
                        600;

                    overflow-wrap:
                        anywhere;
                }


                .eu2-location {

                    margin-top:
                        2px;

                    color:
                        var(--eu2-secondary);

                    font-size:
                        var(--eu2-location-size);

                    line-height:
                        1.35;

                    overflow-wrap:
                        anywhere;
                }


                .eu2-entry-content p,
                .eu2-simple-entry p,
                .eu2-custom-description {

                    margin:
                        6px 0 0;

                    color:
                        var(--eu2-secondary);

                    font-size:
                        var(--eu2-text-size);

                    line-height:
                        1.55;

                    overflow-wrap:
                        anywhere;
                }


                /* =================================================
                   SKILLS
                ================================================= */

                .eu2-skills {

                    display:
                        grid;

                    grid-template-columns:
                        repeat(2,minmax(0,1fr));

                    column-gap:
                        25px;

                    row-gap:
                        15px;
                }


                .eu2-skill {

                    min-width:
                        0;
                }


                .eu2-skill-top {

                    display:
                        flex;

                    justify-content:
                        space-between;

                    align-items:
                        center;

                    gap:
                        10px;

                    margin-bottom:
                        6px;

                    color:
                        var(--eu2-text);

                    font-size:
                        var(--eu2-skill-size);

                    font-weight:
                        600;
                }


                .eu2-skill-top span {

                    min-width:
                        0;

                    overflow-wrap:
                        anywhere;
                }


                .eu2-skill-top strong {

                    color:
                        var(--eu2-secondary);

                    font-size:
                        var(--eu2-skill-percent-size);

                    font-weight:
                        500;
                }


                .eu2-skill-bar {

                    width:
                        100%;

                    height:
                        5px;

                    background:
                        var(--eu2-surface);

                    overflow:
                        hidden;

                    border-radius:
                        20px;
                }


                .eu2-skill-bar span {

                    display:
                        block;

                    height:
                        100%;

                    background:
                        var(--eu2-primary);

                    border-radius:
                        inherit;

                    transition:
                        width .25s ease;
                }


                .eu2-skill-dots {

                    display:
                        flex;

                    gap:
                        5px;
                }


                .eu2-skill-dots span {

                    width:
                        7px;

                    height:
                        7px;

                    border-radius:
                        50%;

                    background:
                        var(--eu2-surface);
                }


                .eu2-skill-dots span.active {

                    background:
                        var(--eu2-primary);
                }


                /* =================================================
                   SIMPLE ENTRIES
                ================================================= */

                

                .eu2-simple-entry {

    display: grid;

    grid-template-columns:
        minmax(0,1fr) auto;

    gap: 20px;

    padding-bottom: 14px;

    margin-bottom: 14px;

    border-bottom:
        1px solid
        var(--eu2-border);

    page-break-inside: avoid;
}


                .eu2-simple-entry:last-child {

                    margin-bottom:
                        0;
                }


                .eu2-simple-entry h3 {

                    margin:
                        0;

                    color:
                        var(--eu2-text);

                    font-size:
                        var(--eu2-heading-size);

                    line-height:
                        1.35;

                    overflow-wrap:
                        anywhere;
                }


                .eu2-simple-entry strong {

                    display:
                        block;

                    margin-top:
                        3px;

                    color:
                        var(--eu2-subheading);

                    font-size:
                        var(--eu2-subheading-size);

                    line-height:
                        1.35;

                    overflow-wrap:
                        anywhere;
                }


                .eu2-simple-date {

                    color:
                        var(--eu2-secondary);

                    font-size:
                        var(--eu2-date-size);

                    white-space:
                        nowrap;
                }


                /* =================================================
                   LINKS
                ================================================= */

                .eu2-link {

                    display:
                        block;

                    margin-top:
                        5px;

                    color:
                        var(--eu2-link);

                    font-size:
                        var(--eu2-link-size);

                    line-height:
                        1.35;

                    text-decoration:
                        none;

                    overflow-wrap:
                        anywhere;
                }


                .eu2-link:hover {

                    text-decoration:
                        underline;
                }


                /* =================================================
                   REFERENCES
                ================================================= */

                .eu2-references {

                    display:
                        grid;

                    grid-template-columns:
                        repeat(2,minmax(0,1fr));

                    gap:
                        20px;
                }


                .eu2-reference {

                    padding-left:
                        12px;

                    border-left:
                        2px solid
                        var(--eu2-primary);

                    page-break-inside:
                        avoid;

                    min-width:
                        0;
                }


                .eu2-reference h3 {

                    margin:
                        0;

                    font-size:
                        var(--eu2-heading-size);

                    color:
                        var(--eu2-text);

                    overflow-wrap:
                        anywhere;
                }


                .eu2-reference strong {

                    display:
                        block;

                    margin-top:
                        3px;

                    color:
                        var(--eu2-primary);

                    font-size:
                        var(--eu2-subheading-size);
                }


                .eu2-reference p {

                    margin:
                        2px 0;

                    color:
                        var(--eu2-secondary);

                    font-size:
                        var(--eu2-text-size);

                    overflow-wrap:
                        anywhere;
                }


                /* =================================================
                   PRINT
                ================================================= */

                @page {

                    size:
                        A4;

                    margin:
                        0;
                }


                @media print {

                    .eu2-paper {

                        width:
                            794px;

                        min-height:
                            1123px;

                        margin:
                            0;

                        box-shadow:
                            none;
                    }

                    .eu2-sidebar {

                        min-height:
                            1123px;
                    }
                }


                /* =================================================
                   RESPONSIVE
                ================================================= */

                @media (max-width: 850px) {

                    .eu2-paper {

                        width:
                            100%;

                        min-height:
                            auto;
                    }
                }


                @media (max-width: 650px) {

                    .eu2-paper {

                        display:
                            block;
                    }


                    .eu2-sidebar {

                        min-height:
                            auto;
                    }


                    .eu2-main {

                        padding:
                            34px 25px;
                    }


                    .eu2-entry {

                        grid-template-columns:
                            1fr;

                        gap:
                            5px;
                    }


                    .eu2-date {

                        flex-direction:
                            row;

                        gap:
                            4px;
                    }


                    .eu2-skills,
                    .eu2-references {

                        grid-template-columns:
                            1fr;
                    }


                    .eu2-simple-entry {

                        grid-template-columns:
                            1fr;

                        gap:
                            6px;
                    }
                }

            `}</style>

        </div>
    );
}
 





