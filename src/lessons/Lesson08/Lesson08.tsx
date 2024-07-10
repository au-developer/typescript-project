import {Lesson08Wrapper, ButtonControl, Box1, Box2, Box3} from "./style"
import Button from "components/Button/Button";


function Lesson08() {
  let isBlack = true;

  return (
    <Lesson08Wrapper>
    {/* style={{ color: isBlack ? "black" : "red", backgroundColor: "green" }} */}
      <ButtonControl><Button isRed = {false} disabled={true} name="Send" onClick={()=>{
        console.log("This Button is work!!!")
      }}/></ButtonControl>
      <Box1>Box 1</Box1>
      <Box2>Box 2</Box2>
      <Box3>Box 3</Box3>
    </Lesson08Wrapper>
    
  );
}

export default Lesson08;
