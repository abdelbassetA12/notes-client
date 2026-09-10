


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

// Title appearance
sectionTitleStyle: "accent",
sectionTitleWeight: 700,
sectionTitleLetterSpacing: 1.8,

// Divider
sectionDividerWidth: 40,
sectionDividerThickness: 2,

// Spacing
sectionSpacing: 29,
sectionTitleSpacing: 19,
entrySpacing: 20,

// Timeline
showTimeline: true,
showTimelineDots: true,

// Item dividers
showItemDividers: true,

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

photoSize: 145,

photoBorderWidth: 3,

photoBorderStyle: "solid",

photoBorderColor: "#ffffff",

photoObjectFit: "cover",

photoScale: 100,

photoRotation: 0,

photoOpacity: 100,

photoShadow: "none",

photoMargin: 25,

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

         const [history, setHistory] = useState([]);
    const [future, setFuture] = useState([]);

    const saveToHistory = () => {

    setHistory(prev => [
        ...prev,
        {
            resume: structuredClone(resume),
            design: structuredClone(design)
        }
    ]);

    setFuture([]);
};

const undo = () => {

    if (history.length === 0) {
        return;
    }

    const previousState =
        history[history.length - 1];

    setFuture(prev => [
        ...prev,
        {
            resume: structuredClone(resume),
            design: structuredClone(design)
        }
    ]);

    setResume(
        structuredClone(previousState.resume)
    );

    setDesign(
        structuredClone(previousState.design)
    );

    setHistory(prev =>
        prev.slice(0, -1)
    );
};

const redo = () => {

    if (future.length === 0) {
        return;
    }

    const nextState =
        future[future.length - 1];

    setHistory(prev => [
        ...prev,
        {
            resume: structuredClone(resume),
            design: structuredClone(design)
        }
    ]);

    setResume(
        structuredClone(nextState.resume)
    );

    setDesign(
        structuredClone(nextState.design)
    );

    setFuture(prev =>
        prev.slice(0, -1)
    );
};

const canUndo = history.length > 0;

const canRedo = future.length > 0;

    // =========================================================
    // PERSONAL
    // =========================================================
    const updatePersonal = (field, value) => {

    setResume(prev => {

        setHistory(historyPrev => [
            ...historyPrev,
            {
                resume: structuredClone(prev),
                design: structuredClone(design)
            }
        ]);

        setFuture([]);

        return {
            ...prev,
            personal: {
                ...prev.personal,
                [field]: value
            }
        };
    });
};
/*
    const updatePersonal = (field, value) => {

        setResume(prev => ({
            ...prev,

            personal: {
                ...prev.personal,
                [field]: value
            }
        }));
    };
    */

    // =========================================================
    // PROFILE
    // =========================================================

    const updateProfile = (value) => {

    setResume(prev => {

        setHistory(historyPrev => [
            ...historyPrev,
            {
                resume: structuredClone(prev),
                design: structuredClone(design)
            }
        ]);

        setFuture([]);

        return {
            ...prev,
            profile: value
        };
    });
};
/*
    const updateProfile = (value) => {

        setResume(prev => ({
            ...prev,
            profile: value
        }));
    };
*/
    // =========================================================
    // ADD ITEM
    // =========================================================
    const addItem = (section, item) => {

    setResume(prev => {

        setHistory(historyPrev => [
            ...historyPrev,
            {
                resume: structuredClone(prev),
                design: structuredClone(design)
            }
        ]);

        setFuture([]);

        return {
            ...prev,
            [section]: [
                ...(Array.isArray(prev[section])
                    ? prev[section]
                    : []),
                item
            ]
        };
    });
};
/*
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
    };*/

    // =========================================================
    // REMOVE ITEM
    // =========================================================
const removeItem = (section, index) => {

    setResume(prev => {

        setHistory(historyPrev => [
            ...historyPrev,
            {
                resume: structuredClone(prev),
                design: structuredClone(design)
            }
        ]);

        setFuture([]);

        return {
            ...prev,
            [section]: Array.isArray(prev[section])
                ? prev[section].filter(
                    (_, i) => i !== index
                )
                : []
        };
    });
};
/*
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
*/
    // =========================================================
    // UPDATE ITEM FIELD
    // =========================================================
const updateItemField = (
    section,
    id,
    field,
    value
) => {

    setResume(prev => {

        setHistory(historyPrev => [
            ...historyPrev,
            {
                resume: structuredClone(prev),
                design: structuredClone(design)
            }
        ]);

        setFuture([]);

        return {
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
        };
    });
};
/*
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
    };*/

    // =========================================================
    // UPDATE DESIGN
    // =========================================================
const updateDesign = (field, value) => {

    setHistory(prev => [
        ...prev,
        {
            resume: structuredClone(resume),
            design: structuredClone(design)
        }
    ]);

    setFuture([]);

    setDesign(prev => ({
        ...prev,
        [field]: value
    }));
};
/*
    const updateDesign = (field, value) => {

        setDesign(prev => ({
            ...prev,
            [field]: value
        }));
    };*/

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
                resetDesign,

                undo,
redo,
canUndo,
canRedo,
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







 