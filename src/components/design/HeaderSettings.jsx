import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

export default function HeaderSettings() {

    const { design, updateDesign } = useResume();

    return (

        <Section>

            <SectionHeader
                title="Header"
                subtitle="Choose how the header is aligned"
            />

            <div className="header-options">

                <button
                    className={
                        design.headerAlign === "left"
                            ? "header-card active"
                            : "header-card"
                    }
                    onClick={() =>
                        updateDesign("headerAlign", "left")
                    }
                >

                    <div className="header-preview left">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <p>Left</p>

                </button>

                <button
                    className={
                        design.headerAlign === "center"
                            ? "header-card active"
                            : "header-card"
                    }
                    onClick={() =>
                        updateDesign("headerAlign", "center")
                    }
                >

                    <div className="header-preview center">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <p>Center</p>

                </button>

                <button
                    className={
                        design.headerAlign === "right"
                            ? "header-card active"
                            : "header-card"
                    }
                    onClick={() =>
                        updateDesign("headerAlign", "right")
                    }
                >

                    <div className="header-preview right">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <p>Right</p>

                </button>

            </div>
            <style>
                {`
                .header-options{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:16px;

}

.header-card{

    border:1px solid #e5e7eb;

    border-radius:12px;

    background:#fff;

    padding:16px;

    cursor:pointer;

    transition:.25s;

}

.header-card:hover{

    border-color:#2563eb;

    box-shadow:0 6px 20px rgba(37,99,235,.08);

}

.header-card.active{

    border:2px solid #2563eb;

    background:#eff6ff;

}

.header-card p{

    margin-top:12px;

    text-align:center;

    font-weight:600;

}

.header-preview{

    display:flex;

    flex-direction:column;

    gap:6px;

}

.header-preview span{

    height:6px;

    background:#9ca3af;

    border-radius:20px;

}

.header-preview.left{

    align-items:flex-start;

}

.header-preview.center{

    align-items:center;

}

.header-preview.right{

    align-items:flex-end;

}

.header-preview span:nth-child(1){

    width:70%;

}

.header-preview span:nth-child(2){

    width:50%;

}

.header-preview span:nth-child(3){

    width:85%;

}`}
            </style>

        </Section>

    );

}