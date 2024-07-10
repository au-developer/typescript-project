import "./App.css";
import GlobalStyles from "styles/GlobalStyles";
// Lessons
//import Lesson06 from "./lessons/Lesonn06/Lesson06";
// import Lesson07  from "./lessons/Lesson07/Lesson07";
import Lesson08 from "lessons/Lesson08/Lesson08"

//Homeworks
//import Homework06 from "./homeworks/Homework06/Homework06";
//import Homework07 from "homeworks/Homework07/Homework07"
//Consultations

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      {/* <Lesson06/> */}
      {/* <Homework06 /> */}
      {/* <Lesson07/> */}
      {/* <Homework07/> */}
      <Lesson08/>
    </div>
  );
}

export default App;
