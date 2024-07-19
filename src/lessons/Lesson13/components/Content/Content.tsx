// Шаг 3 - импорты
import { useContext } from "react";
import {MainContext} from "lessons/Lesson13/components/Main/Main"
import {UserData} from "lessons/Lesson13/components/Main/types"
import { ContentWrapper, ContentTitle, ContentInfo} from "./styles";
// interface ContentProps{
//   fullName:string | undefined,
//   age: number | undefined
//   jobPosition:string | undefined
// }


function Content(){
  // Шаг 4 - получение доступа к данным из Мейн 

  const userData = useContext<UserData | undefined>(MainContext);

  return<ContentWrapper>
    <ContentTitle>Content Component</ContentTitle>
    <ContentInfo>{userData?.fullName}</ContentInfo>
    <ContentInfo>{userData?.age}</ContentInfo> 
    <ContentInfo>{userData?.jobPosition}</ContentInfo>
  </ContentWrapper>  
}
export default Content;