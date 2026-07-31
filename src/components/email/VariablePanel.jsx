import {
    FiHome,
    FiUser,
    FiMail,
    FiPhone,
    FiGlobe,
    FiMapPin,
    FiBriefcase,
    FiCalendar
} from "react-icons/fi";

const variables = [

    {
        title: "Company",
        items: [

            {
                label: "Company Name",
                value: "{{companyName}}",
                icon: <FiHome />
            },

            {
                label: "Contact Person",
                value: "{{contactPerson}}",
                icon: <FiUser />
            },

            {
                label: "Company Email",
                value: "{{email}}",
                icon: <FiMail />
            },

            {
                label: "Website",
                value: "{{website}}",
                icon: <FiGlobe />
            },

            {
                label: "Country",
                value: "{{country}}",
                icon: <FiMapPin />
            },

            {
                label: "City",
                value: "{{city}}",
                icon: <FiMapPin />
            }

        ]
    },

    {
        title: "Job",

        items: [

            {
                label: "Desired Job",
                value: "{{desiredJob}}",
                icon: <FiBriefcase />
            }

        ]
    },

    {
        title: "My Profile",

        items: [

            {
                label: "My Name",
                value: "{{yourName}}",
                icon: <FiUser />
            },

            {
                label: "My Email",
                value: "{{yourEmail}}",
                icon: <FiMail />
            },

            {
                label: "My Phone",
                value: "{{yourPhone}}",
                icon: <FiPhone />
            },

            {
                label: "Nationality",
                value: "{{yourNationality}}",
                icon: <FiMapPin />
            },

            {
                label: "LinkedIn",
                value: "{{yourLinkedin}}",
                icon: <FiGlobe />
            },

            {
                label: "Portfolio",
                value: "{{yourPortfolio}}",
                icon: <FiGlobe />
            }

        ]
    },

    {
        title: "Date",

        items: [

            {
                label: "Today",
                value: "{{today}}",
                icon: <FiCalendar />
            },

            {
                label: "Current Year",
                value: "{{year}}",
                icon: <FiCalendar />
            }

        ]
    }

];

export default function VariablePanel({ onInsert }) {

    return (

        <div className="variable-panel">

            {variables.map(section => (

                <div
                    key={section.title}
                    className="variable-section"
                >

                    <h3>

                        {section.title}

                    </h3>

                    {section.items.map(item => (

                        <button

                            key={item.value}

                            className="variable-item"

                            onClick={() =>
                                onInsert(item.value)
                            }

                        >

                            <span>

                                {item.icon}

                            </span>

                            <div>

                                <strong>

                                    {item.label}

                                </strong>

                                <small>

                                    {item.value}

                                </small>

                            </div>

                        </button>

                    ))}

                </div>

            ))}

        </div>

    );

}