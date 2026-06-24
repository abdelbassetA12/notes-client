import {
  FiArrowLeft,
  FiCheckCircle,
  FiBarChart2,
  FiTarget,
  FiFolder
} from "react-icons/fi";

export default function Home() {
  return (
    <div className="landing-page">

      {/* HERO */}

      <section className="hero">

        <div className="hero-left">

          <div className="hero-badge">
            ✨ منصة ذكية لإدارة المهام والإنتاجية
          </div>

          <h1>
            سيطر على يومك
            <br />
            وحقق أهدافك بسهولة
          </h1>

          <p>
            منصة حديثة تساعدك على تنظيم مهامك،
            متابعة تقدمك، تحليل إنتاجيتك،
            والوصول لأهدافك من خلال لوحة تحكم
            متطورة وإحصائيات ذكية.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              ابدأ مجاناً
            </button>

            <button className="secondary-btn">
              اكتشف المميزات
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="dashboard-card">

            <div className="dashboard-header">

              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>

            </div>

            <div className="stats-grid">

              <div className="stat-box">
                <h2>24</h2>
                <span>إجمالي المهام</span>
              </div>

              <div className="stat-box">
                <h2>18</h2>
                <span>مكتملة</span>
              </div>

              <div className="stat-box">
                <h2>75%</h2>
                <span>نسبة الإنجاز</span>
              </div>

            </div>

            <div className="task-card">

              <div className="task-dot"></div>

              <div>

                <h3>
                  إكمال مشروع React
                </h3>

                <span>
                  أولوية عالية
                </span>

              </div>

            </div>

            <div className="task-card">

              <div className="task-dot green-bg"></div>

              <div>

                <h3>
                  التمرين اليومي
                </h3>

                <span>
                  مكتملة
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="features">

        <div className="section-title">

          <h2>
            كل ما تحتاجه لإدارة يومك
          </h2>

          <p>
            أدوات قوية لمساعدتك على تنظيم المهام وتحقيق أهدافك.
          </p>

        </div>

        <div className="features-grid">

          <div className="feature-card">

            <FiCheckCircle />

            <h3>
              إدارة المهام
            </h3>

            <p>
              إنشاء المهام وتحديد الأولويات بسهولة.
            </p>

          </div>

          <div className="feature-card">

            <FiFolder />

            <h3>
              الفئات الذكية
            </h3>

            <p>
              تنظيم المهام باستخدام الألوان والأيقونات.
            </p>

          </div>

          <div className="feature-card">

            <FiBarChart2 />

            <h3>
              الإحصائيات
            </h3>

            <p>
              متابعة نشاطك اليومي والأسبوعي.
            </p>

          </div>

          <div className="feature-card">

            <FiTarget />

            <h3>
              تحقيق الأهداف
            </h3>

            <p>
              زيادة الإنتاجية ومتابعة التقدم.
            </p>

          </div>

        </div>

      </section>

      {/* DASHBOARD SHOWCASE */}

<section className="showcase">

  <div className="showcase-header">

    <span>
      لوحة تحكم متكاملة
    </span>

    <h2>
      كل ما تحتاجه لإدارة يومك في مكان واحد
    </h2>

    <p>
      تابع مهامك، راقب تقدمك، واحصل على إحصائيات
      دقيقة تساعدك على تحقيق أهدافك بسهولة.
    </p>

  </div>

  <div className="showcase-container">

    {/* البطاقة الرئيسية */}

    <div className="main-dashboard">

      <div className="dashboard-top">

        <div className="small-card">

          <h3>
            24
          </h3>

          <span>
            إجمالي المهام
          </span>

        </div>

        <div className="small-card">

          <h3>
            18
          </h3>

          <span>
            مكتملة
          </span>

        </div>

        <div className="small-card">

          <h3>
            6
          </h3>

          <span>
            متبقية
          </span>

        </div>

      </div>

      <div className="task-list">

        <div className="dashboard-task high">

          <div>
            <h4>
              إكمال مشروع React
            </h4>

            <span>
              أولوية عالية
            </span>
          </div>

          <div className="status red-status">
            عالية
          </div>

        </div>

        <div className="dashboard-task">

          <div>
            <h4>
              ممارسة الرياضة
            </h4>

            <span>
              مكتملة
            </span>
          </div>

          <div className="status green-status">
            ✓
          </div>

        </div>

        <div className="dashboard-task">

          <div>
            <h4>
              قراءة كتاب
            </h4>

            <span>
              قيد التنفيذ
            </span>
          </div>

          <div className="status yellow-status">
            متوسطة
          </div>

        </div>

      </div>

    </div>

    {/* بطاقات عائمة */}

    <div className="floating-card progress-card">

      <h2>
        87%
      </h2>

      <span>
        نسبة الإنجاز
      </span>

    </div>

    <div className="floating-card productivity-card">

      <h2>
        A+
      </h2>

      <span>
        مستوى الإنتاجية
      </span>

    </div>

    <div className="floating-card streak-card">

      <h2>
        7
      </h2>

      <span>
        أيام متتالية
      </span>

    </div>

  </div>

</section>




{/* STATS */}

<section className="stats-section">

  <div className="stats-header">

    <h2>
      أرقام تعكس إنتاجيتك
    </h2>

    <p>
      آلاف المهام تم إنجازها ومئات المستخدمين يثقون بالمنصة.
    </p>

  </div>

  <div className="stats-cards">

    <div className="big-stat">

      <h1>10K+</h1>

      <span>
        مهمة منجزة
      </span>

    </div>

    <div className="big-stat">

      <h1>95%</h1>

      <span>
        معدل الإنجاز
      </span>

    </div>

    <div className="big-stat">

      <h1>500+</h1>

      <span>
        مستخدم
      </span>

    </div>

    <div className="big-stat">

      <h1>7</h1>

      <span>
        أيام متتالية
      </span>

    </div>

  </div>

</section>


{/* CATEGORIES */}

<section className="categories-preview">

  <div className="categories-left">

    <span>
      الفئات الذكية
    </span>

    <h2>
      نظم مهامك بالطريقة التي تناسبك
    </h2>

    <p>
      أنشئ فئات مخصصة بألوان وأيقونات مختلفة
      لتقسيم أعمالك اليومية بشكل أفضل.
    </p>

  </div>


  <div className="categories-grid">

    <div className="category-item home">
      🏠 المنزل
    </div>

    <div className="category-item work">
      💼 العمل
    </div>

    <div className="category-item study">
      📚 الدراسة
    </div>

    <div className="category-item target">
      🎯 الأهداف
    </div>

    <div className="category-item health">
      ❤️ الصحة
    </div>

    <div className="category-item shopping">
      🛒 التسوق
    </div>

  </div>

</section>


{/* PRODUCTIVITY */}

<section className="productivity-section">

  <div className="productivity-card">

    <span className="small-title">
      مستوى الإنتاجية
    </span>

    <h2>
      أداء ممتاز هذا الأسبوع
    </h2>

    <p>
      حافظ على تقدمك واستمر في تحقيق أهدافك
      من خلال متابعة تركيزك وإنجازاتك اليومية.
    </p>

    <div className="score-circle">

      <div>

        <h1>A+</h1>

        <span>
          ممتاز
        </span>

      </div>

    </div>

  </div>


  <div className="performance-bars">

    <div className="bar-item">

      <div className="bar-top">

        <span>
          التركيز
        </span>

        <strong>
          92%
        </strong>

      </div>

      <div className="progress-bar">

        <div
          className="fill"
          style={{
            width:"92%"
          }}
        />

      </div>

    </div>


    <div className="bar-item">

      <div className="bar-top">

        <span>
          الإنجاز
        </span>

        <strong>
          84%
        </strong>

      </div>

      <div className="progress-bar">

        <div
          className="fill"
          style={{
            width:"84%"
          }}
        />

      </div>

    </div>


    <div className="bar-item">

      <div className="bar-top">

        <span>
          الالتزام
        </span>

        <strong>
          76%
        </strong>

      </div>

      <div className="progress-bar">

        <div
          className="fill"
          style={{
            width:"76%"
          }}
        />

      </div>

    </div>

  </div>

</section>



{/* TESTIMONIALS */}

<section className="testimonials">

  <div className="section-title">

    <h2>
      ماذا يقول مستخدمونا؟
    </h2>

    <p>
      آلاف المستخدمين يعتمدون على المنصة لتنظيم حياتهم اليومية.
    </p>

  </div>

  <div className="testimonials-grid">

    <div className="testimonial-card">

      <div className="stars">
        ⭐⭐⭐⭐⭐
      </div>

      <p>
        أفضل تطبيق استخدمته لتنظيم يومي،
        الواجهة جميلة وسهلة جداً.
      </p>

      <div className="user">

        <div className="avatar">
          A
        </div>

        <div>

          <h4>
            أحمد
          </h4>

          <span>
            مطور ويب
          </span>

        </div>

      </div>

    </div>

    <div className="testimonial-card">

      <div className="stars">
        ⭐⭐⭐⭐⭐
      </div>

      <p>
        الإحصائيات اليومية حفزتني كثيراً
        وأصبحت أكثر إنتاجية.
      </p>

      <div className="user">

        <div className="avatar">
          M
        </div>

        <div>

          <h4>
            محمد
          </h4>

          <span>
            طالب جامعي
          </span>

        </div>

      </div>

    </div>

    <div className="testimonial-card">

      <div className="stars">
        ⭐⭐⭐⭐⭐
      </div>

      <p>
        تصميم رائع وسرعة ممتازة،
        أصبحت أتابع مهامي بسهولة.
      </p>

      <div className="user">

        <div className="avatar">
          S
        </div>

        <div>

          <h4>
            سارة
          </h4>

          <span>
            مصممة UI
          </span>

        </div>

      </div>

    </div>

  </div>

</section>




{/* FAQ */}

<section className="faq-section">

  <div className="section-title">

    <h2>
      الأسئلة الشائعة
    </h2>

    <p>
      بعض الأسئلة التي يطرحها المستخدمون.
    </p>

  </div>

  <div className="faq-list">

    <div className="faq-item">

      <h3>
        هل التطبيق مجاني؟
      </h3>

      <p>
        نعم، يمكنك البدء مجاناً والاستفادة من المميزات الأساسية.
      </p>

    </div>

    <div className="faq-item">

      <h3>
        هل يمكن إنشاء فئات مخصصة؟
      </h3>

      <p>
        نعم، يمكنك إنشاء عدد غير محدود من الفئات والألوان والأيقونات.
      </p>

    </div>

    <div className="faq-item">

      <h3>
        هل توجد إحصائيات وتقارير؟
      </h3>

      <p>
        توفر المنصة تقارير يومية وأسبوعية لمتابعة تقدمك.
      </p>

    </div>

    <div className="faq-item">

      <h3>
        هل يدعم الهاتف؟
      </h3>

      <p>
        نعم، التصميم متجاوب بالكامل مع جميع الأجهزة.
      </p>

    </div>

  </div>

</section>


{/* CTA */}

<section className="cta-section">

  <h2>
    ابدأ رحلتك نحو إنتاجية أعلى
  </h2>

  <p>
    نظم مهامك، تابع تقدمك، وحقق أهدافك بسهولة.
  </p>

  <button>
    ابدأ مجاناً
  </button>

</section>






<footer className="footer">

  <div className="footer-grid">

    <div>

      <h3>
        TaskFlow
      </h3>

      <p>
        منصة ذكية لإدارة المهام وتحسين الإنتاجية.
      </p>

    </div>

    <div>

      <h4>
        المنتج
      </h4>

      <ul>

        <li>الرئيسية</li>

        <li>المميزات</li>

        <li>الأسعار</li>

      </ul>

    </div>

    <div>

      <h4>
        الدعم
      </h4>

      <ul>

        <li>الأسئلة الشائعة</li>

        <li>تواصل معنا</li>

        <li>المساعدة</li>

      </ul>

    </div>

    <div>

      <h4>
        الحساب
      </h4>

      <ul>

        <li>تسجيل الدخول</li>

        <li>إنشاء حساب</li>

      </ul>

    </div>

  </div>

  <div className="copyright">

    © 2026 TaskFlow. جميع الحقوق محفوظة.

  </div>

</footer>








      <style>
        {
          `
          .landing-page{
background:#F8FAFC;
padding:0 7%;
direction:rtl;
}

.hero{
min-height:100vh;
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
gap:80px;
}

.hero-badge{
display:inline-block;
padding:10px 18px;
background:#EEF2FF;
color:#6366F1;
border-radius:999px;
font-weight:700;
margin-bottom:20px;
}

.hero h1{
font-size:70px;
line-height:1.2;
font-weight:900;
color:#0F172A;
margin-bottom:25px;
}

.hero p{
color:#64748B;
font-size:18px;
line-height:1.9;
max-width:600px;
}

.hero-buttons{
display:flex;
gap:18px;
margin-top:40px;
}

.primary-btn{
height:58px;
padding:0 32px;
background:#6366F1;
color:white;
border:none;
border-radius:18px;
cursor:pointer;
font-size:16px;
font-weight:700;
}

.secondary-btn{
height:58px;
padding:0 32px;
background:white;
border:1px solid #E2E8F0;
border-radius:18px;
cursor:pointer;
}

.dashboard-card{
background:white;
padding:30px;
border-radius:35px;
box-shadow:
0 30px 80px rgba(0,0,0,.08);
}

.dashboard-header{
display:flex;
gap:10px;
margin-bottom:30px;
}

.dot{
width:14px;
height:14px;
border-radius:50%;
}

.red{
background:#EF4444;
}

.yellow{
background:#F59E0B;
}

.green{
background:#22C55E;
}

.stats-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:16px;
margin-bottom:25px;
}

.stat-box{
background:#F8FAFC;
padding:20px;
border-radius:20px;
text-align:center;
}

.stat-box h2{
font-size:32px;
color:#0F172A;
}

.task-card{
display:flex;
gap:15px;
padding:18px;
border:1px solid #E2E8F0;
border-radius:20px;
margin-top:15px;
}

.task-dot{
width:18px;
height:18px;
border-radius:50%;
background:#EF4444;
}

.green-bg{
background:#22C55E;
}

.features{
padding:120px 0;
}

.section-title{
text-align:center;
margin-bottom:60px;
}

.section-title h2{
font-size:50px;
color:#0F172A;
margin-bottom:15px;
}

.section-title p{
color:#64748B;
}

.features-grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:25px;
}

.feature-card{
background:white;
padding:35px;
border-radius:30px;
box-shadow:0 10px 40px rgba(0,0,0,.05);
transition:.3s;
}

.feature-card:hover{
transform:translateY(-8px);
}

.feature-card svg{
font-size:40px;
color:#6366F1;
margin-bottom:20px;
}

.feature-card h3{
margin-bottom:15px;
color:#0F172A;
}

.feature-card p{
color:#64748B;
line-height:1.8;
}

@media(max-width:1000px){

.hero{
grid-template-columns:1fr;
}

.hero h1{
font-size:48px;
}

.features-grid{
grid-template-columns:1fr 1fr;
}

}

@media(max-width:700px){

.features-grid{
grid-template-columns:1fr;
}

.hero-buttons{
flex-direction:column;
}

.hero h1{
font-size:38px;
}

.stats-grid{
grid-template-columns:1fr;
}

}


/* =====================
SHOWCASE
===================== */

.showcase{
padding:140px 0;
}

.showcase-header{
text-align:center;
max-width:850px;
margin:auto;
margin-bottom:80px;
}

.showcase-header span{
color:#6366F1;
font-weight:700;
}

.showcase-header h2{
font-size:56px;
margin-top:20px;
margin-bottom:25px;
color:#0F172A;
}

.showcase-header p{
color:#64748B;
font-size:18px;
line-height:1.9;
}

.showcase-container{
position:relative;
max-width:1000px;
margin:auto;
}

.main-dashboard{
background:#0F172A;
padding:40px;
border-radius:40px;
box-shadow:
0 40px 100px rgba(15,23,42,.25);
}

.dashboard-top{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:20px;
margin-bottom:35px;
}

.small-card{
background:#1E293B;
padding:25px;
border-radius:24px;
text-align:center;
}

.small-card h3{
font-size:40px;
color:white;
}

.small-card span{
color:#CBD5E1;
}

.task-list{
display:flex;
flex-direction:column;
gap:20px;
}

.dashboard-task{
background:#1E293B;
padding:22px;
border-radius:24px;
display:flex;
justify-content:space-between;
align-items:center;
}

.dashboard-task h4{
color:white;
margin-bottom:8px;
}

.dashboard-task span{
color:#94A3B8;
}

.status{
padding:10px 18px;
border-radius:999px;
font-size:14px;
font-weight:700;
}

.red-status{
background:#FEE2E2;
color:#DC2626;
}

.green-status{
background:#DCFCE7;
color:#16A34A;
}

.yellow-status{
background:#FEF3C7;
color:#D97706;
}

.floating-card{
position:absolute;
background:white;
padding:25px;
border-radius:28px;
box-shadow:
0 20px 60px rgba(0,0,0,.1);
text-align:center;
}

.floating-card h2{
font-size:42px;
color:#6366F1;
margin-bottom:10px;
}

.floating-card span{
color:#64748B;
}

.progress-card{
top:-40px;
left:-60px;
}

.productivity-card{
bottom:-30px;
left:-40px;
}

.streak-card{
top:50%;
right:-70px;
transform:translateY(-50%);
}

@media(max-width:1100px){

.progress-card,
.productivity-card,
.streak-card{
position:static;
transform:none;
margin-top:20px;
}

.showcase-container{
display:flex;
flex-direction:column;
gap:20px;
}

}

@media(max-width:700px){

.dashboard-top{
grid-template-columns:1fr;
}

.showcase-header h2{
font-size:40px;
}

}
/*====================
STATS
====================*/

.stats-section{
padding:140px 0;
}

.stats-header{
text-align:center;
margin-bottom:60px;
}

.stats-header h2{
font-size:52px;
color:#0F172A;
margin-bottom:20px;
}

.stats-header p{
color:#64748B;
font-size:18px;
}

.stats-cards{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:25px;
}

.big-stat{
background:white;
padding:45px;
border-radius:30px;
text-align:center;
box-shadow:0 15px 50px rgba(0,0,0,.06);
transition:.3s;
}

.big-stat:hover{
transform:translateY(-8px);
}

.big-stat h1{
font-size:60px;
color:#6366F1;
margin-bottom:15px;
}

.big-stat span{
color:#64748B;
}


/*====================
CATEGORIES
====================*/

.categories-preview{
padding:140px 0;
display:grid;
grid-template-columns:1fr 1fr;
gap:80px;
align-items:center;
}

.categories-left span{
color:#6366F1;
font-weight:700;
}

.categories-left h2{
font-size:55px;
margin:20px 0;
color:#0F172A;
}

.categories-left p{
line-height:2;
font-size:18px;
color:#64748B;
}

.categories-grid{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:25px;
}

.category-item{
height:110px;
display:flex;
justify-content:center;
align-items:center;
font-size:20px;
font-weight:700;
border-radius:28px;
transition:.3s;
cursor:pointer;
}

.category-item:hover{
transform:translateY(-8px);
}

.home{
background:#EEF2FF;
color:#4F46E5;
}

.work{
background:#DBEAFE;
color:#2563EB;
}

.study{
background:#FEF3C7;
color:#D97706;
}

.target{
background:#FCE7F3;
color:#DB2777;
}

.health{
background:#FEE2E2;
color:#DC2626;
}

.shopping{
background:#DCFCE7;
color:#16A34A;
}


/*====================
RESPONSIVE
====================*/

@media(max-width:1000px){

.stats-cards{
grid-template-columns:repeat(2,1fr);
}

.categories-preview{
grid-template-columns:1fr;
}

}

@media(max-width:700px){

.stats-cards{
grid-template-columns:1fr;
}

.categories-grid{
grid-template-columns:1fr;
}

.stats-header h2,
.categories-left h2{
font-size:40px;
}

}

/*===================
PRODUCTIVITY
===================*/

.productivity-section{
padding:140px 0;
display:grid;
grid-template-columns:420px 1fr;
gap:80px;
align-items:center;
}

.productivity-card{
background:#0F172A;
padding:50px;
border-radius:40px;
color:white;
box-shadow:
0 30px 100px rgba(15,23,42,.2);
}

.small-title{
color:#A5B4FC;
font-weight:700;
}

.productivity-card h2{
font-size:42px;
margin-top:20px;
margin-bottom:20px;
}

.productivity-card p{
line-height:2;
color:#CBD5E1;
}

.score-circle{
width:220px;
height:220px;
border-radius:50%;
margin:50px auto 0;
background:
linear-gradient(
135deg,
#6366F1,
#4F46E5
);
display:flex;
justify-content:center;
align-items:center;
}

.score-circle div{
width:170px;
height:170px;
background:#0F172A;
border-radius:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}

.score-circle h1{
font-size:60px;
}

.score-circle span{
color:#CBD5E1;
}


.performance-bars{
display:flex;
flex-direction:column;
gap:40px;
}

.bar-item{
background:white;
padding:30px;
border-radius:30px;
box-shadow:
0 15px 40px rgba(0,0,0,.05);
}

.bar-top{
display:flex;
justify-content:space-between;
margin-bottom:18px;
font-size:18px;
}

.bar-top strong{
color:#6366F1;
}

.progress-bar{
height:16px;
background:#E2E8F0;
border-radius:999px;
overflow:hidden;
}

.fill{
height:100%;
border-radius:999px;
background:
linear-gradient(
90deg,
#6366F1,
#8B5CF6
);
}


/* RESPONSIVE */

@media(max-width:1100px){

.productivity-section{
grid-template-columns:1fr;
}

.productivity-card{
max-width:600px;
margin:auto;
}

}
/*=====================
TESTIMONIALS
======================*/

.testimonials{
padding:140px 0;
}

.testimonials-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:30px;
}

.testimonial-card{
background:rgba(255,255,255,.8);
backdrop-filter:blur(20px);
border:1px solid #E2E8F0;
padding:35px;
border-radius:35px;
box-shadow:
0 20px 50px rgba(0,0,0,.05);
transition:.3s;
}

.testimonial-card:hover{
transform:translateY(-10px);
}

.stars{
font-size:22px;
margin-bottom:20px;
}

.testimonial-card p{
line-height:2;
color:#64748B;
margin-bottom:30px;
}

.user{
display:flex;
gap:15px;
align-items:center;
}

.avatar{
width:55px;
height:55px;
border-radius:50%;
background:
linear-gradient(
135deg,
#6366F1,
#8B5CF6
);
display:flex;
justify-content:center;
align-items:center;
color:white;
font-size:20px;
font-weight:700;
}

.user h4{
color:#0F172A;
margin-bottom:4px;
}

.user span{
color:#94A3B8;
}


/* Responsive */

@media(max-width:1000px){

.testimonials-grid{
grid-template-columns:1fr;
}

}
/*=================
FAQ
=================*/

.faq-section{
padding:140px 0;
}

.faq-list{
display:flex;
flex-direction:column;
gap:25px;
max-width:900px;
margin:auto;
}

.faq-item{
background:white;
padding:35px;
border-radius:30px;
box-shadow:0 15px 40px rgba(0,0,0,.05);
}

.faq-item h3{
margin-bottom:15px;
color:#0F172A;
}

.faq-item p{
line-height:1.9;
color:#64748B;
}

/*=================
CTA
=================*/

.cta-section{
padding:100px 50px;
border-radius:40px;
text-align:center;

background:
linear-gradient(
135deg,
#6366F1,
#4F46E5
);

color:white;

margin-bottom:120px;
}

.cta-section h2{
font-size:60px;
margin-bottom:20px;
}

.cta-section p{
font-size:18px;
margin-bottom:40px;
opacity:.9;
}

.cta-section button{
height:60px;
padding:0 35px;
border:none;
background:white;
color:#4F46E5;
border-radius:18px;
font-size:17px;
font-weight:700;
cursor:pointer;
}
















/*=================
FOOTER
=================*/

.footer{
padding-bottom:40px;
}

.footer-grid{
display:grid;
grid-template-columns:2fr 1fr 1fr 1fr;
gap:50px;
padding-bottom:50px;
border-bottom:1px solid #E2E8F0;
}

.footer h3{
font-size:32px;
margin-bottom:20px;
color:#0F172A;
}

.footer h4{
margin-bottom:20px;
color:#0F172A;
}

.footer p,
.footer li{
color:#64748B;
line-height:2;
list-style:none;
cursor:pointer;
}

.footer li:hover{
color:#6366F1;
}

.copyright{
text-align:center;
padding-top:40px;
color:#94A3B8;
}

@media(max-width:900px){

.footer-grid{
grid-template-columns:1fr;
}

.cta-section h2{
font-size:40px;
}

}`
        }
      </style>

    </div>
  );
}