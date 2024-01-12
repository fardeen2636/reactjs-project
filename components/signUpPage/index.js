import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from "./styles.module.css"

function SignUpPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isTermsChecked, setTermsChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCheckboxChange = () => {
    setTermsChecked(!isTermsChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isTermsChecked) {
      console.log('Please accept the Terms and Conditions.');
      return;
    }

    try {
      const response = await axios.post('https://reqres.in/api/register', {
        email: formData.email,
        password: formData.password,

      });
      router.replace("/userList");
      console.log('Registration successful:', response.data);
      /// You can handle the successful registration response here
    } catch (error) {
      console.error('Error during registration:', error.message);
      ///You can handle the error here (display an error message, etc.)
    }
  };
  return (
    <section className="p-0">
      <div className="container my-3 pt-5">
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-lg-5 col-md-7 col-12">
            <form onSubmit={handleSubmit}>
              <div
                className={`${styles.contactFormWrapper} bg-info bg-opacity-10 p-md-5 p-2 pt-4 rounded`}
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
                      With the easy-to-use, easy-to-hate car,
                      a poor student But he invests.
                    </p>
                  </div>
                  <div className="col-12 my-2">
                    <input
                      type="email"
                      className="form-control shadow-none"
                      placeholder="Email"
                      aria-label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 my-2">
                    <input
                      type="password"
                      className="form-control shadow-none"
                      placeholder="Password"
                      aria-label="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 my-2">
                    <input
                      type="password"
                      className="form-control shadow-none"
                      placeholder="Confirm Password"
                      aria-label="c-password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 my-2">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="termsCheckbox"
                        checked={isTermsChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="termsCheckbox">
                        I agree to the Terms and Conditions
                      </label>
                    </div>
                  </div>
                  <div className="col-12 mx-auto my-2 mt-4">
                    <button
                      className="btn w-100 py-3 bg-primary text-white bg-opacity-50"
                      type="submit"
                    >
                      <i className="fa fa-lock"></i> Signup
                    </button>
                  </div>
                  <div className="col-12 mt-4 d-flex justify-content-between">
                    <a href="./index.html" className="text-primary">
                      <i className="fa fa-arrow-left"></i> Back
                    </a>
                    <a href="./login.html" className="text-primary">
                      Login <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

}
export default SignUpPage;