import React, { startTransition, useState } from "react";
import Login from "../../Widgets/Login/login";
import AuthWrapper from "../../Wrappers/Auth/Auth";
import SignUp from "../../Widgets/SignUp/SignUp";
import "./Auth.css";
import ViewTransition from "../../Wrappers/ViewTransition/ViewTransition";
import { useNavigate } from "react-router-dom";

function Auth(props) {
  const navigate = useNavigate();
  const [headerData, setHeaderData] = useState({
    header: "WELCOME BACK",
    subHeader: "Log into your account ",
  });

  const [flowStep, setFlowStep] = useState("login");

  return (
    <AuthWrapper
      {...headerData}
      showCloseCta={props.showCloseCta}
      crossIconHandler={props.crossIconHandler}>
      <ViewTransition transitionName="slide-in-out">
        {flowStep === "login" && (
          <Login
            loginHanlder={(loginData) => {
              const username = localStorage.getItem("username");
              const email = localStorage.getItem("email");
              const password = localStorage.getItem("password");
              if (
                username === loginData.username ||
                email === loginData.username
              ) {
                if (password === loginData.password) {
                  //navigate to home page
                } else {
                  alert("Wrong password");
                }
              } else {
                alert(
                  `User ${loginData.username} is not yet registered with us. Register now!!`
                );
              }
            }}
            registerHandler={() => {
              setHeaderData({
                header: "SIGN UP",
                subHeader: "Create an account to continue",
              });
              setFlowStep("signUp");
            }}
          />
        )}
        {flowStep === "signUp" && (
          <SignUp
            signUpHandler={(signUpData) => {
              //navigate to home page and set signup in local store
              navigate("/home-feed");
              startTransition(() => {
                localStorage.setItem("username", signUpData.username);
                localStorage.setItem("email", signUpData.email);
                localStorage.setItem("password", signUpData.password);
              });
            }}
            loginCtaHandler={() => {
              setHeaderData({
                header: "WELCOME BACK",
                subHeader: "Log into your account",
              });
              setFlowStep("login");
            }}
          />
        )}
      </ViewTransition>
    </AuthWrapper>
  );
}

export default Auth;
