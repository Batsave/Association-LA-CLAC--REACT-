import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";

import Footer from "./components/footer.jsx";
//Styles
import "./scss/App.scss";

//Pages
import Home from "./pages/homepage.jsx";
import Representations from "./pages/seances.jsx";
import Contact from "./pages/contact.jsx";
import MentionsLegales from "./pages/legal.jsx";
import CGV from "./pages/cgv.jsx";
import Cookies from "./pages/cookies.jsx";

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="seances" element={<Representations />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentionslegales" element={<MentionsLegales />} />
        <Route path="cgv" element={<CGV />} />
        <Route path="cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
