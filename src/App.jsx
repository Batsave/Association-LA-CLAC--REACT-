import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";

import Footer from "./components/footer.jsx";
//Styles
import "./scss/App.scss";

//Pages
import Home from "./pages/homepage.jsx";
import Representations from "./pages/seances.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="seances" element={<Representations />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
