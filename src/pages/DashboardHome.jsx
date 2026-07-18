
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
  FiShoppingBag,
  FiEdit3,
  FiTrash2,
  FiPause,
  FiPlay,
  FiCheck,
  FiMoreVertical
} from "react-icons/fi";
/*
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
 */



import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip
} from "recharts";
 

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
  const [search, setSearch] = useState("");

  const [editing,setEditing]=useState(null);

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

const filteredTasks = tasks

.filter(task => {

    if (filter === "completed")
        return task.completed;

    if (filter === "pending")
        return !task.completed;

    return true;

})

.filter(task => {

    const q = search.toLowerCase().trim();

    if (!q) return true;

    const priorityMap = {
        "عالية": "high",
        "متوسطة": "medium",
        "منخفضة": "low"
    };

    const priority = priorityMap[q];

    return (

        task.title?.toLowerCase().includes(q) ||

        task.categoryName?.toLowerCase().includes(q) ||

        task.description?.toLowerCase().includes(q) ||

        task.targetUnit?.toLowerCase().includes(q) ||

        task.preferredTime?.toLowerCase().includes(q) ||

        task.priority?.toLowerCase().includes(q) ||

        (priority && task.priority === priority)

    );

});
 
 
 


 



  const deleteTask = async (id) => {

  if (!window.confirm("هل تريد حذف المهمة؟")) return;

  try {

    await axios.delete(`${API_BASE}/api/tasks/${id}`, {
      withCredentials: true
    });

    setTasks(tasks.filter(task => task._id !== id));

  } catch (err) {
    alert("حدث خطأ");
  }

};

const toggleTask = async (id) => {

  try {

    const { data } = await axios.patch(

      `${API_BASE}/api/tasks/${id}/toggle`,

      {},

      {
        withCredentials: true
      }

    );

    setTasks(tasks.map(t =>
      t._id === id ? data : t
    ));

  } catch (err) {

    console.log(err);

  }

};

  

  if (loading) return <LoadingScreen />;

  return(

    <>
    <AddTaskModal
  open={openModal}
  editing={editing}
  onClose={()=>{
    setOpenModal(false);
    setEditing(null);
  }}
  onCreated={loadDashboard}
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
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
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
      ? "task-item completed"
      : "task-item"
  }
>

  {/* LEFT / MAIN CONTENT */}
  <div className="task-main">

    {/* CHECK */}
    <button
      className={
        task.completed
          ? "task-check checked"
          : "task-check"
      }
      onClick={() => {
        if (!task.completed) {
          completeTask(task._id);
        }
      }}
      title={
        task.completed
          ? "المهمة مكتملة"
          : "تحديد كمكتملة"
      }
    >
      {task.completed && <FiCheck />}
    </button>


    {/* TASK INFORMATION */}
    <div className="task-content">

      {/* TITLE ROW */}

      <div className="task-top-row">

        <h3
          className={
            task.completed
              ? "task-title completed"
              : "task-title"
          }
        >
          {task.title}
        </h3>

        <span
          className={`priority-badge ${getPriorityColor(
            task.priority
          )}`}
        >
          {getPriorityText(task.priority)}
        </span>

      </div>


      {/* META */}

      <div className="task-meta">

        {/* CATEGORY */}

        <span
          className="task-meta-item category"
          style={{
            color: task.categoryColor
          }}
        >

          <span className="meta-icon">
            {categoryIcons[task.categoryIcon]}
          </span>

          {task.categoryName}

        </span>


        {/* TIME */}

        {task.preferredTime && (

          <span className="task-meta-item">

            <FiClock />

            {task.preferredTime}

          </span>

        )}


        {/* PROGRESS */}

        <span className="task-meta-item">

          <FiTarget />

          {task.progressValue}/{task.targetValue}

          {task.targetUnit && (
            <small>
              {task.targetUnit}
            </small>
          )}

        </span>

      </div>


      {/* PROGRESS BAR */}

      {!task.completed && (

        <div className="task-progress">

          <div className="task-progress-info">

            <span>
              التقدم
            </span>

            <strong>

              {task.targetValue > 0
                ? Math.min(
                    Math.round(
                      (task.progressValue /
                        task.targetValue) *
                        100
                    ),
                    100
                  )
                : 0
              }%

            </strong>

          </div>

          <div className="task-progress-bar">

            <div
              style={{
                width: `${
                  task.targetValue > 0
                    ? Math.min(
                        (task.progressValue /
                          task.targetValue) *
                          100,
                        100
                      )
                    : 0
                }%`
              }}
            />

          </div>

        </div>

      )}

    </div>

  </div>


  {/* ACTIONS */}

  <div className="task-actions">

    {/* COMPLETE */}

    {!task.completed && (

      <button
        className="complete-btn"
        onClick={() =>
          completeTask(task._id)
        }
        title="تم الإنجاز"
      >
        <FiCheck />

        <span>
          تم الإنجاز
        </span>

      </button>

    )}


    {/* COMPLETED */}

    {task.completed && (

      <span className="done-badge">

        <FiCheck />

        مكتملة

      </span>

    )}


    {/* EDIT */}

    <button
      className="task-action-btn edit"
      onClick={() => {

        setEditing({
          ...task,
          _id: task.task
        });

        setOpenModal(true);

      }}
      title="تعديل المهمة"
    >

      <FiEdit3 />

    </button>


    {/* TOGGLE */}

    <button
      className="task-action-btn toggle"
      onClick={() =>
        toggleTask(task._id)
      }
      title={
        task.active
          ? "إيقاف المهمة"
          : "تشغيل المهمة"
      }
    >

      {task.active
        ? <FiPause />
        : <FiPlay />
      }

    </button>


    {/* DELETE */}

    <button
      className="task-action-btn delete"
      onClick={() =>
        deleteTask(task._id)
      }
      title="حذف المهمة"
    >

      <FiTrash2 />

    </button>

  </div>

