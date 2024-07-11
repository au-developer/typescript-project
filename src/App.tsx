
import GlobalStyles from "styles/GlobalStyles";
import { AppWrapper } from "appStyles";
// Lessons
//import Lesson06 from "./lessons/Lesonn06/Lesson06";
// import Lesson07  from "./lessons/Lesson07/Lesson07";
//import Lesson08 from "lessons/Lesson08/Lesson08"
import Lesson09 from "lessons/Lesson09/Lesson09";
//Homeworks
//import Homework06 from "./homeworks/Homework06/Homework06";
//import Homework07 from "homeworks/Homework07/Homework07"
// import Homework08 from "homeworks/Homework08/Homework08";
//Consultations

function App() {
  return (
    <AppWrapper>
      <GlobalStyles/>
      {/* <Lesson06/> */}
      {/* <Homework06 /> */}
      {/* <Lesson07/> */}
      {/* <Homework07/> */}
      {/* <Lesson08/> */}
      {/* <Homework08/> */}
      <Lesson09/>
    </AppWrapper>
  );
}

export default App;
