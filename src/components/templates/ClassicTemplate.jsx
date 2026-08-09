import { useResume } from "../context/ResumeContext";

export default function ClassicTemplate({ resume }) {

    const { design } = useResume();
    const title = (text) => (

    <h2
        style={{
            textAlign: design.sectionTitleAlign,
            textTransform: design.uppercaseTitles
                ? "uppercase"
                : "none",
        }}
    >
        {text}
    </h2>

);

    return (

        <div
            className="paper"
            style={{
                "--primary": design.primaryColor,
                "--text": design.textColor,
                "--background": design.backgroundColor,
                "--font": design.fontFamily,
                "--fontSize": `${design.fontSize}px`,
            }}
        >

            <div
                className="resume-header"
                style={{
                    textAlign: design.headerAlign,
                }}
            >

                {
                    design.showPhoto &&
                    resume.personal.photo &&

                    <img
                        src={resume.personal.photo}
                        alt=""
                        className={`photo ${design.photoStyle}`}
                    />
                }

                <h1>

                    {resume.personal.firstName || "First Name"}{" "}
                    {resume.personal.lastName || "Last Name"}

                </h1>

                <h3>

                    {resume.personal.jobTitle || "Job Title"}

                </h3>

                <div className="contact-info">

                    {
                        resume.personal.email &&
                        <span>{resume.personal.email}</span>
                    }

                    {
                        resume.personal.phone &&
                        <span>{resume.personal.phone}</span>
                    }

                    {
                        resume.personal.city &&
                        <span>{resume.personal.city}</span>
                    }

                    {
                        resume.personal.website &&
                        <span>{resume.personal.website}</span>
                    }

                </div>

            </div>
            {/* ================= PROFILE ================= */}

<div className="resume-section">

    {title("Professional Profile")}

    <p>

        {

            resume.profile ||

            "Write a short professional summary."

        }

    </p>

</div>

{/* ================= EDUCATION ================= */}

<div className="resume-section">

    {title("Education")}

    {

        resume.education.length === 0 ?

        (

            <p className="empty-section">

                No education added.

            </p>

        )

        :

        resume.education.map(education=>(

            <div

                key={education.id}

                className="item"

            >

                <div className="item-header">

                    <div>

                        <h3>

                            {education.school}

                        </h3>

                        <strong>

                            {education.degree}

                        </strong>

                    </div>

                    <span>

                        {education.startDate}

                        {

                            education.startDate &&
                            education.endDate &&
                            " - "

                        }

                        {education.endDate}

                    </span>

                </div>

                {

                    education.city &&

                    <p className="city">

                        {education.city}

                    </p>

                }

                {

                    education.description &&

                    <p>

                        {education.description}

                    </p>

                }

            </div>

        ))

    }

</div>

{/* ================= EXPERIENCE ================= */}

<div className="resume-section">

    {title("Experience")}

    {

        resume.experience.length===0 ?

        (

            <p className="empty-section">

                No experience added.

            </p>

        )

        :

        resume.experience.map(exp=>(

            <div

                key={exp.id}

                className="item"

            >

                <div className="item-header">

                    <div>

                        <h3>

                            {exp.company}

                        </h3>

                        <strong>

                            {exp.position}

                        </strong>

                    </div>

                    <span>

                        {exp.startDate}

                        {

                            exp.startDate &&
                            exp.endDate &&
                            " - "

                        }

                        {exp.endDate}

                    </span>

                </div>

                {

                    exp.city &&

                    <p className="city">

                        {exp.city}

                    </p>

                }

                {

                    exp.description &&

                    <p>

                        {exp.description}

                    </p>

                }

            </div>

        ))

    }

</div>

{/* ================= SKILLS ================= */}

<div className="resume-section">

    {title("Skills")}

    {

        resume.skills.length===0 ?

        <p className="empty-section">

            No skills added.

        </p>

        :

        resume.skills.map(skill=>(

            <div
                key={skill.id}
                className="skill-row"
            >

                <span>

                    {skill.name}

                </span>

                {

                    design.skillStyle==="bars" &&

                    <div className="skill-bar">

                        <div

                            className="skill-fill"

                            style={{

                                width:`${skill.level}%`

                            }}

                        />

                    </div>

                }

                {

                    design.skillStyle==="text" &&

                    <strong>

                        {skill.level}%

                    </strong>

                }

                {

                    design.skillStyle==="dots" &&

                    <div className="skill-dots">

                        {

                            [20,40,60,80,100].map(value=>(

                                <span

                                    key={value}

                                    className={
                                        skill.level>=value
                                        ?"dot active"
                                        :"dot"
                                    }

                                />

                            ))

                        }

                    </div>

                }

            </div>

        ))

    }

</div>

{/* ================= LANGUAGES ================= */}

<div className="resume-section">

    {title("Languages")}

    {

        resume.languages.length===0 ?

        <p className="empty-section">

            No languages added.

        </p>

        :

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

{/* ================= PROJECTS ================= */}

<div className="resume-section">

    {title("Projects")}

    {

        resume.projects.length===0 ?

        <p className="empty-section">

            No projects added.

        </p>

        :

        resume.projects.map(project=>(

            <div

                key={project.id}

                className="item"

            >

                <div className="item-header">

                    <div>

                        <h3>

                            {project.name}

                        </h3>

                        <strong>

                            {project.role}

                        </strong>

                    </div>

                    <span>

                        {project.startDate}

                        {

                            project.startDate &&
                            project.endDate &&
                            " - "

                        }

                        {project.endDate}

                    </span>

                </div>

                {

                    project.link &&

                    <p className="city">

                        {project.link}

                    </p>

                }

                {

                    project.description &&

                    <p>

                        {project.description}

                    </p>

                }

            </div>

        ))

    }

</div>

<div className="resume-section">

    {title("Certificates")}

    {

        resume.certificates.length===0 ?

        <p className="empty-section">

            No certificates added.

        </p>

        :

        resume.certificates.map(item=>(

            <div
                key={item.id}
                className="item"
            >

                <h3>{item.name}</h3>

                <strong>{item.issuer}</strong>

                <p className="city">

                    {item.date}

                </p>

                {

                    item.link &&

                    <p>{item.link}</p>

                }

            </div>

        ))

    }

</div>

<div className="resume-section">

    {title("Courses")}

    {

        resume.courses.length===0 ?

        <p className="empty-section">

            No courses added.

        </p>

        :

        resume.courses.map(item=>(

            <div
                key={item.id}
                className="item"
            >

                <h3>{item.name}</h3>

                <strong>{item.provider}</strong>

                <p className="city">

                    {item.date}

                </p>

                {

                    item.link &&

                    <p>{item.link}</p>

                }

            </div>

        ))

    }

</div>

<div className="resume-section">

    {title("Volunteer Experience")}

    {

        resume.volunteer.map(item=>(

            <div
                key={item.id}
                className="item"
            >

                <div className="item-header">

                    <div>

                        <h3>{item.organization}</h3>

                        <strong>{item.role}</strong>

                    </div>

                    <span>

                        {item.startDate}

                        {

                            item.startDate &&
                            item.endDate &&
                            " - "

                        }

                        {item.endDate}

                    </span>

                </div>

                {

                    item.city &&

                    <p className="city">

                        {item.city}

                    </p>

                }

                {

                    item.description &&

                    <p>{item.description}</p>

                }

            </div>

        ))

    }

</div>

<div className="resume-section">

    {title("Awards")}

    {

        resume.awards.map(item=>(

            <div
                key={item.id}
                className="item"
            >

                <h3>{item.title}</h3>

                <strong>{item.issuer}</strong>

                <p className="city">

                    {item.date}

                </p>

                {

                    item.description &&

                    <p>{item.description}</p>

                }

            </div>

        ))

    }

</div>

<div className="resume-section">

    {title("Publications")}

    {

        resume.publications.map(item=>(

            <div
                key={item.id}
                className="item"
            >

                <h3>{item.title}</h3>

                <strong>{item.publisher}</strong>

                <p className="city">

                    {item.date}

                </p>

                {

                    item.link &&

                    <p>{item.link}</p>

                }

                {

                    item.description &&

                    <p>{item.description}</p>

                }

            </div>

        ))

    }

</div>

<div className="resume-section">

    {title("Organizations")}

    {

        resume.organizations.map(item=>(

            <div
                key={item.id}
                className="item"
            >

                <div className="item-header">

                    <div>

                        <h3>{item.organization}</h3>

                        <strong>{item.role}</strong>

                    </div>

                    <span>

                        {item.startDate}

                        {

                            item.startDate &&
                            item.endDate &&
                            " - "

                        }

                        {item.endDate}

                    </span>

                </div>

                {

                    item.description &&

                    <p>{item.description}</p>

                }

            </div>

        ))

    }

</div>

<div className="resume-section">

    {title("Interests")}

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

    {title("References")}

    {

        resume.references.map(item=>(

            <div
                key={item.id}
                className="item"
            >

                <h3>{item.name}</h3>

                <strong>{item.position}</strong>

                <p>{item.company}</p>

                <p>{item.email}</p>

                <p>{item.phone}</p>

            </div>

        ))

    }

</div>

{

    resume.customSections.map(section=>(

        <div
            key={section.id}
            className="resume-section"
        >

            {title(section.title)}

            <p>

                {section.description}

            </p>

        </div>

    ))

}
 <style>
    {`
    .paper{

    width:794px;
    min-height:1123px;

    background:var(--background,#fff);

    color:var(--text,#222);

    font-family:var(--font,Arial);

    font-size:var(--fontSize,16px);

    padding:55px;

    margin:auto;

    box-sizing:border-box;

    box-shadow:0 10px 40px rgba(0,0,0,.15);

}

.resume-header{

    margin-bottom:40px;

}

.photo{

    width:120px;
    height:120px;
    object-fit:cover;

    margin-bottom:18px;

}

.photo.circle{

    border-radius:50%;

}

.photo.square{

    border-radius:0;

}

.paper h1{

    margin:0;

    font-size:40px;

    color:var(--text);

}

.paper h2{

    margin:0 0 16px;

    padding-bottom:8px;

    color:var(--primary);

    border-bottom:2px solid var(--primary);

    letter-spacing:1px;

}

.paper h3{

    margin:0;

    color:var(--primary);

}

.contact-info{

    display:flex;

    justify-content:center;

    flex-wrap:wrap;

    gap:16px;

    margin-top:15px;

    color:#666;

}

.resume-section{

    margin-top:35px;

}

.item{

    margin-bottom:28px;

}

.item-header{

    display:flex;

    justify-content:space-between;

    align-items:flex-start;

    gap:20px;

}

.item strong{

    display:block;

    margin-top:5px;

    color:var(--primary);

}

.city{

    margin-top:6px;

    color:#777;

    font-style:italic;

}

.empty-section{

    color:#999;

}

.skill-row{

    margin-bottom:16px;

}

.skill-row span{

    display:block;

    margin-bottom:8px;

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

    background:var(--primary);

}

.skill-dots{

    display:flex;

    gap:8px;

}

.dot{

    width:10px;

    height:10px;

    border-radius:50%;

    background:#d1d5db;

}

.dot.active{

    background:var(--primary);

}

.language-row{

    display:flex;

    justify-content:space-between;

    padding:8px 0;

    border-bottom:1px solid #eee;

}

p{

    line-height:1.7;

}








 
`}
 </style>

        </div>
    );

}


/*
export default function ClassicTemplate({ resume  }) {

    return (

        <>
            <div className="paper">

                <header className="header">

                    <h1>
                        {resume.personal.firstName}{" "}
                        {resume.personal.lastName}
                    </h1>

                    <p>
                        {resume.personal.jobTitle}
                    </p>

                </header>

                <section>

                    <h2>Profile</h2>

                    <p>{resume.profile}</p>

                </section>

                <section>

                    <h2>Experience</h2>

                    {resume.experience.map(exp => (

                        <div key={exp.id}>

                            <strong>
                                {exp.position}
                            </strong>

                            <div>
                                {exp.company}
                            </div>

                        </div>

                    ))}

                </section>

                <section>

                    <h2>Education</h2>

                    {resume.education.map(edu => (

                        <div key={edu.id}>

                            <strong>
                                {edu.school}
                            </strong>

                            <div>
                                {edu.degree}
                            </div>

                        </div>

                    ))}

                </section>

            </div>

            <style>{`

.paper{

    width:794px;

    min-height:1123px;

    background:white;

    padding:60px;

    box-sizing:border-box;

    font-family:Georgia, serif;

}

 
.header{

    border-bottom:3px solid black;

    padding-bottom:20px;

    margin-bottom:30px;

}

.header h1{

    margin:0;

    font-size:38px;

}

.header p{

    margin-top:10px;

    color:#666;

}

section{

    margin-top:25px;

}

section h2{

    text-transform:uppercase;

    font-size:18px;

    border-bottom:1px solid black;

    padding-bottom:5px;

    margin-bottom:15px;

}

`}</style>

        </>

    );

} */