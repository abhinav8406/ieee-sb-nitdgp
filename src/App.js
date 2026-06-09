import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Events from "./pages/Events.jsx"
import Team from "./pages/Team.jsx"
import Join from "./pages/Join.jsx"
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx"

function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
     return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Event" element={<Events/>}/>
          <Route path="/Team" element={<Team/>}/>
          <Route path="/Join" element={<Join/>}/>
          <Route path="/Contact" element={<Contact/>}/>

        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
