import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Input from "../common/Input";
import { useResume } from "../context/ResumeContext";

export default function PersonalSection() {

    const {
        resume,
        updatePersonal
    } = useResume();

    const personal = resume?.personal || {};

    /* =========================================================
       PHOTO UPLOAD
    ========================================================= */

    const handlePhotoChange = (e) => {

        const file = e.target.files?.[0];

        if (!file) return;

        // Only images
        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image.");
            return;
        }

        // Optional size limit: 5MB
        if (file.size > 5 * 1024 * 1024) {
            alert("Image size must be less than 5MB.");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {

            updatePersonal(
                "photo",
                reader.result
            );

        };

        reader.readAsDataURL(file);
    };


    /* =========================================================
       REMOVE PHOTO
    ========================================================= */

    const removePhoto = () => {

        updatePersonal(
            "photo",
            ""
        );

    };


    return (

        <Section>

            <SectionHeader
                title="Personal Information"
            />


            {/* =================================================
                PHOTO
            ================================================= */}

            <div className="personal-photo-section">

                <label className="personal-photo-label">
                    Profile Photo
                </label>


                <div className="personal-photo-container">

                    {/* PREVIEW */}

                    <div className="personal-photo-preview">

                        {personal.photo ? (

                            <img
                                src={personal.photo}
                                alt="Profile"
                            />

                        ) : (

                            <div className="personal-photo-placeholder">

                                <span>+</span>

                                <small>
                                    Add Photo
                                </small>

                            </div>

                        )}

                    </div>


                    {/* ACTIONS */}

                    <div className="personal-photo-actions">

                        <label
                            htmlFor="resume-photo-upload"
                            className="personal-photo-upload"
                        >
                            {personal.photo
                                ? "Change Photo"
                                : "Upload Photo"
                            }
                        </label>

                        <input
                            id="resume-photo-upload"
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            hidden
                        />


                        {personal.photo && (

                            <button
                                type="button"
                                className="personal-photo-remove"
                                onClick={removePhoto}
                            >
                                Remove
                            </button>

                        )}

                        <p>
                            JPG, PNG or WEBP · Max 5MB
                        </p>

                    </div>

                </div>

            </div>


            {/* =================================================
                FIRST NAME
            ================================================= */}

            <Input
                label="First Name"
                value={personal.firstName || ""}
                placeholder="John"
                onChange={(e) =>
                    updatePersonal(
                        "firstName",
                        e.target.value
                    )
                }
            />


            {/* =================================================
                LAST NAME
            ================================================= */}

            <Input
                label="Last Name"
                value={personal.lastName || ""}
                placeholder="Doe"
                onChange={(e) =>
                    updatePersonal(
                        "lastName",
                        e.target.value
                    )
                }
            />


            {/* =================================================
                JOB TITLE
            ================================================= */}

            <Input
                label="Job Title"
                value={personal.jobTitle || ""}
                placeholder="Frontend Developer"
                onChange={(e) =>
                    updatePersonal(
                        "jobTitle",
                        e.target.value
                    )
                }
            />


            {/* =================================================
                EMAIL
            ================================================= */}

            <Input
                label="Email"
                value={personal.email || ""}
                onChange={(e) =>
                    updatePersonal(
                        "email",
                        e.target.value
                    )
                }
            />


            {/* =================================================
                PHONE
            ================================================= */}

            <Input
                label="Phone"
                value={personal.phone || ""}
                onChange={(e) =>
                    updatePersonal(
                        "phone",
                        e.target.value
                    )
                }
            />


            {/* =================================================
                CITY
            ================================================= */}

            <Input
                label="City"
                value={personal.city || ""}
                onChange={(e) =>
                    updatePersonal(
                        "city",
                        e.target.value
                    )
                }
            />


            {/* =================================================
                WEBSITE
            ================================================= */}

            <Input
                label="Website"
                value={personal.website || ""}
                onChange={(e) =>
                    updatePersonal(
                        "website",
                        e.target.value
                    )
                }
            />


            {/* =================================================
                PHOTO STYLES
            ================================================= */}

            <style>{`

                .personal-photo-section {
                    margin-bottom: 24px;
                }

                .personal-photo-label {
                    display: block;
                    margin-bottom: 10px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #0f172a;
                }

                .personal-photo-container {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .personal-photo-preview {
                    width: 82px;
                    height: 82px;
                    flex: 0 0 82px;
                    border-radius: 50%;
                    overflow: hidden;
                    background: #f1f5f9;
                    border: 1px solid #e2e8f0;
                }

                .personal-photo-preview img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                }

                .personal-photo-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #64748b;
                }

                .personal-photo-placeholder span {
                    font-size: 25px;
                    line-height: 1;
                    font-weight: 300;
                }

                .personal-photo-placeholder small {
                    margin-top: 4px;
                    font-size: 10px;
                }

                .personal-photo-actions {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 6px;
                }

                .personal-photo-upload {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px 14px;
                    border-radius: 8px;
                    background: #2563eb;
                    color: white;
                    font-size: 12px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: .2s ease;
                }

                .personal-photo-upload:hover {
                    opacity: .9;
                }

                .personal-photo-remove {
                    border: none;
                    background: transparent;
                    padding: 0;
                    color: #dc2626;
                    font-size: 11px;
                    cursor: pointer;
                }

                .personal-photo-actions p {
                    margin: 0;
                    color: #94a3b8;
                    font-size: 10px;
                }

            `}</style>

        </Section>
    );
}
/*
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Input from "../common/Input";

import { useResume } from "../context/ResumeContext";
import ItemAccordion from "../common/ItemAccordion";

export default function PersonalSection(){
 
    const {

        resume,

        updatePersonal

    } = useResume();

    return(

        <Section>

            <SectionHeader

                title="Personal Information"

            />

            <Input

                label="First Name"

                value={resume.personal.firstName}

                placeholder="John"

                onChange={(e)=>

                    updatePersonal(

                        "firstName",

                        e.target.value

                    )

                }

            />

            <Input

                label="Last Name"

                value={resume.personal.lastName}

                placeholder="Doe"

                onChange={(e)=>

                    updatePersonal(

                        "lastName",

                        e.target.value

                    )

                }

            />

            <Input

                label="Job Title"

                value={resume.personal.jobTitle}

                placeholder="Frontend Developer"

                onChange={(e)=>

                    updatePersonal(

                        "jobTitle",

                        e.target.value

                    )

                }

            />

            <Input
    label="Email"
    value={resume.personal.email}
    onChange={(e)=>
        updatePersonal("email", e.target.value)
    }
/>

<Input
    label="Phone"
    value={resume.personal.phone}
    onChange={(e)=>
        updatePersonal("phone", e.target.value)
    }
/>

<Input
    label="City"
    value={resume.personal.city}
    onChange={(e)=>
        updatePersonal("city", e.target.value)
    }
/>

<Input
    label="Website"
    value={resume.personal.website}
    onChange={(e)=>
        updatePersonal("website", e.target.value)
    }
/>

        </Section>

    );

}
*/
