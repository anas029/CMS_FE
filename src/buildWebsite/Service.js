import { useState, useEffect } from 'react'
import Axios from "axios"


export default function Service(props) {
    const [created, setCreated] = useState(false)
    const [data, setData] = useState({
        heading: 'Our Services',
        card1title: 'General Carpentry',
        card1p: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
        card1btn: 'Read More',
        card1img: 'img/service-1.jpg',
        card2title: 'Furniture Manufacturing',
        card2p: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
        card2btn: 'Read More',
        card2img: "img/service-2.jpg",





    })
    const headerOptions =
        ` <!-- Service Start -->
        <div className="container-xxl py-5">
            <div className="container">
                <div className="section-title text-center">
                    <h1 className="display-5 mb-5">Our Services</h1>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="img/service-1.jpg" alt="">
                            </div>
                            <div className="p-4 text-center border border-5 border-light border-top-0">
                                <h4 className="mb-3">General Carpentry</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="img/service-2.jpg" alt="">
                            </div>
                            <div className="p-4 text-center border border-5 border-light border-top-0">
                                <h4 className="mb-3">Furniture Manufacturing</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="img/service-3.jpg" alt="">
                            </div>
                            <div className="p-4 text-center border border-5 border-light border-top-0">
                                <h4 className="mb-3">Furniture Remodeling</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="img/service-4.jpg" alt="">
                            </div>
                            <div className="p-4 text-center border border-5 border-light border-top-0">
                                <h4 className="mb-3">Wooden Floor</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="img/service-5.jpg" alt="">
                            </div>
                            <div className="p-4 text-center border border-5 border-light border-top-0">
                                <h4 className="mb-3">Wooden Furniture</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="img/service-6.jpg" alt="">
                            </div>
                            <div className="p-4 text-center border border-5 border-light border-top-0">
                                <h4 className="mb-3">Custom Work</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Service End -->`
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="section-title text-center">
                        <h1 className="display-5 mb-5">{data.heading}</h1>
                    </div>
                    <div className="row g-4">
                        {data.card1title && (<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={data.card1img} alt="" />
                                </div>
                                <div className="p-4 text-center border border-5 border-light border-top-0">
                                    <h4 className="mb-3">{data.card1title}</h4>
                                    <p>{data.card1p}</p>
                                    {data.card1btn && (<a className="fw-medium" href="!#">{data.card1btn}<i className="fa fa-arrow-right ms-2"></i></a>)}
                                </div>
                            </div>
                        </div>)}
                        {data.card2title && (<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={data.card2img} alt="" />
                                </div>
                                <div className="p-4 text-center border border-5 border-light border-top-0">
                                    <h4 className="mb-3">{data.card2title}</h4>
                                    <p>{data.card2p}</p>
                                    {data.card2btn && (<a className="fw-medium" href="!#">{data.card2btn}<i className="fa fa-arrow-right ms-2"></i></a>)}
                                </div>
                            </div>
                        </div>)}
                        {(<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/service-3.jpg" alt="" />
                                </div>
                                <div className="p-4 text-center border border-5 border-light border-top-0">
                                    <h4 className="mb-3">Furniture Remodeling</h4>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                    {data.card3btn && (<a className="fw-medium" href="!#">{data.card3btn}<i className="fa fa-arrow-right ms-2"></i></a>)}
                                </div>
                            </div>
                        </div>)}
                        {(<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/service-4.jpg" alt="" />
                                </div>
                                <div className="p-4 text-center border border-5 border-light border-top-0">
                                    <h4 className="mb-3">Wooden Floor</h4>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                    {data.card4btn && (<a className="fw-medium" href="!#">{data.card4btn}<i className="fa fa-arrow-right ms-2"></i></a>)}
                                </div>
                            </div>
                        </div>)}
                        {(<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/service-5.jpg" alt="" />
                                </div>
                                <div className="p-4 text-center border border-5 border-light border-top-0">
                                    <h4 className="mb-3">Wooden Furniture</h4>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                    {data.card5btn && (<a className="fw-medium" href="!#">{data.card5btn}<i className="fa fa-arrow-right ms-2"></i></a>)}
                                </div>
                            </div>
                        </div>)}
                        {(<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/service-6.jpg" alt="" />
                                </div>
                                <div className="p-4 text-center border border-5 border-light border-top-0">
                                    <h4 className="mb-3">Custom Work</h4>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                    {data.card6btn && (<a className="fw-medium" href="!#">{data.card6btn}<i className="fa fa-arrow-right ms-2"></i></a>)}
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>



        </div>
    )
}
