import { createContext, useContext, useState } from "react";
import defaultResume from "../data/defaultResume";

const ResumeContext = createContext();

const defaultDesign = {
    // =========================================================
    // COLORS
    // =========================================================

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

    sidebarTextColor: "#ffffff",

    // =========================================================
    // TYPOGRAPHY
    // =========================================================

    fontFamily: "Arial",

    // General
    baseFontSize: 10,

    // Header
    nameFontSize: 32,
    jobTitleFontSize: 10,

    // Sections
    sectionTitleFontSize: 12,
    headingFontSize: 11.5,
    subheadingFontSize: 9.5,
    textFontSize: 9.3,

    // Supporting text
    dateFontSize: 8.5,
    locationFontSize: 8.5,
    linkFontSize: 8.5,

    // Sidebar
    sidebarTextFontSize: 10.5,
    profileFontSize: 10.5,
    contactFontSize: 10,
    languageFontSize: 10.5,
    interestFontSize: 10.5,

    // Skills
    skillFontSize: 9.5,
    skillPercentageFontSize: 8,

    // =========================================================
    // LAYOUT
    // =========================================================

    pageSize: "A4",
    layout: "single",

    // =========================================================
    // SECTIONS
    // =========================================================

    showDividers: true,
    uppercaseTitles: true,
    sectionTitleAlign: "left",

    // =========================================================
    // HEADER
    // =========================================================

    headerAlign: "left",

    // =========================================================
    // SKILLS
    // =========================================================

    skillStyle: "bars",

    // =========================================================
    // PHOTO
    // =========================================================

    showPhoto: true,
    photoStyle: "circle",

    // =========================================================
    // ICONS
    // =========================================================

    showIcons: true
};

export function ResumeProvider({ children }) {

    const [resume, setResume] = useState(defaultResume);

    const [selectedTemplate, setSelectedTemplate] =
        useState("modern");

    const [design, setDesign] =
        useState(defaultDesign);

    // =========================================================
    // PERSONAL
    // =========================================================

    const updatePersonal = (field, value) => {

        setResume(prev => ({
            ...prev,

            personal: {
                ...prev.personal,
                [field]: value
            }
        }));
    };

    // =========================================================
    // PROFILE
    // =========================================================

    const updateProfile = (value) => {

        setResume(prev => ({
            ...prev,
            profile: value
        }));
    };

    // =========================================================
    // ADD ITEM
    // =========================================================

    const addItem = (section, item) => {

        setResume(prev => ({
            ...prev,

            [section]: [
                ...(Array.isArray(prev[section])
                    ? prev[section]
                    : []),

                item
            ]
        }));
    };

    // =========================================================
    // REMOVE ITEM
    // =========================================================

    const removeItem = (section, index) => {

        setResume(prev => ({
            ...prev,

            [section]: Array.isArray(prev[section])
                ? prev[section].filter(
                    (_, i) => i !== index
                )
                : []
        }));
    };

    // =========================================================
    // UPDATE ITEM FIELD
    // =========================================================

    const updateItemField = (
        section,
        id,
        field,
        value
    ) => {

        setResume(prev => ({
            ...prev,

            [section]: Array.isArray(prev[section])
                ? prev[section].map(item =>
                    item.id === id
                        ? {
                            ...item,
                            [field]: value
                        }
                        : item
                )
                : []
        }));
    };

    // =========================================================
    // UPDATE DESIGN
    // =========================================================

    const updateDesign = (field, value) => {

        setDesign(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // =========================================================
    // RESET DESIGN
    // =========================================================

    const resetDesign = () => {

        setDesign({
            ...defaultDesign
        });
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
                setDesign,
                updateDesign,
                resetDesign
            }}
        >
            {children}
        </ResumeContext.Provider>
    );
}

export function useResume() {

    return useContext(ResumeContext);
}

/*

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

    

    nameColor: "#111827",
    headingColor: "#111827",
    subheadingColor: "#374151",
    

    linkColor: "#2563eb",
    dividerColor: "#d1d5db",

  // Colors
  primaryColor:"#2563eb",
  textColor:"#374151",
  backgroundColor:"#ffffff",

  // =========================================================
    // TYPOGRAPHY
    // =========================================================

    // Global font
    fontFamily: "Arial",

    // Base size
    fontSize: 13,


    // ---------------------------------------------------------
    // Individual sizes
    // ---------------------------------------------------------

    nameFontSize: 34,

    jobTitleFontSize: 10,

    sectionTitleFontSize: 12,

    entryTitleFontSize: 11.5,

    subheadingFontSize: 9.5,

    bodyFontSize: 9.3,

    sidebarTextFontSize: 10.5,

    contactFontSize: 10,

    dateFontSize: 8.5,

    linkFontSize: 8.5,

    locationFontSize: 8.5,


    // ---------------------------------------------------------
    // Font weights
    // ---------------------------------------------------------

    nameFontWeight: 700,

    sectionTitleFontWeight: 700,

    entryTitleFontWeight: 700,

    subheadingFontWeight: 600,

    bodyFontWeight: 400,


    // ---------------------------------------------------------
    // Line heights
    // ---------------------------------------------------------

    bodyLineHeight: 1.55,

    sidebarLineHeight: 1.6,


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




*/







 