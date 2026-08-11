import { Link, useLocation } from "react-router-dom";
import {
    FiChevronDown,
    FiLogIn
} from "react-icons/fi";

export default function Navbar() {

    return (

        <header className="jr-navbar">

            <div className="jr-navbar-inner">

                {/* Logo */}

                <a href="/" className="jr-logo">

                    <span className="jr-logo-icon">
                        <span>➤</span>
                    </span>

                    <span className="jr-logo-text">
                       
                       Avertools
                    </span>

                </a>


                {/* Navigation */}

                <nav className="jr-nav">

                    <a href="#features">
                        Features
                    </a>

                    <a href="#how-it-works">
                        How It Works
                    </a>

                    <a href="#templates">
                        Templates
                    </a>

                    <a href="#pricing">
                        Pricing
                    </a>

                    <a href="#testimonials">
                        Testimonials
                    </a>

                    <a href="#resources" className="jr-resource-link">
                        Resources
                        <FiChevronDown />
                    </a>

                </nav>


                {/* Actions */}

                <div className="jr-navbar-actions">

                     
                    <Link className="jr-login-btn" to="/auth">
                      Login
                    </Link>

                     
                     <Link className="jr-start-btn" to="/auth">
                     Start Applying
                    </Link>

                </div>

            </div>

        </header>

    );

}