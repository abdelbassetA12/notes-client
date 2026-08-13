import { useResume } from "../context/ResumeContext";

export default function ModernGreenTemplate({ resume }) {
    const { design } = useResume();

    const personal = resume?.personal || {};

    const safe = (value, fallback = "") => value || fallback;

    const hasArray = (value) =>
        Array.isArray(value) && value.length > 0;

    const primary = design?.primaryColor || "#6B9F4A";
    const text = design?.textColor || "#263238";
    const background = design?.backgroundColor || "#FFFFFF";
    const font = design?.fontFamily || "Arial, sans-serif";
    const fontSize = design?.fontSize || 11;

    const dark = "#293241";
    const muted = "#66717A";
    const lightBorder = "#E4E8E5";

    const title = (textValue) => (
        <h2
            className="mg-section-title"
            style={{
                textAlign: design?.sectionTitleAlign || "left",
                textTransform: design?.uppercaseTitles
                    ? "uppercase"
                    : "none",
            }}
        >
            {textValue}
        </h2>
    );

    const dateRange = (start, end) => {
        if (!start && !end) return null;

        if (start && end) {
            return `${start} — ${end}`;
        }

        return start || end;
    };

    const getSkillLevel = (skill) => {
        const value = Number(skill?.level);

        if (Number.isNaN(value)) return 0;

        return Math.min(100, Math.max(0, value));
    };

    const renderSkill = (skill) => {
        const level = getSkillLevel(skill);

        return (
            <div className="mg-skill" key={skill.id}>
                <div className="mg-skill-name">
                    {skill.name}
                </div>

                {design?.skillStyle === "text" && (
                    <span className="mg-skill-level">
                        {level}%
                    </span>
                )}

                {design?.skillStyle === "dots" ? (
                    <div className="mg-skill-dots">
                        {[20, 40, 60, 80, 100].map((value) => (
                            <span
                                key={value}
                                className={
                                    level >= value
                                        ? "active"
                                        : ""
                                }
                            />
                        ))}
                    </div>
                ) : design?.skillStyle === "text" ? null : (
                    <div className="mg-skill-bar">
                        <span
                            style={{
                                width: `${level}%`,
                                background: primary,
                            }}
                        />
                    </div>
                )}
            </div>
        );
    };

    return (
        <div
            className="mg-paper"
            style={{
                "--mg-primary": primary,
                "--mg-text": text,
                "--mg-background": background,
                "--mg-font": font,
                "--mg-font-size": `${fontSize}px`,
            }}
        >
            {/* =====================================================
                HEADER
            ===================================================== */}

            <header className="mg-header">
                <div className="mg-header-main">

                    <div className="mg-photo-wrap">
                        {design?.showPhoto && personal.photo ? (
                            <img
                                src={personal.photo}
                                alt=""
                                className={`mg-photo ${
                                    design?.photoStyle || "circle"
                                }`}
                            />
                        ) : (
                            <div className="mg-photo-placeholder">
                                {safe(personal.firstName)
                                    ?.charAt(0)}
                                {safe(personal.lastName)
                                    ?.charAt(0)}
                            </div>
                        )}
                    </div>

                    <div className="mg-header-content">

                        <h1>
                            {safe(
                                personal.firstName,
                                "First Name"
                            )}{" "}
                            {safe(
                                personal.lastName,
                                "Last Name"
                            )}
                        </h1>

                        <h3>
                            {safe(
                                personal.jobTitle,
                                "Professional Title"
                            )}
                        </h3>

                        {resume?.profile && (
                            <p className="mg-header-profile">
                                {resume.profile}
                            </p>
                        )}
                    </div>
                </div>

                {/* CONTACT BAR */}

                <div className="mg-contact-bar">

                    {personal.phone && (
                        <div className="mg-contact-item">
                            <span className="mg-contact-icon">
                                ☎
                            </span>

                            <span>
                                {personal.phone}
                            </span>
                        </div>
                    )}

                    {personal.email && (
                        <div className="mg-contact-item">
                            <span className="mg-contact-icon">
                                ✉
                            </span>

                            <span>
                                {personal.email}
                            </span>
                        </div>
                    )}

                    {personal.website && (
                        <div className="mg-contact-item">
                            <span className="mg-contact-icon">
                                ↗
                            </span>

                            <span>
                                {personal.website}
                            </span>
                        </div>
                    )}

                    {personal.city && (
                        <div className="mg-contact-item">
                            <span className="mg-contact-icon">
                                ●
                            </span>

                            <span>
                                {personal.city}
                            </span>
                        </div>
                    )}
                </div>
            </header>

            {/* =====================================================
                BODY
            ===================================================== */}

            <div className="mg-body">

                {/* =================================================
                    LEFT COLUMN
                ================================================= */}

                <main className="mg-left">

                    {/* EXPERIENCE */}

                    {hasArray(resume?.experience) && (
                        <section className="mg-section">
                            {title("Work Experience")}

                            <div className="mg-experience-list">

                                {resume.experience.map((exp) => (
                                    <article
                                        className="mg-experience"
                                        key={exp.id}
                                    >

                                        <div className="mg-item-top">

                                            <div>
                                                <h3>
                                                    {exp.position}
                                                </h3>

                                                {exp.company && (
                                                    <strong>
                                                        {exp.company}
                                                    </strong>
                                                )}
                                            </div>

                                            {dateRange(
                                                exp.startDate,
                                                exp.endDate
                                            ) && (
                                                <span className="mg-date">
                                                    {dateRange(
                                                        exp.startDate,
                                                        exp.endDate
                                                    )}
                                                </span>
                                            )}
                                        </div>

                                        {exp.city && (
                                            <div className="mg-location">
                                                {exp.city}
                                            </div>
                                        )}

                                        {exp.description && (
                                            <p>
                                                {exp.description}
                                            </p>
                                        )}
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* EDUCATION */}

                    {hasArray(resume?.education) && (
                        <section className="mg-section">
                            {title("Education")}

                            <div className="mg-education-list">

                                {resume.education.map((education) => (
                                    <article
                                        className="mg-education"
                                        key={education.id}
                                    >

                                        <div className="mg-item-top">

                                            <div>
                                                <h3>
                                                    {education.degree}
                                                </h3>

                                                {education.school && (
                                                    <strong>
                                                        {education.school}
                                                    </strong>
                                                )}
                                            </div>

                                            {dateRange(
                                                education.startDate,
                                                education.endDate
                                            ) && (
                                                <span className="mg-date">
                                                    {dateRange(
                                                        education.startDate,
                                                        education.endDate
                                                    )}
                                                </span>
                                            )}
                                        </div>

                                        {education.city && (
                                            <div className="mg-location">
                                                {education.city}
                                            </div>
                                        )}

                                        {education.description && (
                                            <p>
                                                {education.description}
                                            </p>
                                        )}
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* ACHIEVEMENTS / AWARDS */}

                    {hasArray(resume?.awards) && (
                        <section className="mg-section">
                            {title("Achievements")}

                            <div className="mg-achievements">

                                {resume.awards.map((award) => (
                                    <article
                                        className="mg-achievement"
                                        key={award.id}
                                    >
                                        <span className="mg-bullet">
                                            •
                                        </span>

                                        <div>
                                            <strong>
                                                {award.title}
                                            </strong>

                                            {award.issuer && (
                                                <span className="mg-award-issuer">
                                                    {award.issuer}
                                                </span>
                                            )}

                                            {award.date && (
                                                <span className="mg-award-date">
                                                    {award.date}
                                                </span>
                                            )}

                                            {award.description && (
                                                <p>
                                                    {award.description}
                                                </p>
                                            )}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* PROJECTS */}

                    {hasArray(resume?.projects) && (
                        <section className="mg-section">
                            {title("Projects")}

                            {resume.projects.map((project) => (
                                <article
                                    className="mg-generic-item"
                                    key={project.id}
                                >
                                    <div className="mg-item-top">
                                        <div>
                                            <h3>
                                                {project.name}
                                            </h3>

                                            {project.role && (
                                                <strong>
                                                    {project.role}
                                                </strong>
                                            )}
                                        </div>

                                        {dateRange(
                                            project.startDate,
                                            project.endDate
                                        ) && (
                                            <span className="mg-date">
                                                {dateRange(
                                                    project.startDate,
                                                    project.endDate
                                                )}
                                            </span>
                                        )}
                                    </div>

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
                                            className="mg-link"
                                        >
                                            {project.link}
                                        </a>
                                    )}
                                </article>
                            ))}
                        </section>
                    )}

                    {/* CERTIFICATES */}

                    {hasArray(resume?.certificates) && (
                        <section className="mg-section">
                            {title("Certificates")}

                            {resume.certificates.map((item) => (
                                <article
                                    className="mg-generic-item"
                                    key={item.id}
                                >
                                    <div className="mg-item-top">
                                        <div>
                                            <h3>
                                                {item.name}
                                            </h3>

                                            {item.issuer && (
                                                <strong>
                                                    {item.issuer}
                                                </strong>
                                            )}
                                        </div>

                                        {item.date && (
                                            <span className="mg-date">
                                                {item.date}
                                            </span>
                                        )}
                                    </div>

                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mg-link"
                                        >
                                            {item.link}
                                        </a>
                                    )}
                                </article>
                            ))}
                        </section>
                    )}

                    {/* COURSES */}

                    {hasArray(resume?.courses) && (
                        <section className="mg-section">
                            {title("Courses")}

                            {resume.courses.map((item) => (
                                <article
                                    className="mg-generic-item"
                                    key={item.id}
                                >
                                    <div className="mg-item-top">
                                        <div>
                                            <h3>
                                                {item.name}
                                            </h3>

                                            {item.provider && (
                                                <strong>
                                                    {item.provider}
                                                </strong>
                                            )}
                                        </div>

                                        {item.date && (
                                            <span className="mg-date">
                                                {item.date}
                                            </span>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </section>
                    )}

                    {/* VOLUNTEER */}

                    {hasArray(resume?.volunteer) && (
                        <section className="mg-section">
                            {title("Volunteer Experience")}

                            {resume.volunteer.map((item) => (
                                <article
                                    className="mg-generic-item"
                                    key={item.id}
                                >
                                    <div className="mg-item-top">
                                        <div>
                                            <h3>
                                                {item.role}
                                            </h3>

                                            {item.organization && (
                                                <strong>
                                                    {item.organization}
                                                </strong>
                                            )}
                                        </div>

                                        {dateRange(
                                            item.startDate,
                                            item.endDate
                                        ) && (
                                            <span className="mg-date">
                                                {dateRange(
                                                    item.startDate,
                                                    item.endDate
                                                )}
                                            </span>
                                        )}
                                    </div>

                                    {item.city && (
                                        <div className="mg-location">
                                            {item.city}
                                        </div>
                                    )}

                                    {item.description && (
                                        <p>
                                            {item.description}
                                        </p>
                                    )}
                                </article>
                            ))}
                        </section>
                    )}

                    {/* PUBLICATIONS */}

                    {hasArray(resume?.publications) && (
                        <section className="mg-section">
                            {title("Publications")}

                            {resume.publications.map((item) => (
                                <article
                                    className="mg-generic-item"
                                    key={item.id}
                                >
                                    <div className="mg-item-top">
                                        <div>
                                            <h3>
                                                {item.title}
                                            </h3>

                                            {item.publisher && (
                                                <strong>
                                                    {item.publisher}
                                                </strong>
                                            )}
                                        </div>

                                        {item.date && (
                                            <span className="mg-date">
                                                {item.date}
                                            </span>
                                        )}
                                    </div>

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
                                            className="mg-link"
                                        >
                                            {item.link}
                                        </a>
                                    )}
                                </article>
                            ))}
                        </section>
                    )}

                    {/* ORGANIZATIONS */}

                    {hasArray(resume?.organizations) && (
                        <section className="mg-section">
                            {title("Organizations")}

                            {resume.organizations.map((item) => (
                                <article
                                    className="mg-generic-item"
                                    key={item.id}
                                >
                                    <div className="mg-item-top">
                                        <div>
                                            <h3>
                                                {item.organization}
                                            </h3>

                                            {item.role && (
                                                <strong>
                                                    {item.role}
                                                </strong>
                                            )}
                                        </div>

                                        {dateRange(
                                            item.startDate,
                                            item.endDate
                                        ) && (
                                            <span className="mg-date">
                                                {dateRange(
                                                    item.startDate,
                                                    item.endDate
                                                )}
                                            </span>
                                        )}
                                    </div>

                                    {item.description && (
                                        <p>
                                            {item.description}
                                        </p>
                                    )}
                                </article>
                            ))}
                        </section>
                    )}

                    {/* CUSTOM SECTIONS */}

                    {hasArray(resume?.customSections) &&
                        resume.customSections.map((section) => (
                            <section
                                className="mg-section"
                                key={section.id}
                            >
                                {title(section.title)}

                                {section.description && (
                                    <p className="mg-custom">
                                        {section.description}
                                    </p>
                                )}
                            </section>
                        ))}
                </main>

                {/* =================================================
                    RIGHT COLUMN
                ================================================= */}

                <aside className="mg-right">

                    {/* SKILLS */}

                    {hasArray(resume?.skills) && (
                        <section className="mg-side-section">
                            {title("Skills")}

                            <div className="mg-skills">
                                {resume.skills.map(renderSkill)}
                            </div>
                        </section>
                    )}

                    {/* LANGUAGES */}

                    {hasArray(resume?.languages) && (
                        <section className="mg-side-section">
                            {title("Languages")}

                            <div className="mg-languages">

                                {resume.languages.map((language) => (
                                    <div
                                        className="mg-language"
                                        key={language.id}
                                    >
                                        <span>
                                            {language.name}
                                        </span>

                                        <strong>
                                            {language.level}
                                        </strong>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* INTERESTS / HOBBIES */}

                    {hasArray(resume?.interests) && (
                        <section className="mg-side-section">
                            {title("Hobbies")}

                            <div className="mg-interests">

                                {resume.interests
                                    .map(
                                        (item) =>
                                            item?.name
                                    )
                                    .filter(Boolean)
                                    .map(
                                        (
                                            interest,
                                            index
                                        ) => (
                                            <div
                                                className="mg-interest"
                                                key={`${interest}-${index}`}
                                            >
                                                <span>
                                                    •
                                                </span>

                                                <span>
                                                    {interest}
                                                </span>
                                            </div>
                                        )
                                    )}
                            </div>
                        </section>
                    )}

                    {/* REFERENCES */}

                    {hasArray(resume?.references) && (
                        <section className="mg-side-section">
                            {title("References")}

                            <div className="mg-references">

                                {resume.references.map((item) => (
                                    <article
                                        className="mg-reference"
                                        key={item.id}
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
                                ))}
                            </div>
                        </section>
                    )}
                </aside>
            </div>

            {/* =====================================================
                STYLE
            ===================================================== */}

            <style>{`

                * {
                    box-sizing: border-box;
                }

                .mg-paper {
                    width: 794px;
                    min-height: 1123px;
                    margin: 0 auto;

                    background:
                        var(--mg-background, #fff);

                    color:
                        var(--mg-text, #263238);

                    font-family:
                        var(--mg-font, Arial, sans-serif);

                    font-size:
                        var(--mg-font-size, 11px);

                    line-height: 1.45;

                    overflow: hidden;

                    box-shadow:
                        0 10px 35px rgba(15, 23, 42, .12);

                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }

                /* =========================
                   HEADER
                ========================= */

                .mg-header {
                    background: #293241;
                    color: #fff;
                }

                .mg-header-main {
                    min-height: 215px;

                    padding: 32px 38px 25px;

                    display: flex;
                    align-items: center;

                    gap: 24px;
                }

                .mg-photo-wrap {
                    flex: 0 0 112px;
                }

                .mg-photo,
                .mg-photo-placeholder {
                    width: 112px;
                    height: 112px;

                    display: block;

                    object-fit: cover;

                    border: 4px solid rgba(255,255,255,.9);
                }

                .mg-photo.circle {
                    border-radius: 50%;
                }

                .mg-photo.square {
                    border-radius: 8px;
                }

                .mg-photo-placeholder {
                    border-radius: 50%;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background: #3b4859;

                    color: #fff;

                    font-size: 30px;
                    font-weight: 700;
                }

                .mg-header-content {
                    flex: 1;
                    min-width: 0;
                }

                .mg-header-content h1 {
                    margin: 0;

                    color: #fff;

                    font-size: 30px;
                    line-height: 1.05;

                    font-weight: 700;

                    letter-spacing: .5px;
                }

                .mg-header-content h3 {
                    margin: 7px 0 10px;

                    color: var(--mg-primary);

                    font-size: 11px;

                    font-weight: 500;

                    letter-spacing: .3px;
                }

                .mg-header-profile {
                    max-width: 480px;

                    margin: 0;

                    color: rgba(255,255,255,.82);

                    font-size: 8.2px;

                    line-height: 1.55;

                    text-align: justify;
                }

                /* =========================
                   CONTACT BAR
                ========================= */

                .mg-contact-bar {
                    min-height: 35px;

                    padding: 8px 34px;

                    display: flex;
                    align-items: center;

                    justify-content: space-between;

                    gap: 12px;

                    background: #202a38;

                    border-top:
                        1px solid rgba(255,255,255,.08);
                }

                .mg-contact-item {
                    min-width: 0;

                    display: flex;
                    align-items: center;

                    gap: 5px;

                    color: rgba(255,255,255,.78);

                    font-size: 7px;
                }

                .mg-contact-icon {
                    color: var(--mg-primary);

                    font-size: 8px;

                    font-weight: 700;
                }

                /* =========================
                   BODY
                ========================= */

                .mg-body {
                    display: grid;

                    grid-template-columns:
                        minmax(0, 1fr)
                        215px;

                    gap: 30px;

                    padding: 28px 36px 40px;
                }

                .mg-left {
                    min-width: 0;
                }

                .mg-right {
                    min-width: 0;

                    padding-left: 4px;
                }

                /* =========================
                   SECTIONS
                ========================= */

                .mg-section,
                .mg-side-section {
                    margin-bottom: 25px;

                    page-break-inside: avoid;
                }

                .mg-section:last-child,
                .mg-side-section:last-child {
                    margin-bottom: 0;
                }

                .mg-section-title {
                    position: relative;

                    margin: 0 0 12px;

                    padding-bottom: 5px;

                    color:
                        var(--mg-primary);

                    font-size: 13px;

                    line-height: 1.2;

                    font-weight: 700;

                    letter-spacing: .2px;

                    border-bottom:
                        1px solid #e4e8e5;
                }

                .mg-section-title::after {
                    content: "";

                    position: absolute;

                    left: 0;
                    bottom: -1px;

                    width: 34px;
                    height: 2px;

                    background:
                        var(--mg-primary);
                }

                /* =========================
                   EXPERIENCE
                ========================= */

                .mg-experience-list,
                .mg-education-list {
                    display: flex;
                    flex-direction: column;

                    gap: 16px;
                }

                .mg-experience,
                .mg-education,
                .mg-generic-item {
                    page-break-inside: avoid;
                }

                .mg-item-top {
                    display: flex;

                    justify-content: space-between;
                    align-items: flex-start;

                    gap: 12px;
                }

                .mg-item-top h3 {
                    margin: 0;

                    color: var(--mg-text);

                    font-size: 9.8px;

                    line-height: 1.3;

                    font-weight: 700;
                }

                .mg-item-top strong {
                    display: block;

                    margin-top: 2px;

                    color: #4f5d65;

                    font-size: 8px;

                    font-weight: 600;
                }

                .mg-date {
                    flex: 0 0 auto;

                    color: #7a858c;

                    font-size: 6.8px;

                    white-space: nowrap;

                    padding-top: 1px;
                }

                .mg-location {
                    margin-top: 2px;

                    color: #8a9398;

                    font-size: 7px;

                    font-style: italic;
                }

                .mg-experience p,
                .mg-education p,
                .mg-generic-item p,
                .mg-custom {
                    margin: 5px 0 0;

                    color: #566168;

                    font-size: 7.7px;

                    line-height: 1.5;

                    text-align: left;
                }

                /* =========================
                   ACHIEVEMENTS
                ========================= */

                .mg-achievements {
                    display: flex;

                    flex-direction: column;

                    gap: 8px;
                }

                .mg-achievement {
                    display: grid;

                    grid-template-columns: 10px 1fr;

                    gap: 5px;

                    page-break-inside: avoid;
                }

                .mg-bullet {
                    color: var(--mg-primary);

                    font-size: 12px;

                    line-height: 1;
                }

                .mg-achievement strong {
                    color: #3e484e;

                    font-size: 7.8px;

                    line-height: 1.45;
                }

                .mg-award-issuer,
                .mg-award-date {
                    margin-left: 5px;

                    color: #8a9398;

                    font-size: 6.7px;
                }

                .mg-achievement p {
                    margin: 2px 0 0;

                    color: #606a70;

                    font-size: 7.2px;

                    line-height: 1.45;
                }

                /* =========================
                   SKILLS
                ========================= */

                .mg-skills {
                    display: flex;

                    flex-direction: column;

                    gap: 9px;
                }

                .mg-skill {
                    position: relative;

                    min-width: 0;
                }

                .mg-skill-name {
                    margin-bottom: 4px;

                    color: #455057;

                    font-size: 7.8px;

                    line-height: 1.25;

                    font-weight: 600;
                }

                .mg-skill-level {
                    position: absolute;

                    top: 0;
                    right: 0;

                    color: #899197;

                    font-size: 6.5px;
                }

                .mg-skill-bar {
                    width: 100%;

                    height: 4px;

                    background: #e7ebe8;

                    overflow: hidden;
                }

                .mg-skill-bar span {
                    display: block;

                    height: 100%;
                }

                .mg-skill-dots {
                    display: flex;

                    gap: 3px;
                }

                .mg-skill-dots span {
                    width: 6px;
                    height: 6px;

                    border-radius: 50%;

                    background: #dce2de;
                }

                .mg-skill-dots span.active {
                    background:
                        var(--mg-primary);
                }

                /* =========================
                   LANGUAGES
                ========================= */

                .mg-languages {
                    display: flex;

                    flex-direction: column;

                    gap: 6px;
                }

                .mg-language {
                    display: flex;

                    justify-content: space-between;

                    gap: 8px;

                    padding-bottom: 5px;

                    border-bottom:
                        1px solid #edf0ee;

                    color: #4b565d;

                    font-size: 7.7px;
                }

                .mg-language strong {
                    color: #80898e;

                    font-size: 6.7px;

                    font-weight: 500;

                    text-align: right;
                }

                /* =========================
                   INTERESTS
                ========================= */

                .mg-interests {
                    display: flex;

                    flex-direction: column;

                    gap: 6px;
                }

                .mg-interest {
                    display: flex;

                    align-items: flex-start;

                    gap: 6px;

                    color: #536067;

                    font-size: 7.7px;

                    line-height: 1.35;
                }

                .mg-interest > span:first-child {
                    color: var(--mg-primary);

                    font-weight: 700;
                }

                /* =========================
                   REFERENCES
                ========================= */

                .mg-references {
                    display: flex;

                    flex-direction: column;

                    gap: 12px;
                }

                .mg-reference {
                    padding-left: 8px;

                    border-left:
                        2px solid var(--mg-primary);
                }

                .mg-reference h3 {
                    margin: 0;

                    color: #3e484e;

                    font-size: 8px;
                }

                .mg-reference strong,
                .mg-reference span {
                    display: block;

                    margin-top: 2px;

                    color: #737e84;

                    font-size: 6.8px;
                }

                /* =========================
                   LINKS
                ========================= */

                .mg-link {
                    display: block;

                    margin-top: 4px;

                    color:
                        var(--mg-primary);

                    font-size: 7px;

                    text-decoration: none;

                    overflow-wrap: anywhere;
                }

                /* =========================
                   PRINT
                ========================= */

                @page {
                    size: A4;
                    margin: 0;
                }

                @media print {

                    .mg-paper {
                        width: 794px;
                        min-height: 1123px;

                        margin: 0;

                        box-shadow: none;
                    }

                    .mg-header {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }

                /* =========================
                   RESPONSIVE
                ========================= */

                @media (max-width: 850px) {

                    .mg-paper {
                        width: 100%;
                        min-height: auto;
                    }
                }

                @media (max-width: 650px) {

                    .mg-header-main {
                        padding: 25px 20px;

                        flex-direction: column;

                        text-align: center;
                    }

                    .mg-header-profile {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .mg-contact-bar {
                        flex-wrap: wrap;

                        justify-content: center;
                    }

                    .mg-body {
                        grid-template-columns: 1fr;

                        gap: 20px;

                        padding: 25px 22px;
                    }

                    .mg-right {
                        padding-left: 0;
                    }

                    .mg-item-top {
                        flex-direction: column;

                        gap: 3px;
                    }

                    .mg-date {
                        order: -1;
                    }
                }

            `}</style>
        </div>
    );
}