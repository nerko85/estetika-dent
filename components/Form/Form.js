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
            <InputErrorBox style={{ color: "red" }}>{error}</InputErrorBox>
          )}

          {message && (
            <InputErrorBox style={{ color: "green" }}>{message}</InputErrorBox>
          )}
        </div>
      </form>
    </StyledForm>
  );
}

const InputErrorBox = styled.span`
  color: #ff6271;
  font-size: 12px;
  font-family: "Open Sans";
  font-weight: 700;
  margin: 4px 0;
  text-align: left;
`;
