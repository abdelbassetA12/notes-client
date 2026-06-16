import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "../../config/api";

export default function AddTaskModal({
  open,
  onClose,
  onCreated
}) {

  const [categories,setCategories] =
  useState([]);

  const [loading,setLoading] =
  useState(false);

  const [form,setForm] =
  useState({

    category:"",

    title:"",

    description:"",

    priority:"medium",

    frequencyType:"daily",

    everyXDays:2,

    weekDays:[],

    monthDay:1,

    targetValue:1,

    targetUnit:"minutes",

    weeklyTarget:1,

    preferredTime:""

  });

  useEffect(()=>{

    if(open){

      loadCategories();

    }

  },[open]);

  const loadCategories = async()=>{

    try{

      const res =
      await axios.get(
        `${API_BASE}/api/categories`,
        {
          withCredentials:true
        }
      );

      setCategories(res.data);

    }
    catch(err){

      console.log(err);

    }

  };

  const toggleDay = (day)=>{

    if(
      form.weekDays.includes(day)
    ){

      setForm({
        ...form,
        weekDays:
        form.weekDays.filter(
          d=>d!==day
        )
      });

    }
    else{

      setForm({
        ...form,
        weekDays:[
          ...form.weekDays,
          day
        ]
      });

    }

  };

  const createTask = async()=>{

    try{

      setLoading(true);

      await axios.post(
        `${API_BASE}/api/tasks`,
        form,
        {
          withCredentials:true
        }
      );

      onCreated?.();

      onClose();

    }
    catch(err){

      alert(
        err.response?.data?.error ||
        "Error"
      );

    }
    finally{

      setLoading(false);

    }

  };

  if(!open) return null;

  return(

    <div className="task-modal-overlay">

      <div className="task-modal">

        <div className="modal-header">

          <h2>
            إضافة مهمة جديدة
          </h2>

          <button
          onClick={onClose}
          >
            ✕
          </button>

        </div>

        <div className="modal-body">

          {/* TITLE */}

          <div className="field">

            <label>
              اسم المهمة
            </label>

            <input
              value={form.title}
              onChange={(e)=>
                setForm({
                  ...form,
                  title:e.target.value
                })
              }
            />

          </div>

          {/* CATEGORY */}

          <div className="field">

            <label>
              الفئة
            </label>

            <select
              value={form.category}
              onChange={(e)=>
                setForm({
                  ...form,
                  category:e.target.value
                })
              }
            >

              <option value="">
                اختر فئة
              </option>

              {
                categories.map(cat=>(
                  <option
                    key={cat._id}
                    value={cat._id}
                  >
                    {cat.name}
                  </option>
                ))
              }

            </select>

          </div>

          {/* PRIORITY */}

          <div className="field">

            <label>
              الأولوية
            </label>

            <select
              value={form.priority}
              onChange={(e)=>
                setForm({
                  ...form,
                  priority:e.target.value
                })
              }
            >

              <option value="low">
                منخفضة
              </option>

              <option value="medium">
                متوسطة
              </option>

              <option value="high">
                عالية
              </option>

            </select>

          </div>

          {/* FREQUENCY */}

          <div className="field">

            <label>
              التكرار
            </label>

            <select
              value={form.frequencyType}
              onChange={(e)=>
                setForm({
                  ...form,
                  frequencyType:e.target.value
                })
              }
            >

              <option value="daily">
                يومي
              </option>

              <option value="weekly">
                أسبوعي
              </option>

              <option value="every_x_days">
                كل X أيام
              </option>

              <option value="specific_days">
                أيام محددة
              </option>

              <option value="monthly">
                شهري
              </option>

            </select>

          </div>

          {
            form.frequencyType ===
            "every_x_days" && (

              <div className="field">

                <label>
                  كل كم يوم
                </label>

                <input
                  type="number"
                  value={
                    form.everyXDays
                  }
                  onChange={(e)=>
                    setForm({
                      ...form,
                      everyXDays:
                      Number(
                        e.target.value
                      )
                    })
                  }
                />

              </div>

            )
          }

          {
            form.frequencyType ===
            "specific_days" && (

              <div className="week-days">

                {
                  [
                    "أحد",
                    "إثنين",
                    "ثلاثاء",
                    "أربعاء",
                    "خميس",
                    "جمعة",
                    "سبت"
                  ].map(
                    (label,index)=>(
                    <button
                      key={index}
                      className={
                        form.weekDays.includes(index)
                        ? "active"
                        : ""
                      }
                      onClick={()=>
                        toggleDay(index)
                      }
                    >
                      {label}
                    </button>
                  ))
                }

              </div>

            )
          }

          {
            form.frequencyType ===
            "monthly" && (

              <div className="field">

                <label>
                  يوم الشهر
                </label>

                <input
                  type="number"
                  min="1"
                  max="31"
                  value={form.monthDay}
                  onChange={(e)=>
                    setForm({
                      ...form,
                      monthDay:
                      Number(
                        e.target.value
                      )
                    })
                  }
                />

              </div>

            )
          }

          {/* TARGET */}

          <div className="target-grid">

            <div>

              <label>
                الهدف
              </label>

              <input
                type="number"
                value={
                  form.targetValue
                }
                onChange={(e)=>
                  setForm({
                    ...form,
                    targetValue:
                    Number(
                      e.target.value
                    )
                  })
                }
              />

            </div>

            <div>

              <label>
                الوحدة
              </label>

              <select
                value={
                  form.targetUnit
                }
                onChange={(e)=>
                  setForm({
                    ...form,
                    targetUnit:
                    e.target.value
                  })
                }
              >

                <option value="minutes">
                  دقيقة
                </option>

                <option value="hours">
                  ساعة
                </option>

                <option value="pages">
                  صفحة
                </option>

                <option value="times">
                  مرة
                </option>

                <option value="steps">
                  خطوة
                </option>

              </select>

            </div>

          </div>

          {/* TIME */}

          <div className="field">

            <label>
              الوقت المفضل
            </label>

            <input
              type="time"
              value={
                form.preferredTime
              }
              onChange={(e)=>
                setForm({
                  ...form,
                  preferredTime:
                  e.target.value
                })
              }
            />

          </div>

          {/* DESCRIPTION */}

          <div className="field">

            <label>
              الوصف
            </label>

            <textarea
              rows="4"
              value={
                form.description
              }
              onChange={(e)=>
                setForm({
                  ...form,
                  description:
                  e.target.value
                })
              }
            />

          </div>

        </div>

        <div className="modal-footer">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            إلغاء
          </button>

          <button
            className="save-btn"
            onClick={createTask}
            disabled={loading}
          >
            {
              loading
              ? "جاري الإنشاء..."
              : "إنشاء المهمة"
            }
          </button>

        </div>

      </div>
      <style>
        {
          `
          .task-modal-overlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.45);
  backdrop-filter:blur(6px);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:9999;
}

.task-modal{
  width:900px;
  max-width:95%;
  max-height:90vh;
  overflow-y:auto;

  background:white;
  border-radius:28px;

  box-shadow:
  0 20px 60px rgba(0,0,0,.15);

  direction:rtl;
}

.modal-header{
  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:25px 30px;

  border-bottom:1px solid #eee;
}

.modal-header h2{
  margin:0;
  font-size:24px;
  font-weight:700;
}

.modal-header button{
  width:40px;
  height:40px;
  border:none;
  border-radius:12px;
  background:#f5f7ff;
  cursor:pointer;
  font-size:18px;
}

.modal-body{
  padding:30px;
}

.field{
  margin-bottom:22px;
}

.field label{
  display:block;
  margin-bottom:8px;
  font-weight:600;
  color:#444;
}

.field input,
.field select,
.field textarea{

  width:100%;

  border:none;

  outline:none;

  background:#f6f8ff;

  border-radius:16px;

  padding:14px 18px;

  font-size:15px;

  transition:.2s;
}

.field input:focus,
.field select:focus,
.field textarea:focus{

  background:white;

  box-shadow:
  0 0 0 3px rgba(108,99,255,.15);

}

.target-grid{

  display:grid;

  grid-template-columns:
  1fr 1fr;

  gap:20px;

  margin-bottom:20px;

}

.target-grid label{
  display:block;
  margin-bottom:8px;
  font-weight:600;
}

.target-grid input,
.target-grid select{

  width:100%;

  border:none;

  background:#f6f8ff;

  border-radius:16px;

  padding:14px;

}

.week-days{

  display:grid;

  grid-template-columns:
  repeat(7,1fr);

  gap:10px;

  margin-bottom:25px;

}

.week-days button{

  height:48px;

  border:none;

  border-radius:14px;

  background:#f6f8ff;

  cursor:pointer;

  transition:.2s;

  font-weight:600;
}

.week-days button.active{

  background:#6c63ff;

  color:white;

}

.modal-footer{

  display:flex;

  justify-content:flex-end;

  gap:12px;

  padding:25px 30px;

  border-top:1px solid #eee;
}

.cancel-btn{

  border:none;

  height:48px;

  padding:0 25px;

  border-radius:14px;

  background:#f3f4f6;

  cursor:pointer;

  font-weight:600;
}

.save-btn{

  border:none;

  height:48px;

  padding:0 25px;

  border-radius:14px;

  background:#6c63ff;

  color:white;

  cursor:pointer;

  font-weight:600;

  transition:.2s;
}

.save-btn:hover{

  transform:translateY(-2px);

}

.save-btn:disabled{

  opacity:.6;

  cursor:not-allowed;

}

@media(max-width:768px){

  .task-modal{

    width:100%;
    height:100%;
    border-radius:0;

  }

  .target-grid{

    grid-template-columns:1fr;

  }

  .week-days{

    grid-template-columns:
    repeat(4,1fr);

  }

}
          `
        }
      </style>

    </div>

  );

}
























































