import React, { useState, useEffect } from "react";
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

/*Animation */
import Aos from "aos";
import "aos/dist/aos.css";
/*Animation */

/*Database */
import { db } from "./Firebase/Firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormFile() {
  /*Animation */
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  /*Animation */

  /*Database */
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
  /*Database */
  return (
    <>
      <Container>
        <FormWrapper>
          <Icon to="/" data-aos="fade-up">
            Http.DittoSays
          </Icon>
          <FormContent data-aos="fade-up">
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
