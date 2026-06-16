

import SystemSidebar from "../components/SystemSidebar";
import { useAuth } from "../context/AuthContext";

export default function SystemLayout({ children }) {
   const { user } = useAuth();
 

  return (

    <div className="system-layout">
     {user && <SystemSidebar />}

    

      <main className="system-content">
      {children}
      </main>
      <style>{`

*{
  box-sizing:border-box;
}

.system-layout{
  min-height:100vh;
  display:flex;
  flex-direction:row-reverse;
  background:#F8FAFC;
}

.system-content{
  flex:1;
  margin-right:300px;
  padding:30px;
  min-height:100vh;
  overflow-x:hidden;
}

/* ================= Tablet ================= */

@media (max-width:1024px){

  .system-content{
    margin-right:260px;
    padding:25px;
  }

}

/* ================= Mobile ================= */

@media (max-width:768px){

  .system-layout{
    display:block;
  }

  .system-content{
    margin-right:0;
    padding:20px;
    padding-bottom:100px; /* مساحة للـ Bottom Navbar */
  }

}

/* ================= Small Mobile ================= */

@media (max-width:480px){

  .system-content{
    padding:15px;
    padding-bottom:95px;
  }

}

`}</style>

      

    </div>

  );

}
