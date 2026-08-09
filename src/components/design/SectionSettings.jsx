import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

export default function SectionSettings() {

    const { design, updateDesign } = useResume();

    return (

        <Section>

            <SectionHeader
                title="Sections"
                subtitle="Customize section appearance"
            />

            <div className="setting-row">

                <div>

                    <h4>Show Dividers</h4>

                    <small>
                        Display a divider under each section title.
                    </small>

                </div>

                <button
                    className={
                        design.showDividers
                            ? "switch active"
                            : "switch"
                    }
                    onClick={() =>
                        updateDesign(
                            "showDividers",
                            !design.showDividers
                        )
                    }
                >
                    <span></span>
                </button>

            </div>

            <div className="setting-row">

                <div>

                    <h4>Uppercase Titles</h4>

                    <small>
                        Display titles using uppercase letters.
                    </small>

                </div>

                <button
                    className={
                        design.uppercaseTitles
                            ? "switch active"
                            : "switch"
                    }
                    onClick={() =>
                        updateDesign(
                            "uppercaseTitles",
                            !design.uppercaseTitles
                        )
                    }
                >
                    <span></span>
                </button>

            </div>

            <div className="setting-group">

                <h4>Title Alignment</h4>

                <div className="align-options">

                    <button
                        className={
                            design.sectionTitleAlign === "left"
                                ? "align-card active"
                                : "align-card"
                        }
                        onClick={() =>
                            updateDesign(
                                "sectionTitleAlign",
                                "left"
                            )
                        }
                    >

                        <div className="align-preview left">
                            <span></span>
                            <span></span>
                        </div>

                        <p>Left</p>

                    </button>

                    <button
                        className={
                            design.sectionTitleAlign === "center"
                                ? "align-card active"
                                : "align-card"
                        }
                        onClick={() =>
                            updateDesign(
                                "sectionTitleAlign",
                                "center"
                            )
                        }
                    >

                        <div className="align-preview center">
                            <span></span>
                            <span></span>
                        </div>

                        <p>Center</p>

                    </button>

                    <button
                        className={
                            design.sectionTitleAlign === "right"
                                ? "align-card active"
                                : "align-card"
                        }
                        onClick={() =>
                            updateDesign(
                                "sectionTitleAlign",
                                "right"
                            )
                        }
                    >

                        <div className="align-preview right">
                            <span></span>
                            <span></span>
                        </div>

                        <p>Right</p>

                    </button>

                </div>

            </div>
            <style>
                {`
                .setting-row{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:16px 0;

    border-bottom:1px solid #f1f5f9;

}

.setting-row h4{

    margin:0;

    font-size:15px;

}

.setting-row small{

    display:block;

    margin-top:4px;

    color:#6b7280;

}

.setting-group{

    margin-top:24px;

}

.setting-group h4{

    margin-bottom:16px;

}

.align-options{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:14px;

}

.align-card{

    border:1px solid #e5e7eb;

    border-radius:12px;

    background:#fff;

    padding:16px;

    cursor:pointer;

    transition:.25s;

}

.align-card:hover{

    border-color:#2563eb;

    box-shadow:0 5px 18px rgba(37,99,235,.08);

}

.align-card.active{

    border:2px solid #2563eb;

    background:#eff6ff;

}

.align-card p{

    margin-top:12px;

    text-align:center;

    font-weight:600;

}

.align-preview{

    display:flex;

    flex-direction:column;

    gap:8px;

}

.align-preview span{

    height:6px;

    background:#9ca3af;

    border-radius:30px;

}

.align-preview.left{

    align-items:flex-start;

}

.align-preview.center{

    align-items:center;

}

.align-preview.right{

    align-items:flex-end;

}

.align-preview span:first-child{

    width:75%;

}

.align-preview span:last-child{

    width:45%;

}`}
            </style>

        </Section>

    );

}