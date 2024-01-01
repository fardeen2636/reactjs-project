import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {

      console.log("Email:", email);
      console.log("Password:", password);

    }
    setValidated(true);


    if (email !== "example@example.com" || password !== "password") {
      setShowError(true);
    }
  };

  return (
    <>
      <section>
        <div className="container my-3 pt-5">
          <div className="row d-flex justify-content-center mt-3">
            <div className="col-lg-5 col-md-7 col-12">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded">
                  <div className="row my-2">
                    <div className="col-12">
                      <h2 className="text-center">Get In Touch</h2>
                      <p className="text-center text-dark">
                        Easy-to-hate ultrices, sorrows vehicles, low cost aircraft But he invests
                      </p>
                    </div>
                    <div className="col-12 my-2">
                      <Form.Group controlId="email">
                        <Form.Control
                          required
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid email.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="col-12 my-2">
                      <Form.Group controlId="password">
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a password.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    {showError && (
                      <div className="col-12 my-2">
                        <Alert variant="danger">Invalid email or password.</Alert>
                      </div>
                    )}

                    <div className="col-12 mx-auto my-2 mt-4">
                      <Button type="submit" className="btn w-100 bg-primary bg-opacity-50 py-3 text-white">
                        Login <FaLock />
                      </Button>
                    </div>

                    <div className="col-12 mt-4 d-flex justify-content-between">
                      <a href="./index.html">
                        <i className="fa fa-arrow-left"></i> Back
                      </a>
                      <a href="signup.html">
                        {" "}
                        SignUp <i className="fa fa-arrow-Right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
