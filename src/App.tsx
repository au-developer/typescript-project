import LayoutEmployee from "pages/EmployeeProjectApp/components/LayoutEmployee/LayoutEmployee";
import {APP_ROUTES} from "pages/EmployeeProjectApp/components/LayoutEmployee/types"
import Employees from "pages/EmployeeProjectApp/components/Employees/Employees";
import CreateEmployee from "pages/EmployeeProjectApp/components/CreateEmployee/CreateEmployee";

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
//import { APP_ROUTES } from "constants/routes";
// Lessons
//import Lesson06 from "./lessons/Lesonn06/Lesson06";
// import Lesson07  from "./lessons/Lesson07/Lesson07";
//import Lesson08 from "lessons/Lesson08/Lesson08"
//import Lesson09 from "lessons/Lesson09/Lesson09";
//import Lesson10 from "lessons/Lesson10/Lesson10";
//import Lesson11 from "lessons/Lesson11/Lesson11";
//import Lesson12 from "lessons/Lesson11/Lesson11";
//import Lesson13 from "lessons/Lesson13/Lesson13";
//Homeworks
//import Homework06 from "./homeworks/Homework06/Homework06";
//import Homework07 from "homeworks/Homework07/Homework07"
//import Homework08 from "homeworks/Homework08/Homework08";
//import Homework09 from "homeworks/Homework09/Homework09";
//import Homework11 from "homeworks/Homework11/Homework11"
// import Homework13 from "homeworks/Homework13/Homework13";
//Consultations
//import Consultation_03 from "consultations/Consultation_03/Consultation_03";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      {/* <Layout>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.ABOUT} element={<About />} />
          <Route path={APP_ROUTES.COUNTACT_US} element={<ContactUs />} />
          <Route path={APP_ROUTES.LOGIN} element={<Login />} />
          <Route path={APP_ROUTES.CLIENTS} element={<Clients />} />
          <Route path={APP_ROUTES.APPLE} element={<Apple />} />
          <Route path={APP_ROUTES.FACEBOOK} element={<Facebook />} />
          <Route path={APP_ROUTES.GOOGLE} element={<Google />} />
          <Route path={APP_ROUTES.NOT_FOUND} element="Page not found !"/>
        </Routes>
      </Layout> */}
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
      {/* <Lesson13/> */}
      {/* <Homework13 /> */}
      <LayoutEmployee>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<CreateEmployee />} />
          <Route path={APP_ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
          <Route path={APP_ROUTES.EMPLOYEE} element={<Employees />} />
          <Route path="*" element="Page Not Found!" />
        </Routes>
      </LayoutEmployee>
    </BrowserRouter>
  );
}

export default App;
