function About2(){
    const ieeeBenefits = [
                {
                icon: "/icons/innovation.png",
                title: "Innovate Without Limits",
                description:
                "Transform ideas into reality through hackathons, technical projects, research initiatives, and innovation-driven challenges that encourage creative problem solving."
            },
            {
                icon: "/icons/promotion.png",
                title: "Learn From Experts",
                description:
                "Gain insights from distinguished researchers, industry leaders, and technology pioneers through workshops, seminars, and interactive technical sessions."
            },
            {
                icon: "/icons/leadership.png",
                title: "Build Meaningful Projects",
                description:
                "Collaborate with passionate engineers and innovators across diverse domains to develop impactful solutions that address real-world challenges."
            },
            {
                icon: "/icons/network.png",
                title: "Connect Globally",
                description:
                  "Become part of a worldwide community of professionals, researchers, and students, opening doors to mentorship, opportunities, and lifelong connections."
            },
            {
                icon: "/icons/research.png",
                title: "Explore Research",
                description:
                  "Discover emerging technologies, contribute to research activities, publish your work, and engage with the latest advancements shaping the future."
            },
            {
                icon: "/icons/leadership.png",
                title: "Develop Leadership",
                description:
                  "Take initiative, manage events, lead teams, and cultivate professional skills that prepare you to excel in both technical and leadership roles."
            },
        ]

        return(
            <>
            <div className="row g-4 m-3">
                {ieeeBenefits.map((item, index) => (
                    <div
                    key={index}
                    className="col-12 col-md-6 col-lg-2"
                    >
                    <div className="benefit-card h-100">

                        <img
                        src={item.icon}
                        alt={item.title}
                        className="benefit-icon container-fluid"
                        />

                        <h5 className="mt-4 fw-bold text-align-center mx-2">
                        {item.title}
                        </h5>

                        <p className="px-3">
                        {item.description}
                        </p>

                    </div>
                    </div>
                ))}
            </div>
            </>
        )

}

export default About2;