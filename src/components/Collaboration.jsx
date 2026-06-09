function Collaboration(){
    const collab =[
        {
            title:"unity",
            image:"https://www.ieee-nitdgp.in/collab/unity.webp"
        },
        {
            title:"ieee_kolkata_section",
            image:"https://www.ieee-nitdgp.in/collab/ieee_kol_logo.webp"
        },{
            title:"ieee_cs_society",
            image:"https://www.ieee-nitdgp.in/collab/ieee-cs-logo.webp"
        },
        {
            title:"ieee_sb_ju",
            image:"https://www.ieee-nitdgp.in/collab/ieeesbju.webp"
        },
        {
            title:"intel_software",
            image:"https://www.ieee-nitdgp.in/collab/intel.webp"
        },
        {
            title:"global_shapers",
            image:"https://www.ieee-nitdgp.in/collab/global.webp"
        },
        {
            title:"cisco",
            image:"https://www.ieee-nitdgp.in/collab/cisco.webp"
        },
        {
            title:"gdg_kolkate",
            image:"https://www.ieee-nitdgp.in/collab/gdg_kolkata.webp"
        },
        {
            title:"townscript",
            image:"https://www.ieee-nitdgp.in/collab/download-3.webp"
        }
    ]

    return(
        <>
             <p className="text-center fs-3 my-3 fw-bold">Collaborations</p>
            <div className="container py-5">
            <div className="row g-5 py-4">

              {collab.map((collab, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg"
                >
                  

                    <img
                      src={collab.image}
                      alt={collab.name}
                      className="img-fluid chapter-logo"
                    />

                  
            </div>
            ))}

            </div>
            </div>

        </>
    )
}
export default Collaboration