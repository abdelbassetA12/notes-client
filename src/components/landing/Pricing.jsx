import {
    FiCheck,
    FiArrowRight
} from "react-icons/fi";

export default function Pricing() {

    const plans = [

        {
            name: "Starter",
            description: "For getting started with your job search.",
            price: "0",
            period: "forever",
            features: [
                "Up to 100 job leads",
                "3 email templates",
                "Basic lead tracking",
                "CSV import",
                "Resume builder"
            ],
            button: "Get Started",
            featured: false
        },

        {
            name: "Pro",
            description: "For serious job seekers applying every day.",
            price: "9",
            period: "month",
            features: [
                "Unlimited job leads",
                "Unlimited email templates",
                "Advanced lead tracking",
                "CSV & Excel import",
                "Professional resume builder",
                "Bulk Gmail outreach",
                "Advanced analytics"
            ],
            button: "Start Pro",
            featured: true
        },

        {
            name: "Business",
            description: "For teams and professional recruitment workflows.",
            price: "19",
            period: "month",
            features: [
                "Everything in Pro",
                "Multiple workspaces",
                "Advanced analytics",
                "Priority support",
                "Team collaboration",
                "Export & reporting"
            ],
            button: "Contact Us",
            featured: false
        }

    ];


    return (

        <section
            className="jr-pricing"
            id="pricing"
        >

            <div className="jr-section-container">

                <div className="jr-section-heading">

                    <h2>
                        Simple, Transparent Pricing
                    </h2>

                    <p className="jr-section-subtitle">
                        Start for free. Upgrade when you need more power.
                    </p>

                </div>


                <div className="jr-pricing-grid">

                    {plans.map((plan, index) => (

                        <article
                            className={`jr-price-card ${
                                plan.featured
                                    ? "featured"
                                    : ""
                            }`}
                            key={index}
                        >

                            {plan.featured && (

                                <div className="jr-popular-label">
                                    Most Popular
                                </div>

                            )}


                            <div className="jr-price-top">

                                <h3>
                                    {plan.name}
                                </h3>

                                <p>
                                    {plan.description}
                                </p>

                            </div>


                            <div className="jr-price">

                                <span className="jr-price-currency">
                                    €
                                </span>

                                <strong>
                                    {plan.price}
                                </strong>

                                <span className="jr-price-period">
                                    / {plan.period}
                                </span>

                            </div>


                            <button className="jr-price-button">

                                {plan.button}

                                <FiArrowRight />

                            </button>


                            <div className="jr-price-divider" />


                            <ul>

                                {plan.features.map(
                                    (feature, featureIndex) => (

                                        <li key={featureIndex}>

                                            <span>
                                                <FiCheck />
                                            </span>

                                            {feature}

                                        </li>

                                    )
                                )}

                            </ul>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );
}