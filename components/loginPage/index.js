import React from "react";
// import HeadPage from "../layout/headPage";
// import HEAD_TITLES from "@/utils/constants/titleConstants";
import styles from "./styles.module.css";
import { Button, Form, Spinner } from "react-bootstrap";
import { Field, Formik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import * as yup from "yup";
import InputField from "../fields/inputFields";

const defaultValues = {
  email: "",
  password: "",
};

function Login() {
  const handleFormSubmit = async (values) => {
    await axios
      .post("https://reqres.in/api/login", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        localStorage.setItem("userAuthToken", response.data.token);
        window.location = "/users";
      })
      .catch(function (error) {
        if (error?.response?.status == 400) {
          alert(error.response?.data?.error);
        } else {
          alert(error.message);
        }
      });
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(5).max(20),
    // terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });
  const successToastStyle = {
    backgroundColor: 'green', // Green background color for success toast
    color: 'white', // Text color
  };
  const notify = () => toast.success('Logged In', {
    style: successToastStyle, // Apply the custom style to this success toast
  });



  return (
    <>
      {/* <HeadPage title={HEAD_TITLES.login}> */}
      <section>
        <div className="container my-3 pt-5">
          <div className="row d-flex justify-content-center mt-3">
            <div className="col-lg-5 col-md-7 col-12">
              {/* <Alert key="danger" variant="danger">
                  This is a alert—check it out!
                </Alert> */}
              <Formik
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
                initialValues={defaultValues}
              >
                {({ handleSubmit, isSubmitting }) => {
                  return (
                    <Form noValidate onSubmit={handleSubmit}>
                      <div
                        className={`${styles.contactFormWrapper} bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded`}
                      >
                        <div className="row my-2">
                          <div className="col-12">
                            <h2
                              className={`${styles.contactFormHeading} text-center`}
                            >
                              Get In Touch
                            </h2>
                            <p
                              className={`${styles.contactFormParagh} text-center text-dark`}
                            >
                              Easy-to-hate ultrices sorrows
                              vehicles low cost aircraft But he invests.
                            </p>
                          </div>
                          <div className="col-12 my-2">
                            <Field
                              name="email"
                              placeholder="Email Address"
                              label="Email"
                              component={InputField}
                            />
                          </div>
                          <div className="col-12 my-2">
                            <Field
                              type="password"
                              name="password"
                              label="Password"
                              placeholder="Enter your password"
                              component={InputField}
                            />
                          </div>

                          <div className="col-12 mx-auto my-2 mt-4">
                          </div>
                          <div>
                            <button
                              onClick={notify}
                              className={`btn w-100 ${isSubmitting ? "bg-secondary" : "bg-primary"} bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0`}
                            >
                              Login
                            </button>
                            <ToastContainer />
                          </div>

                          <div className="col-12 mt-4 d-flex justify-content-between">
                            <a href="./index.html">
                              <i className="fa fa-arrow-left"></i> Back
                            </a>
                            <a href="signup.html">
                              {" "}
                              SignUp <i className="fa fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </section>
      {/* </HeadPage> */}
    </>
  );
}

export default Login;