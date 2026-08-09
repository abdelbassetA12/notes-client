import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

export default function LayoutSettings() {

    const { design, updateDesign } = useResume();

    return (

        <Section>

            <SectionHeader
                title="Layout"
                subtitle="Choose page size and layout"
            />

            <div className="layout-group">

                <h4>Page Size</h4>

                <div className="layout-options">

                    <button
                        className={
                            design.pageSize === "A4"
                                ? "layout-card active"
                                : "layout-card"
                        }
                        onClick={() =>
                            updateDesign("pageSize","A4")
                        }
                    >

                        <div className="page-preview a4"></div>

                        <span>A4</span>

                    </button>

                    <button
                        className={
                            design.pageSize === "Letter"
                                ? "layout-card active"
                                : "layout-card"
                        }
                        onClick={() =>
                            updateDesign("pageSize","Letter")
                        }
                    >

                        <div className="page-preview letter"></div>

                        <span>Letter</span>

                    </button>

                </div>

            </div>

            <div className="layout-group">

                <h4>Resume Layout</h4>

                <div className="layout-options">

                    <button
                        className={
                            design.layout === "single"
                                ? "layout-card active"
                                : "layout-card"
                        }
                        onClick={() =>
                            updateDesign("layout","single")
                        }
                    >

                        <div className="resume-preview single">
                            <div></div>
                        </div>

                        <span>Single Column</span>

                    </button>

                    <button
                        className={
                            design.layout === "two-column"
                                ? "layout-card active"
                                : "layout-card"
                        }
                        onClick={() =>
                            updateDesign("layout","two-column")
                        }
                    >

                        <div className="resume-preview two">
                            <div></div>
                            <div></div>
                        </div>

                        <span>Two Columns</span>

                    </button>

                </div>

            </div>
            <style>
                {`
                .layout-group{

    margin-bottom:28px;

}

.layout-group h4{

    margin-bottom:14px;

    font-size:15px;

    font-weight:600;

    color:#374151;

}

.layout-options{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:16px;

}

.layout-card{

    border:1px solid #e5e7eb;

    border-radius:12px;

    background:#fff;

    padding:16px;

    cursor:pointer;

    transition:.25s;

}

.layout-card:hover{

    border-color:#2563eb;

    box-shadow:0 6px 18px rgba(37,99,235,.08);

}

.layout-card.active{

    border:2px solid #2563eb;

    background:#eff6ff;

}

.layout-card span{

    display:block;

    margin-top:14px;

    text-align:center;

    font-weight:600;

}

.page-preview{

    margin:auto;

    background:#fff;

    border:2px solid #cbd5e1;

}

.page-preview.a4{

    width:52px;

    height:72px;

}

.page-preview.letter{

    width:56px;

    height:70px;

}

.resume-preview{

    display:flex;

    gap:6px;

    height:70px;

}

.resume-preview div{

    background:#d1d5db;

    border-radius:6px;

}

.resume-preview.single div{

    width:100%;

}

.resume-preview.two div{

    flex:1;

}`}
            </style>

        </Section>

    );

}