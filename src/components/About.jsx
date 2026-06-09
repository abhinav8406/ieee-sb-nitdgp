import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section py-5 position-relative overflow-hidden">

      <div className="about-watermark">
        IEEE
      </div>

      <div className="container">

        <div className="row align-items-center min-vh-75">

          {/* Left Side */}

          <div className="col-lg-5 mb-5 mb-lg-0">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <p className="about-label">
                ABOUT IEEE
              </p>

              <h1 className="display-2 fw-bold quote-text">
                Advancing
                <br />
                Technology
                <br />
                for Humanity
              </h1>

              <div className="quote-line"></div>

            </motion.div>

          </div>

          {/* Right Side */}

          <div className="col-lg-7">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <h2 className="fw-bold mb-4">
                A Global Community of Innovators
              </h2>

              <p className="about-content">
                IEEE is the world's largest technical professional
                organization dedicated to advancing technology for
                the benefit of humanity. It brings together
                engineers, researchers, scientists, and students
                from across the globe to collaborate, innovate,
                and solve real-world challenges.
              </p>

              <p className="about-content">
                Through conferences, publications, standards,
                technical societies, and educational programs,
                IEEE serves as a platform where ideas evolve into
                impactful technologies.
              </p>

              <p className="about-content">
                At IEEE Student Branch NIT Durgapur, we foster a
                culture of innovation through workshops,
                hackathons, research initiatives, industry
                interactions, and community-driven projects that
                empower students to grow beyond the classroom.
              </p>

              <blockquote className="ieee-quote mt-4">
                "Innovation is not merely about creating
                technology. It is about creating possibilities."
              </blockquote>

              <button className="btn btn-primary mt-4 px-4 py-2">
                Explore IEEE
              </button>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}