import { useEffect } from "react";

export default function Home() {
  return (
    <div className="page">
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family: Inter, Arial, sans-serif;
          background:#020617;
          overflow-x:hidden;
        }

        .page{
          background:
          radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 30%),
          radial-gradient(circle at bottom left, rgba(168,85,247,0.15), transparent 30%),
          #020617;

          color:white;
          min-height:100vh;
        }

        /* HERO */
        .hero{
          min-height:100vh;

          display:flex;
          align-items:center;
          justify-content:center;

          padding:120px 40px 80px;

          position:relative;
          overflow:hidden;
        }

        .hero::before{
          content:"";
          position:absolute;
          width:500px;
          height:500px;
          background:#38bdf8;
          filter:blur(180px);
          opacity:0.08;
          border-radius:50%;
          top:-200px;
          right:-150px;
        }

        .hero-container{
          width:100%;
          max-width:1300px;

          display:grid;
          grid-template-columns:1.1fr 0.9fr;
          gap:70px;
          align-items:center;

          position:relative;
          z-index:2;
        }

        /* LEFT */
        .hero-left{
          animation:fadeUp 0.8s ease;
        }

        .badge{
          display:inline-flex;
          align-items:center;
          gap:8px;

          padding:10px 16px;

          background:rgba(255,255,255,0.06);
          border:1px solid rgba(255,255,255,0.08);

          border-radius:999px;

          font-size:14px;
          color:#cbd5e1;

          margin-bottom:28px;

          backdrop-filter:blur(10px);
        }

        .hero-title{
          font-size:68px;
          line-height:1.05;
          font-weight:800;
          margin-bottom:24px;
          letter-spacing:-2px;
        }

        .hero-title span{
          background:linear-gradient(135deg,#38bdf8,#818cf8,#c084fc);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hero-text{
          font-size:19px;
          line-height:1.8;
          color:#94a3b8;
          max-width:620px;
          margin-bottom:35px;
        }

        .hero-buttons{
          display:flex;
          gap:16px;
          flex-wrap:wrap;
          margin-bottom:40px;
        }

        .btn-primary{
          border:none;
          background:linear-gradient(135deg,#3b82f6,#6366f1);

          color:white;
          padding:16px 28px;

          border-radius:16px;

          font-size:15px;
          font-weight:700;

          cursor:pointer;

          transition:0.3s;

          box-shadow:
          0 15px 40px rgba(59,130,246,0.25);
        }

        .btn-primary:hover{
          transform:translateY(-3px);
          box-shadow:
          0 20px 45px rgba(59,130,246,0.4);
        }

        .btn-secondary{
          border:1px solid rgba(255,255,255,0.12);
          background:rgba(255,255,255,0.04);

          color:white;
          padding:16px 26px;

          border-radius:16px;

          font-size:15px;
          font-weight:600;

          cursor:pointer;

          backdrop-filter:blur(10px);

          transition:0.3s;
        }

        .btn-secondary:hover{
          background:rgba(255,255,255,0.08);
          transform:translateY(-3px);
        }

        .stats{
          display:flex;
          gap:18px;
          flex-wrap:wrap;
        }

        .stat-card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);

          border-radius:18px;

          padding:18px 22px;
          min-width:140px;

          backdrop-filter:blur(14px);
        }

        .stat-card h3{
          font-size:24px;
          margin-bottom:6px;
        }

        .stat-card p{
          color:#94a3b8;
          font-size:14px;
        }

        /* RIGHT */
        .hero-right{
          display:flex;
          justify-content:center;
          align-items:center;

          animation:floatPhone 5s ease-in-out infinite;
        }

        .phone{
          width:330px;
          height:680px;

          border-radius:40px;

          background:
          linear-gradient(145deg,#0f172a,#020617);

          border:1px solid rgba(255,255,255,0.08);

          padding:22px;

          position:relative;

          overflow:hidden;

          box-shadow:
          0 30px 80px rgba(0,0,0,0.55),
          0 0 0 8px rgba(255,255,255,0.02);
        }

        .phone::before{
          content:"";
          position:absolute;
          top:0;
          left:0;

          width:100%;
          height:100%;

          background:
          linear-gradient(
            180deg,
            rgba(255,255,255,0.08),
            transparent
          );

          pointer-events:none;
        }

        .phone-top{
          display:flex;
          flex-direction:column;
          align-items:center;
          margin-top:20px;
          margin-bottom:30px;
        }

        .avatar{
          width:90px;
          height:90px;

          border-radius:50%;

          background:
          linear-gradient(135deg,#3b82f6,#8b5cf6);

          margin-bottom:16px;

          border:4px solid rgba(255,255,255,0.08);
        }

        .phone-top h3{
          font-size:22px;
          margin-bottom:8px;
        }

        .phone-top p{
          font-size:14px;
          color:#94a3b8;
          text-align:center;
          line-height:1.6;
        }

        .socials{
          display:flex;
          justify-content:center;
          gap:10px;
          margin-top:18px;
        }

        .social{
          width:40px;
          height:40px;

          border-radius:12px;

          background:rgba(255,255,255,0.06);

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:14px;

          border:1px solid rgba(255,255,255,0.05);
        }

        .links{
          display:flex;
          flex-direction:column;
          gap:14px;
        }

        .link-card{
          background:
          linear-gradient(
            135deg,
            rgba(59,130,246,0.16),
            rgba(99,102,241,0.10)
          );

          border:1px solid rgba(255,255,255,0.08);

          border-radius:18px;

          padding:16px 18px;

          display:flex;
          justify-content:space-between;
          align-items:center;

          transition:0.3s;

          backdrop-filter:blur(14px);
        }

        .link-card:hover{
          transform:translateY(-2px);
          background:
          linear-gradient(
            135deg,
            rgba(59,130,246,0.25),
            rgba(99,102,241,0.15)
          );
        }

        .link-left{
          display:flex;
          align-items:center;
          gap:14px;
        }

        .icon-box{
          width:42px;
          height:42px;

          border-radius:14px;

          background:rgba(255,255,255,0.08);

          display:flex;
          align-items:center;
          justify-content:center;
        }

        .link-info h4{
          font-size:15px;
          margin-bottom:4px;
        }

        .link-info p{
          font-size:12px;
          color:#94a3b8;
        }

        /* FEATURES */
        .features{
          padding:100px 40px;
        }

        .features-container{
          max-width:1200px;
          margin:auto;
        }

        .section-title{
          text-align:center;
          margin-bottom:60px;
        }

        .section-title h2{
          font-size:48px;
          margin-bottom:18px;
        }

        .section-title p{
          color:#94a3b8;
          font-size:17px;
          max-width:700px;
          margin:auto;
          line-height:1.8;
        }

        .features-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
        }

        .feature-card{
          background:rgba(255,255,255,0.04);

          border:1px solid rgba(255,255,255,0.06);

          border-radius:28px;

          padding:34px;

          transition:0.35s;

          backdrop-filter:blur(16px);
        }

        .feature-card:hover{
          transform:translateY(-6px);
          border-color:rgba(59,130,246,0.3);

          box-shadow:
          0 20px 40px rgba(0,0,0,0.35);
        }

        .feature-icon{
          width:62px;
          height:62px;

          border-radius:18px;

          display:flex;
          align-items:center;
          justify-content:center;

          background:
          linear-gradient(135deg,#3b82f6,#8b5cf6);

          font-size:24px;

          margin-bottom:22px;
        }

        .feature-card h3{
          font-size:22px;
          margin-bottom:14px;
        }

        .feature-card p{
          color:#94a3b8;
          line-height:1.8;
          font-size:15px;
        }

        /* FINAL CTA */
        .final{
          padding:100px 40px 120px;
        }

        .final-box{
          max-width:1200px;
          margin:auto;

          border-radius:40px;

          background:
          linear-gradient(
            135deg,
            rgba(59,130,246,0.18),
            rgba(139,92,246,0.12)
          );

          border:1px solid rgba(255,255,255,0.08);

          padding:80px 40px;

          text-align:center;

          backdrop-filter:blur(16px);
        }

        .final-box h2{
          font-size:52px;
          margin-bottom:20px;
          line-height:1.1;
        }

        .final-box p{
          max-width:700px;
          margin:auto;
          color:#94a3b8;
          line-height:1.8;
          margin-bottom:35px;
          font-size:17px;
        }

        /* FOOTER */
        .footer{
          padding:30px;
          border-top:1px solid rgba(255,255,255,0.06);

          text-align:center;
          color:#64748b;
          font-size:14px;
        }

        /* ANIMATIONS */
        @keyframes floatPhone{
          0%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-12px);
          }
          100%{
            transform:translateY(0px);
          }
        }

        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(40px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        /* ========================= */
        /* RESPONSIVE */
        /* ========================= */

        @media (max-width:1200px){

          .hero-title{
            font-size:56px;
          }

          .features-grid{
            grid-template-columns:repeat(2,1fr);
          }
        }

        @media (max-width:992px){

          .hero{
            padding-top:120px;
          }

          .hero-container{
            grid-template-columns:1fr;
            text-align:center;
          }

          .hero-left{
            display:flex;
            flex-direction:column;
            align-items:center;
          }

          .stats{
            justify-content:center;
          }

          .phone{
            width:320px;
            height:650px;
          }

          .features-grid{
            grid-template-columns:1fr;
          }

          .section-title h2{
            font-size:38px;
          }

          .final-box h2{
            font-size:40px;
          }
        }

        @media (max-width:768px){

          .hero{
            padding:100px 20px 60px;
          }

          .hero-title{
            font-size:42px;
            line-height:1.15;
          }

          .hero-text{
            font-size:16px;
          }

          .hero-buttons{
            width:100%;
            flex-direction:column;
          }

          .btn-primary,
          .btn-secondary{
            width:100%;
          }

          .stats{
            width:100%;
            flex-direction:column;
          }

          .stat-card{
            width:100%;
          }

          .phone{
            width:100%;
            max-width:330px;
            height:auto;
            min-height:640px;
          }

          .features{
            padding:70px 20px;
          }

          .feature-card{
            padding:28px;
          }

          .section-title h2{
            font-size:32px;
          }

          .final{
            padding:70px 20px 100px;
          }

          .final-box{
            padding:60px 24px;
            border-radius:28px;
          }

          .final-box h2{
            font-size:32px;
          }

          .final-box p{
            font-size:15px;
          }
        }

        @media (max-width:480px){

          .hero-title{
            font-size:34px;
          }

          .badge{
            font-size:12px;
          }

          .phone{
            padding:18px;
            border-radius:30px;
          }

          .section-title h2{
            font-size:28px;
          }

          .feature-card h3{
            font-size:20px;
          }

          .final-box h2{
            font-size:28px;
          }
        }
      `}</style>
     

      {/* HERO */}
      <section className="hero">

        <div className="hero-container">

          {/* LEFT */}
          <div className="hero-left">

            <div className="badge">
              🚀 The Modern Bio Link Platform
            </div>

            <h1 className="hero-title">
              One Link For Your
              <br />
              <span>Entire Digital World</span>
            </h1>

            <p className="hero-text">
              Create a beautiful and professional bio link page,
              share all your content in one place,
              grow your audience and track every click with powerful analytics.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">
                Get Started Free
              </button>

              <button className="btn-secondary">
                Watch Demo
              </button>
            </div>

            <div className="stats">

              <div className="stat-card">
                <h3>50K+</h3>
                <p>Active Users</p>
              </div>

              <div className="stat-card">
                <h3>12M+</h3>
                <p>Monthly Clicks</p>
              </div>

              <div className="stat-card">
                <h3>99%</h3>
                <p>Mobile Optimized</p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="hero-right">

            <div className="phone">

              <div className="phone-top">

                <div className="avatar"></div>

                <h3>@yourname</h3>

                <p>
                  Content Creator • Designer • Developer
                </p>

                <div className="socials">
                  <div className="social">IG</div>
                  <div className="social">YT</div>
                  <div className="social">TT</div>
                  <div className="social">IN</div>
                </div>

              </div>

              <div className="links">

                <div className="link-card">
                  <div className="link-left">
                    <div className="icon-box">🌐</div>

                    <div className="link-info">
                      <h4>My Website</h4>
                      <p>Visit my official website</p>
                    </div>
                  </div>

                  →
                </div>

                <div className="link-card">
                  <div className="link-left">
                    <div className="icon-box">🎥</div>

                    <div className="link-info">
                      <h4>YouTube Channel</h4>
                      <p>Watch my latest videos</p>
                    </div>
                  </div>

                  →
                </div>

                <div className="link-card">
                  <div className="link-left">
                    <div className="icon-box">🛍</div>

                    <div className="link-info">
                      <h4>My Products</h4>
                      <p>Check out my digital store</p>
                    </div>
                  </div>

                  →
                </div>

                <div className="link-card">
                  <div className="link-left">
                    <div className="icon-box">📩</div>

                    <div className="link-info">
                      <h4>Contact Me</h4>
                      <p>Work and collaborations</p>
                    </div>
                  </div>

                  →
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="features-container">

          <div className="section-title">
            <h2>Everything You Need</h2>

            <p>
              Powerful tools to build your personal brand,
              grow your audience and manage your online presence professionally.
            </p>
          </div>

          <div className="features-grid">

            <div className="feature-card">
              <div className="feature-icon">⚡</div>

              <h3>Fast Setup</h3>

              <p>
                Create your professional bio link page in less than a minute
                with a smooth and intuitive experience.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>

              <h3>Custom Themes</h3>

              <p>
                Beautiful modern themes fully optimized for all devices
                and designed to increase engagement.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>

              <h3>Advanced Analytics</h3>

              <p>
                Track clicks, audience behavior and performance
                with real-time detailed analytics.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>

              <h3>Mobile First</h3>

              <p>
                Optimized perfectly for smartphones, tablets and desktops
                without breaking layouts.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>

              <h3>Secure Platform</h3>

              <p>
                Your data and links are protected with modern security
                standards and reliable infrastructure.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚀</div>

              <h3>Grow Faster</h3>

              <p>
                Increase conversions and direct your audience
                exactly where you want with smart tools.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="final">

        <div className="final-box">

          <h2>
            Start Building Your
            <br />
            Bio Link Today
          </h2>

          <p>
            Join thousands of creators, developers and businesses
            using BioLink to grow their online presence professionally.
          </p>

          <button className="btn-primary">
            Create Your Page Now
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 BioLink — All Rights Reserved
      </footer>

    </div>
  );
}


