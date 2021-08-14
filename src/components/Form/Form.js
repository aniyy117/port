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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormFile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        msg: msg,
      })
      .then(() => {
        toast.success("Message has been Submitted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
      <ToastContainer />
    </>
  );
}

export default FormFile;
