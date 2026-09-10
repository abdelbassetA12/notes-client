
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PAGE_SIZES = {
    A4: {
        width: 794,
        height: 1123,
        pdfWidth: 210,
        pdfHeight: 297
    },

    Letter: {
        width: 816,
        height: 1056,
        pdfWidth: 215.9,
        pdfHeight: 279.4
    }
};

const wait = (ms) =>
    new Promise(resolve =>
        setTimeout(resolve, ms)
    );

const waitForImages = async (root) => {
    const images = Array.from(
        root.querySelectorAll("img")
    );

    await Promise.all(
        images.map(img => {
            if (img.complete && img.naturalWidth > 0) {
                return Promise.resolve();
            }

            return new Promise(resolve => {
                const done = () => {
                    img.removeEventListener(
                        "load",
                        done
                    );

                    img.removeEventListener(
                        "error",
                        done
                    );

                    resolve();
                };

                img.addEventListener("load", done);
                img.addEventListener("error", done);
            });
        })
    );

    await Promise.all(
        images.map(async img => {
            try {
                if (img.decode) {
                    await img.decode();
                }
            } catch {
                // Image already loaded but decode failed.
            }
        })
    );
};

export async function downloadResumePDF({
    pageSize = "A4",
    fileName = "resume.pdf"
} = {}) {

    const size =
        PAGE_SIZES[pageSize] ||
        PAGE_SIZES.A4;

    const exportRoot =
        document.getElementById(
            "resume-pdf-export"
        );

    if (!exportRoot) {
        throw new Error(
            "PDF export renderer not found."
        );
    }

    /*
     * Wait for React rendering
     */
    await wait(150);

    /*
     * Make sure every photo/image is loaded
     */
    await waitForImages(exportRoot);

    /*
     * Give browser one extra frame to finish
     * layout, fonts and images.
     */
    await new Promise(requestAnimationFrame);
    await wait(100);

    const pages = Array.from(
        exportRoot.querySelectorAll(
            ".resume-page"
        )
    );

    if (!pages.length) {
        throw new Error(
            "No resume pages found."
        );
    }

    const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [
            size.pdfWidth,
            size.pdfHeight
        ],
        compress: true
    });

    for (
        let index = 0;
        index < pages.length;
        index++
    ) {

        const page = pages[index];

        /*
         * IMPORTANT:
         * Capture the real page.
         * No Preview zoom.
         * No scale transform.
         */
        const canvas =
            await html2canvas(page, {
                scale: 3,

                width: size.width,
                height: size.height,

                windowWidth: size.width,
                windowHeight: size.height,

                useCORS: true,
                allowTaint: false,

                backgroundColor: "#ffffff",

                logging: false,

                imageTimeout: 15000,

                removeContainer: true
            });

        const imageData =
            canvas.toDataURL(
                "image/png",
                1.0
            );

        if (index > 0) {
            pdf.addPage(
                [
                    size.pdfWidth,
                    size.pdfHeight
                ],
                "portrait"
            );
        }

        pdf.addImage(
            imageData,
            "PNG",
            0,
            0,
            size.pdfWidth,
            size.pdfHeight,
            undefined,
            "FAST"
        );
    }

    pdf.save(fileName);
}