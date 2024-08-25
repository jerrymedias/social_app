import React, { useState } from "react";
import InputFields from "../../Components/InputField/InputField";
import PrimaryCta from "../../Components/PrimaryCta/PrimaryCta";
import TextualCta from "../../Components/TextualCta/TextualCta";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="login">
      <div className="mt-12">
        <InputFields
          type="text"
          label="Email or Username"
          placeholder="Enter your email or username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <InputFields
          showEye
          type={showPassword ? "password" : "text"}
          label="Password"
          placeholder="Enter your password"
          cta={{ label: "Forgot password?" }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          toggleEye={() => {
            setShowPassword(!showPassword);
          }}
        />
      </div>
      <div className="mt-6">
        <PrimaryCta
          label="Login now"
          onClick={() => {
            props.loginHanlder({ username, password });
          }}
        />
      </div>
      <div className="mt-4">
        <TextualCta
          cta={{
            label: `
              <div class="font-medium text-sm">
                <span style="color: #7f8084">Not registered yet? </span>
                <span style="color: #c5c7ca">Register →</span>
              </div>
            `,
            action: "SIGN_UP",
          }}
          onClick={props.registerHandler}
        />
      </div>
    </div>
  );
}

export default Login;
