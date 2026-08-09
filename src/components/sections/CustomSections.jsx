import { useResume } from "../context/ResumeContext";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import ItemAccordion from "../common/ItemAccordion";

export default function CustomSections() {

    const {
        resume,
        addItem,
        removeItem,
        updateItemField
    } = useResume();


    // =========================
    // ADD CUSTOM SECTION
    // =========================

    const handleAddSection = () => {

        addItem("customSections", {

            id: crypto.randomUUID(),

            title: "",

            type: "text",

            description: "",

            items: [],

            visible: true

        });

    };


    // =========================
    // ADD ITEM
    // =========================

    const handleAddItem = (section) => {

        const newItem = {

            id: crypto.randomUUID(),

            title: "",

            description: "",

            date: "",

            link: "",

            value: ""

        };


        updateItemField(

            "customSections",

            section.id,

            "items",

            [
                ...(section.items || []),
                newItem
            ]

        );

    };


    // =========================
    // UPDATE ITEM
    // =========================

    const updateCustomItem = (
        section,
        itemId,
        field,
        value
    ) => {

        const updatedItems = (

            section.items || []

        ).map(item =>

            item.id === itemId

                ? {
                    ...item,
                    [field]: value
                }

                : item

        );


        updateItemField(

            "customSections",

            section.id,

            "items",

            updatedItems

        );

    };


    // =========================
    // DELETE ITEM
    // =========================

    const removeCustomItem = (
        section,
        itemId
    ) => {

        const updatedItems = (

            section.items || []

        ).filter(

            item => item.id !== itemId

        );


        updateItemField(

            "customSections",

            section.id,

            "items",

            updatedItems

        );

    };


    // =========================
    // SECTION TYPE
    // =========================

    const renderItems = (section) => {

        const items = section.items || [];


        if (section.type === "text") {

            return null;

        }


        return (

            <div className="custom-items">

                <div className="custom-items-header">

                    <span>
                        Section Items
                    </span>

                    <Button
                        onClick={() =>
                            handleAddItem(section)
                        }
                    >
                        + Add Item
                    </Button>

                </div>


                {items.length === 0 && (

                    <div className="custom-empty">

                        No items added yet.

                    </div>

                )}


                {items.map((item, itemIndex) => (

                    <div
                        className="custom-item"
                        key={item.id}
                    >

                        <div className="custom-item-header">

                            <strong>

                                {item.title ||

                                    `Item ${itemIndex + 1}`

                                }

                            </strong>


                            <button
                                type="button"
                                className="custom-delete-item"
                                onClick={() =>
                                    removeCustomItem(
                                        section,
                                        item.id
                                    )
                                }
                            >

                                ×

                            </button>

                        </div>


                        <Input
                            label="Title"
                            value={item.title}
                            onChange={(e) =>
                                updateCustomItem(
                                    section,
                                    item.id,
                                    "title",
                                    e.target.value
                                )
                            }
                        />


                        {(
                            section.type === "timeline" ||
                            section.type === "highlights"
                        ) && (

                            <Input
                                label="Date"
                                value={item.date}
                                onChange={(e) =>
                                    updateCustomItem(
                                        section,
                                        item.id,
                                        "date",
                                        e.target.value
                                    )
                                }
                            />

                        )}


                        {section.type === "contact" && (

                            <Input
                                label="Value"
                                value={item.value}
                                onChange={(e) =>
                                    updateCustomItem(
                                        section,
                                        item.id,
                                        "value",
                                        e.target.value
                                    )
                                }
                            />

                        )}


                        {section.type === "links" && (

                            <Input
                                label="Link"
                                value={item.link}
                                placeholder="https://..."
                                onChange={(e) =>
                                    updateCustomItem(
                                        section,
                                        item.id,
                                        "link",
                                        e.target.value
                                    )
                                }
                            />

                        )}


                        {(
                            section.type === "list" ||
                            section.type === "timeline" ||
                            section.type === "highlights"
                        ) && (

                            <TextArea
                                label="Description"
                                value={item.description}
                                onChange={(e) =>
                                    updateCustomItem(
                                        section,
                                        item.id,
                                        "description",
                                        e.target.value
                                    )
                                }
                            />

                        )}

                    </div>

                ))}

            </div>

        );

    };


    return (

        <Section>

            <SectionHeader

                title="Custom Sections"

                action={

                    <Button
                        onClick={handleAddSection}
                    >
                        + Add Section
                    </Button>

                }

            />


            <div className="custom-sections">


                {resume.customSections?.length === 0 && (

                    <div className="custom-empty-main">

                        <div className="custom-empty-icon">
                            +
                        </div>

                        <strong>
                            Add a custom section
                        </strong>

                        <span>
                            Add information that is not
                            available in the standard resume sections.
                        </span>

                    </div>

                )}


                {resume.customSections?.map(
                    (section, index) => (

                        <ItemAccordion
                            key={section.id}
                            title={
                                section.title ||
                                `Custom Section ${index + 1}`
                            }
                        >


                            {/* =========================
                                SECTION TITLE
                            ========================== */}

                            <Input
                                label="Section Title"
                                value={section.title}
                                placeholder="e.g. Achievements"
                                onChange={(e) =>
                                    updateItemField(
                                        "customSections",
                                        section.id,
                                        "title",
                                        e.target.value
                                    )
                                }
                            />


                            {/* =========================
                                SECTION TYPE
                            ========================== */}

                            <div className="custom-field">

                                <label>
                                    Section Type
                                </label>

                                <select
                                    value={
                                        section.type || "text"
                                    }
                                    onChange={(e) =>
                                        updateItemField(
                                            "customSections",
                                            section.id,
                                            "type",
                                            e.target.value
                                        )
                                    }
                                >

                                    <option value="text">
                                        Text
                                    </option>

                                    <option value="list">
                                        List
                                    </option>

                                    <option value="timeline">
                                        Timeline
                                    </option>

                                    <option value="highlights">
                                        Highlights
                                    </option>

                                    <option value="links">
                                        Links
                                    </option>

                                    <option value="contact">
                                        Information
                                    </option>

                                </select>

                            </div>


                            {/* =========================
                                DESCRIPTION
                            ========================== */}

                            <TextArea
                                label={
                                    section.type === "text"
                                        ? "Content"
                                        : "Introduction (optional)"
                                }
                                value={
                                    section.description || ""
                                }
                                placeholder={
                                    section.type === "text"

                                        ? "Write anything you want to add to your resume..."

                                        : "Optional introduction..."
                                }
                                onChange={(e) =>
                                    updateItemField(
                                        "customSections",
                                        section.id,
                                        "description",
                                        e.target.value
                                    )
                                }
                            />


                            {/* =========================
                                ITEMS
                            ========================== */}

                            {renderItems(section)}


                            {/* =========================
                                VISIBILITY
                            ========================== */}

                            <label className="custom-checkbox">

                                <input
                                    type="checkbox"
                                    checked={
                                        section.visible !== false
                                    }
                                    onChange={(e) =>
                                        updateItemField(
                                            "customSections",
                                            section.id,
                                            "visible",
                                            e.target.checked
                                        )
                                    }
                                />

                                <span>
                                    Show this section
                                </span>

                            </label>


                            {/* =========================
                                DELETE
                            ========================== */}

                            <div className="custom-section-footer">

                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        removeItem(
                                            "customSections",
                                            index
                                        )
                                    }
                                >
                                    Delete Section
                                </Button>

                            </div>


                        </ItemAccordion>

                    )
                )}

            </div>


            <style>{`

                .custom-sections{

                    display:flex;

                    flex-direction:column;

                    gap:12px;

                    margin-top:14px;

                }


                .custom-empty-main{

                    display:flex;

                    flex-direction:column;

                    align-items:center;

                    justify-content:center;

                    gap:6px;

                    padding:30px 20px;

                    border:1px dashed #d1d5db;

                    border-radius:12px;

                    background:#f9fafb;

                    text-align:center;

                    color:#6b7280;

                }


                .custom-empty-main strong{

                    color:#374151;

                    font-size:14px;

                }


                .custom-empty-main span{

                    max-width:280px;

                    font-size:12px;

                    line-height:1.5;

                }


                .custom-empty-icon{

                    width:38px;

                    height:38px;

                    display:flex;

                    align-items:center;

                    justify-content:center;

                    margin-bottom:5px;

                    border-radius:10px;

                    background:#eff6ff;

                    color:#2563eb;

                    font-size:22px;

                    font-weight:500;

                }


                .custom-field{

                    display:flex;

                    flex-direction:column;

                    gap:7px;

                    margin-top:14px;

                }


                .custom-field label{

                    font-size:13px;

                    font-weight:600;

                    color:#374151;

                }


                .custom-field select{

                    width:100%;

                    height:40px;

                    padding:0 12px;

                    border:1px solid #e5e7eb;

                    border-radius:9px;

                    background:#fff;

                    color:#374151;

                    font-size:13px;

                    outline:none;

                    cursor:pointer;

                    transition:

                        border-color .15s ease,

                        box-shadow .15s ease;

                }


                .custom-field select:focus{

                    border-color:#2563eb;

                    box-shadow:
                        0 0 0 3px
                        rgba(37,99,235,.1);

                }


                .custom-items{

                    margin-top:20px;

                    padding-top:18px;

                    border-top:1px solid #f0f0f0;

                }


                .custom-items-header{

                    display:flex;

                    align-items:center;

                    justify-content:space-between;

                    gap:10px;

                    margin-bottom:12px;

                }


                .custom-items-header span{

                    font-size:13px;

                    font-weight:700;

                    color:#374151;

                }


                .custom-empty{

                    padding:16px;

                    border:1px dashed #d1d5db;

                    border-radius:9px;

                    background:#fafafa;

                    text-align:center;

                    color:#9ca3af;

                    font-size:12px;

                }


                .custom-item{

                    padding:15px;

                    margin-bottom:10px;

                    border:1px solid #e5e7eb;

                    border-radius:10px;

                    background:#fff;

                }


                .custom-item:last-child{

                    margin-bottom:0;

                }


                .custom-item-header{

                    display:flex;

                    align-items:center;

                    justify-content:space-between;

                    margin-bottom:12px;

                }


                .custom-item-header strong{

                    font-size:13px;

                    color:#374151;

                }


                .custom-delete-item{

                    width:27px;

                    height:27px;

                    display:flex;

                    align-items:center;

                    justify-content:center;

                    border:0;

                    border-radius:7px;

                    background:#fef2f2;

                    color:#dc2626;

                    font-size:18px;

                    cursor:pointer;

                    transition:
                        background .15s ease,
                        transform .15s ease;

                }


                .custom-delete-item:hover{

                    background:#fee2e2;

                    transform:scale(1.04);

                }


                .custom-checkbox{

                    display:flex;

                    align-items:center;

                    gap:9px;

                    margin-top:18px;

                    padding:11px 12px;

                    border:1px solid #e5e7eb;

                    border-radius:9px;

                    background:#fafafa;

                    color:#374151;

                    font-size:13px;

                    cursor:pointer;

                }


                .custom-checkbox input{

                    width:16px;

                    height:16px;

                    accent-color:#2563eb;

                    cursor:pointer;

                }


                .custom-section-footer{

                    display:flex;

                    justify-content:flex-end;

                    margin-top:18px;

                    padding-top:15px;

                    border-top:1px solid #f0f0f0;

                }

            `}</style>

        </Section>

    );

}



