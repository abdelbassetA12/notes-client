import { useResume } from "../context/ResumeContext";
export default function ModernTemplate({ resume }) {
const { design } = useResume();

    return (

        <div className="paper">
            
                <div className="resume-header">

    <h1>
        {resume.personal.firstName || "First Name"}{" "}
        {resume.personal.lastName || "Last Name"}
    </h1>

    <h3>
        {resume.personal.jobTitle || "Job Title"}
    </h3>

    <div className="contact-info">

        {resume.personal.email && (
            <span>{resume.personal.email}</span>
        )}

        {resume.personal.phone && (
            <span>{resume.personal.phone}</span>
        )}

        {resume.personal.city && (
            <span>{resume.personal.city}</span>
        )}

        {resume.personal.website && (
            <span>{resume.personal.website}</span>
        )}

    </div>

    <div className="header-line"></div>

</div>

           

               <div className="resume-section">

    <h2>Professional Profile</h2>

    <p>

        {

            resume.profile ||

            "Write a short professional summary."

        }

    </p>

</div>

                <div className="resume-section">

    <h2>Education</h2>

    {resume.education.length === 0 ? (

        <p className="empty-section">
            No education added.
        </p>

    ) : (

        resume.education.map((education) => (

            <div
                key={education.id}
                className="education-preview"
            >
 

 
                <div className="education-header">

    <div>

        <h3>

            {education.school || "School Name"}

        </h3>

        <strong>

            {education.degree}

        </strong>

    </div>

    <div className="education-date">

        {education.startDate}

        {education.startDate && education.endDate && " - "}

        {education.endDate}

    </div>

</div>

{education.city && (

    <p className="education-city">

        {education.city}

    </p>

)}

                {education.description && (

                    <p>

                        {education.description}

                    </p>

                )}

            </div>

        ))

    )}

</div>

<div className="resume-section">

    <h2>Experience</h2>

    {

        resume.experience.map((exp)=>(

            <div
                key={exp.id}
                className="education-preview"
            >

                <div className="education-header">

                    <div>

                        <h3>

                            {exp.company}

                        </h3>

                        <strong>

                            {exp.position}

                        </strong>

                    </div>

                    <div className="education-date">

                        {exp.startDate}

                        {exp.startDate && exp.endDate && " - "}

                        {exp.endDate}

                    </div>

                </div>

                <p className="education-city">

                    {exp.city}

                </p>

                {

                    exp.description &&

                    <p className="education-description">

                        {exp.description}

                    </p>

                }

            </div>

        ))

    }

</div>
<div className="resume-section">

    <h2>Skills</h2>

    {

        resume.skills.map((skill)=>(

            <div
                key={skill.id}
                className="skill-row"
            >

                <span>

                    {skill.name}

                </span>

                <div className="skill-bar">

                    <div
                        className="skill-fill"
                        style={{
                            width: `${skill.level}%`
                        }}
                    />

                </div>

            </div>

        ))

    }

</div>

<div className="resume-section">

    <h2>Languages</h2>

    {

        resume.languages.map(language=>(

            <div
                key={language.id}
                className="language-row"
            >

                <span>

                    {language.name}

                </span>

                <strong>

                    {language.level}

                </strong>

            </div>

        ))

    }

</div>
<div className="resume-section">

    <h2>Projects</h2>

    {

        resume.projects.length === 0 ? (

            <p className="empty-section">

                No projects added.

            </p>

        ) : (

            resume.projects.map(project=>(

                <div

                    key={project.id}

                    className="education-preview"

                >

                    <div className="education-header">

                        <div>

                            <h3>

                                {project.name}

                            </h3>

                            <strong>

                                {project.role}

                            </strong>

                        </div>

                        <div className="education-date">

                            {project.startDate}

                            {project.startDate && project.endDate && " - "}

                            {project.endDate}

                        </div>

                    </div>

                    {

                        project.link && (

                            <p className="education-city">

                                {project.link}

                            </p>

                        )

                    }

                    {

                        project.description && (

                            <p className="education-description">

                                {project.description}

                            </p>

                        )

                    }

                </div>

            ))

        )

    }

</div>

<div className="resume-section">

    <h2>Certificates</h2>

    {

        resume.certificates.length===0 ? (

            <p className="empty-section">

                No certificates added.

            </p>

        ) : (

            resume.certificates.map(certificate=>(

                <div
                    key={certificate.id}
                    className="education-preview"
                >

                    <h3>

                        {certificate.name}

                    </h3>

                    <strong>

                        {certificate.issuer}

                    </strong>

                    <p className="education-city">

                        {certificate.date}

                    </p>

                    {

                        certificate.link && (

                            <p className="education-description">

                                {certificate.link}

                            </p>

                        )

                    }

                </div>

            ))

        )

    }

</div>

<div className="resume-section">

    <h2>Courses</h2>

    {

        resume.courses.length===0 ? (

            <p className="empty-section">

                No courses added.

            </p>

        ) : (

            resume.courses.map(course=>(

                <div

                    key={course.id}

                    className="education-preview"

                >

                    <h3>

                        {course.name}

                    </h3>

                    <strong>

                        {course.provider}

                    </strong>

                    <p className="education-city">

                        {course.date}

                    </p>

                    {

                        course.link && (

                            <p className="education-description">

                                {course.link}

                            </p>

                        )

                    }

                </div>

            ))

        )

    }

</div>

<div className="resume-section">

    <h2>Volunteer Experience</h2>

    {

        resume.volunteer.length===0 ? (

            <p className="empty-section">

                No volunteer experience.

            </p>

        ):(

            resume.volunteer.map(item=>(

                <div

                    key={item.id}

                    className="education-preview"

                >

                    <div className="education-header">

                        <div>

                            <h3>

                                {item.organization}

                            </h3>

                            <strong>

                                {item.role}

                            </strong>

                        </div>

                        <div className="education-date">

                            {item.startDate}

                            {item.startDate && item.endDate && " - "}

                            {item.endDate}

                        </div>

                    </div>

                    {

                        item.city && (

                            <p className="education-city">

                                {item.city}

                            </p>

                        )

                    }

                    {

                        item.description && (

                            <p className="education-description">

                                {item.description}

                            </p>

                        )

                    }

                </div>

            ))

        )

    }

</div>

<div className="resume-section">

    <h2>Awards</h2>

    {

        resume.awards.length===0 ? (

            <p className="empty-section">

                No awards added.

            </p>

        ):(

            resume.awards.map(award=>(

                <div

                    key={award.id}

                    className="education-preview"

                >

                    <h3>

                        {award.title}

                    </h3>

                    <strong>

                        {award.issuer}

                    </strong>

                    <p className="education-city">

                        {award.date}

                    </p>

                    {

                        award.description && (

                            <p className="education-description">

                                {award.description}

                            </p>

                        )

                    }

                </div>

            ))

        )

    }

</div>

<div className="resume-section">

    <h2>Publications</h2>

    {

        resume.publications.length===0 ? (

            <p className="empty-section">

                No publications added.

            </p>

        ):(

            resume.publications.map(publication=>(

                <div

                    key={publication.id}

                    className="education-preview"

                >

                    <h3>

                        {publication.title}

                    </h3>

                    <strong>

                        {publication.publisher}

                    </strong>

                    <p className="education-city">

                        {publication.date}

                    </p>

                    {

                        publication.link && (

                            <p className="education-description">

                                {publication.link}

                            </p>

                        )

                    }

                    {

                        publication.description && (

                            <p className="education-description">

                                {publication.description}

                            </p>

                        )

                    }

                </div>

            ))

        )

    }

</div>

<div className="resume-section">

    <h2>Organizations</h2>

    {

        resume.organizations.map(org=>(

            <div

                key={org.id}

                className="education-preview"

            >

                <div className="education-header">

                    <div>

                        <h3>

                            {org.organization}

                        </h3>

                        <strong>

                            {org.role}

                        </strong>

                    </div>

                    <div className="education-date">

                        {org.startDate}

                        {org.startDate && org.endDate && " - "}

                        {org.endDate}

                    </div>

                </div>

                {

                    org.description && (

                        <p className="education-description">

                            {org.description}

                        </p>

                    )

                }

            </div>

        ))

    }

</div>

<div className="resume-section">

    <h2>Interests</h2>

    <p>

        {

            resume.interests

                .map(item=>item.name)

                .filter(Boolean)

                .join(" • ")

        }

    </p>

</div>

<div className="resume-section">

    <h2>References</h2>

    {

        resume.references.map(reference=>(

            <div

                key={reference.id}

                className="education-preview"

            >

                <h3>

                    {reference.name}

                </h3>

                <strong>

                    {reference.position}

                </strong>

                <p>

                    {reference.company}

                </p>

                <p>

                    {reference.email}

                </p>

                <p>

                    {reference.phone}

                </p>

            </div>

        ))

    }

</div>


<div className="resume-section">

    {

        resume.customSections.map(section=>(

            <div

                key={section.id}

                className="custom-preview"

            >

                <h2>

                    {section.title}

                </h2>

                <p>

                    {section.description}

                </p>

            </div>

        ))

    }

</div>


{/* =========================
    CUSTOM SECTIONS
========================= */}

{resume.customSections?.map((section) => {

    if (section.visible === false) return null;

    const type = section.type || "text";
    const items = section.items || [];

    return (
        <section
            key={section.id}
            className={`resume-section custom-section custom-section-${type}`}
        >

            {/* SECTION TITLE */}

            {section.title && (
                <h2>
                    {section.title}
                </h2>
            )}


            {/* =========================
                TEXT
            ========================== */}

            {type === "text" && section.description && (
                <p className="custom-text">
                    {section.description}
                </p>
            )}


            {/* =========================
                INTRODUCTION
            ========================== */}

            {type !== "text" && section.description && (
                <p className="custom-introduction">
                    {section.description}
                </p>
            )}


            {/* =========================
                LIST
            ========================== */}

            {type === "list" && items.length > 0 && (

                <div className="custom-list">

                    {items.map((item) => (

                        <div
                            key={item.id}
                            className="custom-list-item"
                        >

                            {item.title && (
                                <h3>
                                    {item.title}
                                </h3>
                            )}

                            {item.description && (
                                <p>
                                    {item.description}
                                </p>
                            )}

                        </div>

                    ))}

                </div>

            )}


            {/* =========================
                TIMELINE
            ========================== */}

            {type === "timeline" && items.length > 0 && (

                <div className="custom-timeline">

                    {items.map((item) => (

                        <div
                            key={item.id}
                            className="custom-timeline-item"
                        >

                            <div className="custom-timeline-date">

                                {item.date}

                            </div>

                            <div className="custom-timeline-content">

                                {item.title && (
                                    <h3>
                                        {item.title}
                                    </h3>
                                )}

                                {item.description && (
                                    <p>
                                        {item.description}
                                    </p>
                                )}

                            </div>

                        </div>

                    ))}

                </div>

            )}


            {/* =========================
                HIGHLIGHTS
            ========================== */}

            {type === "highlights" && items.length > 0 && (

                <div className="custom-highlights">

                    {items.map((item) => (

                        <div
                            key={item.id}
                            className="custom-highlight"
                        >

                            {item.title && (
                                <h3>
                                    {item.title}
                                </h3>
                            )}

                            {item.date && (
                                <span className="custom-highlight-date">
                                    {item.date}
                                </span>
                            )}

                            {item.description && (
                                <p>
                                    {item.description}
                                </p>
                            )}

                        </div>

                    ))}

                </div>

            )}


            {/* =========================
                LINKS
            ========================== */}

            {type === "links" && items.length > 0 && (

                <div className="custom-links">

                    {items.map((item) => (

                        <div
                            key={item.id}
                            className="custom-link-item"
                        >

                            {item.title && (
                                <h3>
                                    {item.title}
                                </h3>
                            )}

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.link}
                                </a>
                            )}

                            {item.description && (
                                <p>
                                    {item.description}
                                </p>
                            )}

                        </div>

                    ))}

                </div>

            )}


            {/* =========================
                INFORMATION / CONTACT
            ========================== */}

            {type === "contact" && items.length > 0 && (

                <div className="custom-contact">

                    {items.map((item) => (

                        <div
                            key={item.id}
                            className="custom-contact-item"
                        >

                            {item.title && (
                                <strong>
                                    {item.title}
                                </strong>
                            )}

                            {item.value && (
                                <span>
                                    {item.value}
                                </span>
                            )}

                        </div>

                    ))}

                </div>

            )}

        </section>
    );

})}
            <style>
            {`
    
 



.paper{

    width:794px;

    min-height:1123px;

    background:#fff;

    padding:55px;

    box-sizing:border-box;

    box-shadow:0 10px 40px rgba(0,0,0,.15);

    font-family:Arial, Helvetica, sans-serif;

    color:#222;

}

 
    .paper h1{

    margin:0;

    font-size:42px;

    font-weight:700;

    line-height:1.1;

}
    .paper h3{

    margin-top:8px;

     
    color:#2563eb;

    font-size:20px;

    font-weight:500;

}
    .paper > p{

    margin-top:30px;

    line-height:1.7;

    color:#555;

}
 

.resume-section h2{

    margin-bottom:15px;

    font-size:20px;

    border-bottom:2px solid #222;

    padding-bottom:6px;

}
    .resume-section h2{

    margin-bottom:18px;

    padding-bottom:8px;

    border-bottom:2px solid #2563eb;

    text-transform:uppercase;

    letter-spacing:2px;

    font-size:18px;

}

.education-preview{

    margin-bottom:30px;

}

.education-preview h3{

    margin:0;

    font-size:19px;

    font-weight:700;

}

.education-preview strong{

    display:block;

    margin-top:5px;

    color:#2563eb;

}
    .education-preview p{

    margin-top:8px;

    line-height:1.6;

}

.education-preview small{

    display:block;

    margin-top:4px;

    color:#888;

}

.empty-section{

    color:#999;

}
.resume-header{

    text-align:center;

    margin-bottom:35px;

}
.header-line{

    width:100%;

    height:2px;

    background:#2563eb;

    margin-top:25px;

}
.resume-section{

    margin-top:30px;

}
.resume-section p{

    line-height:1.7;

    color:#555;

}



.contact-info{

    display:flex;

    justify-content:center;

    align-items:center;

    flex-wrap:wrap;

    gap:18px;

    margin-top:18px;

    color:#666;

    font-size:14px;

}
.contact-info span{

    position:relative;

}
.contact-info span:not(:last-child)::after{

    content:"•";

    margin-left:18px;

    color:#bbb;

}

.education-header{

    display:flex;

    justify-content:space-between;

    align-items:flex-start;

    gap:20px;

}

.education-date{

    color:#666;

    font-size:13px;

    white-space:nowrap;

}

.education-city{

    margin-top:6px;

    color:#666;

    font-style:italic;

}

.education-description{

    margin-top:10px;

    color:#444;

    line-height:1.6;

}

.skill-row{

    margin-bottom:16px;

}

.skill-row span{

    display:block;

    margin-bottom:6px;

    font-weight:600;

}

.skill-bar{

    width:100%;

    height:8px;

    background:#e5e7eb;

    border-radius:20px;

    overflow:hidden;

}

.skill-fill{

    height:100%;

    background:#2563eb;

}
.language-row{

    display:flex;

    justify-content:space-between;

    margin-bottom:10px;

    padding-bottom:6px;

    border-bottom:1px solid #eee;

}`}
        </style>

            </div>

    );

}