import React from "react";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <div>
        <NavBar />
        <LoginForm />
        <Footer />
      </div>
    </>
  );
};

export default Login;
