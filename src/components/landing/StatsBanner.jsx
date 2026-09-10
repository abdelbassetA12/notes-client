 
import {
    FiGlobe,
    FiSend,
    FiCheckCircle,
    FiZap,
    FiHeadphones
} from "react-icons/fi";

export default function StatsBanner() {
    const stats = [
        {
            icon: <FiGlobe />,
            value: "20,000+",
            label: "Professionals"
        },
        {
            icon: <FiGlobe />,
            value: "50+",
            label: "Countries Covered"
        },
        {
            icon: <FiCheckCircle />,
            value: "100%",
            label: "Organized Workflows"
        },
        {
            icon: <FiSend />,
            value: "1 Click",
            label: "Professional Outreach"
        },
        {
            icon: <FiHeadphones />,
            value: "24/7",
            label: "Active Support"
        }
    ];

    return (
        <section className="jr-stats-section">
            <div className="jr-stats-banner">
                {stats.map((stat, index) => (
                    <div
                        className="jr-stat-banner-item"
                        key={index}
                    >
                        <div className="jr-stat-banner-icon">
                            {stat.icon}
                        </div>

                        <div className="jr-stat-banner-content">
                            <strong>
                                {stat.value}
                            </strong>
                            <span>
                                {stat.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
