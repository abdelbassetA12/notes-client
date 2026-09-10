import { useResume } from "../context/ResumeContext";
import templates from "../templates";
import ResumePagination from "../preview/ResumePagination";

export default function PDFExportRenderer() {
    const {
        resume,
        selectedTemplate,
        design
    } = useResume();

    const ActiveTemplate =
        templates[selectedTemplate];

    if (!ActiveTemplate) return null;

    const pageSize =
        design?.pageSize || "A4";

    return (
        <div
            id="resume-pdf-export"
            data-pdf-export="true"
            className="pdf-export-root"
        >
            <ResumePagination
                Template={ActiveTemplate}
                resume={resume}
                pageSize={pageSize}
            />

            <style>{`
                .pdf-export-root {
                    position: absolute;
                    left: -100000px;
                    top: 0;
                    width: 794px;
                    min-height: 1123px;
                    background: #ffffff;
                    z-index: -9999;
                }

                .pdf-export-root .pagination-container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0;
                }

                .pdf-export-root .pagination-measure {
                    position: absolute !important;
                    left: -100000px !important;
                    top: 0 !important;
                }

                .pdf-export-root .resume-page {
                    box-shadow: none !important;
                    margin: 0 !important;
                    flex-shrink: 0 !important;
                }

                .pdf-export-root .resume-page-content {
                    transform: none;
                }

                .pdf-export-root img {
                    image-rendering: auto;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
            `}</style>
        </div>
    );
}