/*
import { useResume } from "../context/ResumeContext";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import ItemAccordion from "../common/ItemAccordion";

export default function CustomSections(){

    const{

        resume,

        addItem,

        removeItem,

        updateItemField

    }=useResume();

    const handleAdd=()=>{

        addItem("customSections",{

            id:crypto.randomUUID(),

            title:"",

            description:""

        });

    };

    return(

        <Section>

            <SectionHeader

                title="Custom Sections"

                action={

                    <Button onClick={handleAdd}>

                        Add Section

                    </Button>

                }

            />

            {

                resume.customSections.map((section,index)=>(

                    
                     
                         <ItemAccordion
    key={section.id}
    title={section.company || `section #${index + 1}`}
>

                        <Input

                            label="Section Title"

                            value={section.title}

                            onChange={(e)=>

                                updateItemField(

                                    "customSections",

                                    section.id,

                                    "title",

                                    e.target.value

                                )

                            }

                        />

                        <TextArea

                            label="Content"

                            value={section.description}

                            onChange={(e)=>

                                updateItemField(

                                    "customSections",

                                    section.id,

                                    "description",

                                    e.target.value

                                )

                            }

                        />

                        <Button

                            variant="danger"

                            onClick={()=>

                                removeItem(

                                    "customSections",

                                    index

                                )

                            }

                        >

                            Delete

                        </Button>

                    </ItemAccordion>

                ))

            }

            <style>{`

.custom-card{

    border:1px solid #e5e7eb;

    border-radius:12px;

    padding:20px;

    margin-top:20px;

    background:#fff;

}

.item-title{

    margin-bottom:20px;

    color:#2563eb;

}

`}</style>

        </Section>

    );

}
    */