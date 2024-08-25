import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      navigate("/social_app/home-feed");
    } else {
      navigate("/social_app/login");
    }
  }, []);

  return (
    <div className="bgColor">
      <Outlet />
    </div>
  );
}

export default App;
