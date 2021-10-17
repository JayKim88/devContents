import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function Login() {
  //import method by useContext
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;
