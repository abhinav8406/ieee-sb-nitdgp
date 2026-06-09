import { motion } from "framer-motion";
function About1(){

    return(
        <>
        <section className="hero">

            <div className="network-bg"></div>

            <div className="container text-center">

              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
              >
                IEEE
              </motion.h1>
              <motion.p
                initial={{opacity:0, x:-50}}
                animate={{opacity:1, x:0}}
                >
                    Innovate • Collaborate
                </motion.p>
                <motion.p
                initial={{opacity:0, x:50}}
                animate={{opacity:1, x:0}}
                >
                    • Engineer the Future •
                </motion.p>

              

            </div>
        </section>
        </>
    )
}
export default About1