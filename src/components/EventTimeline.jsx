import { useEffect, useRef, useState } from "react";
import "../styles/EventTimeline.css";

const events = [
    {
            title:"PCB Decoded",
            year: "2026",
            image:"https://www.ieee-nitdgp.in/_next/image?url=%2FEvents%2FcreAlte.jpeg&w=1920&q=75",
            link:""
        },
        {
            title:"HACK HUSTLE",
            year: "2026",
            image:"https://internshala-competitions.s3.ap-south-1.amazonaws.com/competitions/wp-content/uploads/2026/03/30175554/ChatGPT-Image-Mar-30-2026-05_55_35-PM.png",
            link:""
        },
        {
            title:"CAREER TALK",
            year: "2026",
            image:"https://www.ieee-nitdgp.in/_next/image?url=%2FEvents%2Fpcb-decoded.jpeg&w=1920&q=75",
            link:""
        },
        {
            title:"NVISION",
            year: "2026",
            image:"https://www.ieee-nitdgp.in/_next/image?url=%2FEvents%2Fhackhustle1.jpeg&w=1920&q=75",
            link:""
        },
        {
            title:"EPOCH",
            year: "2025",
            image:"https://www.ieee-nitdgp.in/_next/image?url=%2FEvents%2FtechX.jpg&w=1920&q=75",
            link:""
        },
        {
            title:"PCB DECODED",
            year: "2025",
            image:"https://www.ieee-nitdgp.in/_next/image?url=%2FEvents%2FNvision.jpeg&w=1920&q=75",
            link:""
        },
        {
            title:"HACK HUSTLE",
            year: "2025",
            image:"https://internshala-competitions.s3.ap-south-1.amazonaws.com/competitions/wp-content/uploads/2026/03/30175554/ChatGPT-Image-Mar-30-2026-05_55_35-PM.png",
            link:""
        },
        {
            title:"CAREER TALK",
            year: "2025",
            image:"https://www.ieee-nitdgp.in/_next/image?url=%2FEvents%2Fpcb-decoded.jpeg&w=1920&q=75",
            link:""
        },
        {
            title:"NVISION",
            year: "2025",
            image:"https://www.ieee-nitdgp.in/_next/image?url=%2FEvents%2Fhackhustle1.jpeg&w=1920&q=75",
            link:""
        },
        {
            title:"EPOCH",
            year: "2024",
            image:"https://www.ieee-nitdgp.in/_next/image?url=%2FEvents%2FtechX.jpg&w=1920&q=75",
            link:""
        },
        {
            title:"PCB DECODED",
            year: "2024",
            image:"https://www.ieee-nitdgp.in/_next/image?url=%2FEvents%2FNvision.jpeg&w=1920&q=75",
            link:""
        },
];

export default function EventTimeline() {
  const timelineRef = useRef(null);

  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);



  useEffect(() => {
    const container = timelineRef.current;

    const interval = setInterval(() => {
      if (!container || paused) return;

      container.scrollLeft += direction;

      const max =
        container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= max) {
        setDirection(-1);
      }

      if (container.scrollLeft <= 0) {
        setDirection(1);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [direction, paused]);

  const handleWheel = (e) => {
    e.preventDefault();
    timelineRef.current.scrollLeft += e.deltaY;
  };

  return (
    <section className="timeline-section">

      <h2>Event Timeline</h2>

      <div
        ref={timelineRef}
        className="timeline-scroll"
        onWheel={handleWheel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {events.map((event, index) => (
          <a
            href={event.link}
            className="event-card"
            key={index}
          >
            <div className="timeline-dot"></div>

            <img
              src={event.image}
              alt={event.title}
            />

            <div className="event-content">
              <span>{event.year}</span>
              <h3>{event.title}</h3>
              <p>Explore Event →</p>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}