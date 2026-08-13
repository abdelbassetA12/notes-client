 import { useState } from "react";
import PersonalSection from "../sections/PersonalSection";
import ProfileSection from "../sections/ProfileSection";
import EducationSection from "../sections/EducationSection";
import ExperienceSection from "../sections/ExperienceSection";
import SkillsSection from "../sections/SkillsSection";
import LanguagesSection from "../sections/LanguagesSection";
import TemplateSelector from "../templates/TemplateSelector";
import ProjectsSection from "../sections/ProjectsSection";
import CertificatesSection from "../sections/CertificatesSection";
import CoursesSection from "../sections/CoursesSection";
import VolunteerSection from "../sections/VolunteerSection";
import AwardsSection from "../sections/AwardsSection";
import PublicationsSection from "../sections/PublicationsSection";
import OrganizationsSection from "../sections/OrganizationsSection";
import InterestsSection from "../sections/InterestsSection";
import ReferencesSection from "../sections/ReferencesSection";
import CustomSections from "../sections/CustomSections";
import DesignSection from "../design/DesignSection";

import Accordion from "../common/Accordion";
export default function EditorSidebar(){
    const [activeTab, setActiveTab] = useState("content");

    return(
        <>
        <aside className="editor-sidebar">
            <div className="editor-tabs">

    <button
        className={activeTab === "content" ? "active" : ""}
        onClick={() => setActiveTab("content")}
    >
        Content
    </button>

    <button
        className={activeTab === "design" ? "active" : ""}
        onClick={() => setActiveTab("design")}
    >
        Design
    </button>

    <button
        className={activeTab === "templates" ? "active" : ""}
        onClick={() => setActiveTab("templates")}
    >
        Templates
    </button>

</div>

 

{activeTab === "content" && (
    <>

        <Accordion
            title="Personal Details"
            subtitle="Basic information"
        >
            <PersonalSection />
        </Accordion>

        <Accordion
            title="Professional Summary"
            subtitle="About yourself"
        >
            <ProfileSection />
        </Accordion>

        <Accordion
            title="Experience"
            subtitle="Work history"
        >
            <ExperienceSection />
        </Accordion>

        <Accordion
            title="Education"
            subtitle="Education history"
        >
            <EducationSection />
        </Accordion>

        <Accordion
            title="Skills"
            subtitle="Professional skills"
        >
            <SkillsSection />
        </Accordion>

        <Accordion
            title="Languages"
            subtitle="Languages"
        >
            <LanguagesSection />
        </Accordion>

        <Accordion
            title="Projects"
            subtitle="Personal & professional projects"
        >
            <ProjectsSection />
        </Accordion>

        <Accordion
            title="Certificates"
            subtitle="Certificates"
        >
            <CertificatesSection />
        </Accordion>

        <Accordion
            title="Courses"
            subtitle="Courses"
        >
            <CoursesSection />
        </Accordion>

        <Accordion
            title="Volunteer"
            subtitle="Volunteer experience"
        >
            <VolunteerSection />
        </Accordion>

        <Accordion
            title="Awards"
            subtitle="Awards & achievements"
        >
            <AwardsSection />
        </Accordion>

        <Accordion
            title="Publications"
            subtitle="Books & publications"
        >
            <PublicationsSection />
        </Accordion>

        <Accordion
            title="Organizations"
            subtitle="Organizations"
        >
            <OrganizationsSection />
        </Accordion>

        <Accordion
            title="Interests"
            subtitle="Personal interests"
        >
            <InterestsSection />
        </Accordion>

        <Accordion
            title="References"
            subtitle="Professional references"
        >
            <ReferencesSection />
        </Accordion>

        <Accordion
            title="Custom Sections"
            subtitle="Additional sections"
        >
            <CustomSections />
        </Accordion>

    </>
)}
{activeTab === "templates" && (
    <TemplateSelector />
)}
{activeTab === "design" && (

    <DesignSection />

)}

           

        </aside>
        <style>
            {`
            .editor-sidebar{

    width:420px;

    background:white;

    border-right:1px solid #e5e7eb;

    overflow:auto;

    padding:30px;

}


.editor-tabs{

    display:flex;

    gap:8px;

    margin-bottom:20px;

}

.editor-tabs button{

    flex:1;

    padding:10px;

    border:none;

    border-radius:10px;

    background:#f3f4f6;

    cursor:pointer;

    font-weight:600;

}

.editor-tabs button.active{

    background:#2563eb;

    color:white;

}`}
        </style>
        </>

        

    )

}