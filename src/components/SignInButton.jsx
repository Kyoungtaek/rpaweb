import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 * Note the [useMsal] package
 */

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };
  return (
    <div>
      <Button
        variant="secondary"
        className="ml-auto"
        onClick={() => handleLogin("redirect")}
      >
        Sign in using Redirect
      </Button>
    </div>
  );
};