</div>

 
                   
                      /**<div
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

                      <button
  className="delete-btn"
  onClick={() => deleteTask(task._id)}
>
🗑 حذف
</button>
<button
onClick={() => toggleTask(task._id)}
>
{task.active ? "إيقاف" : "تشغيل"}
</button>

<button
onClick={()=>{


setEditing({
  ...task,
  _id: task.task
});
 

setOpenModal(true);

}}
>

✏️

</button>

                      


                    </div> */
                   
  

                    

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





  .category {

 
gap: 4px;
  
  }






























/* =========================================
   TASK ITEM
========================================= */

.task-item{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:24px;

  padding:20px;

  background:#FFFFFF;

  border:1px solid #E2E8F0;

  border-radius:20px;

  transition:
    transform .25s ease,
    box-shadow .25s ease,
    border-color .25s ease;

  overflow:hidden;
}

.task-item::before{
  content:"";

  position:absolute;

  right:0;
  top:0;
  bottom:0;

  width:4px;

  background:#6366F1;

  opacity:0;

  transition:.25s;
}

.task-item:hover{

  transform:translateY(-2px);

  border-color:#CBD5E1;

  box-shadow:
    0 12px 30px
    rgba(15,23,42,.07);

}

.task-item:hover::before{
  opacity:1;
}


/* =========================================
   COMPLETED TASK
========================================= */

.task-item.completed{
  background:#FAFAFA;
}

.task-item.completed::before{
  background:#22C55E;
  opacity:1;
}


/* =========================================
   MAIN
========================================= */

.task-main{

  display:flex;

  align-items:flex-start;

  gap:15px;

  flex:1;

  min-width:0;

}


/* =========================================
   CHECK BUTTON
========================================= */

.task-check{

  flex-shrink:0;

  width:34px;
  height:34px;

  border-radius:50%;

  border:2px solid #CBD5E1;

  background:#FFFFFF;

  display:flex;

  align-items:center;
  justify-content:center;

  color:#FFFFFF;

  cursor:pointer;

  transition:.25s;

  padding:0;

}

.task-check:hover{

  border-color:#6366F1;

  background:#EEF2FF;

  transform:scale(1.05);

}

.task-check.checked{

  background:#22C55E;

  border-color:#22C55E;

  box-shadow:
    0 5px 15px
    rgba(34,197,94,.25);

}


/* =========================================
   CONTENT
========================================= */

.task-content{

  display:flex;

  flex-direction:column;

  gap:10px;

  min-width:0;

  flex:1;

}


/* =========================================
   TITLE
========================================= */

.task-top-row{

  display:flex;

  align-items:center;

  gap:10px;

  flex-wrap:wrap;

}

.task-title{

  margin:0;

  font-size:16px;

  font-weight:800;

  color:#0F172A;

  white-space:nowrap;

  overflow:hidden;

  text-overflow:ellipsis;

  max-width:100%;

}

