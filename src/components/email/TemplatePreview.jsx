


import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import API_BASE from "../../config/api";
export default function TemplatePreview({

    subject,
    body

}) {
    const [companies, setCompanies] = useState([]);

const [selected, setSelected] = useState(null);
useEffect(() => {

    axios.get(
        `${API_BASE}/api/job-leads`,
        {
            params:{ limit:500 },
            withCredentials:true
        }
    )
.then(res => {

    const leads = res.data.leads;

    console.log(leads);

    setCompanies(leads);

    if (leads.length > 0) {
        setSelected(leads[0]);
    }

})
  
.catch(console.error);
   

},[]);




    const profile = {

        yourName: "Abdelbasset El Hajiri",

        yourEmail: "abdelbasset.elhajiri1@gmail.com",

        yourPhone: "+212700592987",

        yourNationality: "Moroccan",

        yourLinkedin: "linkedin.com/in/abdelbasset",

        yourPortfolio: "portfolio.com"

    };

    

   const replaceVariables = (text) => {

    if (!selected) return text;

    return text

        .replaceAll(
            "{{companyName}}",
            selected.companyName || ""
        )

            .replaceAll(
                "{{contactPerson}}",
                selected.contactPerson || ""
            )

            .replaceAll(
                "{{email}}",
                selected.email || ""
            )

            .replaceAll(
                "{{website}}",
                selected.website || ""
            )

            .replaceAll(
                "{{country}}",
                selected.country || ""
            )

            .replaceAll(
                "{{city}}",
                selected.city || ""
            )

            .replaceAll(
                "{{desiredJob}}",
                selected.desiredJob || ""
            )

            .replaceAll(
                "{{yourName}}",
                profile.yourName
            )

            .replaceAll(
                "{{yourEmail}}",
                profile.yourEmail
            )

            .replaceAll(
                "{{yourPhone}}",
                profile.yourPhone
            )

            .replaceAll(
                "{{yourNationality}}",
                profile.yourNationality
            )

            .replaceAll(
                "{{yourLinkedin}}",
                profile.yourLinkedin
            )

            .replaceAll(
                "{{yourPortfolio}}",
                profile.yourPortfolio
            )

            .replaceAll(
                "{{today}}",
                new Date().toLocaleDateString()
            )

            .replaceAll(
                "{{year}}",
                new Date().getFullYear()
            );

    };

    const previewSubject = useMemo(

        () => replaceVariables(subject),

        [subject, selected]

    );

    const previewBody = useMemo(

        () => replaceVariables(body),

        [body, selected]

    );
console.log(selected);
    return (

        <div className="preview-card">

            <div className="preview-header">

                <h3>

                    Live Preview

                </h3>

                <select

                 
                    value={selected?.companyName || ""}

                    onChange={(e)=>{

                        const company = companies.find(

                            c=>c.companyName===e.target.value

                        );

                        setSelected(company);

                    }}

                >

                    {

                        companies.map(company=>(

                            <option

                                key={company.companyName }

                                value={company.companyName}

                            >

                                {company.companyName}

                            </option>

                        ))

                    }

                </select>

            </div>

            <div className="preview-subject">

                <strong>

                    Subject

                </strong>

                <p>

                    {previewSubject}

                </p>

            </div>

            <div

                className="preview-body"

                dangerouslySetInnerHTML={{

                    __html: previewBody

                }}

            />

        </div>

    );

}