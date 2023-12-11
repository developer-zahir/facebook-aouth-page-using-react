import { IoInformationCircle } from "react-icons/io5";

import { Link } from "react-router-dom";
import "./Aouth.scss";
import BackToHome from "../../components/BackToHome/BackToHome";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import { day, months, years } from "../../faker/dmy";
import {
  createToast,
  isEmail,
  isPhone,
  preventDefault,
} from "../../helpers/heleper";
const Aouth = () => {
  const [modal, setModal] = useState(false);
  const [input, setIntup] = useState({
    first_name: "",
    sur_name: "",
    email_or_phone: "",
    pass: "",
    day: "",
    month: "",
    year: "",
    gender: "",
  });

  // onChange={handel_input_change}
  const handel_input_change = (e) => {
    setIntup((prevStage) => ({
      ...prevStage,
      [e.target.name]: e.target.value,
    }));
  };

  const showEmptyError = (e) => {
    if (e.target.value === "") {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "#dadde1";
    }
  };

  const handel_user_register = (e) => {
    e.preventDefault();

    if (
      !input.first_name ||
      !input.sur_name ||
      !input.pass ||
      !input.email_or_phone
    ) {
      if (!input.pass) {
        createToast("Password is required");
      } else if (!input.first_name && !input.sur_name) {
        createToast("Name is required");
      } else if (!input.email_or_phone) {
        createToast("Email is required");
      } else {
        createToast("All Fields Are Required");
      }
    } else if (isEmail(input.email_or_phone)) {
      createToast("Data stable (Email)", "success");
    } else if (isPhone(input.email_or_phone)) {
      createToast("Data stable (Phone)", "success");
    } else {
      createToast("Invalid Email or Phone Number");
    }
  };

  // login form ------------
  const [logInput, setLogInput] = useState({
    username: "",
    password: "",
  });

  const handelLoginInputChante = (e) => [
    setLogInput((prevStage) => ({
      ...prevStage,
      [e.target.name]: e.target.value,
    })),
  ];

  const onlogin = (e) => {
    e.preventDefault();

   
  if (!logInput.username || !logInput.password) {
    if (!logInput.username && !logInput.password) {
      createToast("All fields are required");
    } else if (!logInput.username) {
      createToast("Username is required");
    } else if (!logInput.password) {
      createToast("Password is required");
    }
  } else {
     if (isPhone(logInput.username)) {
      createToast("Login Succeccful", "success");
    } else if (isEmail(logInput.username)) {
      createToast("Login Succeccful", "success");
    } else {
      createToast("Invalid phone number and email address");
    }
  }
  };

  return (
    <>
      <section className="aouth-section">
        <div className="container">
          <div className="aouth-left">
            <div className="aouth-left-content">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                alt=""
              />
              <h2>
                Facebook helps you connect and share with the people in your
                life.
              </h2>
            </div>
          </div>
          <div className="aouth-right">
            <div className="aouth-right-content">
              <form action="#" onSubmit={onlogin}>
                <input
                  type="text"
                  placeholder="Email address or phone number"
                  onBlur={showEmptyError}
                  onChange={handelLoginInputChante}
                  name="username"
                  value={input.username}
                />
                <input
                  type="text"
                  placeholder="Password"
                  onBlur={showEmptyError}
                  onChange={handelLoginInputChante}
                  name="password"
                  value={input.password}
                />
                <input type="submit" value="Log in" />
                <Link to="#">Forgotten password?</Link>
                <div className="divider" />
                <div
                  className="create-new-account"
                  onClick={() => setModal(true)}
                >
                  Create new account
                </div>
              </form>

              <p>
                <Link to="#" onClick={preventDefault}>
                  Create a Page{" "}
                </Link>
                for a celebrity, brand or business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="language-section">
        <div className="container">
          <img src="../../../public/img/language.png" alt="" />
        </div>
      </section>

      {modal && (
        <Modal hideModal={setModal}>
          <form
            action="#"
            className="sign-up-form"
            onSubmit={handel_user_register}
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="First name"
                name="first_name"
                value={input.first_name}
                onChange={handel_input_change}
                onBlur={showEmptyError}
              />
              <input
                type="text"
                placeholder="Surname"
                name="sur_name"
                value={input.sur_name}
                onChange={handel_input_change}
                onBlur={showEmptyError}
              />
            </div>

            <input
              type="text"
              placeholder="Moble number or email address"
              name="email_or_phone"
              value={input.email_or_phone}
              onChange={handel_input_change}
              onBlur={showEmptyError}
            />
            <input
              type="password"
              placeholder="New password"
              name="pass"
              value={input.pass}
              onChange={handel_input_change}
              onBlur={showEmptyError}
            />

            <p className="date-of-birth-select-title form-title">
              Date of birth{" "}
              <span title="Select your real date of birth">
                <IoInformationCircle />
              </span>
            </p>
            <div className="form-group date-of-barth">
              <select name="day" onChange={handel_input_change}>
                {day?.map((item, index) => {
                  return (
                    <option
                      value={item}
                      key={index}
                      selected={new Date().getDate() === item ? true : false}
                    >
                      {item}
                    </option>
                  );
                })}
              </select>

              <select name="month" onChange={handel_input_change}>
                {months?.map((item, index) => {
                  return (
                    <option
                      value={item}
                      key={index}
                      selected={new Date().getMonth() === index ? true : false}
                    >
                      {item}
                    </option>
                  );
                })}
              </select>

              <select name="year" onChange={handel_input_change}>
                {years?.map((item, index) => {
                  return (
                    <option
                      value={item}
                      key={index}
                      selected={
                        new Date().getFullYear() === item ? true : false
                      }
                    >
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>

            <p className="gender-select-title  form-title">
              Gender{" "}
              <span title="Select your gender ">
                <IoInformationCircle />
              </span>
            </p>
            <div className="form-group genter-select-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handel_input_change}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handel_input_change}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="custom"
                  onChange={handel_input_change}
                />
                Custom
              </label>
            </div>

            <p>
              People who use our service may have uploaded your contact
              information to Facebook. <Link to="#">Learn more.</Link>
            </p>
            <p>
              By clicking Sign Up, you agree to our <Link to="#">Terms</Link>,{" "}
              <Link to="#">Privacy Policy</Link> and{" "}
              <Link to="#">Cookies Policy</Link>. You may receive SMS
              notifications from us and can opt out at any time.
            </p>

            <input type="submit" value="Sign Up" />
          </form>
        </Modal>
      )}

      <BackToHome />
    </>
  );
};

export default Aouth;
