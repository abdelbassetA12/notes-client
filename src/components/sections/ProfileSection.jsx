import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import TextArea from "../common/TextArea";

import { useResume } from "../context/ResumeContext";

export default function ProfileSection(){

    const {

        resume,

        updateProfile

    } = useResume();

    return(

        <Section>

            <SectionHeader

                title="Professional Summary"

            />

            <TextArea

                value={resume.profile}

                placeholder="Tell employers about yourself..."

                onChange={(e)=>

                    updateProfile(

                        e.target.value

                    )

                }

            />

        </Section>

    );

}