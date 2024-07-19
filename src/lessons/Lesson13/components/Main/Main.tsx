import { useState, createContext } from "react";
import Button from "components/Button/Button";
import Section from "lessons/Lesson13/components/Section/Section";

import { MainWrapper, MainTitle } from "./styles";
import { UserData } from "./types";

// ШАГ-1 Создаем контекст - Хранилище данных для передачи без посредников на уровни ниже
export const MainContext = createContext<UserData | undefined>({
  fullName: "",
  age: 0,
  jobPosition: "",
});

function Main() {
  const [userData, addUserData] = useState<undefined | UserData>(undefined);
  const getUserData = () => {
    // предположим что мы получили данные пользователя в константе userResponce используя GET запрос по сети
    const userResponce: UserData = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };
    addUserData(userResponce);
  };
  console.log(userData);

  return (
    //ШАГ 2 -оборочиваем хранилищем все контейнеры
    <MainContext.Provider value={userData}>
      <MainWrapper>
        <MainTitle>Main Component</MainTitle>
        <Button name="Get user Data" onClick={getUserData} />
        <Section/>
      </MainWrapper>
    </MainContext.Provider>
  );
}
export default Main;
