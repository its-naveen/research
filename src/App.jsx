import { Navigate, Route, Routes, useNavigate } from "react-router";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import { useAppContext } from "./context/appContext";
import { useEffect } from "react";

export default function App() {
  const { isAuthenticated } = useAppContext();
  const navigation = useNavigate();

  useEffect(() => {
    console.log("Is Authenticated: ", isAuthenticated());
    if (isAuthenticated()) {
      navigation("/home");
    }
  }, [navigation, isAuthenticated]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      {
        isAuthenticated() && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path='/contact' element={<h1>Contact</h1>} />
          </>
        )
      }
      <Route path="*" element={<Navigate to={isAuthenticated() ? "/home" : "/login"} replace />} />
    </Routes>
  );
}
