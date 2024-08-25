import React, { useState } from "react";
import InputFields from "../../Components/InputField/InputField";
import PrimaryCta from "../../Components/PrimaryCta/PrimaryCta";
import TextualCta from "../../Components/TextualCta/TextualCta";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="login">
      <div className="mt-12">
        <InputFields
          type="text"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputFields
          type="text"
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <InputFields
          showEye
          type={showPassword ? "password" : "text"}
          label="Password"
          placeholder="Choose a strong password"
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
          label="Continue"
          onClick={() => {
            props.signUpHandler({ email, username, password });
          }}
        />
      </div>
      <div className="mt-4">
        <TextualCta
          cta={{
            label: `
              <div class="font-medium text-sm">
                <span style="color: #7f8084">Already have an account? </span>
                <span style="color: #c5c7ca">Login →</span>
              </div>
            `,
            action: "SIGN_UP",
          }}
          onClick={props.loginCtaHandler}
        />
      </div>
    </div>
  );
}

export default SignUp;
