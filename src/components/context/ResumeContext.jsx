import { createContext, useContext, useState } from "react";
import defaultResume from "../data/defaultResume";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {

    const [resume, setResume] = useState(defaultResume);
    const [selectedTemplate, setSelectedTemplate] = useState("modern");
const [design, setDesign] = useState({

     // COLORS
    // =========================

    sidebarBackground: "#1f2937",
    mainBackground: "#ffffff",

    headerBackground: "#ffffff",

    primaryColor: "#2563eb",

    nameColor: "#111827",
    headingColor: "#111827",
    subheadingColor: "#374151",
    textColor: "#4b5563",

    linkColor: "#2563eb",
    dividerColor: "#d1d5db",

  // Colors
  primaryColor:"#2563eb",
  textColor:"#374151",
  backgroundColor:"#ffffff",

  // Typography
  fontFamily:"Arial",
  fontSize:16,

  // Layout
  pageSize:"A4",
  layout:"single",

  // Sections
  showDividers:true,
  uppercaseTitles:true,
  sectionTitleAlign:"left",

  // Header
  headerAlign:"center",

  // Skills
  skillStyle:"bars",

  // Photo
  showPhoto:true,
  photoStyle:"circle",

  // Icons
  showIcons:true

});

    const updatePersonal = (field, value) => {

        setResume(prev => ({
            ...prev,
            personal: {
                ...prev.personal,
                [field]: value
            }
        }));

    };

    const updateProfile = (value) => {

        setResume(prev => ({
            ...prev,
            profile: value
        }));

    };

    const addItem = (section, item) => {

    setResume(prev => ({

        ...prev,

        [section]: [

            ...prev[section],

            item

        ]

    }));

};
 

const removeItem = (

    section,

    index

) => {

    setResume(prev => ({

        ...prev,

        [section]:

        prev[section].filter(

            (_,i)=>i!==index

        )

    }));

};



const updateItemField = (
    section,
    id,
    field,
    value
) => {

    setResume(prev => ({

        ...prev,

        [section]: prev[section].map(item =>

            item.id === id
                ? {
                    ...item,
                    [field]: value
                }
                : item

        )

    }));

};


const updateDesign=(field,value)=>{

    setDesign(prev=>({

        ...prev,

        [field]:value

    }));

};
    return (

        <ResumeContext.Provider
            value={{
                resume,
                setResume,
                updatePersonal,
                updateProfile,
                addItem,


 

removeItem,
updateItemField,

selectedTemplate,
setSelectedTemplate,

    design,

    updateDesign,
            }}
        >

            {children}

        </ResumeContext.Provider>

    );

}

export function useResume() {

    return useContext(ResumeContext);

}