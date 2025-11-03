import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import LanguageSelect from "../Pages/LangS";
import HomeP from "../Pages/HomeP";
import Layout from "../Pages/Layout";

import About from "../Pages/About";
import OurW from "@/Pages/OurW";



export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* صفحة اختيار اللغة */}
      <Route path="/" element={<LanguageSelect />} />

      {/* الصفحات الرئيسية داخل الـ Layout */}
      <Route path="/Home" element={<Layout />}>
        <Route index element={<HomeP />} />
        <Route path="about" element={<About/>}/>
        <Route path="work" element={<OurW/>}/>
      </Route>
    </>
  )
);
