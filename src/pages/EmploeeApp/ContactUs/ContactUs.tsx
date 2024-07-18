import Button from "components/Button/Button";
import Input from "components/Input/Input";
import ContactUsForm from "components/ContactUsForm/ContactUsForm";

// дз 11
// import { ContactUsFormContainer, Title, InputsContainer } from "./styles";

// function ContactUs(){
//     return <ContactUsFormContainer>
//         <Title></Title>
//         <InputsContainer></InputsContainer>
//     </ContactUsFormContainer>
// }
// export default ContactUs;

// урок 12
import { PageWrapper } from "./styles";

function ContactUs() {
  return (
    <PageWrapper>
      <ContactUsForm />
    </PageWrapper>
  );
}
export default ContactUs;
