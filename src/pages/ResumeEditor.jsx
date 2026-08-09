import { ResumeProvider } from "../components/context/ResumeContext";
import ResumeLayout from "../components/layout/ResumeLayout";

export default function ResumeEditor() {

    return (
        <ResumeProvider>

            <ResumeLayout />

        </ResumeProvider>
    );

}