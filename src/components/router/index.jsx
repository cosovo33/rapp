import react from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from "../../App";
import AdminPage from "../admin";
import ContactPage from "../contact";
import AboutPage from "../about";
import CategoriesPage from "../categories";
import Register from "../registration";

const Rout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route exact path="admin" element={<AdminPage/>} />
        <Route path="contact" element={<ContactPage/>} />
        <Route path="categories" element={<CategoriesPage/>} />
        <Route path="register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rout;
