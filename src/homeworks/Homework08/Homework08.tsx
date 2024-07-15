import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapperHw08, ControlSize } from "./styles";

function Homework08() {
  return (
    <PageWrapperHw08>
      <ControlSize>
        <Button
          isRed={false}
          disabled={false}
          name="Send"
          onClick={() => {
            console.log("This Button is work!!!");
          }}
        />
      </ControlSize>
      <ControlSize>
        <Button
          isRed={true}
          disabled={false}
          name="Delete"
          onClick={() => {
            console.log("This Button is work!!!");
          }}
        />
      </ControlSize>
      <ControlSize>
        <Button
          isRed={false}
          disabled={true}
          name="Disabled not red"
          onClick={() => {
            console.log("This Button is work!!!");
          }}
        />
      </ControlSize>
      <ControlSize>
        <Button
          isRed={true}
          disabled={true}
          name="Disabled is red"
          onClick={() => {
            console.log("This Button is work!!!");
          }}
        />
      </ControlSize>
      <ControlSize>
        <Input
          id="012365"
          name="User Name"
          placeholder="Put your data"
          label="First Name"
          disabled={false}
          error={"some string"}
          value=""
          onChange ={()=>{}}
        />
      </ControlSize>
      <ControlSize>
        <Input
          id="012365"
          name="User Name"
          placeholder="Put your data"
          label="First Name"
          disabled={false}
          error={undefined}
          value=""
          onChange ={()=>{}}
        />
      </ControlSize>
      <ControlSize>
        <Input
          id="012365"
          name="User Name"
          placeholder="Put your data"
          label="First Name"
          disabled={true}
          error={"some string"}
          value=""
          onChange ={()=>{}}
        />
      </ControlSize>
      <ControlSize>
        <Input
          id="012365"
          name="User Name"
          placeholder="Put your data"
          label="First Name"
          disabled={true}
         error={undefined}
         value=""
         onChange ={()=>{}}
        />
      </ControlSize>
    </PageWrapperHw08>
  );
}

export default Homework08;
