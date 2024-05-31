import React from 'react';
import imageUrl from "../../images/services/service-bg.jpg";



const ResturantSec = (props) => {
    const imageUrl = "../../images/services/service-bg.jpg";

    return (
        <section className="rastaurant-section mb-155">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 pr-0">
                        <div className="rastaurant-left"></div>
                    </div>
                    <div className="col-lg-6 pl-0">
                    <div className="rastaurant-right pt-240 pb-250 rpt-140 rpb-150">
                        <div className="ras-content pl-70">
                            <h2 className="border-text">Vida Urbana</h2>
                            <h2 className="text-white">Conveniencia<br/> Innovación<br/> Comunidad</h2>
                        </div>
                    </div>

                    </div>
                    </div>
                </div>
        </section>
    )
}

export default ResturantSec;