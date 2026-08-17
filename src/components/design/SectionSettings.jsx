import { useResume } from "../context/ResumeContext";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

export default function SectionSettings() {

    const { design, updateDesign } = useResume();

    const update = (field, value) => {
        updateDesign(field, value);
    };

    const resetSections = () => {

        const defaults = {
            showDividers: true,
            uppercaseTitles: true,
            sectionTitleAlign: "left",

            sectionTitleStyle: "accent",
            sectionTitleWeight: 700,
            sectionTitleLetterSpacing: 1.8,

            sectionDividerWidth: 40,
            sectionDividerThickness: 2,

            sectionSpacing: 29,
            sectionTitleSpacing: 19,
            entrySpacing: 20,

            showTimeline: true,
            showTimelineDots: true,

            showItemDividers: true
        };

        Object.entries(defaults).forEach(
            ([key, value]) => update(key, value)
        );
    };

    return (

        <Section>

            <SectionHeader
                title="Sections"
                subtitle="Customize section titles, spacing and content structure"
            />

            {/* =====================================================
                TITLE OPTIONS
            ===================================================== */}

            <div className="ss-group">

                <div className="ss-group-header">

                    <div>
                        <h4>Section Titles</h4>

                        <p>
                            Control the appearance of your resume section headings.
                        </p>
                    </div>

                </div>


                {/* Uppercase */}

                <div className="ss-row">

                    <div className="ss-info">

                        <strong>Uppercase Titles</strong>

                        <span>
                            Display section titles using uppercase letters.
                        </span>

                    </div>

                    <button
                        type="button"
                        className={
                            design.uppercaseTitles
                                ? "ss-switch active"
                                : "ss-switch"
                        }
                        onClick={() =>
                            update(
                                "uppercaseTitles",
                                !design.uppercaseTitles
                            )
                        }
                        aria-label="Toggle uppercase titles"
                    >
                        <span />
                    </button>

                </div>


                {/* Show divider */}

                <div className="ss-row">

                    <div className="ss-info">

                        <strong>Accent Divider</strong>

                        <span>
                            Add a visual accent underneath section titles.
                        </span>

                    </div>

                    <button
                        type="button"
                        className={
                            design.showDividers
                                ? "ss-switch active"
                                : "ss-switch"
                        }
                        onClick={() =>
                            update(
                                "showDividers",
                                !design.showDividers
                            )
                        }
                    >
                        <span />
                    </button>

                </div>


                {/* Title Style */}

                <div className="ss-control">

                    <label>
                        Title Style
                    </label>

                    <div className="ss-segmented">

                        {[
                            {
                                value: "accent",
                                label: "Accent"
                            },
                            {
                                value: "minimal",
                                label: "Minimal"
                            },
                            {
                                value: "plain",
                                label: "Plain"
                            }
                        ].map(option => (

                            <button
                                key={option.value}
                                type="button"
                                className={
                                    design.sectionTitleStyle === option.value
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    update(
                                        "sectionTitleStyle",
                                        option.value
                                    )
                                }
                            >
                                {option.label}
                            </button>

                        ))}

                    </div>

                </div>


                {/* Alignment */}

                <div className="ss-control">

                    <label>
                        Title Alignment
                    </label>

                    <div className="ss-align-grid">

                        {[
                            {
                                value: "left",
                                label: "Left"
                            },
                            {
                                value: "center",
                                label: "Center"
                            },
                            {
                                value: "right",
                                label: "Right"
                            }
                        ].map(option => (

                            <button
                                key={option.value}
                                type="button"
                                className={
                                    design.sectionTitleAlign === option.value
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    update(
                                        "sectionTitleAlign",
                                        option.value
                                    )
                                }
                            >

                                <div
                                    className={`ss-align-preview ${option.value}`}
                                >
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <span>
                                    {option.label}
                                </span>

                            </button>

                        ))}

                    </div>

                </div>


                {/* Weight */}

                <div className="ss-control">

                    <div className="ss-label-row">

                        <label>
                            Title Weight
                        </label>

                        <output>
                            {design.sectionTitleWeight}
                        </output>

                    </div>

                    <input
                        type="range"
                        min="400"
                        max="800"
                        step="100"
                        value={
                            design.sectionTitleWeight ?? 700
                        }
                        onChange={e =>
                            update(
                                "sectionTitleWeight",
                                Number(e.target.value)
                            )
                        }
                    />

                    <div className="ss-range-labels">
                        <span>Regular</span>
                        <span>Bold</span>
                        <span>Heavy</span>
                    </div>

                </div>


                {/* Letter spacing */}

                <div className="ss-control">

                    <div className="ss-label-row">

                        <label>
                            Letter Spacing
                        </label>

                        <output>
                            {design.sectionTitleLetterSpacing ?? 1.8}px
                        </output>

                    </div>

                    <input
                        type="range"
                        min="0"
                        max="4"
                        step="0.1"
                        value={
                            design.sectionTitleLetterSpacing ?? 1.8
                        }
                        onChange={e =>
                            update(
                                "sectionTitleLetterSpacing",
                                Number(e.target.value)
                            )
                        }
                    />

                </div>

            </div>


            {/* =====================================================
                DIVIDER
            ===================================================== */}

            {design.showDividers && (

                <div className="ss-group">

                    <div className="ss-group-header">

                        <div>
                            <h4>Divider</h4>

                            <p>
                                Fine-tune the accent line below each title.
                            </p>
                        </div>

                    </div>


                    {/* Width */}

                    <div className="ss-control">

                        <div className="ss-label-row">

                            <label>
                                Divider Width
                            </label>

                            <output>
                                {design.sectionDividerWidth ?? 40}px
                            </output>

                        </div>

                        <input
                            type="range"
                            min="10"
                            max="120"
                            step="5"
                            value={
                                design.sectionDividerWidth ?? 40
                            }
                            onChange={e =>
                                update(
                                    "sectionDividerWidth",
                                    Number(e.target.value)
                                )
                            }
                        />

                    </div>


                    {/* Thickness */}

                    <div className="ss-control">

                        <div className="ss-label-row">

                            <label>
                                Divider Thickness
                            </label>

                            <output>
                                {design.sectionDividerThickness ?? 2}px
                            </output>

                        </div>

                        <input
                            type="range"
                            min="1"
                            max="5"
                            step="1"
                            value={
                                design.sectionDividerThickness ?? 2
                            }
                            onChange={e =>
                                update(
                                    "sectionDividerThickness",
                                    Number(e.target.value)
                                )
                            }
                        />

                    </div>

                </div>

            )}


            {/* =====================================================
                SPACING
            ===================================================== */}

            <div className="ss-group">

                <div className="ss-group-header">

                    <div>

                        <h4>Spacing</h4>

                        <p>
                            Control the vertical rhythm of your resume.
                        </p>

                    </div>

                </div>


                {/* Section spacing */}

                <div className="ss-control">

                    <div className="ss-label-row">

                        <label>
                            Section Spacing
                        </label>

                        <output>
                            {design.sectionSpacing ?? 29}px
                        </output>

                    </div>

                    <input
                        type="range"
                        min="10"
                        max="60"
                        step="1"
                        value={
                            design.sectionSpacing ?? 29
                        }
                        onChange={e =>
                            update(
                                "sectionSpacing",
                                Number(e.target.value)
                            )
                        }
                    />

                </div>


                {/* Title spacing */}

                <div className="ss-control">

                    <div className="ss-label-row">

                        <label>
                            Title to Content
                        </label>

                        <output>
                            {design.sectionTitleSpacing ?? 19}px
                        </output>

                    </div>

                    <input
                        type="range"
                        min="5"
                        max="35"
                        step="1"
                        value={
                            design.sectionTitleSpacing ?? 19
                        }
                        onChange={e =>
                            update(
                                "sectionTitleSpacing",
                                Number(e.target.value)
                            )
                        }
                    />

                </div>


                {/* Entry spacing */}

                <div className="ss-control">

                    <div className="ss-label-row">

                        <label>
                            Item Spacing
                        </label>

                        <output>
                            {design.entrySpacing ?? 20}px
                        </output>

                    </div>

                    <input
                        type="range"
                        min="5"
                        max="40"
                        step="1"
                        value={
                            design.entrySpacing ?? 20
                        }
                        onChange={e =>
                            update(
                                "entrySpacing",
                                Number(e.target.value)
                            )
                        }
                    />

                </div>

            </div>


            {/* =====================================================
                TIMELINE
            ===================================================== */}

            <div className="ss-group">

                <div className="ss-group-header">

                    <div>

                        <h4>Timeline</h4>

                        <p>
                            Customize the visual structure of experience
                            and education entries.
                        </p>

                    </div>

                </div>


                {/* Timeline */}

                <div className="ss-row">

                    <div className="ss-info">

                        <strong>Show Timeline</strong>

                        <span>
                            Display the vertical line connecting entries.
                        </span>

                    </div>

                    <button
                        type="button"
                        className={
                            design.showTimeline
                                ? "ss-switch active"
                                : "ss-switch"
                        }
                        onClick={() =>
                            update(
                                "showTimeline",
                                !design.showTimeline
                            )
                        }
                    >
                        <span />
                    </button>

                </div>


                {/* Dots */}

                <div className="ss-row">

                    <div className="ss-info">

                        <strong>Timeline Dots</strong>

                        <span>
                            Show accent dots beside timeline entries.
                        </span>

                    </div>

                    <button
                        type="button"
                        disabled={!design.showTimeline}
                        className={
                            design.showTimeline &&
                            design.showTimelineDots
                                ? "ss-switch active"
                                : "ss-switch"
                        }
                        onClick={() =>
                            update(
                                "showTimelineDots",
                                !design.showTimelineDots
                            )
                        }
                    >
                        <span />
                    </button>

                </div>


                {/* Item dividers */}

                <div className="ss-row">

                    <div className="ss-info">

                        <strong>Item Dividers</strong>

                        <span>
                            Add subtle separators between simple entries.
                        </span>

                    </div>

                    <button
                        type="button"
                        className={
                            design.showItemDividers
                                ? "ss-switch active"
                                : "ss-switch"
                        }
                        onClick={() =>
                            update(
                                "showItemDividers",
                                !design.showItemDividers
                            )
                        }
                    >
                        <span />
                    </button>

                </div>

            </div>


            {/* =====================================================
                RESET
            ===================================================== */}

            <div className="ss-footer">

                <button
                    type="button"
                    className="ss-reset"
                    onClick={resetSections}
                >
                    Reset Section Settings
                </button>

            </div>


            {/* =====================================================
                STYLES
            ===================================================== */}

            <style>{`

                .ss-group {
                    margin-top: 26px;
                    padding-bottom: 24px;
                    border-bottom: 1px solid #eef2f7;
                }

                .ss-group:last-of-type {
                    border-bottom: none;
                }

                .ss-group-header {
                    margin-bottom: 18px;
                }

                .ss-group-header h4 {
                    margin: 0;
                    color: #0f172a;
                    font-size: 14px;
                    font-weight: 700;
                }

                .ss-group-header p {
                    margin: 5px 0 0;
                    color: #64748b;
                    font-size: 12px;
                    line-height: 1.5;
                }

                .ss-row {
                    min-height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    border-bottom: 1px solid #f1f5f9;
                }

                .ss-row:last-child {
                    border-bottom: none;
                }

                .ss-info {
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .ss-info strong {
                    color: #0f172a;
                    font-size: 13px;
                    font-weight: 600;
                }

                .ss-info span {
                    color: #64748b;
                    font-size: 11px;
                    line-height: 1.45;
                }

                /* SWITCH */

                .ss-switch {
                    width: 42px;
                    height: 24px;
                    flex: 0 0 42px;
                    border: none;
                    border-radius: 999px;
                    padding: 3px;
                    background: #e2e8f0;
                    cursor: pointer;
                    transition: .2s ease;
                }

                .ss-switch span {
                    display: block;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #ffffff;
                    box-shadow: 0 1px 3px rgba(15,23,42,.2);
                    transition: .2s ease;
                }

                .ss-switch.active {
                    background: #2563eb;
                }

                .ss-switch.active span {
                    transform: translateX(18px);
                }

                .ss-switch:disabled {
                    opacity: .45;
                    cursor: not-allowed;
                }

                /* CONTROL */

                .ss-control {
                    margin-top: 20px;
                }

                .ss-control > label {
                    display: block;
                    margin-bottom: 10px;
                    color: #334155;
                    font-size: 12px;
                    font-weight: 600;
                }

                .ss-label-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 9px;
                }

                .ss-label-row label {
                    color: #334155;
                    font-size: 12px;
                    font-weight: 600;
                }

                .ss-label-row output {
                    min-width: 42px;
                    padding: 4px 7px;
                    border-radius: 6px;
                    background: #f8fafc;
                    color: #475569;
                    font-size: 11px;
                    text-align: center;
                    border: 1px solid #e2e8f0;
                }

                /* RANGE */

                .ss-control input[type="range"] {
                    width: 100%;
                    height: 4px;
                    appearance: none;
                    border-radius: 20px;
                    background: #e2e8f0;
                    cursor: pointer;
                    accent-color: #2563eb;
                }

                .ss-control input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #2563eb;
                    border: 3px solid #ffffff;
                    box-shadow: 0 1px 4px rgba(15,23,42,.25);
                }

                .ss-range-labels {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 6px;
                    color: #94a3b8;
                    font-size: 10px;
                }

                /* SEGMENTED */

                .ss-segmented {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 6px;
                    padding: 4px;
                    background: #f1f5f9;
                    border-radius: 10px;
                }

                .ss-segmented button {
                    min-height: 34px;
                    border: none;
                    border-radius: 7px;
                    background: transparent;
                    color: #64748b;
                    font-size: 11px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: .2s ease;
                }

                .ss-segmented button:hover {
                    color: #0f172a;
                }

                .ss-segmented button.active {
                    background: #ffffff;
                    color: #2563eb;
                    box-shadow: 0 1px 4px rgba(15,23,42,.08);
                }

                /* ALIGNMENT */

                .ss-align-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 9px;
                }

                .ss-align-grid button {
                    padding: 12px 8px;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    background: #ffffff;
                    cursor: pointer;
                    transition: .2s ease;
                }

                .ss-align-grid button:hover {
                    border-color: #93c5fd;
                    background: #f8fbff;
                }

                .ss-align-grid button.active {
                    border-color: #2563eb;
                    background: #eff6ff;
                    box-shadow: 0 0 0 2px rgba(37,99,235,.08);
                }

                .ss-align-grid button > span {
                    display: block;
                    margin-top: 8px;
                    color: #475569;
                    font-size: 10px;
                    font-weight: 600;
                }

                .ss-align-preview {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .ss-align-preview span {
                    display: block;
                    height: 4px;
                    border-radius: 4px;
                    background: #94a3b8;
                }

                .ss-align-preview span:nth-child(1) {
                    width: 75%;
                }

                .ss-align-preview span:nth-child(2) {
                    width: 55%;
                }

                .ss-align-preview span:nth-child(3) {
                    width: 40%;
                }

                .ss-align-preview.left {
                    align-items: flex-start;
                }

                .ss-align-preview.center {
                    align-items: center;
                }

                .ss-align-preview.right {
                    align-items: flex-end;
                }

                /* RESET */

                .ss-footer {
                    display: flex;
                    justify-content: flex-end;
                    padding-top: 20px;
                }

                .ss-reset {
                    border: 1px solid #e2e8f0;
                    background: #ffffff;
                    color: #64748b;
                    padding: 9px 13px;
                    border-radius: 8px;
                    font-size: 11px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: .2s ease;
                }

                .ss-reset:hover {
                    border-color: #cbd5e1;
                    color: #0f172a;
                    background: #f8fafc;
                }

                @media (max-width: 520px) {

                    .ss-align-grid {
                        grid-template-columns: 1fr;
                    }

                    .ss-align-grid button {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    }

                    .ss-align-grid button > span {
                        margin-top: 0;
                    }

                }

            `}</style>

        </Section>
    );
}
/*
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

}*/