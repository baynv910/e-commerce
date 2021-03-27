import React from 'react'

const Carousel = () => {
    return (
        <div className="carousel carousel-welcome bg-primary fixed-top">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item w-100 active"
                        style={{"background":"url('/images/carousel/banner01.jpg')", "backgroundPosition": "center" ,
                        "backgroundSize": "cover", "backgroundRepeat": "no-repeat", "height": "100vh"}}>
                        
                    </div>
                    <div className="carousel-item w-100"
                        style={{"background":"url('/images/carousel/banner02.jpg')", "backgroundPosition": "center",
                        "backgroundSize": "cover", "backgroundRepeat": "no-repeat", "height": "100vh"}}>
                        
                    </div>
                    <div className="carousel-item w-100"
                        style={{"background":"url('/images/carousel/banner03.jpg')", "backgroundPosition": "center",
                        "backgroundSize": "cover", "backgroundRepeat": "no-repeat", "height": "100vh"}}>
                        
                    </div>
                </div>
                {/*<div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>*/}
            </div>
        </div>
    )
}

export default Carousel