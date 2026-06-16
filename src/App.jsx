import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import SystemLayout from "./layouts/SystemLayout";
import { useAuth } from "./context/AuthContext";
import Auth from "./pages/Auth";
import Home from "./pages/Home";





import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

import { Toaster } from "react-hot-toast";

import Verified from "./pages/Verified";
import ForgotPassword from "./pages/ForgotPassword";


 




import DashboardHome from "./pages/DashboardHome";
import Categories from "./pages/Categories";


import JobLeads from "./pages/JobLeads";



export default function App() {
   const { user } = useAuth();
  return (
    <BrowserRouter>
    {!user && <Navbar />}
         
    
        <Routes>
              {/*<Route path="/" element={<Home />} />*/}
          {/* 🔒 صفحات محمية */}
        <Route path="/" element={
            user ? (
              <SystemLayout>
                <DashboardHome />
              </SystemLayout>
            ) : (
              <Home /> // أو Login
            )
          }
        />

          <Route path="/auth" element={ <Auth  />} />
             <Route
  path="/verify"
  element={<Verified/>}
/>

<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>
   


        
      
        


        <Route
         path="/settings"
         element={
           user ? (
             <SystemLayout>
               <Settings />
             </SystemLayout>
           ) : (
             <Home />
           )
         }
       />
          
         
           

         
       <Route
         path="/jobLeads"
         element={
           user ? (
             <SystemLayout>
               <JobLeads />
             </SystemLayout>
           ) : (
             <Home />
           )
         }
       />
       <Route
         path="/"
         element={
           user ? (
             <SystemLayout>
               <DashboardHome />
             </SystemLayout>
           ) : (
             <Home />
           )
         }
       />
       <Route
         path="/Categories"
         element={
           user ? (
             <SystemLayout>
               <Categories />
             </SystemLayout>
           ) : (
             <Home />
           )
         }
       />
           
            <Route path="/" element={ user ? ( <DashboardHome />  ) : (  <Home />  ) }/>
           
      
       
        



          
         
<Route path="*" element={<NotFound />} />
        
         
         
         
          


        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
    
    </BrowserRouter>
  );
}

/*
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { useAuth } from "./context/AuthContext";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import Profile from "./pages/Profile";
import Navbar from './components/Navbar';
import ThemesPage from "./pages/ThemesPage";
import Analytics from "./pages/Analytics";

import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

import { Toaster } from "react-hot-toast";

import Verified from "./pages/Verified";
import ForgotPassword from "./pages/ForgotPassword";

import AddProduct from "./pages/AddProduct";

import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";


export default function App() {
   const { user } = useAuth();
  return (
    <BrowserRouter>
         {!user && <Navbar />}
    
        <Routes>

        
           <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/" />} />
         

         

          
        <Route path="/" element={
            user ? (
              <Layout>
                <Dashboard />
              </Layout>
            ) : (
              <Home /> // أو Login
            )
          }
        />
        <Route path="/themes" element={
            user ? (
              <Layout>
                <ThemesPage />
              </Layout>
            ) : (
              <Home /> // أو Login
            )
          }
        />
        <Route
  path="/verify"
  element={<Verified/>}
/>

<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>


        <Route
  path="/analytics"
  element={
    user ? (
      <Layout>
        <Analytics />
      </Layout>
    ) : (
      <Home />
    )
  }
/>

 <Route
  path="/addProduct"
  element={
    user ? (
      <Layout>
        <AddProduct />
      </Layout>
    ) : (
      <Home />
    )
  }
/>
 <Route
  path="/products/edit/:id"
  element={
    user ? (
      <Layout>
        <AddProduct />
      </Layout>
    ) : (
      <Home />
    )
  }
/>






 <Route
  path="/settings"
  element={
    user ? (
      <Layout>
        <Settings />
      </Layout>
    ) : (
      <Home />
    )
  }
/>


        
          
          <Route path="/u/:username" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="//product/:id" element={<ProductDetails />} />
         
         
          


        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
    
    </BrowserRouter>
  );
}
*/
