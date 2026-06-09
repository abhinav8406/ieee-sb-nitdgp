import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">

      <img
        src="https://www.ieee-nitdgp.in/_next/image?url=%2Fieeesb_logo_white.png&w=750&q=75"
        alt="IEEE"
        className="preloader-logo"
      />

      <div className="loader-bar">

        <div className="loader-fill"></div>

      </div>

    </div>
  );
}

export default Preloader;