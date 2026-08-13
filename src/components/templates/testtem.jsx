import { useMemo } from "react";
import { useResume } from "../context/ResumeContext";

import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiGlobe,
    FiUser,
    FiBriefcase,
    FiBookOpen,
    FiAward,
    FiFolder,
    FiHeart,
    FiUsers,
    FiCalendar
} from "react-icons/fi";

export default function EuropeanTemplate({ resume }) {

    const { design } = useResume();

    const safe = (value) =>
        value !== undefined && value !== null ? String(value) : "";

    const hasArray = (value) =>
        Array.isArray(value) && value.length > 0;

    const personal = resume?.personal || {};

    /*
    |--------------------------------------------------------------------------
    | DESIGN
    |--------------------------------------------------------------------------
    */

    const primary =
        design?.primaryColor || "#38BDF8";

    const text =
        design?.textColor || "#111827";

    const background =
        design?.backgroundColor || "#FFFFFF";

    const sidebarColor =
        design?.sidebarColor || "#1F2937";

    const font =
        design?.fontFamily || "Poppins, Arial, sans-serif";

    const fontSize =
        Number(design?.fontSize) || 12;

    /*
    |--------------------------------------------------------------------------
    | INITIALS
    |--------------------------------------------------------------------------
    */

    const initials = useMemo(() => {

        const first =
            safe(personal.firstName).trim().charAt(0);

        const last =
            safe(personal.lastName).trim().charAt(0);

        return `${first}${last}`.toUpperCase();

    }, [
        personal.firstName,
        personal.lastName
    ]);

    /*
    |--------------------------------------------------------------------------
    | DATE
    |--------------------------------------------------------------------------
    */

    const renderDate = (
        start,
        end,
        present = true
    ) => {

        if (!start && !end) {
            return null;
        }

        return (
            <div className="eu-date">

                {start && (
                    <span>
                        {start}
                    </span>
                )}

                {(start || end) && (
                    <span className="eu-date-separator">
                        —
                    </span>
                )}

                <span>
                    {end || (present ? "Present" : "")}
                </span>

            </div>
        );
    };

    /*
    |--------------------------------------------------------------------------
    | SECTION TITLE
    |--------------------------------------------------------------------------
    */

    const SideTitle = ({ children }) => (

        <h3 className="eu-side-title">

            <span>
                {children}
            </span>

        </h3>
    );

    const MainTitle = ({ icon, children }) => (

        <div className="eu-main-title">

            {design?.showIcons !== false && (
                <span className="eu-main-title-icon">
                    {icon}
                </span>
            )}

            <h2>
                {children}
            </h2>

        </div>
    );

    /*
    |--------------------------------------------------------------------------
    | CONTACT ITEM
    |--------------------------------------------------------------------------
    */

    const ContactItem = ({
        icon,
        label,
        value
    }) => {

        if (!value) {
            return null;
        }

        return (

            <div className="eu-contact-item">

                <div className="eu-contact-icon">
                    {icon}
                </div>

                <div className="eu-contact-content">

                    <span>
                        {label}
                    </span>

                    <strong>
                        {value}
                    </strong>

                </div>

            </div>

        );
    };

    /*
    |--------------------------------------------------------------------------
    | SKILL LEVEL
    |--------------------------------------------------------------------------
    */

    const skillWidth = (level) => {

        const value =
            Number(level);

        if (Number.isNaN(value)) {
            return 0;
        }

        return Math.min(
            100,
            Math.max(0, value)
        );
    };

    /*
    |--------------------------------------------------------------------------
    | PHOTO
    |--------------------------------------------------------------------------
    */

    const photoClass = [
        "eu-photo",
        `eu-photo-${design?.photoStyle || "square"}`
    ].join(" ");

    return (

        <div
            className="eu-paper"
            style={{
                "--eu-primary": primary,
                "--eu-text": text,
                "--eu-background": background,
                "--eu-sidebar": sidebarColor,
                "--eu-font": font,
                "--eu-font-size": `${fontSize}px`
            }}
        >

            {/* =========================================================
                LEFT COLUMN
            ========================================================= */}

            <aside className="eu-left">

                {/* PHOTO */}

                {design?.showPhoto !== false && (

                    <div className="eu-photo-wrapper">

                        {personal.photo ? (

                            <img
                                src={personal.photo}
                                alt=""
                                className={photoClass}
                            />

                        ) : (

                            <div className="eu-photo-placeholder">

                                {initials || (
                                    <FiUser />
                                )}

                            </div>

                        )}

                    </div>

                )}

                <div className="eu-left-content">

                    {/* =================================================
                        CONTACT
                    ================================================= */}

                    <section className="eu-side-section">

                        <SideTitle>
                            Contact
                        </SideTitle>

                        <div className="eu-contact">

                            <ContactItem
                                icon={<FiPhone />}
                                label="Téléphone"
                                value={personal.phone}
                            />

                            <ContactItem
                                icon={<FiMail />}
                                label="Email"
                                value={personal.email}
                            />

                            <ContactItem
                                icon={<FiMapPin />}
                                label="Localisation"
                                value={[
                                    personal.city,
                                    personal.country
                                ]
                                    .filter(Boolean)
                                    .join(", ")}
                            />

                            <ContactItem
                                icon={<FiGlobe />}
                                label="Site web"
                                value={personal.website}
                            />

                        </div>

                    </section>


                    {/* =================================================
                        LANGUAGES
                    ================================================= */}

                    {hasArray(resume?.languages) && (

                        <section className="eu-side-section">

                            <SideTitle>
                                Langues
                            </SideTitle>

                            <div className="eu-languages">

                                {resume.languages.map(
                                    (language, index) => (

                                        <div
                                            className="eu-language"
                                            key={
                                                language.id ||
                                                `language-${index}`
                                            }
                                        >

                                            <div className="eu-language-name">
                                                {language.name}
                                            </div>

                                            <div className="eu-language-level">
                                                {language.level}
                                            </div>

                                        </div>

                                    )
                                )}

                            </div>

                        </section>

                    )}


                    {/* =================================================
                        SKILLS
                    ================================================= */}

                    {hasArray(resume?.skills) && (

                        <section className="eu-side-section">

                            <SideTitle>
                                Compétences
                            </SideTitle>

                            <div className="eu-skills">

                                {resume.skills.map(
                                    (skill, index) => {

                                        const width =
                                            skillWidth(
                                                skill.level
                                            );

                                        return (

                                            <div
                                                className="eu-skill"
                                                key={
                                                    skill.id ||
                                                    `skill-${index}`
                                                }
                                            >

                                                <div className="eu-skill-header">

                                                    <span>
                                                        {skill.name}
                                                    </span>

                                                    {design?.skillStyle === "text" && (
                                                        <small>
                                                            {width}%
                                                        </small>
                                                    )}

                                                </div>

                                                {design?.skillStyle !== "text" && (
                                                    <div className="eu-skill-track">

                                                        <span
                                                            style={{
                                                                width: `${width}%`
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
                        INTERESTS
                    ================================================= */}

                    {hasArray(resume?.interests) && (

                        <section className="eu-side-section">

                            <SideTitle>
                                Centres d'intérêt
                            </SideTitle>

                            <div className="eu-interests">

                                {resume.interests.map(
                                    (interest, index) => {

                                        const name =
                                            typeof interest === "string"
                                                ? interest
                                                : interest?.name;

                                        if (!name) {
                                            return null;
                                        }

                                        return (

                                            <span
                                                className="eu-interest"
                                                key={
                                                    interest.id ||
                                                    `${name}-${index}`
                                                }
                                            >

                                                {design?.showIcons !== false && (
                                                    <FiHeart />
                                                )}

                                                {name}

                                            </span>

                                        );

                                    }
                                )}

                            </div>

                        </section>

                    )}

                </div>

            </aside>


            {/* =========================================================
                RIGHT COLUMN
            ========================================================= */}

            <main className="eu-right">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <header
                    className="eu-header"
                    style={{
                        textAlign:
                            design?.headerAlign || "left"
                    }}
                >

                    <h1>

                        {safe(personal.firstName) ||
                            "First Name"}

                        {" "}

                        <span>

                            {safe(personal.lastName) ||
                                "Last Name"}

                        </span>

                    </h1>

                    <div className="eu-job">

                        {safe(personal.jobTitle) ||
                            "Professional Title"}

                    </div>

                    <div className="eu-header-line" />

                </header>


                {/* =====================================================
                    PROFILE
                ===================================================== */}

                {resume?.profile && (

                    <section className="eu-section">

                        <MainTitle icon={<FiUser />}>
                            Profil professionnel
                        </MainTitle>

                        <p className="eu-profile">
                            {resume.profile}
                        </p>

                    </section>

                )}


                {/* =====================================================
                    EXPERIENCE
                ===================================================== */}

                {hasArray(resume?.experience) && (

                    <section className="eu-section">

                        <MainTitle icon={<FiBriefcase />}>
                            Expérience professionnelle
                        </MainTitle>

                        <div className="eu-timeline">

                            {resume.experience.map(
                                (experience, index) => (

                                    <article
                                        className="eu-timeline-item"
                                        key={
                                            experience.id ||
                                            `experience-${index}`
                                        }
                                    >

                                        <div className="eu-timeline-marker" />

                                        <div className="eu-timeline-content">

                                            {renderDate(
                                                experience.startDate,
                                                experience.endDate,
                                                true
                                            )}

                                            <h3>
                                                {experience.position}
                                            </h3>

                                            {experience.company && (

                                                <div className="eu-company">

                                                    <FiBriefcase />

                                                    <span>
                                                        {experience.company}
                                                    </span>

                                                    {experience.city && (
                                                        <>
                                                            <span>
                                                                ·
                                                            </span>

                                                            <span>
                                                                {experience.city}
                                                            </span>
                                                        </>
                                                    )}

                                                </div>

                                            )}

                                            {experience.description && (

                                                <p>
                                                    {experience.description}
                                                </p>

                                            )}

                                        </div>

                                    </article>

                                )
                            )}

                        </div>

                    </section>

                )}


                {/* =====================================================
                    EDUCATION
                ===================================================== */}

                {hasArray(resume?.education) && (

                    <section className="eu-section">

                        <MainTitle icon={<FiBookOpen />}>
                            Formation
                        </MainTitle>

                        <div className="eu-timeline">

                            {resume.education.map(
                                (education, index) => (

                                    <article
                                        className="eu-timeline-item"
                                        key={
                                            education.id ||
                                            `education-${index}`
                                        }
                                    >

                                        <div className="eu-timeline-marker" />

                                        <div className="eu-timeline-content">

                                            {renderDate(
                                                education.startDate,
                                                education.endDate,
                                                false
                                            )}

                                            <h3>
                                                {education.degree}
                                            </h3>

                                            {education.school && (

                                                <div className="eu-company">

                                                    <FiBookOpen />

                                                    <span>
                                                        {education.school}
                                                    </span>

                                                    {education.city && (
                                                        <>
                                                            <span>
                                                                ·
                                                            </span>

                                                            <span>
                                                                {education.city}
                                                            </span>
                                                        </>
                                                    )}

                                                </div>

                                            )}

                                            {education.description && (

                                                <p>
                                                    {education.description}
                                                </p>

                                            )}

                                        </div>

                                    </article>

                                )
                            )}

                        </div>

                    </section>

                )}


                {/* =====================================================
                    PROJECTS
                ===================================================== */}

                {hasArray(resume?.projects) && (

                    <section className="eu-section">

                        <MainTitle icon={<FiFolder />}>
                            Projets
                        </MainTitle>

                        <div className="eu-simple-list">

                            {resume.projects.map(
                                (project, index) => (

                                    <article
                                        className="eu-simple-item"
                                        key={
                                            project.id ||
                                            `project-${index}`
                                        }
                                    >

                                        <div>

                                            <h3>
                                                {project.name}
                                            </h3>

                                            {project.role && (
                                                <strong>
                                                    {project.role}
                                                </strong>
                                            )}

                                            {project.description && (
                                                <p>
                                                    {project.description}
                                                </p>
                                            )}

                                            {project.link && (

                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {project.link}
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

                        </div>

                    </section>

                )}


                {/* =====================================================
                    CERTIFICATES
                ===================================================== */}

                {hasArray(resume?.certificates) && (

                    <section className="eu-section">

                        <MainTitle icon={<FiAward />}>
                            Certifications
                        </MainTitle>

                        <div className="eu-simple-list">

                            {resume.certificates.map(
                                (item, index) => (

                                    <article
                                        className="eu-simple-item"
                                        key={
                                            item.id ||
                                            `certificate-${index}`
                                        }
                                    >

                                        <div>

                                            <h3>
                                                {item.name}
                                            </h3>

                                            {item.issuer && (
                                                <strong>
                                                    {item.issuer}
                                                </strong>
                                            )}

                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {item.link}
                                                </a>
                                            )}

                                        </div>

                                        {item.date && (
                                            <span className="eu-simple-date">
                                                {item.date}
                                            </span>
                                        )}

                                    </article>

                                )
                            )}

                        </div>

                    </section>

                )}


                {/* =====================================================
                    COURSES
                ===================================================== */}

                {hasArray(resume?.courses) && (

                    <section className="eu-section">

                        <MainTitle icon={<FiBookOpen />}>
                            Formations complémentaires
                        </MainTitle>

                        <div className="eu-simple-list">

                            {resume.courses.map(
                                (item, index) => (

                                    <article
                                        className="eu-simple-item"
                                        key={
                                            item.id ||
                                            `course-${index}`
                                        }
                                    >

                                        <div>

                                            <h3>
                                                {item.name}
                                            </h3>

                                            {item.provider && (
                                                <strong>
                                                    {item.provider}
                                                </strong>
                                            )}

                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {item.link}
                                                </a>
                                            )}

                                        </div>

                                        {item.date && (
                                            <span className="eu-simple-date">
                                                {item.date}
                                            </span>
                                        )}

                                    </article>

                                )
                            )}

                        </div>

                    </section>

                )}


                {/* =====================================================
                    VOLUNTEER
                ===================================================== */}

                {hasArray(resume?.volunteer) && (

                    <section className="eu-section">

                        <MainTitle icon={<FiUsers />}>
                            Expérience bénévole
                        </MainTitle>

                        <div className="eu-timeline">

                            {resume.volunteer.map(
                                (item, index) => (

                                    <article
                                        className="eu-timeline-item"
                                        key={
                                            item.id ||
                                            `volunteer-${index}`
                                        }
                                    >

                                        <div className="eu-timeline-marker" />

                                        <div className="eu-timeline-content">

                                            {renderDate(
                                                item.startDate,
                                                item.endDate,
                                                true
                                            )}

                                            <h3>
                                                {item.role}
                                            </h3>

                                            {item.organization && (
                                                <div className="eu-company">
                                                    {item.organization}
                                                </div>
                                            )}

                                            {item.description && (
                                                <p>
                                                    {item.description}
                                                </p>
                                            )}

                                        </div>

                                    </article>

                                )
                            )}

                        </div>

                    </section>

                )}


                {/* =====================================================
                    AWARDS
                ===================================================== */}

                {hasArray(resume?.awards) && (

                    <section className="eu-section">

                        <MainTitle icon={<FiAward />}>
                            Distinctions
                        </MainTitle>

                        <div className="eu-simple-list">

                            {resume.awards.map(
                                (item, index) => (

                                    <article
                                        className="eu-simple-item"
                                        key={
                                            item.id ||
                                            `award-${index}`
                                        }
                                    >

                                        <div>

                                            <h3>
                                                {item.title}
                                            </h3>

                                            {item.issuer && (
                                                <strong>
                                                    {item.issuer}
                                                </strong>
                                            )}

                                            {item.description && (
                                                <p>
                                                    {item.description}
                                                </p>
                                            )}

                                        </div>

                                        {item.date && (
                                            <span className="eu-simple-date">
                                                {item.date}
                                            </span>
                                        )}

                                    </article>

                                )
                            )}

                        </div>

                    </section>

                )}


                {/* =====================================================
                    PUBLICATIONS
                ===================================================== */}

                {hasArray(resume?.publications) && (

                    <section className="eu-section">

                        <MainTitle icon={<FiBookOpen />}>
                            Publications
                        </MainTitle>

                        <div className="eu-simple-list">

                            {resume.publications.map(
                                (item, index) => (

                                    <article
                                        className="eu-simple-item"
                                        key={
                                            item.id ||
                                            `publication-${index}`
                                        }
                                    >

                                        <div>

                                            <h3>
                                                {item.title}
                                            </h3>

                                            {item.publisher && (
                                                <strong>
                                                    {item.publisher}
                                                </strong>
                                            )}

                                            {item.description && (
                                                <p>
                                                    {item.description}
                                                </p>
                                            )}

                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {item.link}
                                                </a>
                                            )}

                                        </div>

                                        {item.date && (
                                            <span className="eu-simple-date">
                                                {item.date}
                                            </span>
                                        )}

                                    </article>

                                )
                            )}

                        </div>

                    </section>

                )}


                {/* =====================================================
                    ORGANIZATIONS
                ===================================================== */}

                {hasArray(resume?.organizations) && (

                    <section className="eu-section">

                        <MainTitle icon={<FiUsers />}>
                            Organisations
                        </MainTitle>

                        <div className="eu-timeline">

                            {resume.organizations.map(
                                (item, index) => (

                                    <article
                                        className="eu-timeline-item"
                                        key={
                                            item.id ||
                                            `organization-${index}`
                                        }
                                    >

                                        <div className="eu-timeline-marker" />

                                        <div className="eu-timeline-content">

                                            {renderDate(
                                                item.startDate,
                                                item.endDate,
                                                true
                                            )}

                                            <h3>
                                                {item.organization}
                                            </h3>

                                            {item.role && (
                                                <strong>
                                                    {item.role}
                                                </strong>
                                            )}

                                            {item.description && (
                                                <p>
                                                    {item.description}
                                                </p>
                                            )}

                                        </div>

                                    </article>

                                )
                            )}

                        </div>

                    </section>

                )}


                {/* =====================================================
                    REFERENCES
                ===================================================== */}

                {hasArray(resume?.references) && (

                    <section className="eu-section">

                        <MainTitle icon={<FiUsers />}>
                            Références
                        </MainTitle>

                        <div className="eu-references">

                            {resume.references.map(
                                (item, index) => (

                                    <article
                                        className="eu-reference"
                                        key={
                                            item.id ||
                                            `reference-${index}`
                                        }
                                    >

                                        <h3>
                                            {item.name}
                                        </h3>

                                        {item.position && (
                                            <strong>
                                                {item.position}
                                            </strong>
                                        )}

                                        {item.company && (
                                            <span>
                                                {item.company}
                                            </span>
                                        )}

                                        {item.email && (
                                            <span>
                                                {item.email}
                                            </span>
                                        )}

                                        {item.phone && (
                                            <span>
                                                {item.phone}
                                            </span>
                                        )}

                                    </article>

                                )
                            )}

                        </div>

                    </section>

                )}


                {/* =====================================================
                    CUSTOM SECTIONS
                ===================================================== */}

                {hasArray(resume?.customSections) &&

                    resume.customSections.map(
                        (section, index) => (

                            <section
                                className="eu-section"
                                key={
                                    section.id ||
                                    `custom-${index}`
                                }
                            >

                                <MainTitle icon={<FiFolder />}>
                                    {section.title}
                                </MainTitle>

                                {section.description && (
                                    <p className="eu-profile">
                                        {section.description}
                                    </p>
                                )}

                            </section>

                        )
                    )
                }

            </main>


            {/* =========================================================
                STYLES
            ========================================================= */}

            <style>{`

                * {
                    box-sizing: border-box;
                }

                .eu-paper {

                    width: 794px;
                    min-height: 1123px;

                    margin: 0 auto;

                    display: grid;

                    grid-template-columns:
                        250px minmax(0, 1fr);

                    background:
                        var(--eu-background);

                    color:
                        var(--eu-text);

                    font-family:
                        var(--eu-font);

                    font-size:
                        var(--eu-font-size);

                    line-height: 1.5;

                    overflow: hidden;

                    box-shadow:
                        0 12px 35px
                        rgba(15,23,42,.10);

                }


                /* =====================================================
                   LEFT
                ===================================================== */

                .eu-left {

                    background:
                        var(--eu-sidebar);

                    color: white;

                    min-height: 1123px;

                }


                .eu-photo-wrapper {

                    width: 100%;

                    padding:
                        28px 0 24px;

                    display:
                        flex;

                    justify-content:
                        center;

                }


                .eu-photo {

                    width: 132px;

                    height: 132px;

                    object-fit: cover;

                    border:
                        4px solid
                        rgba(255,255,255,.12);

                    box-shadow:
                        0 8px 25px
                        rgba(0,0,0,.18);

                }


                .eu-photo-square {
                    border-radius: 10px;
                }


                .eu-photo-circle {
                    border-radius: 50%;
                }


                .eu-photo-rounded {
                    border-radius: 20px;
                }


                .eu-photo-placeholder {

                    width: 132px;

                    height: 132px;

                    display:
                        flex;

                    align-items:
                        center;

                    justify-content:
                        center;

                    border-radius:
                        10px;

                    background:
                        rgba(255,255,255,.08);

                    border:
                        4px solid
                        rgba(255,255,255,.12);

                    color:
                        rgba(255,255,255,.9);

                    font-size:
                        38px;

                    font-weight:
                        700;

                    letter-spacing:
                        2px;

                }


                .eu-left-content {

                    padding:
                        4px 24px 35px;

                }


                .eu-side-section {

                    margin-bottom:
                        27px;

                }


                .eu-side-section:last-child {
                    margin-bottom: 0;
                }


                .eu-side-title {

                    margin:
                        0 0 16px;

                    padding-bottom:
                        9px;

                    position:
                        relative;

                    color:
                        #FFFFFF;

                    font-size:
                        12px;

                    font-weight:
                        700;

                    letter-spacing:
                        1.7px;

                    text-transform:
                        uppercase;

                }


                .eu-side-title::after {

                    content: "";

                    position:
                        absolute;

                    left: 0;

                    bottom: 0;

                    width: 34px;

                    height: 2px;

                    background:
                        var(--eu-primary);

                }


                /* =====================================================
                   CONTACT
                ===================================================== */

                .eu-contact {

                    display:
                        flex;

                    flex-direction:
                        column;

                    gap:
                        14px;

                }


                .eu-contact-item {

                    display:
                        grid;

                    grid-template-columns:
                        26px minmax(0,1fr);

                    gap:
                        8px;

                }


                .eu-contact-icon {

                    width: 25px;

                    height: 25px;

                    display:
                        flex;

                    align-items:
                        center;

                    justify-content:
                        center;

                    border-radius:
                        7px;

                    background:
                        rgba(255,255,255,.08);

                    color:
                        var(--eu-primary);

                    font-size:
                        12px;

                }


                .eu-contact-content {

                    min-width: 0;

                    display:
                        flex;

                    flex-direction:
                        column;

                    gap:
                        1px;

                }


                .eu-contact-content span {

                    color:
                        rgba(255,255,255,.50);

                    font-size:
                        8px;

                    text-transform:
                        uppercase;

                    letter-spacing:
                        .7px;

                }


                .eu-contact-content strong {

                    color:
                        rgba(255,255,255,.90);

                    font-size:
                        9.5px;

                    font-weight:
                        500;

                    line-height:
                        1.4;

                    overflow-wrap:
                        anywhere;

                }


                /* =====================================================
                   LANGUAGES
                ===================================================== */

                .eu-languages {

                    display:
                        flex;

                    flex-direction:
                        column;

                    gap:
                        11px;

                }


                .eu-language {

                    padding-bottom:
                        9px;

                    border-bottom:
                        1px solid
                        rgba(255,255,255,.10);

                }


                .eu-language:last-child {

                    border-bottom:
                        none;

                    padding-bottom:
                        0;

                }


                .eu-language-name {

                    color:
                        #FFFFFF;

                    font-size:
                        10px;

                    font-weight:
                        600;

                }


                .eu-language-level {

                    margin-top:
                        2px;

                    color:
                        rgba(255,255,255,.55);

                    font-size:
                        8.5px;

                }


                /* =====================================================
                   SKILLS
                ===================================================== */

                .eu-skills {

                    display:
                        flex;

                    flex-direction:
                        column;

                    gap:
                        13px;

                }


                .eu-skill-header {

                    display:
                        flex;

                    justify-content:
                        space-between;

                    gap:
                        10px;

                    margin-bottom:
                        6px;

                }


                .eu-skill-header span {

                    color:
                        rgba(255,255,255,.90);

                    font-size:
                        9.5px;

                    line-height:
                        1.3;

                }


                .eu-skill-header small {

                    color:
                        rgba(255,255,255,.45);

                    font-size:
                        8px;

                }


                .eu-skill-track {

                    width: 100%;

                    height: 5px;

                    border-radius:
                        99px;

                    overflow:
                        hidden;

                    background:
                        rgba(255,255,255,.10);

                }


                .eu-skill-track span {

                    display:
                        block;

                    height:
                        100%;

                    border-radius:
                        inherit;

                    background:
                        var(--eu-primary);

                }


                /* =====================================================
                   INTERESTS
                ===================================================== */

                .eu-interests {

                    display:
                        flex;

                    flex-wrap:
                        wrap;

                    gap:
                        7px;

                }


                .eu-interest {

                    display:
                        inline-flex;

                    align-items:
                        center;

                    gap:
                        5px;

                    padding:
                        5px 8px;

                    border:
                        1px solid
                        rgba(255,255,255,.10);

                    border-radius:
                        6px;

                    color:
                        rgba(255,255,255,.78);

                    font-size:
                        8.5px;

                }


                .eu-interest svg {

                    width:
                        10px;

                    height:
                        10px;

                    color:
                        var(--eu-primary);

                }


                /* =====================================================
                   RIGHT
                ===================================================== */

                .eu-right {

                    min-width:
                        0;

                    padding:
                        38px 36px 45px;

                    background:
                        #FFFFFF;

                }


                /* =====================================================
                   HEADER
                ===================================================== */

                .eu-header {

                    padding-bottom:
                        22px;

                    border-bottom:
                        1px solid
                        #E5E7EB;

                }


                .eu-header h1 {

                    margin:
                        0;

                    color:
                        #111827;

                    font-size:
                        31px;

                    line-height:
                        1.1;

                    font-weight:
                        300;

                    letter-spacing:
                        -.5px;

                }


                .eu-header h1 span {

                    font-weight:
                        700;

                }


                .eu-job {

                    margin-top:
                        9px;

                    color:
                        var(--eu-primary);

                    font-size:
                        10.5px;

                    font-weight:
                        600;

                    letter-spacing:
                        1.5px;

                    text-transform:
                        uppercase;

                }


                .eu-header-line {

                    width:
                        42px;

                    height:
                        3px;

                    margin-top:
                        15px;

                    background:
                        var(--eu-primary);

                    border-radius:
                        99px;

                }


                /* =====================================================
                   SECTION
                ===================================================== */

                .eu-section {

                    margin-top:
                        26px;

                    page-break-inside:
                        avoid;

                }


                .eu-main-title {

                    display:
                        flex;

                    align-items:
                        center;

                    gap:
                        9px;

                    margin-bottom:
                        14px;

                }


                .eu-main-title-icon {

                    width:
                        25px;

                    height:
                        25px;

                    display:
                        flex;

                    align-items:
                        center;

                    justify-content:
                        center;

                    flex:
                        0 0 25px;

                    border-radius:
                        7px;

                    background:
                        color-mix(
                            in srgb,
                            var(--eu-primary) 10%,
                            white
                        );

                    color:
                        var(--eu-primary);

                }


                .eu-main-title h2 {

                    margin:
                        0;

                    color:
                        #111827;

                    font-size:
                        13px;

                    line-height:
                        1.2;

                    font-weight:
                        700;

                    letter-spacing:
                        1.2px;

                    text-transform:
                        uppercase;

                }


                .eu-profile {

                    margin:
                        0;

                    color:
                        #4B5563;

                    font-size:
                        10px;

                    line-height:
                        1.7;

                    text-align:
                        justify;

                }


                /* =====================================================
                   TIMELINE
                ===================================================== */

                .eu-timeline {

                    position:
                        relative;

                    margin-left:
                        5px;

                    padding-left:
                        22px;

                    border-left:
                        2px solid
                        #E5E7EB;

                }


                .eu-timeline-item {

                    position:
                        relative;

                    margin-bottom:
                        21px;

                    page-break-inside:
                        avoid;

                }


                .eu-timeline-item:last-child {

                    margin-bottom:
                        0;

                }


                .eu-timeline-marker {

                    position:
                        absolute;

                    left:
                        -29px;

                    top:
                        4px;

                    width:
                        12px;

                    height:
                        12px;

                    border:
                        3px solid
                        #FFFFFF;

                    border-radius:
                        50%;

                    background:
                        var(--eu-primary);

                    box-shadow:
                        0 0 0 2px
                        var(--eu-primary);

                }


                .eu-date {

                    display:
                        flex;

                    gap:
                        5px;

                    align-items:
                        center;

                    margin-bottom:
                        4px;

                    color:
                        #6B7280;

                    font-size:
                        8.5px;

                    font-weight:
                        500;

                    text-transform:
                        uppercase;

                    letter-spacing:
                        .4px;

                }


                .eu-date-separator {
                    color:
                        #9CA3AF;
                }


                .eu-timeline-content h3 {

                    margin:
                        0;

                    color:
                        #111827;

                    font-size:
                        11.5px;

                    line-height:
                        1.35;

                    font-weight:
                        700;

                }


                .eu-company {

                    display:
                        flex;

                    align-items:
                        center;

                    flex-wrap:
                        wrap;

                    gap:
                        5px;

                    margin-top:
                        4px;

                    color:
                        var(--eu-primary);

                    font-size:
                        9px;

                    font-weight:
                        600;

                }


                .eu-company svg {

                    width:
                        11px;

                    height:
                        11px;

                }


                .eu-timeline-content p {

                    margin:
                        7px 0 0;

                    color:
                        #4B5563;

                    font-size:
                        9px;

                    line-height:
                        1.6;

                }


                /* =====================================================
                   SIMPLE ITEMS
                ===================================================== */

                .eu-simple-list {

                    display:
                        flex;

                    flex-direction:
                        column;

                }


                .eu-simple-item {

                    display:
                        grid;

                    grid-template-columns:
                        minmax(0,1fr) auto;

                    gap:
                        15px;

                    padding:
                        0 0 13px;

                    margin-bottom:
                        13px;

                    border-bottom:
                        1px solid
                        #EEF0F2;

                    page-break-inside:
                        avoid;

                }


                .eu-simple-item:last-child {

                    border-bottom:
                        none;

                    margin-bottom:
                        0;

                    padding-bottom:
                        0;

                }


                .eu-simple-item h3 {

                    margin:
                        0;

                    color:
                        #111827;

                    font-size:
                        10.5px;

                    font-weight:
                        700;

                }


                .eu-simple-item strong {

                    display:
                        block;

                    margin-top:
                        2px;

                    color:
                        #6B7280;

                    font-size:
                        8.8px;

                    font-weight:
                        500;

                }


                .eu-simple-item p {

                    margin:
                        5px 0 0;

                    color:
                        #4B5563;

                    font-size:
                        9px;

                    line-height:
                        1.5;

                }


                .eu-simple-item a {

                    display:
                        block;

                    margin-top:
                        4px;

                    color:
                        var(--eu-primary);

                    font-size:
                        8px;

                    overflow-wrap:
                        anywhere;

                    text-decoration:
                        none;

                }


                .eu-simple-date {

                    color:
                        #6B7280;

                    font-size:
                        8.5px;

                    white-space:
                        nowrap;

                }


                /* =====================================================
                   REFERENCES
                ===================================================== */

                .eu-references {

                    display:
                        grid;

                    grid-template-columns:
                        repeat(2, minmax(0,1fr));

                    gap:
                        12px;

                }


                .eu-reference {

                    padding:
                        11px 12px;

                    border:
                        1px solid
                        #E5E7EB;

                    border-left:
                        3px solid
                        var(--eu-primary);

                    border-radius:
                        6px;

                }


                .eu-reference h3 {

                    margin:
                        0;

                    color:
                        #111827;

                    font-size:
                        10px;

                }


                .eu-reference strong,
                .eu-reference span {

                    display:
                        block;

                    margin-top:
                        3px;

                    color:
                        #6B7280;

                    font-size:
                        8px;

                    line-height:
                        1.4;

                    overflow-wrap:
                        anywhere;

                }


                /* =====================================================
                   PRINT
                ===================================================== */

                @page {

                    size:
                        A4;

                    margin:
                        0;

                }


                @media print {

                    .eu-paper {

                        width:
                            794px;

                        min-height:
                            1123px;

                        margin:
                            0;

                        box-shadow:
                            none;

                        -webkit-print-color-adjust:
                            exact;

                        print-color-adjust:
                            exact;

                    }

                    .eu-left {

                        min-height:
                            1123px;

                    }

                }


                /* =====================================================
                   RESPONSIVE
                ===================================================== */

                @media (max-width: 850px) {

                    .eu-paper {

                        width:
                            100%;

                        min-height:
                            auto;

                        box-shadow:
                            none;

                    }

                }


                @media (max-width: 680px) {

                    .eu-paper {

                        display:
                            block;

                    }


                    .eu-left {

                        min-height:
                            auto;

                    }


                    .eu-photo-wrapper {

                        padding:
                            24px 0 18px;

                    }


                    .eu-left-content {

                        padding:
                            4px 22px 25px;

                    }


                    .eu-right {

                        padding:
                            30px 22px 40px;

                    }


                    .eu-header h1 {

                        font-size:
                            27px;

                    }


                    .eu-timeline {

                        padding-left:
                            18px;

                    }


                    .eu-references {

                        grid-template-columns:
                            1fr;

                    }

                }


                @media (max-width: 420px) {

                    .eu-photo {

                        width:
                            110px;

                        height:
                            110px;

                    }


                    .eu-photo-placeholder {

                        width:
                            110px;

                        height:
                            110px;

                    }


                    .eu-header h1 {

                        font-size:
                            24px;

                    }


                    .eu-job {

                        font-size:
                            9px;

                        letter-spacing:
                            1px;

                    }


                    .eu-simple-item {

                        grid-template-columns:
                            1fr;

                        gap:
                            5px;

                    }


                    .eu-simple-date {

                        white-space:
                            normal;

                    }

                }

            `}</style>

        </div>
    );
}

