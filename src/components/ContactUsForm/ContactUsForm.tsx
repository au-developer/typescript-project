import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { CONTACT_US_FORM_NAMES } from "./types";
import { ContactUsFormContainer, Title, InputsContainer } from "./styles";

function ContactUsForm() {
  const validationSchema = Yup.object().shape({
    [CONTACT_US_FORM_NAMES.FULL_NAME]: Yup.string()
      .required("Fullname field is required")
      .min(3, "Schould be min 3 symbol")
      .max(50, "Schould be max 50 symbols"),
    [CONTACT_US_FORM_NAMES.PHONE]: Yup.string()
      .required("Phone field is required")
      .min(4, "Schould be min 3 symbol")
      .max(20, "Schould be max 50 symbols"),
    [CONTACT_US_FORM_NAMES.EMAIL]: Yup.string()
      .min(6, "Schould be min 3 symbol")
      .max(60, "Schould be max 50 symbols"),
  });

  const formik = useFormik({
    // name у элементов формы должен совпадать с ключом обьекта initialValues
    initialValues: {
      [CONTACT_US_FORM_NAMES.FULL_NAME]: "",
      [CONTACT_US_FORM_NAMES.PHONE]: "",
      [CONTACT_US_FORM_NAMES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <ContactUsFormContainer onSubmit={formik.handleSubmit}>
      <Title>ContactUs</Title>
      <InputsContainer>
        <Input
          id="contactUs-fullname"
          label="Full name"
          placeholder="Your full name"
          name={CONTACT_US_FORM_NAMES.FULL_NAME}
          onChange={formik.handleChange}
          value={formik.values[CONTACT_US_FORM_NAMES.FULL_NAME]}
          error={formik.errors[CONTACT_US_FORM_NAMES.FULL_NAME]}
        />
        <Input
          id="contactUs-phone"
          label="Phone"
          placeholder="Your phone number"
          name={CONTACT_US_FORM_NAMES.PHONE}
          onChange={formik.handleChange}
          value={formik.values[CONTACT_US_FORM_NAMES.PHONE]}
          error={formik.errors[CONTACT_US_FORM_NAMES.PHONE]}
        />
        <Input
          id="contactUs-email"
          label="Email"
          placeholder="Your email"
          name={CONTACT_US_FORM_NAMES.EMAIL}
          onChange={formik.handleChange}
          value={formik.values[CONTACT_US_FORM_NAMES.EMAIL]}
          error={formik.errors[CONTACT_US_FORM_NAMES.EMAIL]}
        />
      </InputsContainer>
      <Button
        disabled={formik.isSubmitting}
        name="Send Request"
        type="submit"
      />
    </ContactUsFormContainer>
  );
}
export default ContactUsForm;
