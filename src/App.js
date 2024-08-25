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
import AddFriends from "../src/pages/AddFriends";
import MatchMaking from "../src/pages/MatchMaking";
import Test from "./pages/InvitePage";
import InvitePage from "../src/pages/InvitePage";

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
          <Route path="matchmaking" element={<MatchMaking />} />
          <Route path = "invite" element = {<InvitePage />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
