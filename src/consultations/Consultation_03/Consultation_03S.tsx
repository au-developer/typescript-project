import Button from "components/Button/Button";
import { useState } from "react";
import { Checkbox } from '@mui/material';


import { PageWrapper, ButtonControl } from "./styles";
import Modal2 from "components/Modal2/Modal2";

function Consultation_03S() {
const [value, setValue] = useState<boolean>(false);
  
const openModal = ()=>{
setValue(true);
  }

  const closeModal = ()=>{
setValue(false);
  }


  return (
    <PageWrapper>
      <ButtonControl>
      <Button name = "My Button"
  onClick={openModal} />
  </ButtonControl>
<Modal2 open={value} onClose={closeModal} ><p>Here Content</p></Modal2>
     <Checkbox></Checkbox>
    </PageWrapper>
  );
}

export default Consultation_03S;