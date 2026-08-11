
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Integrations from "../components/landing/Integrations";
import Features from "../components/landing/Features";
import ResumeSection from "../components/landing/ResumeSection";
import LeadsOverview from "../components/landing/LeadsOverview";
import HowItWorks from "../components/landing/HowItWorks";
import StatsBanner from "../components/landing/StatsBanner";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";
import FAQ from "../components/landing/FAQ";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";

export default function Home() {

    return (

        <div className="jr-page">

            <Navbar />

            <main>

                <Hero />

                <Integrations />

                <Features />

                <ResumeSection />

                <LeadsOverview />

                <HowItWorks />

                <StatsBanner />

                <Testimonials />

                <Pricing />

                <FAQ />

                <FinalCTA />

            </main>
            <Footer />

           
            <style>
              {
                `
                /* =========================================================
   JOBREACH LANDING PAGE
========================================================= */

:root {

    --jr-primary: #5138df;
    --jr-primary-dark: #4328c9;
    --jr-primary-light: #eeeaff;

    --jr-text: #101735;
    --jr-text-light: #596078;

    --jr-border: #e8e9f3;

    --jr-bg: #ffffff;

    --jr-green: #19a974;
    --jr-orange: #f59b23;

    --jr-radius: 12px;

}


/* =========================================================
   GLOBAL
========================================================= */

.jr-page {

    width: 100%;

    min-height: 100vh;

    background:
        radial-gradient(
            circle at 50% 15%,
            rgba(82, 56, 223, .07),
            transparent 27%
        ),
        #fff;

    color: var(--jr-text);

    font-family:
        Inter,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;

}



.jr-page *,
.jr-page *::before,
.jr-page *::after {

    box-sizing: border-box;

}


.jr-page button,
.jr-page a {

    font-family: inherit;

}
     a{
text-decoration:none;
}


.jr-page button {

    cursor: pointer;

}


/* =========================================================
   NAVBAR
========================================================= */

.jr-navbar {

    width: 100%;

    height: 79.2px;

    background: rgba(255, 255, 255, .92);

    border-bottom: 1.3px solid rgba(232, 233, 243, .5);

    position: fixed;

    z-index: 20;

}


.jr-navbar-inner {

    width: min(100% - 48px, 1240px);

    height: 100%;

    margin: auto;

    display: flex;

    align-items: center;

    justify-content: space-between;

}


/* Logo */

.jr-logo {

    display: flex;

    align-items: center;

    gap: 10.6px;

    text-decoration: none;

    color: var(--jr-text);

}


.jr-logo-icon {

    width: 34.3px;

    height: 34.3px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    color: white;

    background:
        linear-gradient(
            135deg,
            #6b54ed,
            #4930d5
        );

    font-size: 21.7px;

    transform: rotate(-10deg);

}


.jr-logo-icon span {

    transform: rotate(10deg);

}


.jr-logo-text {

    font-size: 24.8px;

    font-weight: 750;

    letter-spacing: -.4px;

}


/* Navigation */

.jr-nav {

    display: flex;

    align-items: center;

    gap: 44.9px;

    margin-left: 105.6px;

}


.jr-nav a {

    text-decoration: none;

    color: #151a39;

    font-size: 15.5px;

    font-weight: 600;

    transition: .2s ease;

}


.jr-nav a:hover {

    color: var(--jr-primary);

}


.jr-resource-link {

    display: flex;

    align-items: center;

    gap: 5.3px;

}


.jr-resource-link svg {

    width: 13.2px;

    height: 13.2px;

}


/* Navbar buttons */

.jr-navbar-actions {

    display: flex;

    align-items: center;

    gap: 18.5px;

}


.jr-login-btn {

    

    min-width: 73.9px;

    padding: 13px 15px;

    border-radius: 7px;

    border: 1px solid #dddaf4;

    background: white;

    color: var(--jr-primary);

    font-size: 14px;

    font-weight: 650;

 }
    


.jr-start-btn {

    

    padding: 13px 21px;

    border: 0;

    border-radius: 7px;

    color: white;

    background:
        linear-gradient(
            135deg,
            #5c42e8,
            #4b32d6
        );

    box-shadow:
        0 5px 14px rgba(81, 56, 223, .18);

    font-size: 14px;

    font-weight: 650;

}


/* =========================================================
   HERO
========================================================= */

.jr-hero {

    padding: 52.8px 0 8px;

    overflow: hidden;

}


.jr-hero-container {

    width: min(100% - 48px, 1240px);

    margin: auto;

    display: grid;

    grid-template-columns: 370px 1fr;

    gap: 37px;

    align-items: center;

}


/* Hero content */

.jr-hero-content {

    padding-left: 18.5px;

    position: relative;

    z-index: 2;

}


.jr-hero-badge {

    display: inline-flex;

    align-items: center;

    gap: 9.2px;

    padding: 9.2px 12px;

    border-radius: 30px;

    background: #faf8ff;

    border: 1px solid #ebe6ff;

    color: #4432bb;

    font-size: 14px;

    font-weight: 600;

    margin-bottom: 22.4px;

}


.jr-hero-badge span {

    color: #e6b8e9;

    font-size: 17.1px;

}


.jr-hero h1 {

    padding: 0;

    margin: 0;

    font-size: 52.7px;

    line-height: 1.08;

    letter-spacing: -1.7px;

    font-weight: 800;

    color: #101632;

}


.jr-hero h1 span {

    color: var(--jr-primary);

}


.jr-hero-description {

    width: 462px;

    margin: 19.8px 0 19px;

    color: #555d75;

    font-size: 17.1px;

    line-height: 1.6;

}


/* Buttons */

.jr-hero-buttons {

    display: flex;

    gap: 17.2px;

    align-items: center;

}


.jr-primary-btn {

    height: 46.2px;

    padding: 0 18px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 17.2px;

    border: 0;

    border-radius: 7px;

    color: white;

    background:
        linear-gradient(
            135deg,
            #5a3de5,
            #4930d2
        );

    box-shadow:
        0 8px 20px rgba(81, 56, 223, .18);

    font-size: 14px;

    font-weight: 700;

}


.jr-primary-btn svg {

    width: 17.2px;

}


.jr-demo-btn {

    height: 46.2px;

    padding: 0 15px;

    display: flex;

    align-items: center;

    gap: 11.9px;

    border-radius: 7px;

    border: 1px solid #d9d5f8;

    color: #171a39;

    background: white;

    font-size: 14px;

    font-weight: 650;

}


.jr-demo-btn span {

    width: 21.1px;

    height: 21.1px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    color: white;

    background: var(--jr-primary);

}


.jr-demo-btn svg {

    width: 10.6px;

    height: 10.6px;

    fill: white;

}


/* Checks */

.jr-hero-checks {

    display: flex;

    align-items: center;

    flex-wrap: wrap;

    gap: 10.6px 13px;

    margin-top: 27.7px;

}


.jr-hero-checks span {

    display: flex;

    align-items: center;

    gap: 5.3px;

    white-space: nowrap;

    font-size: 12.4px;

    font-weight: 600;

    color: #30364e;

}


.jr-hero-checks svg {

    width: 11.9px;

    height: 11.9px;

    stroke-width: 3;

    color: #4532d7;

}


/* =========================================================
   DASHBOARD PREVIEW
========================================================= */

.jr-hero-dashboard {

    position: relative;

    min-width: 0;

}


.jr-dashboard {

    width: 100%;

    min-height: 448.8px;

    display: grid;

    grid-template-columns: 102px 1fr;

    overflow: hidden;

    border-radius: 12px;

    background: white;

    border: 1px solid #e9e9f2;

    box-shadow:
        0 16px 40px rgba(36, 32, 86, .10),
        0 3px 10px rgba(36, 32, 86, .05);

}


/* =========================================================
   DASHBOARD SIDEBAR
========================================================= */

.jr-dashboard-sidebar {

    border-right: 1.3px solid #ededf4;

    background: #fff;

    padding: 17.2px 7px;

}


.jr-dashboard-brand {

    display: flex;

    align-items: center;

    gap: 6.6px;

    padding-bottom: 16px;

    font-size: 12.4px;

    font-weight: 750;

}


.jr-mini-logo {

    width: 15px;

    height: 15px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    color: white;

    background: var(--jr-primary);

    font-size: 10.8px;

}


.jr-sidebar-menu {

    display: flex;

    flex-direction: column;

    gap: 5.3px;

}


.jr-sidebar-item {

    min-height: 30.4px;

    padding: 2 7px;

    border-radius: 5px;

    display: flex;

    align-items: center;

    gap: 9.2px;

    color: #31364b;

    font-size: 10px;

    position: relative;

}


.jr-sidebar-item svg {

    width: 12px;

    height: 12px;

    flex-shrink: 0;

}


.jr-sidebar-item.active {
 
    color: white;

    background:
        linear-gradient(
            135deg,
            #5d40e5,
            #4930d0
        );

    box-shadow:
        0 4px 10px rgba(81, 56, 223, .17);

}


.jr-new-label {

    margin-left: auto;

    padding: 2.6px 4px;

    border-radius: 4px;

    color: #7d4fe7;

    background: #f1e8ff;

    font-size: 8px;

    font-weight: 700;

}


/* =========================================================
   DASHBOARD MAIN
========================================================= */

.jr-dashboard-main {

    min-width: 0;

    padding: 14.5px 10px 10px;

    background: #fff;

}


/* Topbar */

.jr-dashboard-topbar {

    height: 29px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 13.2px;

}


.jr-dashboard-title {

    display: flex;

    align-items: center;

    gap: 6.6px;

    font-size: 14px;

}


.jr-dashboard-title span {

    color: #9a9ca9;

}


.jr-dashboard-tools {

    display: flex;

    align-items: center;

    gap: 7.9px;

}


.jr-dashboard-tools button {

    width: 23.8px;

    height: 23.8px;

    border: 1px solid #eeeeF5;

    border-radius: 5px;

    background: white;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #777b91;

}


.jr-dashboard-tools button svg {

    width: 11.9px;

}


.jr-avatar {

    width: 23.8px;

    height: 23.8px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    color: white;

    background:
        linear-gradient(
            135deg,
            #ae8065,
            #594233
        );

    font-size: 10.8px;

    font-weight: 700;

}


/* =========================================================
   STAT CARDS
========================================================= */

.jr-dashboard-stats {

    display: grid;

    grid-template-columns: repeat(5, 1fr);

    gap: 7.9px;

    margin-bottom: 11.9px;

}


.jr-stat-card {

    min-width: 0;

    padding: 10.6px;

    border: 1px solid #ebebf3;

    border-radius: 7px;

    display: flex;

    flex-direction: column;

    background: #fff;

}


.jr-stat-icon {

    width: 22.4px;

    height: 22.4px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 4px;

    margin-bottom: 6.6px;

}


.jr-stat-icon svg {

    width: 11.9px;

}


.jr-stat-icon.blue {

    color: #5145d8;

    background: #eeecff;

}


.jr-stat-icon.green {

    color: #1a9a70;

    background: #e7f8f1;

}


.jr-stat-icon.orange {

    color: #f28b19;

    background: #fff2df;

}


.jr-stat-icon.purple {

    color: #7651dc;

    background: #f0eaff;

}


.jr-stat-icon.accepted {

    color: #189b5f;

    background: #e4f7ec;

}


.jr-stat-label {

    font-size: 10px;

    color: #656a7e;

    margin-bottom: 2.6px;

}


.jr-stat-card strong {

    font-size: 18.6px;

    line-height: 1.1;

    color: #111631;

}


.jr-stat-card small {

    margin-top: 4px;

    font-size: 10px;

    color: #28a06e;

}


/* =========================================================
   DASHBOARD CONTENT
========================================================= */

.jr-dashboard-content {

    display: grid;

    grid-template-columns: 1.65fr 1fr;

    gap: 9.2px;

}


.jr-recent-leads,
.jr-template-panel {

    border: 1px solid #ebebf3;

    border-radius: 7px;

    background: white;

}


/* Panel header */

.jr-panel-header {

    height: 40.9px;

    padding: 0 9px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border-bottom: 1.3px solid #f0f0f5;

}


.jr-panel-header h3 {

    margin: 0;

    font-size: 10.8px;

    font-weight: 750;

}


.jr-panel-header button {

    border: 0;

    background: transparent;

    color: #5138df;

    font-size: 10px;

    font-weight: 650;

}


/* Leads */

.jr-leads-list {

    padding: 1.3px 9px;

}


.jr-lead-row {

    min-height: 46.2px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border-bottom: 1.3px solid #f3f3f7;

}


.jr-lead-row:last-child {

    border-bottom: 0;

}


.jr-lead-person {

    display: flex;

    align-items: center;

    gap: 7.9px;

    min-width: 0;

}


.jr-lead-avatar {

    width: 22.4px;

    height: 22.4px;

    flex-shrink: 0;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    color: white;

    background:
        linear-gradient(
            135deg,
            #d49a7c,
            #604638
        );

    font-size: 10px;

    font-weight: 700;

}


.jr-lead-person div:last-child {

    display: flex;

    flex-direction: column;

    min-width: 0;

}


.jr-lead-person strong {

    font-size: 10px;

    color: #22263d;

}


.jr-lead-person span {

    font-size: 10px;

    color: #8a8d9e;

    margin-top: 2.6px;

}


.jr-lead-right {

    display: flex;

    align-items: center;

    gap: 9.2px;

}


.jr-lead-right small {

    color: #999cab;

    font-size: 10px;

}


.jr-lead-status {

    padding: 4px 5px;

    border-radius: 4px;

    font-size: 10px;

    font-weight: 650;

}


.jr-lead-status.sent {

    color: #168c63;

    background: #e9f8f2;

}


.jr-lead-status.waiting {

    color: #dd8a15;

    background: #fff3dc;

}


.jr-lead-status.interview {

    color: #7950db;

    background: #f1e9ff;

}


/* =========================================================
   TEMPLATE PANEL
========================================================= */

.jr-template-panel {

    padding: 10.6px;

}


.jr-template-title {

    display: flex;

    align-items: center;

    gap: 6.6px;

    margin-bottom: 10.6px;

    font-size: 10.8px;

}


.jr-star {

    color: #f2a51a;

}


.jr-template-box {

    border: 1px solid #eeeeF4;

    border-radius: 5px;

    padding: 10.6px;

    display: flex;

    flex-direction: column;

}


.jr-template-box span {

    font-size: 10px;

    font-weight: 700;

}


.jr-template-box small {

    margin-top: 4px;

    color: #9295a6;

    font-size: 10px;

}


.jr-template-box button {

    height: 26.4px;

    margin-top: 10.6px;

    border: 1px solid #e5e4f3;

    border-radius: 4px;

    color: #4937c5;

    background: white;

    font-size: 10px;

}


.jr-quick-actions {

    margin-top: 10.6px;

    border-top: 1.3px solid #f0f0f5;

    padding-top: 9.2px;

}


.jr-quick-actions h4 {

    margin: 0 0 5px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    font-size: 10px;

}


.jr-quick-actions h4 svg {

    width: 10.6px;

}


.jr-quick-actions > div {

    min-height: 25.1px;

    display: flex;

    align-items: center;

    gap: 7.9px;

    color: #4c5063;

    font-size: 10px;

}


.jr-quick-actions > div svg {

    width: 10.6px;

    color: #4f3bd3;

}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1452px) {

    .jr-nav {

        gap: 26.4px;

        margin-left: 39.6px;

    }

    .jr-hero-container {

        grid-template-columns: 340px 1fr;

    }

}


@media (max-width: 1188px) {

    .jr-nav {

        display: none;

    }

    .jr-hero-container {

        grid-template-columns: 1fr;

    }

    .jr-hero-content {

        text-align: center;

        padding-left: 0;

        display: flex;

        flex-direction: column;

        align-items: center;

    }

    .jr-hero-description {

        width: min(100%, 500px);

    }

    .jr-hero-dashboard {

        width: 100%;

    }

}


@media (max-width: 858px) {

    .jr-navbar-inner {

        width: calc(100% - 28px);

    }

    .jr-navbar-actions {

        gap: 7.9px;

    }

    .jr-login-btn {

        display: none;

    }

    .jr-start-btn {

        padding: 0 13px;

    }

    .jr-hero {

        padding-top: 33px;

    }

    .jr-hero-container {

        width: calc(100% - 24px);

    }

    .jr-hero h1 {

        font-size: 45px;

    }

    .jr-hero-checks {

        justify-content: center;

    }

    .jr-dashboard {

        grid-template-columns: 75px 1fr;

        min-height: 369.6px;

    }

    .jr-sidebar-item {

        font-size: 10px;

        gap: 5.3px;

    }

    .jr-dashboard-stats {

        grid-template-columns: repeat(2, 1fr);

    }

    .jr-dashboard-content {

        grid-template-columns: 1fr;

    }

    .jr-template-panel {

        display: none;

    }

}


@media (max-width: 594px) {

    .jr-dashboard-sidebar {

        display: none;

    }

    .jr-dashboard {

        grid-template-columns: 1fr;

    }

    .jr-dashboard-main {

        padding: 10.6px;

    }

    .jr-stat-card {

        padding: 7.9px;

    }

    .jr-lead-right small {

        display: none;

    }

}





/* =========================================================
   INTEGRATIONS
========================================================= */

.jr-integrations {

    width: 100%;

    padding: 0 0 13px;

}


.jr-integrations-inner {

    width: min(100% - 48px, 1240px);

    min-height: 67.3px;

    margin: auto;

    padding: 0 28px;

    display: flex;

    align-items: center;

    border: 1px solid #ededf4;

    border-radius: 10px;

    background: #fff;

    box-shadow:
        0 4px 15px rgba(35, 30, 85, .035);

}


.jr-integrations-label {

    width: 165px;

    display: flex;

    flex-direction: column;

    gap: 2.6px;

    flex-shrink: 0;

}


.jr-integrations-label strong {

    font-size: 15px;

    color: #252a40;

}


.jr-integrations-label span {

    font-size: 10px;

    color: #777b8c;

}


.jr-integrations-list {

    flex: 1;

    display: grid;

    grid-template-columns:
        repeat(6, 1fr);

    align-items: center;

}


.jr-integration-item {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 9.2px;

    min-width: 0;

}


.jr-brand-symbol {

    width: 26.4px;

    height: 26.4px;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 20px;

    font-weight: 800;

}


.jr-brand-symbol.gmail {

    color: #db4437;

    font-family: Arial, sans-serif;

}


.jr-brand-symbol.sheets {

    color: #22a564;

}


.jr-brand-symbol.excel {

    color: #16884b;

}


.jr-brand-symbol.csv {

    color: #252525;

}


.jr-brand-symbol.hotels {

    color: #4c37d8;

}


.jr-brand-symbol.restaurants {

    color: #5839df;

}


.jr-integration-name {

    display: flex;

    flex-direction: column;

    font-size: 13px;

    color: #3f4353;

}


.jr-integration-name span:first-child {

    font-weight: 550;

}


.jr-integration-item.hotels .jr-integration-name,
.jr-integration-item.restaurants .jr-integration-name {

    color: #24253e;

    font-weight: 700;

}


/* =========================================================
   SECTION HEADING
========================================================= */

.jr-section-container {

    width: min(100% - 48px, 1240px);

    margin: auto;

}


.jr-section-heading {

    text-align: center;

    margin-bottom: 22.4px;

}


.jr-section-heading h2 {

    margin: 0;

    color: #121832;

    font-size: 34.1px;

    font-weight: 800;

    letter-spacing: -.5px;

}


.jr-section-heading h2 span {

    color: var(--jr-primary);

}


/* =========================================================
   FEATURES
========================================================= */

.jr-features {

    padding: 0 0 8px;

}


.jr-features-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 7.9px;

}


.jr-feature-card {

    min-height: 95px;

    display: flex;

    align-items: flex-start;

    gap: 15.8px;

    padding: 13.2px;

    border: 1px solid #ececf4;

    border-radius: 9px;

    background: #fff;

    transition:
        transform .2s ease,
        box-shadow .2s ease;

}


.jr-feature-card:hover {

    transform: translateY(-2px);

    box-shadow:
        0 8px 25px rgba(54, 45, 120, .07);

}


.jr-feature-icon {

    width: 50.2px;

    height: 50.2px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 10px;

    border: 1px solid #eae7ff;

    background:
        linear-gradient(
            145deg,
            #fbfaff,
            #f3f0ff
        );

    color: #5037d9;

}


.jr-feature-icon svg {

    width: 26.4px;

    height: 26.4px;

    stroke-width: 1.8;

}


.jr-feature-content {

    padding-top: 1.3px;

}


.jr-feature-content h3 {

    margin: 0 0 3px;

    font-size: 23.2px;

    line-height: 1.2;

    font-weight: 750;

    color: #161a32;

}


.jr-feature-content p {

    margin: 0;

    max-width: 270.6px;

    font-size: 18.6px;

    line-height: 1.45;

    color: #64697b;

}


/* =========================================================
   RESUME SECTION
========================================================= */

.jr-resume-section {

    width: min(100% - 44px, 1250px);

    min-height: 250.8px;

    margin: 0 auto 10px;

    overflow: hidden;

    border-radius: 11px;

    border: 1px solid #ebe8fa;

    background:
        radial-gradient(
            circle at 10% 20%,
            rgba(114, 85, 255, .12),
            transparent 32%
        ),
        linear-gradient(
            110deg,
            #fbfaff,
            #f7f5ff
        );

}


.jr-resume-section-inner {

    min-height: 250.8px;

    display: grid;

    grid-template-columns: 270px 1fr;

    align-items: stretch;

}


/* Resume text */

.jr-resume-copy {

    padding: 15.8px 15px 10px 22px;

    position: relative;

    z-index: 2;

}


.jr-resume-new {

    display: inline-flex;

    align-items: center;

    height: 21.1px;

    padding: 0 8px;

    border-radius: 5px;

    background: #f0d7ff;

    color: #8640d7;

    font-size: 15.5px;

    font-weight: 700;

    margin-bottom: 7.9px;

}


.jr-resume-copy h2 {

    margin: 0;

    color: #12172f;

    font-size: 34.1px;

    line-height: 1.08;

    letter-spacing: -.7px;

    font-weight: 800;

}


.jr-resume-copy p {

    width: 270.6px;

    margin: 9.2px 0 9px;

    font-size: 18.6px;

    line-height: 1.5;

    color: #555b70;

}


.jr-resume-benefits {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 5.3px 7px;

    margin-bottom: 11.9px;

}


.jr-resume-benefits span {

    display: flex;

    align-items: center;

    gap: 5.3px;

    font-size: 15.5px;

    color: #33384c;

    white-space: nowrap;

}


.jr-resume-benefits svg {

    width: 10.6px;

    height: 10.6px;

    stroke-width: 3;

    color: #5036d7;

}


.jr-resume-button {

    height: 37px;

    min-width: 178.2px;

    padding: 0 12px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 10.6px;

    border: 0;

    border-radius: 5px;

    background:
        linear-gradient(
            135deg,
            #5a3fe3,
            #4a30cf
        );

    color: white;

    font-size: 18.6px;

    font-weight: 600;

    box-shadow:
        0 7px 15px rgba(81, 56, 223, .16);

}


.jr-resume-button svg {

    width: 13.2px;

}


/* Resume previews */

.jr-resume-previews {

    min-width: 0;

    display: flex;

    align-items: flex-end;

    justify-content: center;

    gap: 17.2px;

    padding: 11.9px 12px 0;

    overflow: hidden;

}


.jr-resume-mockup {

    width: 198px;

    min-width: 198px;

    height: 283.8px;

    padding: 15.8px 10px;

    border-radius: 7px 7px 0 0;

    background: #fff;

    border: 1px solid #e4e4ec;

    box-shadow:
        0 5px 14px rgba(25, 23, 65, .09);

    transform-origin: bottom;

    transition: transform .2s ease;

}


.jr-resume-mockup:hover {

    transform: translateY(-5px);

}


.jr-resume-mockup.dark {

    background: #252838;

    border-color: #252838;

}


.jr-resume-mockup.dark .jr-resume-name strong,
.jr-resume-mockup.dark .jr-resume-name span,
.jr-resume-mockup.dark .jr-resume-section-title {

    color: #fff;

}


.jr-resume-mockup.dark .jr-resume-line,
.jr-resume-mockup.dark .jr-resume-skill {

    background: #5b6073;

}


.jr-resume-mockup.dark .jr-resume-text i {

    background: #5d6273;

}


.jr-resume-top {

    display: flex;

    align-items: center;

    gap: 9.2px;

    padding-bottom: 10.6px;

    border-bottom: 1.3px solid #ececf1;

}


.jr-resume-mockup.dark .jr-resume-top {

    border-bottom-color: #44485a;

}


.jr-resume-photo {

    width: 33px;

    height: 33px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    color: white;

    background:
        linear-gradient(
            135deg,
            #c48e72,
            #5e4437
        );

    font-size: 10.8px;

    font-weight: 700;

}


.jr-resume-name {

    display: flex;

    flex-direction: column;

    gap: 1.3px;

}


.jr-resume-name strong {

    font-size: 12.4px;

    color: #161a2f;

}


.jr-resume-name span {

    font-size: 10.8px;

    color: #31354b;

}


.jr-resume-layout {

    display: grid;

    grid-template-columns: 1.5fr .8fr;

    gap: 11.9px;

    padding-top: 10.6px;

}


.jr-resume-left,
.jr-resume-right {

    min-width: 0;

}


.jr-resume-line {

    width: 100%;

    height: 4px;

    border-radius: 3px;

    background: #dfe0e7;

    margin-bottom: 4px;

}


.jr-resume-line.large {

    width: 80%;

    background: #5540d1;

}


.jr-resume-line.short {

    width: 60%;

}


.jr-resume-section-title {

    margin-top: 10.6px;

    margin-bottom: 5.3px;

    font-size: 10px;

    font-weight: 800;

    color: #292d42;

}


.jr-resume-text {

    display: flex;

    flex-direction: column;

    gap: 4px;

}


.jr-resume-text i {

    width: 100%;

    height: 2.6px;

    display: block;

    border-radius: 2px;

    background: #e1e2e8;

}


.jr-resume-text i:nth-child(2) {

    width: 90%;

}


.jr-resume-text i:nth-child(3) {

    width: 76%;

}


.jr-resume-text i:nth-child(4) {

    width: 84%;

}


.jr-resume-skill {

    width: 100%;

    height: 4px;

    margin-bottom: 6.6px;

    border-radius: 3px;

    background: #dedfe6;

}


.jr-resume-skill.short {

    width: 65%;

}


/* =========================================================
   RESPONSIVE - NEW SECTIONS
========================================================= */

@media (max-width: 1320px) {

    .jr-integrations-list {

        grid-template-columns:
            repeat(3, 1fr);

        row-gap: 10.6px;

    }


    .jr-integrations-inner {

        padding: 13.2px 18px;

    }


    .jr-features-grid {

        grid-template-columns:
            repeat(2, 1fr);

    }


    .jr-resume-section-inner {

        grid-template-columns: 240px 1fr;

    }


    .jr-resume-mockup {

        width: 165px;

        min-width: 165px;

        height: 250.8px;

    }

}


@media (max-width: 990px) {

    .jr-integrations-inner {

        flex-direction: column;

        align-items: stretch;

        gap: 13.2px;

    }


    .jr-integrations-label {

        width: auto;

        text-align: center;

        align-items: center;

    }


    .jr-resume-section {

        width: calc(100% - 24px);

    }


    .jr-resume-section-inner {

        grid-template-columns: 1fr;

    }


    .jr-resume-copy {

        text-align: center;

        padding: 21.1px;

        display: flex;

        flex-direction: column;

        align-items: center;

    }


    .jr-resume-copy p {

        width: min(100%, 350px);

    }


    .jr-resume-previews {

        padding-top: 0;

        height: 270.6px;

    }

}


@media (max-width: 726px) {

    .jr-integrations-list {

        grid-template-columns:
            repeat(2, 1fr);

    }


    .jr-features-grid {

        grid-template-columns: 1fr;

    }


    .jr-section-container {

        width: calc(100% - 24px);

    }


    .jr-section-heading h2 {

        font-size: 24.8px;

    }


    .jr-resume-copy h2 {

        font-size: 32.6px;

    }


    .jr-resume-previews {

        justify-content: flex-start;

        overflow-x: auto;

        padding-left: 33px;

        padding-right: 33px;

    }

}











/* =========================================================
   LEADS OVERVIEW
========================================================= */

.jr-leads-overview {

    width: min(100% - 44px, 1250px);

    margin: 0 auto 10px;

}


.jr-leads-overview-grid {

    display: grid;

    grid-template-columns:
        1.03fr
        .97fr;

    gap: 15.8px;

}


/* =========================================================
   LEFT PANEL
========================================================= */

.jr-leads-table-panel {

    min-width: 0;

    border: 1px solid #ebebf2;

    border-radius: 10px;

    background: #fff;

    overflow: hidden;

}


.jr-leads-panel-header {

    min-height: 85.8px;

    padding: 14.5px 14px;

    display: flex;

    align-items: flex-start;

    justify-content: space-between;

    gap: 13.2px;

}


.jr-leads-panel-header h2 {

    margin: 0;

    font-size: 21.7px;

    line-height: 1.15;

    letter-spacing: -.4px;

    color: #11162f;

    font-weight: 800;

}


.jr-leads-panel-header p {

    margin: 5.3px 0 0;

    font-size: 10.8px;

    color: #555b70;

}


.jr-leads-panel-header small {

    display: block;

    margin-top: 4px;

    font-size: 10px;

    color: #7b7f91;

}


.jr-add-lead-btn {

    height: 35.6px;

    padding: 0 12px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 6.6px;

    border: 0;

    border-radius: 5px;

    background:
        linear-gradient(
            135deg,
            #5a3fe0,
            #4b31cf
        );

    color: white;

    font-size: 10.8px;

    font-weight: 650;

}


.jr-add-lead-btn svg {

    width: 11.9px;

    height: 11.9px;

}


/* =========================================================
   TABLE
========================================================= */

.jr-leads-table-wrapper {

    width: 100%;

    overflow-x: auto;

}


.jr-leads-table {

    width: 100%;

    min-width: 620.4px;

    border-collapse: collapse;

    table-layout: fixed;

}


.jr-leads-table th {

    height: 33px;

    padding: 0 8px;

    text-align: left;

    color: #74788b;

    background: #fbfbfd;

    border-top: 1.3px solid #f0f0f4;

    border-bottom: 1.3px solid #f0f0f4;

    font-size: 10px;

    font-weight: 600;

}


.jr-leads-table td {

    height: 39.6px;

    padding: 0 8px;

    border-bottom: 1.3px solid #f1f1f5;

    color: #555a6c;

    font-size: 10px;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

}


.jr-leads-table tbody tr:last-child td {

    border-bottom: 0;

}


.jr-leads-table th:nth-child(1),
.jr-leads-table td:nth-child(1) {

    width: 24%;

}


.jr-leads-table th:nth-child(2),
.jr-leads-table td:nth-child(2) {

    width: 15%;

}


.jr-leads-table th:nth-child(3),
.jr-leads-table td:nth-child(3) {

    width: 23%;

}


.jr-leads-table th:nth-child(4),
.jr-leads-table td:nth-child(4) {

    width: 18%;

}


.jr-leads-table th:nth-child(5),
.jr-leads-table td:nth-child(5) {

    width: 15%;

}


.jr-leads-table th:nth-child(6),
.jr-leads-table td:nth-child(6) {

    width: 5%;

}


.jr-company-name {

    display: flex;

    align-items: center;

    gap: 6.6px;

    min-width: 0;

}


.jr-company-name strong {

    overflow: hidden;

    text-overflow: ellipsis;

    color: #252a3f;

    font-size: 10px;

}


.jr-company-dot {

    width: 11.9px;

    height: 11.9px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    color: #e6a727;

    font-size: 10.8px;

}


.jr-table-status {

    display: inline-flex;

    align-items: center;

    height: 18.5px;

    padding: 0 5px;

    border-radius: 4px;

    font-size: 10px;

    font-weight: 650;

}


.jr-table-status.sent {

    color: #15885f;

    background: #e6f7ef;

}


.jr-table-status.waiting {

    color: #d88613;

    background: #fff2dc;

}


.jr-table-status.interview {

    color: #7049d2;

    background: #f0e9ff;

}


.jr-table-status.accepted {

    color: #16885a;

    background: #e3f7eb;

}


.jr-table-star {

    width: 19.8px;

    height: 19.8px;

    padding: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    border: 0;

    background: transparent;

    color: #e3a31d;

}


.jr-table-star svg {

    width: 10.6px;

    height: 10.6px;

}


/* =========================================================
   POWERFUL DASHBOARD
========================================================= */

.jr-powerful-dashboard {

    min-width: 0;

}


.jr-powerful-header {

    padding: 1.3px 1px 8px;

}


.jr-powerful-header h2 {

    margin: 0;

    font-size: 21.7px;

    line-height: 1.15;

    letter-spacing: -.4px;

    color: #11162f;

    font-weight: 800;

}


.jr-powerful-header p {

    margin: 5.3px 0 0;

    color: #62677a;

    font-size: 10.8px;

}


/* =========================================================
   OVERVIEW STATS
========================================================= */

.jr-overview-stats {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 7.9px;

    margin-bottom: 9.2px;

}


.jr-overview-stat {

    min-width: 0;

    min-height: 63.4px;

    padding: 9.2px;

    display: flex;

    align-items: center;

    gap: 7.9px;

    border: 1px solid #ececf3;

    border-radius: 7px;

    background: white;

}


.jr-overview-stat-icon {

    width: 29px;

    height: 29px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 6px;

    font-size: 15.5px;

    font-weight: 700;

}


.jr-overview-stat-icon.blue {

    color: #4e3bd2;

    background: #efedff;

}


.jr-overview-stat-icon.green {

    color: #159467;

    background: #e6f8f1;

}


.jr-overview-stat-icon.orange {

    color: #ec8c16;

    background: #fff1dc;

}


.jr-overview-stat > div:last-child {

    min-width: 0;

    display: flex;

    flex-direction: column;

}


.jr-overview-stat strong {

    color: #141933;

    font-size: 17.1px;

    line-height: 1.1;

}


.jr-overview-stat span {

    margin-top: 2.6px;

    color: #6e7283;

    font-size: 10px;

    white-space: nowrap;

}


/* =========================================================
   CHARTS
========================================================= */

.jr-charts-grid {

    display: grid;

    grid-template-columns:
        1.35fr
        1fr;

    gap: 9.2px;

}


.jr-chart-card {

    min-width: 0;

    height: 191.4px;

    padding: 10.6px;

    border: 1px solid #ececf3;

    border-radius: 8px;

    background: white;

}


.jr-chart-header {

    height: 23.8px;

    display: flex;

    align-items: center;

}


.jr-chart-header strong {

    font-size: 10.8px;

    color: #20243b;

}


.jr-line-chart {

    width: 100%;

    height: 145.2px;

}


/* =========================================================
   DONUT CHART
========================================================= */

.jr-status-content {

    height: 145.2px;

    display: grid;

    grid-template-columns:
        105px
        1fr;

    align-items: center;

}


.jr-donut {

    width: 125.4px;

    height: 125.4px;

    position: relative;

}


.jr-donut-center {

    position: absolute;

    top: 50%;

    left: 50%;

    transform:
        translate(
            -50%,
            -50%
        );

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    pointer-events: none;

}


.jr-donut-center strong {

    color: #151a34;

    font-size: 18.6px;

    line-height: 1;

}


.jr-donut-center span {

    margin-top: 4px;

    color: #777b8c;

    font-size: 10px;

}


/* Legend */

.jr-status-legend {

    display: flex;

    flex-direction: column;

    gap: 7.9px;

}


.jr-status-legend-item {

    display: grid;

    grid-template-columns:
        6px
        1fr
        auto;

    align-items: center;

    gap: 6.6px;

}


.jr-status-legend-item > span {

    width: 6.6px;

    height: 6.6px;

    border-radius: 50%;

}


.jr-status-legend-item label {

    color: #656a7c;

    font-size: 10px;

}


.jr-status-legend-item strong {

    color: #252a40;

    font-size: 10px;

}


/* =========================================================
   LEADS RESPONSIVE
========================================================= */

@media (max-width: 1188px) {

    .jr-leads-overview-grid {

        grid-template-columns: 1fr;

    }


    .jr-powerful-dashboard {

        margin-top: 5.3px;

    }


    .jr-powerful-header {

        padding-top: 6.6px;

    }

}


@media (max-width: 858px) {

    .jr-leads-overview {

        width: calc(100% - 24px);

    }


    .jr-overview-stats {

        grid-template-columns:
            repeat(2, 1fr);

    }


    .jr-charts-grid {

        grid-template-columns: 1fr;

    }


    .jr-chart-card {

        height: 211.2px;

    }


    .jr-line-chart {

        height: 165px;

    }


    .jr-status-content {

        height: 165px;

        grid-template-columns:
            130px
            1fr;

    }


    .jr-donut {

        width: 145.2px;

        height: 145.2px;

    }

}


@media (max-width: 594px) {

    .jr-leads-panel-header {

        flex-direction: column;

    }


    .jr-add-lead-btn {

        align-self: flex-start;

    }


    .jr-overview-stat {

        padding: 7.9px;

    }


    .jr-overview-stat-icon {

        width: 26.4px;

        height: 26.4px;

    }


    .jr-status-content {

        grid-template-columns:
            115px
            1fr;

    }

}


/* =========================================================
   HOW IT WORKS
========================================================= */

.jr-how-it-works {

    width: min(100% - 44px, 1250px);

    margin: 0 auto;

    padding: 0 0 9px;

}


.jr-how-container {

    width: 100%;

}


.jr-how-heading {

    margin-bottom: 6.6px;

}


.jr-how-heading h2 {

    font-size: 23.2px;

    letter-spacing: -.3px;

}


.jr-steps {

    width: 100%;

    min-height: 103px;

    display: grid;

    grid-template-columns:
        repeat(6, 1fr);

    align-items: center;

}


.jr-step-wrapper {

    min-width: 0;

    position: relative;

    display: flex;

    align-items: center;

    justify-content: center;

}


.jr-step {

    width: 100%;

    display: flex;

    flex-direction: column;

    align-items: center;

    text-align: center;

    padding: 0 10px;

}


.jr-step-icon {

    width: 37px;

    height: 37px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    color: #5138df;

    background:
        linear-gradient(
            145deg,
            #faf9ff,
            #efecff
        );

    border: 1px solid #e6e2ff;

    margin-bottom: 6.6px;

}


.jr-step-icon svg {

    width: 18.5px;

    height: 18.5px;

    stroke-width: 1.8;

}


.jr-step-number {

    color: #1d2140;

    font-size: 10.8px;

    font-weight: 750;

    line-height: 1;

}


.jr-step h3 {

    margin: 4px 0 2px;

    color: #1a1e36;

    font-size: 10.8px;

    font-weight: 750;

    line-height: 1.15;

}


.jr-step p {

    max-width: 132px;

    margin: 0;

    color: #737789;

    font-size: 10px;

    line-height: 1.35;

}


.jr-step-arrow {

    position: absolute;

    top: 19.8px;

    right: -6px;

    width: 37px;

    height: 23.8px;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #5238df;

}


.jr-step-arrow svg {

    width: 22.4px;

    height: 22.4px;

    stroke-width: 1.5;

}


/* =========================================================
   STATS BANNER
========================================================= */

.jr-stats-section {

    width: min(100% - 44px, 1250px);

    margin: 0 auto 9px;

}


.jr-stats-banner {

    min-height: 76.6px;

    padding: 9.2px 12px;

    display: grid;

    grid-template-columns:
        repeat(5, 1fr);

    align-items: center;

    overflow: hidden;

    border-radius: 10px;

    background:
        linear-gradient(
            105deg,
            #5638d9 0%,
            #4d2bd1 45%,
            #5b32d9 100%
        );

    box-shadow:
        0 8px 20px rgba(77, 43, 209, .16);

}


.jr-stat-banner-item {

    min-width: 0;

    min-height: 52.8px;

    padding: 0 13px;

    display: flex;

    align-items: center;

    gap: 11.9px;

    border-right: 1.3px solid rgba(255, 255, 255, .18);

}


.jr-stat-banner-item:last-child {

    border-right: 0;

}


.jr-stat-banner-icon {

    width: 37px;

    height: 37px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    border: 1px solid rgba(255, 255, 255, .2);

    background: rgba(255, 255, 255, .08);

    color: white;

}


.jr-stat-banner-icon svg {

    width: 18.5px;

    height: 18.5px;

    stroke-width: 1.6;

}


.jr-stat-banner-content {

    min-width: 0;

    display: flex;

    flex-direction: column;

}


.jr-stat-banner-content strong {

    color: white;

    font-size: 23.2px;

    line-height: 1;

    letter-spacing: -.4px;

    font-weight: 800;

    white-space: nowrap;

}


.jr-stat-banner-content span {

    margin-top: 4px;

    color: rgba(255, 255, 255, .83);

    font-size: 10px;

    line-height: 1.1;

    white-space: nowrap;

}


/* =========================================================
   HOW + STATS RESPONSIVE
========================================================= */

@media (max-width: 1188px) {

    .jr-steps {

        grid-template-columns:
            repeat(3, 1fr);

        row-gap: 18.5px;

    }


    .jr-step-arrow {

        display: none;

    }


    .jr-stats-banner {

        grid-template-columns:
            repeat(3, 1fr);

        row-gap: 10.6px;

        padding: 13.2px;

    }


    .jr-stat-banner-item:nth-child(3) {

        border-right: 0;

    }


    .jr-stat-banner-item:nth-child(4),
    .jr-stat-banner-item:nth-child(5) {

        border-top: 1.3px solid rgba(255, 255, 255, .12);

        padding-top: 9.2px;

    }

}


@media (max-width: 858px) {

    .jr-how-it-works,
    .jr-stats-section {

        width: calc(100% - 24px);

    }


    .jr-steps {

        grid-template-columns:
            repeat(2, 1fr);

        row-gap: 19.8px;

    }


    .jr-stats-banner {

        grid-template-columns:
            repeat(2, 1fr);

    }


    .jr-stat-banner-item:nth-child(2) {

        border-right: 0;

    }


    .jr-stat-banner-item:nth-child(3) {

        border-right: 1.3px solid rgba(255, 255, 255, .18);

    }


    .jr-stat-banner-item:nth-child(4) {

        border-right: 0;

    }

}


@media (max-width: 554.4px) {

    .jr-stats-banner {

        grid-template-columns: 1fr;

    }


    .jr-stat-banner-item {

        border-right: 0 !important;

        border-bottom: 1.3px solid rgba(255, 255, 255, .12);

        padding: 9.2px 10px;

    }


    .jr-stat-banner-item:last-child {

        border-bottom: 0;

    }


    .jr-stat-banner-content strong {

        font-size: 21.7px;

    }

}


/* =========================================================
   SHARED SUBTITLE
========================================================= */

.jr-section-subtitle {

    margin: 6.6px 0 0;

    color: #737789;

    font-size: 10.8px;

    line-height: 1.4;

}


/* =========================================================
   TESTIMONIALS
========================================================= */

.jr-testimonials {

    width: 100%;

    padding: 5.3px 0 9px;

}


.jr-testimonials-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 9.2px;

}


.jr-testimonial-card {

    min-height: 138.6px;

    padding: 14.5px;

    border: 1px solid #ebebf3;

    border-radius: 9px;

    background: #fff;

    box-shadow:
        0 3px 12px rgba(40, 35, 90, .025);

}


.jr-testimonial-stars {

    display: flex;

    gap: 2.6px;

    color: #f4ae24;

}


.jr-testimonial-stars svg {

    width: 10.6px;

    height: 10.6px;

    fill: #f4ae24;

}


.jr-testimonial-card > p {

    min-height: 55.4px;

    margin: 10.6px 0 10px;

    color: #53586c;

    font-size: 10.8px;

    line-height: 1.5;

}


.jr-testimonial-author {

    display: flex;

    align-items: center;

    gap: 9.2px;

}


.jr-testimonial-avatar {

    width: 33px;

    height: 33px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    border-radius: 50%;

    color: white;

    background:
        linear-gradient(
            135deg,
            #6449dc,
            #3925a7
        );

    font-size: 10px;

    font-weight: 750;

}


.jr-testimonial-author > div:last-child {

    display: flex;

    flex-direction: column;

}


.jr-testimonial-author strong {

    color: #22273e;

    font-size: 10.8px;

}


.jr-testimonial-author span {

    margin-top: 2.6px;

    color: #777b8c;

    font-size: 10px;

}


.jr-testimonial-author small {

    margin-top: 1.3px;

    color: #a0a2af;

    font-size: 10px;

}


/* =========================================================
   PRICING
========================================================= */

.jr-pricing {

    width: 100%;

    padding: 4px 0 10px;

}


.jr-pricing-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 10.6px;

    align-items: stretch;

}


.jr-price-card {

    min-height: 310.2px;

    position: relative;

    padding: 17.2px;

    border: 1px solid #e7e7f0;

    border-radius: 10px;

    background: #fff;

}


.jr-price-card.featured {

    border: 1.5px solid #5a40df;

    box-shadow:
        0 8px 25px rgba(81, 56, 223, .09);

    transform: translateY(-2px);

}


.jr-popular-label {

    position: absolute;

    top: -8px;

    left: 50%;

    transform: translateX(-50%);

    padding: 5.3px 9px;

    border-radius: 10px;

    background:
        linear-gradient(
            135deg,
            #6044e4,
            #4a30ca
        );

    color: white;

    font-size: 10px;

    font-weight: 700;

    white-space: nowrap;

}


.jr-price-top h3 {

    margin: 0;

    color: #161a33;

    font-size: 15.5px;

    font-weight: 800;

}


.jr-price-top p {

    height: 33px;

    margin: 5.3px 0 0;

    color: #777b8c;

    font-size: 10px;

    line-height: 1.4;

}


.jr-price {

    height: 55.4px;

    display: flex;

    align-items: baseline;

    gap: 2.6px;

    margin-top: 7.9px;

}


.jr-price-currency {

    color: #33384d;

    font-size: 15.5px;

    font-weight: 700;

}


.jr-price strong {

    color: #131831;

    font-size: 41.9px;

    line-height: 1;

    letter-spacing: -1px;

}


.jr-price-period {

    color: #777b8c;

    font-size: 10px;

}


.jr-price-button {

    width: 100%;

    height: 35.6px;

    margin-top: 4px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 7.9px;

    border-radius: 5px;

    border: 1px solid #dddaf2;

    background: white;

    color: #4c36cc;

    font-size: 10px;

    font-weight: 700;

}


.jr-price-button svg {

    width: 10.6px;

}


.jr-price-card.featured .jr-price-button {

    border-color: #5138df;

    background:
        linear-gradient(
            135deg,
            #5b40e0,
            #4a30cf
        );

    color: white;

}


.jr-price-divider {

    height: 1.3px;

    margin: 13.2px 0 7px;

    background: #ededf3;

}


.jr-price-card ul {

    margin: 0;

    padding: 0;

    list-style: none;

    display: flex;

    flex-direction: column;

    gap: 7.9px;

}


.jr-price-card li {

    display: flex;

    align-items: center;

    gap: 6.6px;

    color: #555a6e;

    font-size: 10px;

}


.jr-price-card li > span {

    width: 14.5px;

    height: 14.5px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    color: #4e39d1;

    background: #eeecff;

}


.jr-price-card li svg {

    width: 9.2px;

    height: 9.2px;

    stroke-width: 3;

}


/* =========================================================
   FAQ
========================================================= */

.jr-faq {

    width: 100%;

    padding: 4px 0 12px;

}


.jr-faq-container {

    width: min(100% - 44px, 820px);

    margin: auto;

}


.jr-faq-list {

    margin-top: 11.9px;

    border-top: 1.3px solid #e9e9f1;

}


.jr-faq-item {

    border-bottom: 1.3px solid #e9e9f1;

}


.jr-faq-question {

    width: 100%;

    min-height: 44.9px;

    padding: 0 4px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 19.8px;

    border: 0;

    background: transparent;

    color: #20243b;

    text-align: left;

    font-size: 10.8px;

    font-weight: 650;

}


.jr-faq-icon {

    width: 23.8px;

    height: 23.8px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    border-radius: 5px;

    color: #5138df;

    background: #f1efff;

}


.jr-faq-icon svg {

    width: 11.9px;

    height: 11.9px;

}


.jr-faq-answer {

    display: grid;

    grid-template-rows: 0fr;

    transition:
        grid-template-rows .25s ease;

}


.jr-faq-answer p {

    min-height: 0;

    overflow: hidden;

    margin: 0;

    padding: 0 35px 0 4px;

    color: #707487;

    font-size: 10px;

    line-height: 1.5;

}


.jr-faq-item.open .jr-faq-answer {

    grid-template-rows: 1fr;

}


.jr-faq-item.open .jr-faq-answer p {

    padding-bottom: 11.9px;

}


/* =========================================================
   FINAL CTA
========================================================= */

.jr-final-cta {

    width: min(100% - 44px, 1250px);

    min-height: 224.4px;

    margin: 0 auto 12px;

    position: relative;

    overflow: hidden;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 12px;

    background:
        linear-gradient(
            115deg,
            #4930c9,
            #5c3ce0 45%,
            #4930c9
        );

    box-shadow:
        0 12px 30px rgba(72, 44, 194, .17);

}


.jr-final-cta-content {

    position: relative;

    z-index: 2;

    display: flex;

    flex-direction: column;

    align-items: center;

    text-align: center;

}


.jr-final-cta-badge {

    height: 25.1px;

    padding: 0 9px;

    display: flex;

    align-items: center;

    gap: 6.6px;

    border-radius: 20px;

    border: 1px solid rgba(255,255,255,.18);

    background: rgba(255,255,255,.08);

    color: rgba(255,255,255,.88);

    font-size: 10px;

}


.jr-final-cta-badge span {

    color: #e9baf4;

}


.jr-final-cta h2 {

    margin: 9.2px 0 0;

    color: white;

    font-size: 37.2px;

    line-height: 1.05;

    letter-spacing: -.8px;

    font-weight: 800;

}


.jr-final-cta h2 span {

    color: #d9cbff;

}


.jr-final-cta-content > p {

    width: 514.8px;

    margin: 9.2px 0 10px;

    color: rgba(255,255,255,.77);

    font-size: 10.1px;

    line-height: 1.45;

}


.jr-final-cta-actions {

    display: flex;

    align-items: center;

    gap: 9.2px;

}


.jr-final-primary,
.jr-final-secondary {

    height: 35.6px;

    padding: 0 13px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 9.2px;

    border-radius: 5px;

    font-size: 10px;

    font-weight: 700;

}


.jr-final-primary {

    border: 0;

    background: white;

    color: #4b32d0;

}


.jr-final-primary svg {

    width: 11.9px;

}


.jr-final-secondary {

    border: 1px solid rgba(255,255,255,.25);

    background: rgba(255,255,255,.07);

    color: white;

}


.jr-final-checks {

    display: flex;

    align-items: center;

    gap: 17.2px;

    margin-top: 11.9px;

}


.jr-final-checks span {

    display: flex;

    align-items: center;

    gap: 4px;

    color: rgba(255,255,255,.75);

    font-size: 10px;

}


.jr-final-checks svg {

    width: 9.2px;

    height: 9.2px;

    stroke-width: 3;

}


.jr-final-cta-glow {

    position: absolute;

    width: 211.2px;

    height: 211.2px;

    border-radius: 50%;

    background: rgba(255,255,255,.06);

    filter: blur(2px);

}


.jr-final-glow-one {

    left: -60px;

    top: -65px;

}


.jr-final-glow-two {

    right: -55px;

    bottom: -70px;

}


/* =========================================================
   FOOTER
========================================================= */

.jr-footer {

    width: 100%;

    padding: 19.8px 0 8px;

    background: #fff;

    border-top: 1.3px solid #ededf3;

}


.jr-footer-inner {

    width: min(100% - 44px, 1250px);

    margin: auto;

    display: grid;

    grid-template-columns:
        2fr
        1fr
        1fr
        1fr;

    gap: 39.6px;

    padding-bottom: 17.2px;

}


.jr-footer-brand {

    max-width: 303.6px;

}


.jr-footer-brand .jr-logo {

    display: inline-flex;

}


.jr-footer-brand > p {

    margin: 9.2px 0;

    color: #737789;

    font-size: 10px;

    line-height: 1.5;

}


.jr-footer-email {

    display: inline-flex;

    align-items: center;

    gap: 5.3px;

    color: #4d38d0;

    font-size: 10px;

    text-decoration: none;

}


.jr-footer-email svg {

    width: 10.6px;

}


.jr-footer-column {

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 7.9px;

}


.jr-footer-column h4 {

    margin: 0 0 3px;

    color: #22263c;

    font-size: 10.8px;

    font-weight: 750;

}


.jr-footer-column a {

    color: #74788a;

    font-size: 10px;

    text-decoration: none;

    transition: color .2s ease;

}


.jr-footer-column a:hover {

    color: #5138df;

}


.jr-footer-bottom {

    width: min(100% - 44px, 1250px);

    margin: auto;

    padding-top: 10.6px;

    border-top: 1.3px solid #efeff4;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 13.2px;

    color: #9295a2;

    font-size: 10px;

}


.jr-footer-bottom a {

    display: flex;

    align-items: center;

    gap: 4px;

    color: #5a40d9;

    text-decoration: none;

}


.jr-footer-bottom a svg {

    width: 9.2px;

}


/* =========================================================
   FINAL RESPONSIVE
========================================================= */

@media (max-width: 1056px) {

    .jr-testimonials-grid,
    .jr-pricing-grid {

        grid-template-columns: 1fr;

    }


    .jr-price-card {

        min-height: auto;

    }


    .jr-price-card.featured {

        transform: none;

    }


    .jr-footer-inner {

        grid-template-columns:
            1.5fr 1fr 1fr;

    }


    .jr-footer-brand {

        grid-column: 1 / -1;

        max-width: 528px;

    }

}


@media (max-width: 792px) {

    .jr-testimonials,
    .jr-pricing,
    .jr-faq {

        padding-left: 0;

        padding-right: 0;

    }


    .jr-faq-container {

        width: calc(100% - 24px);

    }


    .jr-final-cta {

        width: calc(100% - 24px);

        min-height: 264px;

    }


    .jr-final-cta-content > p {

        width: min(90%, 350px);

    }


    .jr-final-cta h2 {

        font-size: 34.1px;

    }


    .jr-final-checks {

        flex-wrap: wrap;

        justify-content: center;

        gap: 7.9px 10px;

    }


    .jr-footer-inner {

        width: calc(100% - 24px);

        grid-template-columns:
            1fr 1fr;

        gap: 26.4px;

    }


    .jr-footer-brand {

        grid-column: 1 / -1;

    }


    .jr-footer-bottom {

        width: calc(100% - 24px);

        flex-direction: column;

        align-items: flex-start;

    }

}
/* =========================================================
   JOBREACH — COMFORTABLE LANDING PAGE SPACING
   Preserves the original visual identity and structure.
========================================================= */

.jr-navbar {
    height: 72px;
}

.jr-hero {
    padding: 78px 0 34px;
}

.jr-integrations {
    padding: 0 0 34px;
}

.jr-features {
    padding: 28px 0 72px;
}

.jr-resume-section {
    min-height: 330px;
    margin: 0 auto 60px;
}

.jr-resume-section-inner {
    min-height: 330px;
}

.jr-leads-overview {
    margin: 0 auto 70px;
}

.jr-how-it-works {
    padding: 25px 0 65px;
}

.jr-stats-section {
    margin: 0 auto 70px;
}

.jr-testimonials {
    padding: 70px 0;
}

.jr-pricing {
    padding: 75px 0;
}

.jr-faq {
    padding: 75px 0;
}

.jr-final-cta {
    min-height: 330px;
    margin: 75px auto;
}

.jr-footer {
    padding: 50px 0 25px;
}

/* Comfortable desktop typography */
.jr-nav a {
    font-size: 14px;
}

.jr-login-btn,
.jr-start-btn {
    font-size: 13px;
}

.jr-hero-badge {
    font-size: 13px;
}

.jr-hero h1 {
    font-size: 48px;
}

.jr-hero-description {
    width: min(100%, 500px);
    font-size: 16px;
    line-height: 1.7;
}

.jr-primary-btn,
.jr-demo-btn {
    height: 46px;
    font-size: 13px;
}

.jr-hero-checks span {
    font-size: 12px;
}

.jr-section-heading {
    margin-bottom: 34px;
}

.jr-section-heading h2 {
    font-size: 32px;
}

.jr-section-subtitle {
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.6;
}

/* Features */
.jr-features-grid {
    gap: 20px;
}

.jr-feature-card {
    min-height: 145px;
    padding: 24px;
    gap: 16px;
    border-radius: 14px;
}

.jr-feature-icon {
    width: 48px;
    height: 48px;
}

.jr-feature-content h3 {
    margin-bottom: 8px;
    font-size: 17px;
}

.jr-feature-content p {
    max-width: 280px;
    font-size: 13px;
    line-height: 1.6;
}

/* Resume */
.jr-resume-copy {
    padding: 32px 28px;
}

.jr-resume-copy h2 {
    font-size: 30px;
}

.jr-resume-copy p {
    width: min(100%, 300px);
    font-size: 14px;
    line-height: 1.65;
}

.jr-resume-benefits span {
    font-size: 12px;
}

.jr-resume-button {
    height: 42px;
    min-width: 170px;
    font-size: 13px;
}

.jr-resume-previews {
    gap: 18px;
    padding: 18px 20px 0;
}

.jr-resume-mockup {
    width: 190px;
    min-width: 190px;
    height: 270px;
}

/* Leads */
.jr-leads-overview-grid {
    gap: 22px;
}

.jr-leads-table-panel,
.jr-recent-leads,
.jr-template-panel {
    border-radius: 14px;
}

.jr-leads-panel-header {
    min-height: 92px;
    padding: 20px;
}

.jr-leads-panel-header h2,
.jr-powerful-header h2 {
    font-size: 19px;
}

.jr-leads-panel-header p,
.jr-powerful-header p {
    font-size: 12px;
    line-height: 1.5;
}

.jr-add-lead-btn {
    height: 40px;
    padding: 0 18px;
    font-size: 12px;
}

.jr-leads-table th {
    height: 42px;
    font-size: 11px;
}

.jr-leads-table td {
    height: 48px;
    font-size: 11px;
}

.jr-company-name strong {
    font-size: 11px;
}

/* Dashboard */
.jr-dashboard {
    min-height: 460px;
    border-radius: 16px;
}

.jr-dashboard-sidebar {
    padding: 18px 10px;
}

.jr-dashboard-brand {
    font-size: 12px;
}

.jr-sidebar-item {
    min-height: 34px;
    font-size: 10px;
}

.jr-dashboard-main {
    padding: 18px;
}

.jr-dashboard-title {
    font-size: 13px;
}

.jr-dashboard-stats {
    gap: 10px;
    margin-bottom: 14px;
}

.jr-stat-card {
    padding: 13px;
    border-radius: 9px;
}

.jr-stat-label {
    font-size: 10px;
}

.jr-stat-card strong {
    font-size: 17px;
}

.jr-stat-card small {
    font-size: 9px;
}

.jr-dashboard-content {
    gap: 12px;
}

.jr-panel-header {
    height: 44px;
    padding: 0 13px;
}

.jr-panel-header h3 {
    font-size: 11px;
}

.jr-panel-header button {
    font-size: 9px;
}

.jr-lead-row {
    min-height: 50px;
}

.jr-lead-person strong {
    font-size: 10px;
}

.jr-lead-person span,
.jr-lead-right small {
    font-size: 9px;
}

.jr-lead-status {
    font-size: 9px;
}

.jr-template-panel {
    padding: 14px;
}

.jr-template-title {
    font-size: 11px;
}

.jr-template-box span {
    font-size: 10px;
}

.jr-template-box small,
.jr-template-box button {
    font-size: 9px;
}

/* Powerful dashboard */
.jr-overview-stats {
    gap: 10px;
    margin-bottom: 12px;
}

.jr-overview-stat {
    min-height: 65px;
    padding: 11px;
}

.jr-overview-stat strong {
    font-size: 16px;
}

.jr-overview-stat span {
    font-size: 9px;
}

.jr-charts-grid {
    gap: 12px;
}

.jr-chart-card {
    height: 205px;
    padding: 12px;
}

.jr-chart-header strong {
    font-size: 11px;
}

.jr-line-chart {
    height: 160px;
}

.jr-status-content {
    height: 160px;
    grid-template-columns: 145px 1fr;
}

.jr-donut {
    width: 125px;
    height: 125px;
}

.jr-donut-center strong {
    font-size: 16px;
}

.jr-donut-center span,
.jr-status-legend-item label,
.jr-status-legend-item strong {
    font-size: 9px;
}

/* How it works */
.jr-how-heading {
    margin-bottom: 28px;
}

.jr-how-heading h2 {
    font-size: 28px;
}

.jr-steps {
    min-height: 145px;
}

.jr-step {
    padding: 0 16px;
}

.jr-step-icon {
    width: 46px;
    height: 46px;
    margin-bottom: 9px;
}

.jr-step-icon svg {
    width: 21px;
    height: 21px;
}

.jr-step-number {
    font-size: 11px;
}

.jr-step h3 {
    margin: 7px 0 5px;
    font-size: 13px;
}

.jr-step p {
    max-width: 170px;
    font-size: 10px;
    line-height: 1.55;
}

.jr-step-arrow {
    top: 25px;
}

/* Stats */
.jr-stats-banner {
    min-height: 100px;
    padding: 14px 20px;
    border-radius: 14px;
}

.jr-stat-banner-item {
    min-height: 65px;
    padding: 0 18px;
}

.jr-stat-banner-icon {
    width: 42px;
    height: 42px;
}

.jr-stat-banner-content strong {
    font-size: 21px;
}

.jr-stat-banner-content span {
    font-size: 9px;
    margin-top: 6px;
}

/* Testimonials */
.jr-testimonials-grid {
    gap: 20px;
}

.jr-testimonial-card {
    min-height: 220px;
    padding: 24px;
    border-radius: 14px;
}

.jr-testimonial-stars svg {
    width: 15px;
    height: 15px;
}

.jr-testimonial-card > p {
    min-height: 75px;
    margin: 17px 0;
    font-size: 13px;
    line-height: 1.7;
}

.jr-testimonial-avatar {
    width: 42px;
    height: 42px;
    font-size: 10px;
}

.jr-testimonial-author strong {
    font-size: 12px;
}

.jr-testimonial-author span {
    font-size: 10px;
}

.jr-testimonial-author small {
    font-size: 9px;
}

/* Pricing */
.jr-pricing-grid {
    gap: 22px;
    margin-top: 36px;
}

.jr-price-card {
    min-height: 470px;
    padding: 28px;
    border-radius: 16px;
}

.jr-price-top h3 {
    font-size: 19px;
}

.jr-price-top p {
    height: auto;
    min-height: 42px;
    font-size: 12px;
    line-height: 1.55;
}

.jr-price {
    height: 70px;
    margin-top: 16px;
}

.jr-price strong {
    font-size: 44px;
}

.jr-price-currency {
    font-size: 17px;
}

.jr-price-period {
    font-size: 11px;
}

.jr-price-button {
    height: 46px;
    margin-top: 8px;
    font-size: 12px;
}

.jr-price-divider {
    margin: 20px 0 17px;
}

.jr-price-card ul {
    gap: 11px;
}

.jr-price-card li {
    font-size: 12px;
    gap: 8px;
}

.jr-price-card li > span {
    width: 19px;
    height: 19px;
}

/* FAQ */
.jr-faq-container {
    width: min(100% - 56px, 900px);
}

.jr-faq-list {
    margin-top: 30px;
}

.jr-faq-question {
    min-height: 68px;
    padding: 0 8px;
    font-size: 14px;
}

.jr-faq-icon {
    width: 32px;
    height: 32px;
}

.jr-faq-icon svg {
    width: 15px;
    height: 15px;
}

.jr-faq-answer p {
    padding: 0 45px 0 8px;
    font-size: 13px;
    line-height: 1.7;
}

.jr-faq-item.open .jr-faq-answer p {
    padding-bottom: 18px;
}

/* Final CTA */
.jr-final-cta {
    min-height: 350px;
    border-radius: 22px;
}

.jr-final-cta-badge {
    height: 32px;
    padding: 0 14px;
    font-size: 10px;
}

.jr-final-cta h2 {
    margin-top: 15px;
    font-size: 42px;
    letter-spacing: -1.4px;
}

.jr-final-cta-content > p {
    width: min(600px, 90%);
    margin: 16px 0 22px;
    font-size: 13px;
    line-height: 1.65;
}

.jr-final-primary,
.jr-final-secondary {
    height: 46px;
    padding: 0 21px;
    font-size: 12px;
}

.jr-final-checks {
    gap: 20px;
    margin-top: 16px;
}

.jr-final-checks span {
    font-size: 9px;
}

/* Footer */
.jr-footer-inner {
    padding-bottom: 28px;
}

.jr-footer-brand > p {
    font-size: 11px;
    line-height: 1.7;
}

.jr-footer-email {
    font-size: 11px;
}

.jr-footer-column {
    gap: 10px;
}

.jr-footer-column h4 {
    font-size: 13px;
}

.jr-footer-column a {
    font-size: 11px;
}

.jr-footer-bottom {
    padding-top: 16px;
    font-size: 9px;
}


/* =========================================================
   RESPONSIVE COMFORT
========================================================= */

@media (max-width: 1000px) {

    .jr-hero {
        padding-top: 72px;
    }

    .jr-hero h1 {
        font-size: 44px;
    }

    .jr-resume-section,
    .jr-resume-section-inner {
        min-height: 300px;
    }

}

@media (max-width: 900px) {

    .jr-section-container,
    .jr-how-container,
    .jr-stats-section,
    .jr-footer-inner,
    .jr-footer-bottom {
        width: calc(100% - 48px);
    }

    .jr-hero-container {
        grid-template-columns: 1fr;
        gap: 42px;
    }

    .jr-hero-content {
        text-align: center;
        padding-left: 0;
        align-items: center;
    }

    .jr-hero-description {
        width: min(100%, 600px);
    }

    .jr-dashboard {
        min-height: 430px;
    }

    .jr-pricing-grid {
        grid-template-columns: 1fr;
        max-width: 560px;
        margin-left: auto;
        margin-right: auto;
    }

    .jr-price-card.featured {
        transform: none;
    }

    .jr-testimonials-grid {
        grid-template-columns: 1fr;
        max-width: 620px;
        margin-left: auto;
        margin-right: auto;
    }

    .jr-footer-inner {
        grid-template-columns: 1.5fr 1fr 1fr;
    }

}

@media (max-width: 650px) {

    .jr-navbar {
        height: 64px;
    }

    .jr-navbar-inner,
    .jr-hero-container {
        width: calc(100% - 28px);
    }

    .jr-hero {
        padding-top: 72px;
        padding-bottom: 30px;
    }

    .jr-hero h1 {
        font-size: 37px;
        letter-spacing: -1.2px;
    }

    .jr-hero-description {
        font-size: 14px;
    }

    .jr-hero-buttons {
        flex-wrap: wrap;
        justify-content: center;
    }

    .jr-section-container,
    .jr-how-container,
    .jr-stats-section,
    .jr-footer-inner,
    .jr-footer-bottom {
        width: calc(100% - 28px);
    }

    .jr-section-heading h2,
    .jr-how-heading h2 {
        font-size: 25px;
    }

    .jr-section-subtitle {
        font-size: 13px;
    }

    .jr-features-grid {
        grid-template-columns: 1fr;
    }

    .jr-feature-card {
        min-height: 125px;
    }

    .jr-resume-section {
        width: calc(100% - 28px);
        margin-bottom: 45px;
    }

    .jr-resume-section-inner {
        grid-template-columns: 1fr;
    }

    .jr-resume-copy {
        text-align: center;
        align-items: center;
    }

    .jr-resume-copy p {
        width: min(100%, 420px);
    }

    .jr-resume-previews {
        height: 260px;
        overflow-x: auto;
        justify-content: flex-start;
        padding: 10px 25px 0;
    }

    .jr-resume-mockup {
        width: 175px;
        min-width: 175px;
        height: 245px;
    }

    .jr-leads-overview {
        width: calc(100% - 28px);
        margin-bottom: 50px;
    }

    .jr-dashboard {
        grid-template-columns: 82px 1fr;
    }

    .jr-dashboard-stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .jr-dashboard-content {
        grid-template-columns: 1fr;
    }

    .jr-template-panel {
        display: none;
    }

    .jr-steps {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 30px;
    }

    .jr-step-arrow {
        display: none;
    }

    .jr-stats-section {
        width: calc(100% - 28px);
    }

    .jr-stats-banner {
        grid-template-columns: repeat(2, 1fr);
    }

    .jr-stat-banner-item {
        min-height: 62px;
    }

    .jr-faq-container {
        width: calc(100% - 28px);
    }

    .jr-final-cta {
        width: calc(100% - 28px);
        min-height: 350px;
        margin: 55px auto;
    }

    .jr-final-cta h2 {
        font-size: 34px;
    }

    .jr-final-cta-actions {
        flex-direction: column;
    }

    .jr-final-primary,
    .jr-final-secondary {
        width: 220px;
    }

    .jr-final-checks {
        flex-wrap: wrap;
        justify-content: center;
    }

    .jr-footer-inner {
        grid-template-columns: 1fr 1fr;
    }

}

@media (max-width: 450px) {

    .jr-nav {
        display: none;
    }

    .jr-hero h1 {
        font-size: 32px;
    }

    .jr-dashboard-sidebar {
        display: none;
    }

    .jr-dashboard {
        grid-template-columns: 1fr;
    }

    .jr-dashboard-main {
        padding: 14px;
    }

    .jr-stats-banner {
        grid-template-columns: 1fr;
    }

    .jr-stat-banner-item {
        border-right: 0 !important;
        border-bottom: 1px solid rgba(255,255,255,.12);
    }

    .jr-stat-banner-item:last-child {
        border-bottom: 0;
    }

    .jr-footer-inner {
        grid-template-columns: 1fr;
    }

}`
              }
            </style>

        </div>

    );

}