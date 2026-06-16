import { useEffect, useState } from "react";
import axios from "axios";
 import LoadingScreen from "../components/LoadingScreen";
import API_BASE from "../config/api";
import {
  FiFolder,
  FiBriefcase,
  FiBook,
  FiHeart,
  FiHome,
  FiTarget,
  FiStar,
  FiShoppingBag
} from "react-icons/fi";
import { categoryIcons, categoryIconOptions} from "../data/categoryIcons";
import { categoryPresets } from "../data/categoryPresets";



export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
const [selectedPreset, setSelectedPreset] = useState(null);

  const [form,setForm] = useState({
  name:"",
  color:"#6366F1",
  icon:"folder"
});



  const loadCategories = async () => {
    try {
      const res = await axios.get(
        `${API_BASE}/api/categories`,
        {
          withCredentials: true
        }
      );

      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const createCategory = async () => {
    if (!form.name.trim()) {
      return alert("أدخل اسم الفئة");
    }

    try {
      setLoading(true);

      await axios.post(
        `${API_BASE}/api/categories`,
        form,
        {
          withCredentials: true
        }
      );

      setForm({
        name: "",
        color: "#6366F1",
        icon: ""
      });

      loadCategories();

    } catch (err) {
      alert(
        err.response?.data?.error ||
        "حدث خطأ"
      );
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id) => {

    if (
      !window.confirm(
        "هل تريد حذف الفئة ؟"
      )
    ) {
      return;
    }

    try {

      await axios.delete(
        `${API_BASE}/api/categories/${id}`,
        {
          withCredentials: true
        }
      );

      loadCategories();

    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <LoadingScreen />;

return (
  <div className="categories-page">

    <div className="header">
      <div>
        <h1>الفئات</h1>
        <p>
          إدارة فئات المهام الخاصة بك
        </p>
      </div>
    </div>

    {/* إنشاء فئة جديدة */}

    <div className="create-card">

      <h2>
        إنشاء فئة جديدة
      </h2>

      {/* الفئات الجاهزة */}

      <div className="presets-grid">

        {categoryPresets.map((cat) => (

          <div
            key={cat.name}
            className={
              selectedPreset?.name === cat.name
                ? "preset-card active"
                : "preset-card"
            }
            onClick={() => {

              setSelectedPreset(cat);

              setForm({
                name: cat.name,
                color: cat.color,
                icon: cat.icon
              });

            }}
          >

            <div
              className="preset-icon"
              style={{
                background: cat.color
              }}
            >
              {categoryIcons[cat.icon]}
            </div>

            <span>
              {cat.name}
            </span>

          </div>

        ))}

      </div>

      {/* إنشاء فئة مخصصة */}

      <button
        className="custom-btn"
        onClick={() => {

          setShowCustom(!showCustom);

          setSelectedPreset(null);

          setForm({
            name: "",
            color: "#6366F1",
            icon: "folder"
          });

        }}
      >
        إنشاء فئة مخصصة
      </button>

      {/* الفورم المخصص */}

      {
        showCustom && (

          <div className="form-grid">

            <input
              placeholder="اسم الفئة"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />

            <select
              value={form.icon}
              onChange={(e) =>
                setForm({
                  ...form,
                  icon: e.target.value
                })
              }
            >
              {
                categoryIconOptions.map(icon => (

                  <option
                    key={icon.value}
                    value={icon.value}
                  >
                    {icon.label}
                  </option>

                ))
              }
            </select>

            <input
              type="color"
              value={form.color}
              onChange={(e) =>
                setForm({
                  ...form,
                  color: e.target.value
                })
              }
            />

          </div>

        )
      }

      <button
        className="create-btn"
        onClick={createCategory}
        disabled={loading}
      >
        {
          loading
            ? "جاري الإنشاء..."
            : "إنشاء الفئة"
        }
      </button>

    </div>

    {/* الفئات الموجودة */}

    <div className="categories-grid">

      {categories.map((cat) => (

        <div
          key={cat._id}
          className="category-card"
        >

          <div
            className="category-icon"
            style={{
              background: cat.color
            }}
          >
            {categoryIcons[cat.icon] || <FiFolder />}
          </div>

          <h3>
            {cat.name}
          </h3>

          {
            !cat.isDefault && (

              <button
                className="delete-btn"
                onClick={() =>
                  deleteCategory(cat._id)
                }
              >
                حذف
              </button>

            )
          }

        </div>

      ))}

    </div>

    <style>
      {
        `
        .categories-page{
  padding:24px;
}

.header{
  margin-bottom:24px;
}

.header h1{
  font-size:32px;
  color:#0F172A;
}

.header p{
  margin-top:8px;
  color:#64748B;
}

.create-card{
  background:white;
  border:1px solid #E2E8F0;
  border-radius:24px;
  padding:24px;
  margin-bottom:30px;
}

.create-card h2{
  color:#0F172A;
  margin-bottom:24px;
}

/* الفئات الجاهزة */

.presets-grid{
  display:grid;
  grid-template-columns:
  repeat(auto-fill,minmax(140px,1fr));
  gap:18px;
}

.preset-card{
  background:#FFF;
  border:1px solid #E2E8F0;
  border-radius:18px;
  padding:18px;
  cursor:pointer;
  text-align:center;
  transition:.25s;
}

.preset-card:hover{
  transform:translateY(-4px);
  border-color:#4F46E5;
}

.preset-card.active{
  background:#EEF2FF;
  border:2px solid #4F46E5;
}

.preset-icon{
  width:60px;
  height:60px;
  margin:auto;
  margin-bottom:12px;
  border-radius:18px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  font-size:28px;
}

.preset-card span{
  color:#0F172A;
  font-weight:600;
}

/* زر إنشاء فئة مخصصة */

.custom-btn{
  width:100%;
  height:50px;
  margin-top:24px;
  border:none;
  border-radius:14px;
  background:#0F172A;
  color:white;
  font-size:15px;
  font-weight:600;
  cursor:pointer;
}

/* الفورم */

.form-grid{
  display:grid;
  grid-template-columns:
  1fr 140px 80px;
  gap:14px;
  margin-top:20px;
}

.form-grid input,
.form-grid select{
  height:50px;
  border:1px solid #E2E8F0;
  border-radius:14px;
  padding:0 14px;
  outline:none;
  font-size:15px;
}

.form-grid input:focus,
.form-grid select:focus{
  border-color:#4F46E5;
}

/* زر الإنشاء */

.create-btn{
  width:100%;
  height:52px;
  margin-top:20px;
  border:none;
  border-radius:14px;
  background:#4F46E5;
  color:white;
  font-size:16px;
  font-weight:600;
  cursor:pointer;
}

.create-btn:hover{
  background:#4338CA;
}

/* الفئات الموجودة */

.categories-grid{
  display:grid;
  grid-template-columns:
  repeat(auto-fill,minmax(240px,1fr));
  gap:20px;
}

.category-card{
  background:white;
  border:1px solid #E2E8F0;
  border-radius:24px;
  padding:24px;
  text-align:center;
}

.category-icon{
  width:70px;
  height:70px;
  margin:auto;
  border-radius:20px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:32px;
  color:white;
}

.category-card h3{
  margin-top:16px;
  color:#0F172A;
}

.delete-btn{
  width:100%;
  height:46px;
  margin-top:18px;
  border:none;
  border-radius:14px;
  background:#EF4444;
  color:white;
  font-weight:600;
  cursor:pointer;
}

.delete-btn:hover{
  background:#DC2626;
}

/* Responsive */

@media(max-width:768px){

  .categories-page{
    padding:16px;
  }

  .form-grid{
    grid-template-columns:1fr;
  }

  .presets-grid{
    grid-template-columns:
    repeat(auto-fill,minmax(120px,1fr));
  }

}
        `
      }
    </style>

  </div>
);
}