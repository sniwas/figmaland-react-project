import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpScreen() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [name, setName] = useState("");
  const [isValidUsername, setisValidUsername] = useState(true);
  const [post, setPost] = React.useState(null);
  const [signup, setSignup] = useState(false);

  const baseURL = "create";
  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
    setisValidUsername(/^[a-z0-9]{5,}$/.test(inputName));
  };
  function createPost() {
    axios
      .post(baseURL, {
        userName: name,
        email: email,
        password: password,
      })
      .then((response) => {
        setPost(response.data);
        setSignup(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }
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

  const handleSignUp = (e) => {
    if (
      name &&
      email &&
      password &&
      isValidEmail &&
      isValidPassword &&
      isValidUsername
    ) {
      createPost();
      if (signup) {
        navigation("/login");
      }
    } else {
      window.alert("Enter proper Name/Email/Password");
    }
  };

  return (
    <>
      <div className=" overflow-auto flex items-center justify-center h-screen bg-black">
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
              className=" border rounded-[4px] p-3 hover:outline-none focus:outline-none "
              type="text"
              placeholder="Username"
              value={name}
              onChange={handleNameChange}
            />
            {!isValidUsername ? (
              <p className="text-red-500 w-60 md:w-96">
                Invalid Username - No special characters and uppercase allowed
                and minimum 5 characters required.
              </p>
            ) : (
              <p className="pb-5"></p>
            )}
            <p className="pb-4"></p>
            <h1 className=" text-white pb-2">Enter Email Id :</h1>
            <input
              className="rounded-[4px] border p-3 hover:outline-none focus:outline-none"
              type="text"
              placeholder="Email id"
              value={email}
              onChange={handleEmailChange}
            />
            {!isValidEmail ? (
              <p className="text-red-500">Invalid Email</p>
            ) : (
              <p className="pb-5"></p>
            )}
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
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <div className="mt-5 flex justify-center  text-sm text-white">
            <p>
              Already have an account ?{" "}
              <a href="/login" className="underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
