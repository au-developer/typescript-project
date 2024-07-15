import { useState } from "react";

import LoginForm from "components/LoginForm/LoginForm";
import SimponsCard from "components/SimponsCard/SimponsCard";
import Input from "components/Input/Input";
import Feedback from "components/Feedback/Feedback";

import {PageWrapper} from "./styles";

function Homework07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number) => prevValue + 1);
  };

  const onDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };
  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };

  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  return (
    <PageWrapper>
      <LoginForm />
      {/* <SimponsCard
        avatar={homerSimpson.avatar}
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        job={homerSimpson.job}
        hobby={homerSimpson.hobby}
      /> */}
      <SimponsCard
       simData={homerSimpson}
      />
      <Input
        id="input-1"
        label="first name"
        placeholder="Enter your first name"
        name="First Name"
        value=""
        onChange ={()=>{}}
      />
      <Feedback
        like={like}
        dislike={dislike}
        onDislike={onDislike}
        onLike={onLike}
        resetResults={resetResults}
      />
    </PageWrapper>
  );
}

export default Homework07;
