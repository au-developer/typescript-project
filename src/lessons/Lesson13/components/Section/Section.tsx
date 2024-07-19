import Content from "lessons/Lesson13/components/Content/Content";

import { SectionWrapper, SectionTitle } from "./styles";

// interface SectionProps{
//   fullName:string | undefined,
//   age: number | undefined
//   jobPosition:string | undefined
// }

function Section(){
  return<SectionWrapper>
    <SectionTitle>Section Component</SectionTitle>
    <Content />
  </SectionWrapper>  
}
export default Section;