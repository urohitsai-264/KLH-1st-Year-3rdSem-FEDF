
// used to read data from text boxes (input)
import { useRef } from "react";
// used to navigate between components based on events
import { useNavigate } from "react-router-dom";

const Login = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const navigate = useNavigate();

  const login = () => {
    ref1.current.value === "admin" && ref2.current.value === "admin@123" 
      ? navigate("/dashboard")
      : navigate("/error");
  };

  return (
    <>
      <input type="text" ref={ref1} placeholder="enter username" />
      <br />
      <br />
      <br />
      <input type="password" ref={ref2} placeholder="enter password" />
      <br />
      <br />
      <br />
      <button onClick={login}>Login</button>
    </>
  );
};

export default Login;