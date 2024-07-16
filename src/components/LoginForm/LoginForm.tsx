import { MouseEvent, useState, ChangeEvent } from "react";
import  {useFormik} from "formik";
import * as Yup from "yup"

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { ErrorContainer } from "components/Input/styles";
import {LoginFormContainer, Title, InputsContainer} from "./styles";
import {LOGIN_FORM_NAMES} from "./types"

function LoginForm() {

  const validationSchema = Yup.object().shape({
  [LOGIN_FORM_NAMES.EMAIL]:Yup.string().required("This Email field is required "),
  // [LOGIN_FORM_NAMES.PASSWORD]:Yup.string().required("This Password field is required ")
  [LOGIN_FORM_NAMES.PASSWORD]:Yup.string().required("This Password field is required ").uppercase("All symbol should be Big").min(5,"Min password should contain 5 symbol").max(15, "Max password should contain 5 symbol")
  })

  const formik = useFormik({
  initialValues: {
   [LOGIN_FORM_NAMES.EMAIL]: "",
   [LOGIN_FORM_NAMES.PASSWORD]: ""
  }, validationSchema: validationSchema,
 onSubmit:(values, helpers)=>{ // логика сбора данных из формы , создания карточки, отправки на сервер и тд..
console.log("Submit Works!!!")
console.log(values); // обьект который хранит хначения которые были введены в елементы форми в момент нажатия на кнопку типом сабмит
console.log(helpers); // вспомогательная функция по контролю формы

 } }
  ); // нужен аргумент обьект описывающий состояние формика


  console.log(formik.errors);

// const [email, setEmailValue] = useState<string>("");
// const [password, setPasswordValue] = useState<string>("");

// const onEmailChange = (event:ChangeEvent<HTMLInputElement>)=>{
//   setEmailValue(event.target.value);
// }

// const onPasswordChange = (event:ChangeEvent<HTMLInputElement>)=>{
//   setPasswordValue(event.target.value);
// }

  const login = (event: MouseEvent): void => {
    // event.preventDefault();
    // console.log("Data to send on server", {email: email, password:password});
  };

  return (
    <LoginFormContainer onSubmit={ formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_NAMES.EMAIL}
          type="email"
          placeholder="Enter your email"
          label="Email"
          value={formik.values.email}
          onChange ={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_NAMES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values.password}
          onChange ={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
      </InputsContainer>
      <Button  name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;
// lowercase()
// uppercase()