import React, { useState } from "react";
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

import { db } from "./Firebase/Firebase";

function FormFile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const alertMsg = () => {
      alert("Message has been Submitted");
    };

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        msg: msg,
      })
      .then(() => {
        alertMsg();
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <>
      <Container>
        <FormWrapper>
          <Icon to="/">Http.DittoSays</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Contact Form</FormH1>
              <FormLabel htmlFor="fro">Name</FormLabel>
              <FormInput
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel htmlFor="fro">Email</FormLabel>
              <FormInput
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="fro">Message for me</FormLabel>
              <FormInputArea
                type="textarea"
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <FormButton type="submit">Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrapper>
      </Container>
    </>
  );
}

export default FormFile;
