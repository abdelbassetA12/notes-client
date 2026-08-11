import {
    FiMail,
    FiArrowUpRight
} from "react-icons/fi";


export default function Footer() {

    return (

        <footer className="jr-footer">

            <div className="jr-footer-inner">


                <div className="jr-footer-brand">

                    <a
                        href="/"
                        className="jr-logo"
                    >

                        <span className="jr-logo-icon">
                            <span>➤</span>
                        </span>

                        <span className="jr-logo-text">
                            AverTools
                        </span>

                    </a>


                    <p>
                        Your all-in-one platform for
                        finding jobs, managing applications,
                        and getting hired faster.
                    </p>


                    <a
                        href="mailto:hello@jobreach.com"
                        className="jr-footer-email"
                    >

                        <FiMail />

                        hello@jobreach.com

                    </a>

                </div>


                <div className="jr-footer-column">

                    <h4>
                        Product
                    </h4>

                    <a href="#features">
                        Features
                    </a>

                    <a href="#templates">
                        Resume Builder
                    </a>

                    <a href="#pricing">
                        Pricing
                    </a>

                    <a href="#how-it-works">
                        How It Works
                    </a>

                </div>


                <div className="jr-footer-column">

                    <h4>
                        Resources
                    </h4>

                    <a href="#resources">
                        Blog
                    </a>

                    <a href="#resources">
                        Guides
                    </a>

                    <a href="#resources">
                        Help Center
                    </a>

                    <a href="#resources">
                        Contact
                    </a>

                </div>


                <div className="jr-footer-column">

                    <h4>
                        Company
                    </h4>

                    <a href="#about">
                        About
                    </a>

                    <a href="#testimonials">
                        Testimonials
                    </a>

                    <a href="#faq">
                        FAQ
                    </a>

                    <a href="#privacy">
                        Privacy
                    </a>

                </div>

            </div>


            <div className="jr-footer-bottom">

                <span>
                    © {new Date().getFullYear()} JobReach. All rights reserved.
                </span>


                <span>
                    Built for ambitious job seekers.
                </span>


                <a href="#top">

                    Back to top

                    <FiArrowUpRight />

                </a>

            </div>

        </footer>

    );
}