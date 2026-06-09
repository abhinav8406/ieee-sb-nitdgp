import { motion } from "framer-motion";
import EventTimeline from "../components/EventTimeline.jsx"
import About from "../components/About.jsx"
import Collabouration from "../components/Collaboration.jsx"
function Home(){
    const stats = [
    ["500+", "Members"],
    ["60+", "Events"],
    ["20+", "Awards"],
    ["6+", "Domains"]
  ];

    return(
        <>
        <section className="hero">

            <div className="network-bg"></div>

            <div className="container text-center">

              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
              >
                IEEE SB NIT Durgapur
              </motion.h1>

              <p>
                Innovate • Collaborate • Engineer the Future
              </p>

              <button className="btn btn-primary me-3">
                  
                Join IEEE
              </button>

              <button className="btn btn-outline-primary">
                Explore Domains
              </button>

            </div>
        </section>
        <About/>
        <section  className="stats-section"
                  style={{backgroundColor:"#979edd41"}}
        >
          <p className="text-center fs-2 mt-1 mb-5 fw-bold">OUT ACHIEVEMENTS</p>

          <div className="container">

            <div className="row">

              {stats.map((s) => (
              
                <div className="col-md-3 text-center">
                
                  <h1>{s[0]}</h1>
              
                  <p>{s[1]}</p>
              
                </div>

              ))}

            </div>
            
          </div>
            
        </section>
        <EventTimeline />
        <Collabouration/>

        
        </>
    )
}
export default Home;