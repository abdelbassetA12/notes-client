

import { useEffect, useRef, useState } from "react";

const PAGE_SIZES = {
    A4: {
        width: 794,
        height: 1123
    },

    Letter: {
        width: 816,
        height: 1056
    }
};

export default function ResumePagination({
    Template,
    resume,
    pageSize = "A4"
}) {

    const page = PAGE_SIZES[pageSize] || PAGE_SIZES.A4;

    const measureRef = useRef(null);

    const [pageCount, setPageCount] = useState(1);


    useEffect(() => {

        const calculatePages = () => {

            const container = measureRef.current;

            if (!container) return;

            const content = container.firstElementChild;

            if (!content) return;


            const height = content.scrollHeight;


            const count = Math.max(
                1,
                Math.ceil(height / page.height)
            );


            setPageCount(count);

        };


        const timer = setTimeout(
            calculatePages,
            100
        );


        window.addEventListener(
            "resize",
            calculatePages
        );


        return () => {

            clearTimeout(timer);

            window.removeEventListener(
                "resize",
                calculatePages
            );

        };

    }, [
        resume,
        page.height
    ]);


    return (

        <div
            className="pagination-container"
            style={{
                "--page-width": `${page.width}px`,
                "--page-height": `${page.height}px`
            }}
        >

            {/* =========================
                HIDDEN MEASUREMENT
            ========================== */}

            <div
                ref={measureRef}
                className="pagination-measure"
            >

                <Template
                    resume={resume}
                />

            </div>


            {/* =========================
                REAL PAGES
            ========================== */}

            {Array.from(
                { length: pageCount }
            ).map((_, index) => (

                <div
                    className="resume-page"
                    key={index}
                >

                    <div
                        className="resume-page-content"
                        style={{
                            transform:
                                `translateY(-${index * page.height}px)`
                        }}
                    >

                        <Template
                            resume={resume}
                        />

                    </div>

                </div>

            ))}


            <style>
                {`

                .pagination-container{

                    display:flex;

                    flex-direction:column;

                    align-items:center;

                    gap:30px;

                    width:100%;

                }


                /*
                ================================
                HIDDEN MEASUREMENT
                ================================
                */

                .pagination-measure{

                    position:absolute;

                    left:-99999px;

                    top:0;

                    width:var(--page-width);

                    visibility:hidden;

                    pointer-events:none;

                }


                /*
                ================================
                PAGE
                ================================
                */

                .resume-page{

                    position:relative;

                    width:var(--page-width);

                    height:var(--page-height);

                    min-width:var(--page-width);

                    min-height:var(--page-height);

                    max-width:var(--page-width);

                    max-height:var(--page-height);

                    overflow:hidden;

                    background:#fff;

                    box-shadow:
                        0 8px 30px rgba(0,0,0,.12);

                    flex-shrink:0;

                }


                /*
                ================================
                CONTENT
                ================================
                */

                .resume-page-content{

                    position:absolute;

                    left:0;

                    top:0;

                    width:var(--page-width);

                }


                /*
                ================================
                IMPORTANT
                ================================
                */

                .resume-page-content .paper{

                    box-shadow:none !important;

                    margin:0 !important;

                }








                


                `}
            </style>

        </div>

    );

}

