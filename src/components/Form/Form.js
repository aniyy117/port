import React from "react";
import {
  Container,
  FormWrapper,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormInputArea,
  FormButton,
} from "./FormElements";

function FormFile() {
  return (
    <>
      <Container>
        <FormWrapper>
          <Icon to="/">Http.DittoSays</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Contact Form</FormH1>
              <FormLabel htmlFor="fro">Name</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="fro">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="fro">Message for me</FormLabel>
              <FormInputArea type="textarea" required />
              <FormButton type="submit">Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrapper>
      </Container>
    </>
  );
}

export default FormFile;