.task-title.completed{

  text-decoration:line-through;

  color:#94A3B8;

}


/* =========================================
   PRIORITY
========================================= */

.priority-badge{

  display:inline-flex;

  align-items:center;

  justify-content:center;

  padding:5px 10px;

  border-radius:999px;

  font-size:11px;

  font-weight:800;

  white-space:nowrap;

}

.priority-badge.high{

  background:#FEF2F2;

  color:#DC2626;

  border:1px solid #FECACA;

}

.priority-badge.medium{

  background:#FFFBEB;

  color:#D97706;

  border:1px solid #FDE68A;

}

.priority-badge.low{

  background:#F0FDF4;

  color:#16A34A;

  border:1px solid #BBF7D0;

}


/* =========================================
   META
========================================= */

.task-meta{

  display:flex;

  align-items:center;

  flex-wrap:wrap;

  gap:8px;

}

.task-meta-item{

  display:inline-flex;

  align-items:center;

  gap:6px;

  padding:5px 9px;

  background:#F8FAFC;

  border:1px solid #E2E8F0;

  border-radius:8px;

  color:#64748B;

  font-size:12px;

  font-weight:600;

}

.task-meta-item svg{

  font-size:14px;

  flex-shrink:0;

}

.task-meta-item small{

  font-size:11px;

  color:#94A3B8;

}

.meta-icon{

  display:flex;

  align-items:center;

  font-size:15px;

}


/* =========================================
   PROGRESS
========================================= */

.task-progress{

  width:100%;

  max-width:400px;

  margin-top:2px;

}

.task-progress-info{

  display:flex;

  justify-content:space-between;

  align-items:center;

  margin-bottom:5px;

  font-size:11px;

  color:#94A3B8;

}

.task-progress-info strong{

  color:#6366F1;

  font-size:11px;

}

.task-progress-bar{

  width:100%;

  height:5px;

  background:#E2E8F0;

  border-radius:999px;

  overflow:hidden;

}

.task-progress-bar div{

  height:100%;

  background:#6366F1;

  border-radius:999px;

  transition:width .4s ease;

}


/* =========================================
   ACTIONS
========================================= */

.task-actions{

  display:flex;

  align-items:center;

  gap:8px;

  flex-shrink:0;

}


/* =========================================
   COMPLETE BUTTON
========================================= */

.complete-btn{

  height:40px;

  display:flex;

  align-items:center;

  justify-content:center;

  gap:7px;

  padding:0 15px;

  border:none;

  border-radius:11px;

  background:#6366F1;

  color:#FFFFFF;

  font-size:13px;

  font-weight:700;

  cursor:pointer;

  transition:.25s;

}

.complete-btn:hover{

  background:#4F46E5;

  transform:translateY(-1px);

  box-shadow:
    0 7px 18px
    rgba(99,102,241,.25);

}

.complete-btn svg{

  font-size:16px;

}


/* =========================================
   DONE
========================================= */

.done-badge{

  height:38px;

  display:flex;

  align-items:center;

  gap:6px;

  padding:0 12px;

  border-radius:10px;

  background:#F0FDF4;

  border:1px solid #BBF7D0;

  color:#16A34A;

  font-size:12px;

  font-weight:800;

}

.done-badge svg{

  font-size:15px;

}


/* =========================================
   ICON ACTION BUTTONS
========================================= */

.task-action-btn{

  width:38px;

  height:38px;

  border:none;

  border-radius:10px;

  display:flex;

  align-items:center;

  justify-content:center;

  cursor:pointer;

  transition:.25s;

  font-size:16px;

}


/* EDIT */

.task-action-btn.edit{

  background:#EEF2FF;

  color:#6366F1;

}

.task-action-btn.edit:hover{

  background:#6366F1;

  color:#FFFFFF;

  transform:translateY(-2px);

}


/* TOGGLE */

.task-action-btn.toggle{

  background:#F1F5F9;

  color:#475569;

}

.task-action-btn.toggle:hover{

  background:#E2E8F0;

  color:#0F172A;

  transform:translateY(-2px);

}


/* DELETE */

.task-action-btn.delete{

  background:#FEF2F2;

  color:#EF4444;

}

.task-action-btn.delete:hover{

  background:#EF4444;

  color:#FFFFFF;

  transform:translateY(-2px);

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












