import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const { isSignedIn } = useUser();
  const { Navigate } = useNavigate();

  return (
    <Routes>
      <Route path="/" element={!isSignedIn ? <LandingPage /> : <Home />} />
    </Routes>
  );
}

export default App;
