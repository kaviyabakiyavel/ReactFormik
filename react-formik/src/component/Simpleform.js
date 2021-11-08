//Youtube form
//1) Managing the form state
//2) Handling form submission
//3) Validation and error messages

import React from "react";
import { useFormik } from "formik";

function Simpleform() {
  //useFormik actually takes in an object as its parameter and then return an object
  //1) How formik help us to manage form state
  //Formik variable is going to have properties and method for managing the state
  //By using onchange and value "formik liberay automatically tracks the form field values"
  //2) How its holding the form data and submit the form 
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    //onsumbit is a method automatically receives the form state/values as its argument 
    //when click on onsubmit button automatically excute onsubmit method 
    onSubmit: values => {
        console.log('Form data', values)
    }
  });
  //console.log("form values", formik.values);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <p>YouTube Form</p>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Simpleform;
