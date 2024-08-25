import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      navigate("/home-feed");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bgColor">
      <Outlet />
    </div>
  );
}

export default App;
