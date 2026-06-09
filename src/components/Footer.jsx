function Footer(){
    return(
        <>
        <footer className=" text-white py-5"
                style={{backgroundColor:"#001f5c"}}>
    <div className="container">
        <div className="row gy-4">

            <div className="col-md-4">
                <img
                    src="https://www.ieee-nitdgp.in/_next/image?url=%2Fieeesb_logo_white.png&w=750&q=75"
                    alt="IEEE SB"
                    width="120"
                    className="mb-3"
                />

                <p className="small">
                    The IEEE Student Branch, NIT Durgapur promotes
                    research, innovation, technical excellence and
                    professional growth among students.
                </p>
            </div>

            {/* About */}
            <div className="col-md-4">
                <h5>About Us</h5>

                <ul className="list-unstyled">
                    <li>
                        <a href="#" className="text-white text-decoration-none">
                            About IEEE SB
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-decoration-none">
                            About IEEE
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-decoration-none">
                            Research Activities
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-md-4">
                <h5>Contact</h5>

                <p>Email: ieeesb.nitdgp@gmail.com</p>
                <p>NIT Durgapur, West Bengal</p>

                <div className="d-flex gap-3">
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-facebook"></i>
                </div>
            </div>

        </div>

        <hr />

        <div className="text-center">
            © 2026 IEEE Student Branch NIT Durgapur
        </div>
    </div>
</footer>
        
        </>
    )
}
export default Footer