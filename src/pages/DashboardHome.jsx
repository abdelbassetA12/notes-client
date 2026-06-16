
import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";
import { useAuth } from "../context/AuthContext";
 import LoadingScreen from "../components/LoadingScreen";
import {
  categoryIcons,
  
}
from "../data/categoryIcons";

import {
  FiSearch,
  FiBell,
  FiMoon,
  FiHome,
  FiCheckCircle,
  FiClock,
  FiFlag,
  FiTrendingUp,
  FiPlus,
  FiFilter,






  FiFolder,
  FiBriefcase,
 

 
  FiTarget,
  FiStar,
  FiShoppingBag
} from "react-icons/fi";



import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip
} from "recharts";
/*
const categoryIcons = {
  folder: <FiFolder />,
  briefcase: <FiBriefcase />,
  book: <FiBook />,
  heart: <FiHeart />,
  home: <FiHome />,
  target: <FiTarget />,
  star: <FiStar />,
  shopping: <FiShoppingBag />
};*/

import AddTaskModal from "../components/tasks/AddTaskModal";

export default function DashboardHome() {
  const { user } = useAuth();

  const [tasks,setTasks] = useState([]);
  const [stats,setStats] = useState(null);
  const [weekly,setWeekly] = useState([]);
  const [loading,setLoading] = useState(true);

  const [openModal,setOpenModal] =
  useState(false);

  const [filter,setFilter] =
  useState("all");

  const loadDashboard = async()=>{

    try{

      const res =
      await axios.get(
        `${API_BASE}/api/dashboard/today`,
        {
          withCredentials:true
        }
      );

      setTasks(
        res.data.tasks || []
      );

      setStats(
        res.data.stats
      );

      const weeklyRes =
      await axios.get(
        `${API_BASE}/api/dashboard/weekly`,
        {
          withCredentials:true
        }
      );

      setWeekly(
        weeklyRes.data || []
      );

    }
    catch(err){

      console.log(err);

    }
    finally{

      setLoading(false);

    }

  };

  useEffect(()=>{

    loadDashboard();

  },[]);

  const completeTask =
  async(id)=>{

    try{

      await axios.post(

        `${API_BASE}/api/occurrences/${id}/complete`,

        {},

        {
          withCredentials:true
        }

      );

      loadDashboard();

    }
    catch(err){

      console.log(err);

    }

  };

  const getPriorityColor =
  (priority)=>{

    if(priority === "high")
      return "high";

    if(priority === "medium")
      return "medium";

    return "low";

  };

  const getPriorityText =
  (priority)=>{

    if(priority === "high")
      return "عالية";

    if(priority === "medium")
      return "متوسطة";

    return "منخفضة";

  };


  const filteredTasks =

  filter === "completed"

  ? tasks.filter(
      task=>task.completed
    )

  : filter === "pending"

  ? tasks.filter(
      task=>!task.completed
    )

  : tasks;

  

  if (loading) return <LoadingScreen />;

  return(

    <>

      <AddTaskModal
        open={openModal}
        onClose={()=>
          setOpenModal(false)
        }
        onCreated={
          loadDashboard
        }
      />

      <div className="dashboard-home">

        {/* HEADER */}

        <div className="dashboard-header">

          <div className="header-left">

            <button className="icon-btn">

              <FiBell />

              <span className="badge">
                3
              </span>

            </button>

            <button className="icon-btn">

              <FiMoon />

            </button>

          </div>

          <div className="search-box">

            <FiSearch />

            <input
              placeholder="بحث عن مهمة..."
            />

          </div>

        </div>

        {/* WELCOME */}

        <div className="welcome-section">

          <h1>

              👋 مرحباً {user?.fullName} !
            

          </h1>

          <p>

            لديك

            <strong>

              {" "}
              {stats.total}
              {" "}
              مهام اليوم

            </strong>

            ،

            <span className="green">

              {" "}
              {stats.completed}
              {" "}
              مكتملة

            </span>

            ،

            <span className="red">

              {" "}
              {stats.pending}
              {" "}
              متبقية

            </span>

          </p>

        </div>

        {/* MAIN GRID */}

        <div className="content-grid">

          <div className="main-column">

            {/* STATS */}

            <div className="stats-grid">

              <div className="stat-card">

                <div className="stat-icon yellow">

                  <FiFlag />

                </div>

                <h2>
                  {stats.pending}
                </h2>

                <p>
                  مهام متبقية
                </p>

                <span>

                  من
                  {" "}
                  {stats.total}
                  {" "}
                  مهام

                </span>

              </div>

              <div className="stat-card">

                <div className="stat-icon green">

                  <FiCheckCircle />

                </div>

                <h2>
                  {stats.completed}
                </h2>

                <p>
                  مهام مكتملة
                </p>

                <span>

                  {stats.percent}%

                </span>

              </div>

              <div className="stat-card">

                <div className="stat-icon blue">

                  <FiClock />

                </div>

                <h2>
                  {stats.total}
                </h2>

                <p>
                  إجمالي المهام
                </p>

                <span>
                  اليوم
                </span>

              </div>

              <div className="stat-card">

                <div className="stat-icon purple">

                  <FiTrendingUp />

                </div>

                <h2>

                  3

                </h2>

                <p>
                  ساعات متبقية
                </p>

                <span>
                  من يومك
                </span>

              </div>

            </div>

                        {/* TASKS SECTION */}

            <div className="tasks-card">

              <div className="tasks-top">

                <div>

                  <h2 className="section-title">
                    مهام اليوم
                  </h2>

                  <p className="section-subtitle">
                    إدارة ومتابعة مهامك اليومية
                  </p>

                </div>

                <button
                  className="add-task-btn"
                  onClick={() =>
                    setOpenModal(true)
                  }
                >

                  <FiPlus />

                  مهمة جديدة

                </button>

              </div>

              {/* FILTER BAR */}

              <div className="tasks-toolbar">

                <div className="filters">

                  <button
                    className={
                      filter === "all"
                      ? "filter-btn active"
                      : "filter-btn"
                    }
                    onClick={()=>
                      setFilter("all")
                    }
                  >
                    الكل
                  </button>

                  <button
                    className={
                      filter === "pending"
                      ? "filter-btn active"
                      : "filter-btn"
                    }
                    onClick={()=>
                      setFilter("pending")
                    }
                  >
                    قيد التنفيذ
                  </button>

                  <button
                    className={
                      filter === "completed"
                      ? "filter-btn active"
                      : "filter-btn"
                    }
                    onClick={()=>
                      setFilter("completed")
                    }
                  >
                    مكتملة
                  </button>

                </div>

                <button className="toolbar-btn">

                  <FiFilter />

                  تصفية

                </button>

              </div>

              {/* TASKS LIST */}

              <div className="tasks-list">

                {
                  filteredTasks.length === 0
                  &&
                  (
                    <div className="empty-state">

                      لا توجد مهام حالياً

                    </div>
                  )
                }

                {

                  filteredTasks.map(task => (

                    <div
                      key={task._id}
                      className={
                        task.completed
                        ?
                        "task-item completed"
                        :
                        "task-item"
                      }
                    >

                      <div className="task-left">

                        <div
                          className={
                            task.completed
                            ?
                            "task-check checked"
                            :
                            "task-check"
                          }
                        >

                          {
                            task.completed &&
                            <FiCheckCircle />
                          }

                        </div>

                        <div className="task-content">

                          <div className="task-top-row">

                            <h3
                              className={
                                task.completed
                                ?
                                "task-title completed"
                                :
                                "task-title"
                              }
                            >

                              {task.title}

                            </h3>

                            <span
                              className={
                                `priority-badge ${getPriorityColor(
                                  task.priority
                                )}`
                              }
                            >

                              {
                                getPriorityText(
                                  task.priority
                                )
                              }

                            </span>

                          </div>

                          <div className="task-meta">


                            <span
className="category"
style={{
color:task.categoryColor
}}
>
   <span
    style={{
      marginLeft: "4px"
    }}
  >
    {categoryIcons[task.categoryIcon]}
  </span>




{task.categoryName}

</span>

                            

                            
                             <span>
                              الوقت المفضل 
                            {task.preferredTime} 
                            </span>

                            <span>
                            {task.progressValue}/{task.targetValue} {task.targetUnit}
                             </span>

                              {
                          task.completed
                          ?
                          (
                            <span >
                               ✓ 
                              
                               مكتملة 



                            </span>
                          )


                      
                          :
                          (
                           <span> 
                            لم تنجز بعد
                           </span>
                           





                              
                          )
                        }

                 
                          </div>

                        </div>

                      </div>

                      <div className="task-actions">
                          {
                          task.completed
                          ?
                          (
                            <span className="done-badge">

                             ✓ مكتملة 

                            </span>
                          )


                      
                          :
                          (
                            <button
                              className="complete-btn"
                              onClick={() =>
                                completeTask(
                                  task._id
                                )
                              }
                            >





                              تم الإنجاز

                            </button>
                          )
                        }

                      </div>

                      


                    </div>

                  ))

                }

              </div>

            </div>


                      </div>

          {/* RIGHT COLUMN */}

          <div className="side-column">

            {/* PROGRESS */}

            <div className="progress-card">

              <div className="card-header">

                <h3>
                  تقدم اليوم
                </h3>

                <span>
                  {stats.percent}%
                </span>

              </div>

              <div className="progress-wrapper">

                <svg
                  className="progress-svg"
                  viewBox="0 0 120 120"
                >

                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    className="progress-bg"
                  />

                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    className="progress-bar"
                    strokeDasharray="314"
                    strokeDashoffset={
                      314 -
                      (
                        314 *
                        stats.percent
                      ) / 100
                    }
                  />

                </svg>

                <div className="progress-center">

                  <strong>

                    {stats.percent}%

                  </strong>

                  <span>

                    مكتمل

                  </span>

                </div>

              </div>

              <div className="progress-stats">

                <div>

                  <strong>

                    {stats.completed}

                  </strong>

                  <span>

                    مكتملة

                  </span>

                </div>

                <div>

                  <strong>

                    {stats.pending}

                  </strong>

                  <span>

                    متبقية

                  </span>

                </div>

              </div>

            </div>

            {/* PRIORITIES */}

            <div className="priority-card">

              <div className="card-header">

                <h3>
                  أعلى الأولويات
                </h3>

              </div>

              <div className="priority-list">

                {

                  tasks

                  .filter(
                    t =>
                    t.priority === "high"
                  )

                  .slice(0,4)

                  .map(task => (

                    <div
                      key={task._id}
                      className="priority-item"
                    >

                      <div className="priority-dot" />

                      <div>

                        <h4>

                          {task.title}

                        </h4>

                        <span>

                          {
                            task.categoryName
                          }

                        </span>

                      </div>

                    </div>

                  ))

                }

              </div>

            </div>

            {/* QUICK STATS */}

            <div className="mini-stats">

              <div className="mini-card">

                <h4>

                  7

                </h4>

                <span>

                  أيام متتالية

                </span>

              </div>

              <div className="mini-card">

                <h4>

                  24

                </h4>

                <span>

                  مهمة هذا الأسبوع

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM GRID */}

        <div className="bottom-grid">

          {/* CHART */}

          <div className="chart-card">

            <div className="card-header">

              <h3>

                النشاط الأسبوعي

              </h3>

            </div>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <BarChart
                data={weekly}
              >

                <XAxis
                  dataKey="day"
                />

                <Tooltip />

                <Bar
                  dataKey="completed"
                  radius={[
                    12,
                    12,
                    0,
                    0
                  ]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* PRODUCTIVITY */}

          <div className="focus-card">

            <h3>

              مستوى الإنتاجية

            </h3>

            <div className="focus-score">

              A+

            </div>

            <p>

              أداء ممتاز هذا الأسبوع

            </p>

            <div className="focus-bars">

              <div>

                <span>
                  التركيز
                </span>

                <div className="bar">

                  <div
                    style={{
                      width:"92%"
                    }}
                  />

                </div>

              </div>

              <div>

                <span>
                  الإنجاز
                </span>

                <div className="bar">

                  <div
                    style={{
                      width:"84%"
                    }}
                  />

                </div>

              </div>

              <div>

                <span>
                  الالتزام
                </span>

                <div className="bar">

                  <div
                    style={{
                      width:"76%"
                    }}
                  />

                </div>

              </div>

            </div>

          </div>

        </div>
                {/* TIP BANNER */}

        <div className="tip-banner">

          <div className="tip-icon">

            ✨

          </div>

          <div>

            <h4>

              نصيحة اليوم

            </h4>

            <p>

              ركز على مهمة واحدة في كل مرة للحصول على أفضل إنتاجية وتجنب تشتيت الانتباه.

            </p>

          </div>

        </div>


        <style>
          {
            `
            /* =========================
   PAGE
========================= */

.dashboard-home{
  direction:rtl;
  display:flex;
  flex-direction:column;
  gap:24px;
}

.dashboard-loading{
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
  font-weight:700;
}

/* =========================
   HEADER
========================= */

.dashboard-header{
  height:82px;
  background:#fff;
  border-radius:24px;
  padding:0 24px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border:1px solid #E2E8F0;
}

.header-left{
  display:flex;
  gap:12px;
}

.icon-btn{
  width:48px;
  height:48px;
  border:none;
  background:#F8FAFC;
  border-radius:14px;
  cursor:pointer;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
  color:#475569;
  transition:.25s;
}

.icon-btn:hover{
  background:#EEF2FF;
  color:#6366F1;
}

.badge{
  position:absolute;
  top:-4px;
  left:-4px;
  width:18px;
  height:18px;
  background:#EF4444;
  color:#fff;
  border-radius:50%;
  font-size:10px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.search-box{
  width:420px;
  height:52px;
  background:#F8FAFC;
  border:1px solid #E2E8F0;
  border-radius:16px;
  display:flex;
  align-items:center;
  gap:12px;
  padding:0 16px;
}

.search-box input{
  border:none;
  outline:none;
  background:transparent;
  width:100%;
}

/* =========================
   WELCOME
========================= */

.welcome-section{
  background:#fff;
  border-radius:28px;
  padding:32px;
  border:1px solid #E2E8F0;
}

.welcome-section h1{
  font-size:34px;
  font-weight:900;
  margin-bottom:10px;
  color:#0F172A;
}

.welcome-section p{
  color:#64748B;
  font-size:15px;
}

.green{
  color:#16A34A;
  font-weight:700;
}

.red{
  color:#DC2626;
  font-weight:700;
}

/* =========================
   MAIN GRID
========================= */

.content-grid{
  display:grid;
  grid-template-columns:1fr 340px;
  gap:24px;
}

.main-column{
  display:flex;
  flex-direction:column;
  gap:24px;
}

.side-column{
  display:flex;
  flex-direction:column;
  gap:24px;
}

/* =========================
   STATS
========================= */

.stats-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
}

.stat-card{
  background:white;
  border:1px solid #E2E8F0;
  border-radius:24px;
  padding:24px;
  transition:.3s;
}

.stat-card:hover{
  transform:translateY(-4px);
  box-shadow:0 20px 40px rgba(99,102,241,.08);
}

.stat-icon{
  width:52px;
  height:52px;
  border-radius:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:22px;
  margin-bottom:18px;
}

.stat-icon.blue{
  background:#DBEAFE;
  color:#2563EB;
}

.stat-icon.green{
  background:#DCFCE7;
  color:#16A34A;
}

.stat-icon.yellow{
  background:#FEF3C7;
  color:#D97706;
}

.stat-icon.purple{
  background:#EEF2FF;
  color:#6366F1;
}

.stat-card h2{
  font-size:32px;
  font-weight:800;
}

.stat-card p{
  margin-top:8px;
  font-weight:600;
}

.stat-card span{
  color:#64748B;
  font-size:13px;
}

/* =========================
   TASKS
========================= */

.tasks-card{
  background:white;
  border-radius:28px;
  padding:28px;
  border:1px solid #E2E8F0;
}

.tasks-top{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:24px;
}

.section-title{
  font-size:24px;
  font-weight:800;
}

.section-subtitle{
  color:#64748B;
  margin-top:5px;
}

.add-task-btn{
  height:50px;
  border:none;
  background:#6366F1;
  color:white;
  padding:0 20px;
  border-radius:14px;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:10px;
}

.tasks-toolbar{
  display:flex;
  justify-content:space-between;
  margin-bottom:24px;
}

.filters{
  display:flex;
  gap:10px;
}

.filter-btn{
  height:42px;
  padding:0 18px;
  border:none;
  border-radius:12px;
  cursor:pointer;
  background:#F1F5F9;
}

.filter-btn.active{
  background:#6366F1;
  color:white;
}

.toolbar-btn{
  height:42px;
  padding:0 18px;
  border:none;
  border-radius:12px;
  cursor:pointer;
  background:#EEF2FF;
  color:#6366F1;
}

.tasks-list{
  display:flex;
  flex-direction:column;
  gap:16px;
}

.task-item{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:18px;
  border:1px solid #E2E8F0;
  border-radius:18px;
  transition:.25s;
}

.task-item:hover{
  box-shadow:0 10px 25px rgba(0,0,0,.05);
}

.task-left{
  display:flex;
  gap:15px;
  align-items:center;
}

.task-check{
  width:28px;
  height:28px;
  border-radius:50%;
  border:2px solid #CBD5E1;
}

.task-check.checked{
  background:#22C55E;
  color:white;
  border:none;
  display:flex;
  align-items:center;
  justify-content:center;
}

.task-content{
  display:flex;
  flex-direction:column;
  gap:10px;
}

.task-top-row{
  display:flex;
  gap:12px;
  align-items:center;
}

.task-title.completed{
  text-decoration:line-through;
  color:#94A3B8;
}

.task-meta{
  display:flex;
  gap:20px;
  color:#64748B;
  font-size:13px;
}

.priority-badge{
  padding:6px 12px;
  border-radius:999px;
  font-size:12px;
  font-weight:700;
}

.priority-badge.high{
  background:#FEE2E2;
  color:#DC2626;
}

.priority-badge.medium{
  background:#FEF3C7;
  color:#D97706;
}

.priority-badge.low{
  background:#DCFCE7;
  color:#16A34A;
}

.complete-btn{
  border:none;
  background:#6366F1;
  color:white;
  padding:10px 18px;
  border-radius:12px;
  cursor:pointer;
}

.done-badge{
  background:#DCFCE7;
  color:#16A34A;
  padding:8px 14px;
  border-radius:999px;
  font-weight:700;
}
  .category {

 
gap: 4px;
  
  }

/* =========================
   CARDS
========================= */

.progress-card,
.priority-card,
.chart-card,
.focus-card{
  background:white;
  border-radius:28px;
  padding:24px;
  border:1px solid #E2E8F0;
}

.card-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

/* =========================
   PROGRESS
========================= */

.progress-wrapper{
  position:relative;
  width:220px;
  height:220px;
  margin:auto;
}

.progress-svg{
  width:220px;
  height:220px;
  transform:rotate(-90deg);
}

.progress-bg{
  fill:none;
  stroke:#E2E8F0;
  stroke-width:10;
}

.progress-bar{
  fill:none;
  stroke:#6366F1;
  stroke-width:10;
  stroke-linecap:round;
}

.progress-center{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  text-align:center;
}

.progress-center strong{
  font-size:36px;
}

.progress-stats{
  display:flex;
  justify-content:space-around;
  margin-top:20px;
}

/* =========================
   PRIORITIES
========================= */

.priority-list{
  display:flex;
  flex-direction:column;
  gap:14px;
}

.priority-item{
  display:flex;
  gap:12px;
}

.priority-dot{
  width:10px;
  height:10px;
  border-radius:50%;
  background:#EF4444;
  margin-top:8px;
}

/* =========================
   BOTTOM GRID
========================= */

.bottom-grid{
  display:grid;
  grid-template-columns:1fr 320px;
  gap:24px;
}

.focus-score{
  width:120px;
  height:120px;
  border-radius:50%;
  background:#EEF2FF;
  color:#6366F1;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:20px auto;
  font-size:40px;
  font-weight:900;
}

.focus-bars{
  display:flex;
  flex-direction:column;
  gap:18px;
}

.bar{
  height:10px;
  background:#E2E8F0;
  border-radius:999px;
  overflow:hidden;
}

.bar div{
  height:100%;
  background:#6366F1;
}

/* =========================
   TIP
========================= */

.tip-banner{
  background:#ECFDF5;
  border:1px solid #BBF7D0;
  border-radius:24px;
  padding:22px;
  display:flex;
  gap:16px;
}

.tip-icon{
  width:56px;
  height:56px;
  border-radius:16px;
  background:#DCFCE7;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:24px;
}

/* =========================
   RESPONSIVE
========================= */

@media(max-width:1200px){

  .content-grid{
    grid-template-columns:1fr;
  }

  .bottom-grid{
    grid-template-columns:1fr;
  }

  .side-column{
    order:-1;
  }

}

@media(max-width:900px){

  .stats-grid{
    grid-template-columns:repeat(2,1fr);
  }

}

@media(max-width:640px){

  .stats-grid{
    grid-template-columns:1fr;
  }

  .dashboard-header{
    flex-direction:column;
    height:auto;
    gap:15px;
    padding:15px;
  }

  .search-box{
    width:100%;
  }

  .task-item{
    flex-direction:column;
    align-items:flex-start;
    gap:15px;
  }

}`
          }
        </style>

      </div>
    </>
  );

}












