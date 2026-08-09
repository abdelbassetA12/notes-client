

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

