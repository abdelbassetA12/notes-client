import ColorSettings from "./ColorSettings";
import TypographySettings from "./TypographySettings";
import LayoutSettings from "./LayoutSettings";
import SectionSettings from "./SectionSettings";
import HeaderSettings from "./HeaderSettings";
import SkillsSettings from "./SkillsSettings";
import PhotoSettings from "./PhotoSettings";
import Accordion from "../common/Accordion";

export default function DesignSection(){

    return(

        <>
        <Accordion
                    title="Color Settings"
                     
                >
                    <ColorSettings />
                </Accordion>

           
            <Accordion title="Typography Settings">
                <TypographySettings />
            </Accordion>
            
            <Accordion title="Layout Settings">
               <LayoutSettings />
            </Accordion>
            

            <Accordion title="Section Settings">
                <SectionSettings />
                
            </Accordion>

            
            <Accordion title="Header Settings">
                <HeaderSettings/>
                
            </Accordion>
            
            <Accordion title="Skills Settings">
                <SkillsSettings />
            </Accordion>
            
            
            <Accordion title="Photo Settings">
                <PhotoSettings />
            </Accordion>
            
           

            

        </>

    );

}