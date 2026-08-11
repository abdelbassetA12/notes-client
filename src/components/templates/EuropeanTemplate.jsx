 import { useResume } from "../context/ResumeContext";

export default function EuropeanTemplate({ resume }) {
    const { design } = useResume();

    const safe = (value) => value || "";
    const hasArray = (value) => Array.isArray(value) && value.length > 0;

    const personal = resume?.personal || {};

    const primary = design?.primaryColor || "#20364D";
    const text = design?.textColor || "#17212B";
    const background = design?.backgroundColor || "#FFFFFF";
    const font = design?.fontFamily || "Arial, sans-serif";
    const fontSize = design?.fontSize || 13;

    const sectionTitle = (textValue, dark = false) => (
        <h2
            className={`eu2-section-title ${dark ? "eu2-section-title--dark" : ""}`}
            style={{
                textAlign: design?.sectionTitleAlign || "left",
                textTransform: design?.uppercaseTitles ? "uppercase" : "none",
            }}
        >
            <span>{textValue}</span>
        </h2>
    );

    const contactItem = (icon, value) =>
        value ? (
            <div className="eu2-contact-item">
                <span className="eu2-contact-icon">{icon}</span>
                <span className="eu2-contact-value">{value}</span>
            </div>
        ) : null;

    const renderDate = (start, end, present = true) => {
        if (!start && !end) return null;

        return (
            <div className="eu2-date">
                {start && <span>{start}</span>}
                {(start || end) && <span className="eu2-date-dash">—</span>}
                <span>{end || (present ? "Present" : "")}</span>
            </div>
        );
    };

    return (
        <div
            className="eu2-paper"
            style={{
                "--eu2-primary": primary,
                "--eu2-text": text,
                "--eu2-background": background,
                "--eu2-font": font,
                "--eu2-font-size": `${fontSize}px`,
            }}
        >
            <aside className="eu2-sidebar">
                <div className="eu2-photo-wrap">
                    {design?.showPhoto && personal.photo ? (
                        <img
                            src="file:///E:/programing/trading/tradingsistym/photocv.jpg"
                            alt=""
                            className={`eu2-photo ${design?.photoStyle || "square"}`}
                        />
                    ) : (
                        <div className="eu2-photo-placeholder">
                            <span>
                                {safe(personal.firstName)?.charAt(0)}
                                {safe(personal.lastName)?.charAt(0)}
                            </span>
                        </div>
                    )}
                </div>

                <div className="eu2-sidebar-body">
                    {resume?.profile && (
                        <section className="eu2-side-section">
                            {sectionTitle("Profile", true)}
                            <p className="eu2-profile">{resume.profile}</p>
                        </section>
                    )}

                    <section className="eu2-side-section">
                        {sectionTitle("Contact", true)}

                        <div className="eu2-contact">
                            {contactItem("✉", personal.email)}
                            {contactItem("☎", personal.phone)}
                            {contactItem("⌖", personal.city)}
                            {contactItem("↗", personal.website)}
                        </div>
                    </section>

                    {hasArray(resume?.languages) && (
                        <section className="eu2-side-section">
                            {sectionTitle("Languages", true)}

                            <div className="eu2-languages">
                                {resume.languages.map((language) => (
                                    <div className="eu2-language" key={language.id}>
                                        <span>{language.name}</span>
                                        <strong>{language.level}</strong>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {hasArray(resume?.interests) && (
                        <section className="eu2-side-section">
                            {sectionTitle("Interests", true)}

                            <div className="eu2-interests">
                                {resume.interests
                                    .map((item) => item?.name)
                                    .filter(Boolean)
                                    .map((interest, index) => (
                                        <div className="eu2-interest" key={`${interest}-${index}`}>
                                            <span className="eu2-interest-dot" />
                                            <span>{interest}</span>
                                        </div>
                                    ))}
                            </div>
                        </section>
                    )}
                </div>
            </aside>

            <main className="eu2-main">
                <header
                    className="eu2-header"
                    style={{
                        textAlign: design?.headerAlign || "left",
                    }}
                >
                    <div className="eu2-name">
                        <h1>
                            {safe(personal.firstName) || "First Name"}{" "}
                            <span>{safe(personal.lastName) || "Last Name"}</span>
                        </h1>

                        <div className="eu2-job-title">
                            {safe(personal.jobTitle) || "Professional Title"}
                        </div>
                    </div>
                </header>

                {hasArray(resume?.education) && (
                    <section className="eu2-section">
                        {sectionTitle("Formation")}

                        <div className="eu2-timeline">
                            {resume.education.map((education) => (
                                <article className="eu2-entry" key={education.id}>
                                    {renderDate(
                                        education.startDate,
                                        education.endDate,
                                        false
                                    )}

                                    <div className="eu2-entry-content">
                                        <h3>{education.degree}</h3>

                                        {education.school && (
                                            <strong>{education.school}</strong>
                                        )}

                                        {education.city && (
                                            <div className="eu2-location">
                                                {education.city}
                                            </div>
                                        )}

                                        {education.description && (
                                            <p>{education.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {hasArray(resume?.experience) && (
                    <section className="eu2-section">
                        {sectionTitle("Experience")}

                        <div className="eu2-timeline">
                            {resume.experience.map((exp) => (
                                <article className="eu2-entry" key={exp.id}>
                                    {renderDate(
                                        exp.startDate,
                                        exp.endDate,
                                        true
                                    )}

                                    <div className="eu2-entry-content">
                                        <h3>{exp.position}</h3>

                                        {exp.company && (
                                            <strong>{exp.company}</strong>
                                        )}

                                        {exp.city && (
                                            <div className="eu2-location">
                                                {exp.city}
                                            </div>
                                        )}

                                        {exp.description && (
                                            <p>{exp.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {hasArray(resume?.skills) && (
                    <section className="eu2-section">
                        {sectionTitle("Compétences")}

                        <div className="eu2-skills">
                            {resume.skills.map((skill) => (
                                <div className="eu2-skill" key={skill.id}>
                                    <div className="eu2-skill-top">
                                        <span>{skill.name}</span>

                                        {design?.skillStyle === "text" && (
                                            <strong>{skill.level}%</strong>
                                        )}
                                    </div>

                                    {design?.skillStyle === "dots" ? (
                                        <div className="eu2-skill-dots">
                                            {[20, 40, 60, 80, 100].map((value) => (
                                                <span
                                                    key={value}
                                                    className={
                                                        Number(skill.level) >= value
                                                            ? "active"
                                                            : ""
                                                    }
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="eu2-skill-bar">
                                            <span
                                                style={{
                                                    width: `${Math.min(
                                                        100,
                                                        Math.max(
                                                            0,
                                                            Number(skill.level) || 0
                                                        )
                                                    )}%`,
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {hasArray(resume?.projects) && (
                    <section className="eu2-section">
                        {sectionTitle("Projects")}

                        {resume.projects.map((project) => (
                            <article className="eu2-simple-entry" key={project.id}>
                                <div>
                                    <h3>{project.name}</h3>

                                    {project.role && (
                                        <strong>{project.role}</strong>
                                    )}

                                    {project.description && (
                                        <p>{project.description}</p>
                                    )}

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="eu2-link"
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
                        ))}
                    </section>
                )}

                {hasArray(resume?.certificates) && (
                    <section className="eu2-section">
                        {sectionTitle("Certificates")}

                        {resume.certificates.map((item) => (
                            <article className="eu2-simple-entry" key={item.id}>
                                <div>
                                    <h3>{item.name}</h3>
                                    {item.issuer && <strong>{item.issuer}</strong>}

                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="eu2-link"
                                        >
                                            {item.link}
                                        </a>
                                    )}
                                </div>

                                {item.date && (
                                    <span className="eu2-simple-date">
                                        {item.date}
                                    </span>
                                )}
                            </article>
                        ))}
                    </section>
                )}

                {hasArray(resume?.courses) && (
                    <section className="eu2-section">
                        {sectionTitle("Courses")}

                        {resume.courses.map((item) => (
                            <article className="eu2-simple-entry" key={item.id}>
                                <div>
                                    <h3>{item.name}</h3>
                                    {item.provider && (
                                        <strong>{item.provider}</strong>
                                    )}

                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="eu2-link"
                                        >
                                            {item.link}
                                        </a>
                                    )}
                                </div>

                                {item.date && (
                                    <span className="eu2-simple-date">
                                        {item.date}
                                    </span>
                                )}
                            </article>
                        ))}
                    </section>
                )}

                {hasArray(resume?.volunteer) && (
                    <section className="eu2-section">
                        {sectionTitle("Volunteer Experience")}

                        <div className="eu2-timeline">
                            {resume.volunteer.map((item) => (
                                <article className="eu2-entry" key={item.id}>
                                    {renderDate(
                                        item.startDate,
                                        item.endDate,
                                        true
                                    )}

                                    <div className="eu2-entry-content">
                                        <h3>{item.role}</h3>
                                        {item.organization && (
                                            <strong>{item.organization}</strong>
                                        )}

                                        {item.city && (
                                            <div className="eu2-location">
                                                {item.city}
                                            </div>
                                        )}

                                        {item.description && (
                                            <p>{item.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {hasArray(resume?.awards) && (
                    <section className="eu2-section">
                        {sectionTitle("Awards")}

                        {resume.awards.map((item) => (
                            <article className="eu2-simple-entry" key={item.id}>
                                <div>
                                    <h3>{item.title}</h3>
                                    {item.issuer && <strong>{item.issuer}</strong>}
                                    {item.description && (
                                        <p>{item.description}</p>
                                    )}
                                </div>

                                {item.date && (
                                    <span className="eu2-simple-date">
                                        {item.date}
                                    </span>
                                )}
                            </article>
                        ))}
                    </section>
                )}

                {hasArray(resume?.publications) && (
                    <section className="eu2-section">
                        {sectionTitle("Publications")}

                        {resume.publications.map((item) => (
                            <article className="eu2-simple-entry" key={item.id}>
                                <div>
                                    <h3>{item.title}</h3>
                                    {item.publisher && (
                                        <strong>{item.publisher}</strong>
                                    )}
                                    {item.description && (
                                        <p>{item.description}</p>
                                    )}

                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="eu2-link"
                                        >
                                            {item.link}
                                        </a>
                                    )}
                                </div>

                                {item.date && (
                                    <span className="eu2-simple-date">
                                        {item.date}
                                    </span>
                                )}
                            </article>
                        ))}
                    </section>
                )}

                {hasArray(resume?.organizations) && (
                    <section className="eu2-section">
                        {sectionTitle("Organizations")}

                        <div className="eu2-timeline">
                            {resume.organizations.map((item) => (
                                <article className="eu2-entry" key={item.id}>
                                    {renderDate(
                                        item.startDate,
                                        item.endDate,
                                        true
                                    )}

                                    <div className="eu2-entry-content">
                                        <h3>{item.organization}</h3>
                                        {item.role && <strong>{item.role}</strong>}
                                        {item.description && (
                                            <p>{item.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {hasArray(resume?.references) && (
                    <section className="eu2-section">
                        {sectionTitle("References")}

                        <div className="eu2-references">
                            {resume.references.map((item) => (
                                <article className="eu2-reference" key={item.id}>
                                    <h3>{item.name}</h3>

                                    {item.position && (
                                        <strong>{item.position}</strong>
                                    )}

                                    {item.company && <p>{item.company}</p>}
                                    {item.email && <p>{item.email}</p>}
                                    {item.phone && <p>{item.phone}</p>}
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {hasArray(resume?.customSections) &&
                    resume.customSections.map((section) => (
                        <section className="eu2-section" key={section.id}>
                            {sectionTitle(section.title)}

                            {section.description && (
                                <p className="eu2-custom-description">
                                    {section.description}
                                </p>
                            )}
                        </section>
                    ))}
            </main>

            <style>{`
                .eu2-paper {
                    width: 794px;
                    min-height: 1123px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 31% 69%;
                    background: var(--eu2-background, #fff);
                    color: var(--eu2-text, #17212b);
                    font-family: var(--eu2-font, Arial, sans-serif);
                    font-size: var(--eu2-font-size, 13px);
                    line-height: 1.48;
                    box-sizing: border-box;
                    overflow: hidden;
                    box-shadow: 0 12px 38px rgba(15, 23, 42, .14);
                }

                .eu2-sidebar {
                    background: #20364d;
                    color: #fff;
                    min-height: 1123px;
                    position: relative;
                }

                .eu2-photo-wrap {
                    width: 100%;
                    padding: 0;
                    background: #d9dee3;
                }

                .eu2-photo,
                .eu2-photo-placeholder {
                    display: block;
                    width: 100%;
                    height: 285px;
                    object-fit: cover;
                    border-radius: 0 !important;
                    margin: 0;
                }

                .eu2-photo-placeholder {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #334a61;
                    color: rgba(255,255,255,.88);
                    font-size: 48px;
                    font-weight: 700;
                    letter-spacing: 2px;
                }

                .eu2-sidebar-body {
                    padding: 26px 24px 30px;
                }

                .eu2-side-section {
                    margin: 0 0 28px;
                }

                .eu2-side-section:last-child {
                    margin-bottom: 0;
                }

                .eu2-section-title {
                    position: relative;
                    margin: 0 0 17px;
                    padding: 0 0 10px;
                    color: var(--eu2-primary, #20364d);
                    font-size: 14px;
                    line-height: 1.2;
                    font-weight: 700;
                    letter-spacing: 2.2px;
                    text-transform: uppercase;
                }

                .eu2-section-title::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 28px;
                    height: 2px;
                    background: var(--eu2-primary, #20364d);
                }

                .eu2-section-title--dark {
                    color: #fff;
                    font-size: 12px;
                    letter-spacing: 3px;
                    margin-bottom: 17px;
                }

                .eu2-section-title--dark::after {
                    background: rgba(255,255,255,.9);
                    width: 24px;
                }

                .eu2-profile {
                    margin: 0;
                    color: rgba(255,255,255,.82);
                    font-size: 10.5px;
                    line-height: 1.65;
                    text-align: left;
                }

                .eu2-contact {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .eu2-contact-item {
                    display: grid;
                    grid-template-columns: 20px 1fr;
                    align-items: start;
                    gap: 7px;
                    color: rgba(255,255,255,.86);
                    font-size: 10px;
                    line-height: 1.45;
                    min-width: 0;
                }

                .eu2-contact-icon {
                    width: 18px;
                    height: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 700;
                }

                .eu2-contact-value {
                    overflow-wrap: anywhere;
                }

                .eu2-languages {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .eu2-language {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                    color: rgba(255,255,255,.9);
                    font-size: 10.5px;
                    border-bottom: 1px solid rgba(255,255,255,.14);
                    padding-bottom: 7px;
                }

                .eu2-language:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }

                .eu2-language strong {
                    font-size: 9px;
                    font-weight: 600;
                    color: rgba(255,255,255,.65);
                    text-transform: uppercase;
                    letter-spacing: .5px;
                }

                .eu2-interests {
                    display: flex;
                    flex-direction: column;
                    gap: 9px;
                }

                .eu2-interest {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    color: rgba(255,255,255,.82);
                    font-size: 10.5px;
                    line-height: 1.4;
                }

                .eu2-interest-dot {
                    width: 4px;
                    height: 4px;
                    margin-top: 6px;
                    flex: 0 0 4px;
                    border-radius: 50%;
                    background: #fff;
                }

                .eu2-main {
                    min-width: 0;
                    padding: 47px 43px 52px 43px;
                    box-sizing: border-box;
                    background: #fff;
                }

                .eu2-header {
                    padding: 0 0 31px;
                    margin-bottom: 4px;
                    border-bottom: 1px solid #d9dde2;
                }

                .eu2-name h1 {
                    margin: 0;
                    color: #252b31;
                    font-size: 31px;
                    line-height: 1.05;
                    font-weight: 300;
                    letter-spacing: 1.5px;
                }

                .eu2-name h1 span {
                    font-weight: 600;
                }

                .eu2-job-title {
                    margin-top: 10px;
                    color: #68717a;
                    font-size: 10px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                }

                .eu2-section {
                    margin-top: 29px;
                    page-break-inside: avoid;
                }

                .eu2-section > .eu2-section-title {
                    margin-bottom: 19px;
                }

                .eu2-timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 19px;
                }

                .eu2-entry {
                    display: grid;
                    grid-template-columns: 72px minmax(0, 1fr);
                    gap: 18px;
                    page-break-inside: avoid;
                }

                .eu2-date {
                    padding-top: 2px;
                    color: #747c84;
                    font-size: 8.8px;
                    line-height: 1.35;
                    text-transform: uppercase;
                    letter-spacing: .35px;
                    display: flex;
                    flex-direction: column;
                    gap: 1px;
                }

                .eu2-date-dash {
                    color: #a2a8ae;
                    line-height: 1;
                }

                .eu2-entry-content {
                    min-width: 0;
                    position: relative;
                    padding-left: 15px;
                    border-left: 1px solid #d9dde2;
                }

                .eu2-entry-content::before {
                    content: "";
                    position: absolute;
                    left: -4px;
                    top: 5px;
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: var(--eu2-primary, #20364d);
                }

                .eu2-entry-content h3 {
                    margin: 0;
                    color: #252b31;
                    font-size: 11.5px;
                    line-height: 1.35;
                    font-weight: 700;
                }

                .eu2-entry-content strong {
                    display: block;
                    margin-top: 3px;
                    color: #59636c;
                    font-size: 9.5px;
                    line-height: 1.35;
                    font-weight: 600;
                }

                .eu2-location {
                    margin-top: 2px;
                    color: #858c93;
                    font-size: 8.5px;
                }

                .eu2-entry-content p,
                .eu2-simple-entry p,
                .eu2-custom-description {
                    margin: 6px 0 0;
                    color: #5c646c;
                    font-size: 9.3px;
                    line-height: 1.55;
                }

                .eu2-skills {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    column-gap: 28px;
                    row-gap: 15px;
                }

                .eu2-skill {
                    min-width: 0;
                }

                .eu2-skill-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 6px;
                    color: #3e464e;
                    font-size: 9.5px;
                    font-weight: 600;
                }

                .eu2-skill-top strong {
                    color: #7c858e;
                    font-size: 8px;
                    font-weight: 500;
                }

                .eu2-skill-bar {
                    width: 100%;
                    height: 4px;
                    background: #e5e8eb;
                    overflow: hidden;
                }

                .eu2-skill-bar span {
                    display: block;
                    height: 100%;
                    background: var(--eu2-primary, #20364d);
                }

                .eu2-skill-dots {
                    display: flex;
                    gap: 4px;
                }

                .eu2-skill-dots span {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #d9dde1;
                }

                .eu2-skill-dots span.active {
                    background: var(--eu2-primary, #20364d);
                }

                .eu2-simple-entry {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) auto;
                    gap: 20px;
                    padding-bottom: 14px;
                    margin-bottom: 14px;
                    border-bottom: 1px solid #eceef0;
                    page-break-inside: avoid;
                }

                .eu2-simple-entry:last-child {
                    margin-bottom: 0;
                }

                .eu2-simple-entry h3 {
                    margin: 0;
                    color: #252b31;
                    font-size: 11px;
                    line-height: 1.35;
                }

                .eu2-simple-entry strong {
                    display: block;
                    margin-top: 3px;
                    color: #606a73;
                    font-size: 9px;
                }

                .eu2-simple-date {
                    color: #7d858d;
                    font-size: 8.5px;
                    white-space: nowrap;
                }

                .eu2-link {
                    display: block;
                    margin-top: 5px;
                    color: var(--eu2-primary, #20364d);
                    font-size: 8.5px;
                    text-decoration: none;
                    overflow-wrap: anywhere;
                }

                .eu2-references {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 20px;
                }

                .eu2-reference {
                    padding-left: 12px;
                    border-left: 2px solid var(--eu2-primary, #20364d);
                }

                .eu2-reference h3 {
                    margin: 0;
                    font-size: 10.5px;
                    color: #252b31;
                }

                .eu2-reference strong {
                    display: block;
                    margin-top: 3px;
                    color: #626b74;
                    font-size: 8.8px;
                }

                .eu2-reference p {
                    margin: 2px 0;
                    color: #707880;
                    font-size: 8.5px;
                }

                @media print {
                    .eu2-paper {
                        width: 794px;
                        min-height: 1123px;
                        margin: 0;
                        box-shadow: none;
                    }

                    .eu2-sidebar {
                        min-height: 1123px;
                    }
                }

                @media (max-width: 850px) {
                    .eu2-paper {
                        width: 100%;
                        min-height: auto;
                    }
                }

                @media (max-width: 650px) {
                    .eu2-paper {
                        display: block;
                    }

                    .eu2-sidebar {
                        min-height: auto;
                    }

                    .eu2-photo,
                    .eu2-photo-placeholder {
                        height: 280px;
                    }

                    .eu2-main {
                        padding: 34px 25px;
                    }

                    .eu2-entry {
                        grid-template-columns: 1fr;
                        gap: 5px;
                    }

                    .eu2-date {
                        flex-direction: row;
                        gap: 4px;
                    }

                    .eu2-skills,
                    .eu2-references {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
}
 
 