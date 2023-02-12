import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SingUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormField = () => {
    setFormFields(defaultFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not much");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log(error.code);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sing up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Dsplay Name"
          inputOptions={{
            type: "text",
            required: true,
            name: "displayName",
            onChange: handleChange,
            value: displayName,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            required: true,
            type: "email",
            name: "email",
            onChange: handleChange,
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            required: true,
            type: "password",
            name: "password",
            onChange: handleChange,
            value: password,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            required: true,
            type: "password",
            name: "confirmPassword",
            onChange: handleChange,
            value: confirmPassword,
          }}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SingUpForm;
