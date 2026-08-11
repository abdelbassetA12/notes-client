import {
    FiFileText,
    FiGrid,
    FiDatabase,
    FiBriefcase,
    FiCoffee
} from "react-icons/fi";

export default function Integrations() {

    const items = [
        {
            type: "gmail",
            title: "Gmail"
        },
        {
            type: "sheets",
            title: "Google Sheets"
        },
        {
            type: "excel",
            title: "Microsoft",
            second: "Excel"
        },
        {
            type: "csv",
            title: "CSV"
        },
        {
            type: "hotels",
            title: "Hotels"
        },
        {
            type: "restaurants",
            title: "Restaurants"
        }
    ];

    return (
        <section className="jr-integrations">

            <div className="jr-integrations-inner">

                <div className="jr-integrations-label">

                    <strong>
                        Built for job seekers
                    </strong>

                    <span>
                        powered by best tools
                    </span>

                </div>


                <div className="jr-integrations-list">

                    {items.map((item, index) => (

                        <div
                            className={`jr-integration-item ${item.type}`}
                            key={index}
                        >

                            {item.type === "gmail" && (
                                <div className="jr-brand-symbol gmail">
                                    M
                                </div>
                            )}

                            {item.type === "sheets" && (
                                <div className="jr-brand-symbol sheets">
                                    <FiGrid />
                                </div>
                            )}

                            {item.type === "excel" && (
                                <div className="jr-brand-symbol excel">
                                    <FiDatabase />
                                </div>
                            )}

                            {item.type === "csv" && (
                                <div className="jr-brand-symbol csv">
                                    <FiFileText />
                                </div>
                            )}

                            {item.type === "hotels" && (
                                <div className="jr-brand-symbol hotels">
                                    <FiBriefcase />
                                </div>
                            )}

                            {item.type === "restaurants" && (
                                <div className="jr-brand-symbol restaurants">
                                    <FiCoffee />
                                </div>
                            )}


                            <div className="jr-integration-name">

                                <span>
                                    {item.title}
                                </span>

                                {item.second && (
                                    <span>
                                        {item.second}
                                    </span>
                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}