import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginScreen() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [name, setName] = useState("");

  const baseURL = "getuser/" + name;
  function readUser() {
    axios
      .get(baseURL, {
        userName: name,
      })
      .then((response) => {
        let chk = response.data.Item.password;
        if (password === chk) {
          window.alert("Login Successful");
          navigation("/home");
        } else {
          window.alert("Invalid Email/Password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleNameChange = (e) => {
    const inputname = e.target.value;

    setName(inputname);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputEmail);
    setIsValidEmail(isValid);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    const isValid = passRegex.test(inputPassword);
    setIsValidPassword(isValid);
  };
  const handleSignIn = (e) => {
    if (name && password && isValidPassword) {
      readUser();
    } else {
      window.alert("Invalid Email/Password");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="min-w-fit flex-col border bg-black px-6 py-14 shadow-md rounded-[25px] ">
          <div className=" mb-8 flex justify-center">
            <img
              className="object-center object-cover h-auto w-fit"
              src={require("../photos/figmalogo.png")}
              alt="logo"
            ></img>
          </div>
          <div className="flex md:w-96 flex-col text-sm rounded-md">
            <h1 className=" text-white pb-2">Enter Username :</h1>
            <input
              className="rounded-[4px] border p-3 hover:outline-none focus:outline-none"
              type="text"
              placeholder="UserName"
              value={name}
              onChange={handleNameChange}
            />
            {/* {!isValidEmail ? (
              <p className="text-red-500">Invalid Email</p>
            ) : (
              <p className="pb-5"></p>
            )} */}
            <p className="pb-4"></p>
            <h1 className=" text-white pb-2">Enter Password :</h1>
            <input
              className=" border rounded-[4px] p-3 hover:outline-none focus:outline-none "
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {!isValidPassword ? (
              <p className="text-red-500 w-60 md:w-96">
                Password must contain at least one lowercase letter, one
                uppercase letter, one digit, one symbol, and be a minimum of 8
                characters long.
              </p>
            ) : (
              <p className="pb-5"></p>
            )}
            <p className="pb-4"></p>
          </div>
          <button
            className="mt-5 w-full border p-2 bg-gradient-to-r  text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
            type="submit"
            onClick={handleSignIn}
          >
            Sign in
          </button>
          <div className="mt-5 flex justify-between underline text-sm text-white">
            <a href="/forgotpassword">Forgot password?</a>
            <a href="/signup">Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
}
