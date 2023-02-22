import { React, useState } from "react";
import Input from "./inputs";
import fields from "./fields.json";

function Form() {
  const initialValues = {
    name: "",
    state: "",
    phone: "",
    address: "",
    gender: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = () => {
    const errors = {};

    if (!formValues.name) {
      errors.name = "*name is required";
    } else if (formValues.name.includes(" ")) {
      errors.name = "*can't contain spaces";
    }
    if (!formValues.state) {
      errors.state = "*state is required";
    }
    if (!formValues.phone) {
      errors.phone = "*phone is required";
    } else if (formValues.phone.length !== 10) {
      errors.phone = "*phone number is invalid";
    }
    if (!formValues.address) {
      errors.address = "*Address is required";
    }
    if (!formValues.gender) {
      initialValues.gender = formValues.gender;
      if (!initialValues.gender.length) {
        errors.gender = "*please select gender";
      }
    }
    return errors;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      {fields.map((field) => (
        <>
          <Input
            name={field.name}
            type={field.type}
            id={field.id}
            labelText={field.labelText}
            value={field.value}
            onChange={handleChange}
          />
          <p>{formErrors[field.name]}</p>
        </>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
