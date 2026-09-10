import { useEffect, useRef, useState } from "react";
import { useResume } from "../context/ResumeContext";
import templates from "../templates";
import ResumePagination from "./ResumePagination";
import PDFExportRenderer from "../Export/PDFExportRenderer";

export default function PreviewPanel() {

    const {
        resume,
        selectedTemplate,
        design
    } = useResume();


    const ActiveTemplate =
        templates[selectedTemplate];


    const previewRef =
        useRef(null);


    const [zoom, setZoom] =
        useState(0.7);


    const MIN_ZOOM = 0.4;

    const MAX_ZOOM = 1.5;

    const STEP = 0.1;


    // =========================
    // ZOOM IN
    // =========================

    const zoomIn = () => {

        setZoom(prev =>
            Math.min(
                MAX_ZOOM,
                Number(
                    (prev + STEP).toFixed(2)
                )
            )
        );

    };


    // =========================
    // ZOOM OUT
    // =========================

    const zoomOut = () => {

        setZoom(prev =>
            Math.max(
                MIN_ZOOM,
                Number(
                    (prev - STEP).toFixed(2)
                )
            )
        );

    };


    // =========================
    // RESET ZOOM
    // =========================

    const resetZoom = () => {

        setZoom(1);

    };


    // =========================
    // FIT TO SCREEN
    // =========================

    const fitToScreen = () => {

        const container =
            previewRef.current;


        if (!container) return;


        const availableWidth =
            container.clientWidth - 80;


        const paperWidth =
            design.pageSize === "Letter"
                ? 816
                : 794;


        const fittedZoom =
            availableWidth / paperWidth;


        setZoom(

            Math.max(

                MIN_ZOOM,

                Math.min(

                    MAX_ZOOM,

                    Number(
                        fittedZoom.toFixed(2)
                    )

                )

            )

        );

    };


    // =========================
    // INITIAL FIT
    // =========================

    useEffect(() => {

        fitToScreen();


        const handleResize = () => {

            fitToScreen();

        };


        window.addEventListener(
            "resize",
            handleResize
        );


        return () => {

            window.removeEventListener(
                "resize",
                handleResize
            );

        };

    }, [design.pageSize]);


    return (

        <main className="preview-panel">


            {/* =========================
                TOOLBAR
            ========================== */}
            
            <div className="preview-toolbar">


                <div className="zoom-controls">


                    <button
                        type="button"
                        onClick={zoomOut}
                        disabled={
                            zoom <= MIN_ZOOM
                        }
                        aria-label="Zoom out"
                    >

                        −

                    </button>


                    <span className="zoom-value">

                        {Math.round(
                            zoom * 100
                        )}%

                    </span>


                    <button
                        type="button"
                        onClick={zoomIn}
                        disabled={
                            zoom >= MAX_ZOOM
                        }
                        aria-label="Zoom in"
                    >

                        +

                    </button>


                </div>


                <button
                    type="button"
                    className="zoom-action"
                    onClick={fitToScreen}
                >

                    Fit

                </button>


                <button
                    type="button"
                    className="zoom-action"
                    onClick={resetZoom}
                >

                    100%

                </button>


            </div>
           
              {/* =========================
                PREVIEW CANVAS
            ========================== */}
            <div
    ref={previewRef}
    className="preview-canvas"
>
    <div
        id="resume-preview"
        className="resume-scale-wrapper"
        style={{
            transform: `scale(${zoom})`
        }}
    >
        <ResumePagination
            Template={ActiveTemplate}
            resume={resume}
            pageSize={design.pageSize}
        />
    </div>
</div>

            
            


            {/* =========================
                PREVIEW CANVAS
            ========================== */}
             {/*  
              <div
                ref={previewRef}
                className="preview-canvas"
            >

 

                <div
                    className="resume-scale-wrapper"
                    style={{
                        transform:
                            `scale(${zoom})`
                    }}
                >

 

                    <ResumePagination
                        Template={
                            ActiveTemplate
                        }
                        resume={resume}
                        pageSize={
                            design.pageSize
                        }
                    />


                </div>


            </div>
             */}

           
            <PDFExportRenderer />


            <style>
                {`

                /* =====================================
                   PREVIEW PANEL
                ===================================== */

                .preview-panel{

                    flex:1;

                    min-width:0;

                    min-height:0;

                    display:flex;

                    flex-direction:column;

                    overflow:hidden;

                    background:#ececec;

                }


                /* =====================================
                   TOOLBAR
                ===================================== */

                .preview-toolbar{

                    height:58px;

                    flex-shrink:0;

                    display:flex;

                    align-items:center;

                    justify-content:center;

                    gap:10px;

                    background:#ffffff;

                    border-bottom:
                        1px solid #e5e7eb;

                    z-index:10;

                }


                /* =====================================
                   ZOOM CONTROLS
                ===================================== */

                .zoom-controls{

                    height:36px;

                    display:flex;

                    align-items:center;

                    overflow:hidden;

                    border:
                        1px solid #e5e7eb;

                    border-radius:9px;

                    background:#ffffff;

                }


                .zoom-controls button{

                    width:36px;

                    height:36px;

                    border:none;

                    background:transparent;

                    color:#374151;

                    font-size:20px;

                    line-height:1;

                    cursor:pointer;

                    transition:
                        background .15s ease,
                        color .15s ease;

                }


                .zoom-controls button:hover:not(:disabled){

                    background:#f3f4f6;

                    color:#111827;

                }


                .zoom-controls button:disabled{

                    opacity:.35;

                    cursor:not-allowed;

                }


                .zoom-value{

                    min-width:60px;

                    text-align:center;

                    font-size:13px;

                    font-weight:600;

                    color:#374151;

                    user-select:none;

                }


                /* =====================================
                   ACTION BUTTONS
                ===================================== */

                .zoom-action{

                    height:36px;

                    padding:0 13px;

                    border:
                        1px solid #e5e7eb;

                    border-radius:9px;

                    background:#ffffff;

                    color:#374151;

                    font-size:13px;

                    font-weight:600;

                    cursor:pointer;

                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        color .15s ease;

                }


                .zoom-action:hover{

                    background:#f9fafb;

                    border-color:#d1d5db;

                    color:#111827;

                }


                /* =====================================
                   PREVIEW CANVAS
                ===================================== */

                .preview-canvas{

                    flex:1;

                    min-height:0;

                    overflow:auto;

                    display:flex;

                    justify-content:center;

                    align-items:flex-start;

                    padding:40px;

                    box-sizing:border-box;

                }


                /* =====================================
                   SCALE WRAPPER
                ===================================== */

                .resume-scale-wrapper{

                    flex-shrink:0;

                    transform-origin:
                        top center;

                    transition:
                        transform .18s ease;

                    margin-bottom:60px;

                }


                /* =====================================
                   SCROLLBAR
                ===================================== */

                .preview-canvas::-webkit-scrollbar{

                    width:10px;

                    height:10px;

                }


                .preview-canvas::-webkit-scrollbar-track{

                    background:#e5e7eb;

                }


                .preview-canvas::-webkit-scrollbar-thumb{

                    background:#c4c7cc;

                    border-radius:10px;

                }


                .preview-canvas::-webkit-scrollbar-thumb:hover{

                    background:#9ca3af;

                }


                /* =====================================
                   MOBILE
                ===================================== */

                @media (max-width:700px){

                    .preview-toolbar{

                        height:52px;

                    }


                    .preview-canvas{

                        padding:20px;

                    }


                    .zoom-action{

                        padding:0 10px;

                    }


                }







                `}
            </style>

        </main>

    );

}
/*
import { useEffect, useRef, useState } from "react";
import { useResume } from "../context/ResumeContext";
import templates from "../templates";

export default function PreviewPanel() {

    const {
        resume,
        selectedTemplate
    } = useResume();

    const ActiveTemplate = templates[selectedTemplate];

    const previewRef = useRef(null);

    const [zoom, setZoom] = useState(0.7);

    const MIN_ZOOM = 0.4;
    const MAX_ZOOM = 1.5;
    const STEP = 0.1;


    // =========================
    // ZOOM IN
    // =========================

    const zoomIn = () => {

        setZoom(prev =>
            Math.min(
                MAX_ZOOM,
                Number((prev + STEP).toFixed(2))
            )
        );

    };


    // =========================
    // ZOOM OUT
    // =========================

    const zoomOut = () => {

        setZoom(prev =>
            Math.max(
                MIN_ZOOM,
                Number((prev - STEP).toFixed(2))
            )
        );

    };


    // =========================
    // RESET
    // =========================

    const resetZoom = () => {

        setZoom(1);

    };


    // =========================
    // FIT TO SCREEN
    // =========================

    const fitToScreen = () => {

        const container = previewRef.current;

        if (!container) return;


        const availableWidth =
            container.clientWidth - 80;

        const availableHeight =
            container.clientHeight - 80;


        // A4
        const paperWidth = 794;
        const paperHeight = 1123;


        const scaleX =
            availableWidth / paperWidth;

        const scaleY =
            availableHeight / paperHeight;


        const fittedZoom =
            Math.min(scaleX, scaleY);


        setZoom(
            Math.max(
                MIN_ZOOM,
                Math.min(
                    MAX_ZOOM,
                    Number(fittedZoom.toFixed(2))
                )
            )
        );

    };


    // =========================
    // INITIAL FIT
    // =========================

    useEffect(() => {

        fitToScreen();

        window.addEventListener(
            "resize",
            fitToScreen
        );

        return () => {

            window.removeEventListener(
                "resize",
                fitToScreen
            );

        };

    }, []);


    return (

        <main className="preview-panel">


            

            <div className="preview-toolbar">


                <div className="zoom-controls">

                    <button
                        type="button"
                        onClick={zoomOut}
                        disabled={zoom <= MIN_ZOOM}
                    >
                        −
                    </button>


                    <span className="zoom-value">
                        {Math.round(zoom * 100)}%
                    </span>


                    <button
                        type="button"
                        onClick={zoomIn}
                        disabled={zoom >= MAX_ZOOM}
                    >
                        +
                    </button>

                </div>


                <button
                    type="button"
                    className="zoom-action"
                    onClick={fitToScreen}
                >
                    Fit
                </button>


                <button
                    type="button"
                    className="zoom-action"
                    onClick={resetZoom}
                >
                    100%
                </button>


            </div>



            

            <div
                ref={previewRef}
                className="preview-canvas"
            >

                <div
                    className="resume-scale-wrapper"
                    style={{
                        transform: `scale(${zoom})`
                    }}
                >

                    <ActiveTemplate
                        resume={resume}
                    />

                </div>

            </div>



            <style>
                {`

               

                .preview-panel{

                    flex:1;

                    min-width:0;

                    min-height:0;

                    display:flex;

                    flex-direction:column;

                    overflow:hidden;

                    background:#ececec;

                }



            

                .preview-toolbar{

                    height:58px;

                    flex-shrink:0;

                    display:flex;

                    align-items:center;

                    justify-content:center;

                    gap:10px;

                    background:#ffffff;

                    border-bottom:1px solid #e5e7eb;

                    z-index:10;

                }


 

                .zoom-controls{

                    height:36px;

                    display:flex;

                    align-items:center;

                    overflow:hidden;

                    border:1px solid #e5e7eb;

                    border-radius:9px;

                    background:#ffffff;

                }



                .zoom-controls button{

                    width:36px;

                    height:36px;

                    border:none;

                    background:transparent;

                    color:#374151;

                    font-size:20px;

                    cursor:pointer;

                    transition:background .15s ease;

                }



                .zoom-controls button:hover:not(:disabled){

                    background:#f3f4f6;

                }



                .zoom-controls button:disabled{

                    opacity:.35;

                    cursor:not-allowed;

                }



                .zoom-value{

                    min-width:60px;

                    text-align:center;

                    font-size:13px;

                    font-weight:600;

                    color:#374151;

                    user-select:none;

                }


 

                .zoom-action{

                    height:36px;

                    padding:0 13px;

                    border:1px solid #e5e7eb;

                    border-radius:9px;

                    background:#ffffff;

                    color:#374151;

                    font-size:13px;

                    font-weight:600;

                    cursor:pointer;

                    transition:

                        background .15s ease,

                        border-color .15s ease;

                }



                .zoom-action:hover{

                    background:#f9fafb;

                    border-color:#d1d5db;

                }


 

                .preview-canvas{

                    flex:1;

                    min-height:0;

                    overflow:auto;

                    display:flex;

                    justify-content:center;

                    align-items:flex-start;

                    padding:40px;

                    box-sizing:border-box;

                }


 

                .resume-scale-wrapper{

                    flex-shrink:0;

                    transform-origin:top center;

                    transition:transform .18s ease;

                    margin-bottom:60px;

                }

                `}
            </style>

        </main>

    );

}

*/






















 