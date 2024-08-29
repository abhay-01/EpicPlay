import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import AllGames from "../src/pages/AllGames";
import Addgames from "../src/pages/Addgames";
import Home from "../src/pages/Home";
import Friends from "../src/pages/Friends";
import Settings from "../src/pages/Settings";
import Install from "../src/pages/Install";
import Faqs from "../src/pages/Faqs";
import { Routes, Route } from "react-router-dom";
import AddFriends from "./pages/AddFriends";
import { Login } from "./pages/Login";
import { SignUP } from "./pages/SignUp";
import { Otp } from "./pages/Otp";
import { Password } from "./pages/Password";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="allgames" element={<AllGames />} />
          <Route path="addgames" element={<Addgames />} />
          <Route path="friends" element={<Friends />} />
          <Route path="addfriends" element={<AddFriends />} />
          <Route path="install" element={<Install />} />
          <Route path="settings" element={<Settings />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUP />} />
          <Route path="otp" element={<Otp />} />
          <Route path="password" element={<Password />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
