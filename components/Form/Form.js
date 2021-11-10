import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import Button from "../../containers/Button";
import Input from "../../containers/Input/Input";
import TextArea from "../../containers/Input/TextArea";
import { Form as StyledForm } from "./Form.style";
import styled from "styled-components";

export default function Form({ title }) {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const onSubmit = (values) => {
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMessage(res.message);
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      })
      .catch((error) => setError(JSON.parse(error)));

    formik.resetForm({
      values: initialValues,
    });
  };

  const validationSchema = yup.object({
    name: yup.string().required("Ovo polje je obavezno"),
    phone: yup.number().required("Ovo polje je obavezno").nullable(),
    email: yup.string().email().required("Ovo polje je obavezno"),
    message: yup.string().required("Ovo polje je obavezno"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <StyledForm>
      <form onSubmit={formik.handleSubmit}>
        <div className="inner">
          <h1>{title}</h1>

          <Input
            hasError={formik.errors.name}
            errorMsg={formik.errors.name}
            type="text"
            id="name"
            name="name"
            placeholder="Vaše ime i prezime"
            {...formik.getFieldProps("name")}
          />

          <Input
            hasError={formik.errors.phone}
            errorMsg={formik.errors.phone}
            type="number"
            id="phone"
            name="phone"
            placeholder="Broj telefona"
            {...formik.getFieldProps("phone")}
          />

          <Input
            hasError={formik.errors.email}
            errorMsg={formik.errors.email}
            type="email"
            id="email"
            name="email"
            placeholder="Mail adresa"
            {...formik.getFieldProps("email")}
          />

          <TextArea
            hasError={formik.errors.message}
            errorMsg={formik.errors.message}
            id="message"
            name="message"
            placeholder="Vaša poruka"
            {...formik.getFieldProps("message")}
          ></TextArea>

          <button type="submit" disabled={formik.isSubmitting}>
            Pošaljite poruku
          </button>

          {error && (
            <InputErrorBox type="error">{error}</InputErrorBox>
          )}

          {message && (
            <InputErrorBox type="success">{message}</InputErrorBox>
          )}
        </div>
      </form>
    </StyledForm>
  );
}

<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  <p class="font-bold">Be Warned</p>
  <p>Something not ideal might be happening.</p>
</div>

const InputErrorBox = styled.span`
  background:${({type})=>type=="error"? "#fff5f5" : "#e6fffa"};
  ${'' /* border:1px solid #f56565; */}
  color:${({type})=>type=="error"? "#c63433" : "#245054"};
  border-top-width: 4px!important;
  border-top-style: solid;
  border-color:${({type})=>type=="error"? "#f56565" : "#38b2ac"};
  padding:2rem;
  font-size: 1.6rem;
  letter-spacing:1px;
  margin: 1rem 0 2rem;
  text-align: left;
  box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);
`;
