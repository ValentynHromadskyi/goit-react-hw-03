import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useId } from "react";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "Name not must be at exceed st 50 symb long ")
    .required("This is a required field"),
  number: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "Name not must be at exceed st 50 symb long ")
    .required("This is a required field"),
});

export function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          onAdd({ id: nanoid(4), ...values });
          actions.resetForm();
        }}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.formGroup}>
            <label htmlFor={nameId}>Name</label>
            <Field className={css.input} type="text" name="name" id={nameId} />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.formGroup}>
            <label htmlFor={numberId}>Number</label>
            <Field
              className={css.input}
              type="tel"
              name="number"
              id={numberId}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button className={css.btn} type="submit">
            Add user
          </button>
        </Form>
      </Formik>
    </>
  );
}
