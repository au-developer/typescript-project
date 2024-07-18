import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "pages/EmploeeApp/About/About";
import Home from "pages/EmploeeApp/Home/Home";
import ContactUs from "pages/EmploeeApp/ContactUs/ContactUs";
import Login from "pages/EmploeeApp/Login/Login";
import Layout from "components/Layout/Layout";
import Clients from "pages/EmploeeApp/Clients/Clients";
import Apple from "pages/EmploeeApp/Clients/Apple/Apple";
import Google from "pages/EmploeeApp/Clients/Google/Google";
import Facebook from "pages/EmploeeApp/Clients/Facebook/Facebook";
import GlobalStyles from "styles/GlobalStyles";

// Lessons
//import Lesson06 from "./lessons/Lesonn06/Lesson06";
// import Lesson07  from "./lessons/Lesson07/Lesson07";
//import Lesson08 from "lessons/Lesson08/Lesson08"
//import Lesson09 from "lessons/Lesson09/Lesson09";
//import Lesson10 from "lessons/Lesson10/Lesson10";
//import Lesson11 from "lessons/Lesson11/Lesson11";
//import Lesson12 from "lessons/Lesson11/Lesson11";
//Homeworks
//import Homework06 from "./homeworks/Homework06/Homework06";
//import Homework07 from "homeworks/Homework07/Homework07"
//import Homework08 from "homeworks/Homework08/Homework08";
//import Homework09 from "homeworks/Homework09/Homework09";
//import Homework11 from "homeworks/Homework11/Homework11"
//Consultations
//import Consultation_03 from "consultations/Consultation_03/Consultation_03";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/apple" element={<Apple />} />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/google" element={<Google />} />
          <Route path="*" element="Page not found !"/>
        </Routes>
      </Layout>
      {/* <Lesson06/> */}
      {/* <Homework06 /> */}
      {/* <Lesson07/> */}
      {/* <Homework07/> */}
      {/* <Lesson08/> */}
      {/* <Homework08/> */}
      {/* <Lesson09/> */}
      {/* <Consultation_03/> */}
      {/* <Homework09/> */}
      {/* <Lesson10/>  */}
      {/* <Lesson11/> */}
      {/* <Homework11/> */}
      {/* <Lesson12/> */}
    </BrowserRouter>
  );
}

export default App;
