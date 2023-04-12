import { useState, useEffect } from 'react'
import Axios from "axios"


export default function About(props) {
    const [created, setCreated] = useState(false)
    const [data, setData] = useState({
        title: 'About Us',
        paragraph: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet',
        counter1: 4444,
        p1: 'Clients',
        counter2: 4444,
        p2: 'Projects',
        btn: 'Explore More'
    })
    useEffect(() => {
        if (props.websiteID) {
            Axios.get(`http://localhost:4000/pagedetail?path=about&website=${props.websiteID}`)
                .then(res => {
                    setData(res.data)
                    console.log(res.data);
                    setCreated(true)
                })
                .catch(error => console.log(error))
        }

    }, [props.websiteID])

    const handleChange = (event) => {
        const { dataset, value } = event.target;
        setData(prevState => ({
            ...prevState,
            [dataset.id]: value
        }));
    }
    const handleClick = () => {
        props.handleSave('About', 'about', data)
    }

    return (
        <div>
            {(created || props.edit) && (<div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container about px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src="img/about.jpg" style={{ objectFit: "cover" }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <div className="section-title text-start">
                                    <h1 className="display-5 mb-4">{data.title}</h1>
                                </div>
                                <p className="mb-4 pb-2">{data.paragraph}</p>
                                <div className="row g-4 mb-4 pb-2">
                                    {data.p1 && (<div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                                                <i className="fa fa-users fa-2x text-primary"></i>
                                            </div>
                                            <div className="ms-3">
                                                <h2 className="text-primary mb-1" data-toggle="counter-up">{data.counter}</h2>
                                                <p className="fw-medium mb-0">{data.p1}</p>
                                            </div>
                                        </div>
                                    </div>)}
                                    {data.p2 && (<div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                                                <i className="fa fa-check fa-2x text-primary"></i>
                                            </div>
                                            <div className="ms-3">
                                                <h2 className="text-primary mb-1" data-toggle="counter-up">{data.counter}</h2>
                                                <p className="fw-medium mb-0">{data.p2}</p>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                                {data.btn && (<a href="!#" className="btn btn-primary py-3 px-5">{data.btn}</a>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
            {props.edit && (<>
                <hr />
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" data-id="title" value={data.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="paragraph">Paragraph</label>
                    <input type="text" id="paragraph" data-id="paragraph" value={data.paragraph} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="counter1">Counter 1</label>
                    <input type="text" id="counter1" data-id="counter1" value={data.counter1} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="p1">P1</label>
                    <input type="text" id="p1" data-id="p1" value={data.p1} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="counter2">Counter 2</label>
                    <input type="text" id="counter2" data-id="counter2" value={data.counter2} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="p2">P2</label>
                    <input type="text" id="p2" data-id="p2" value={data.p2} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="btn">Button</label>
                    <input type="text" id="btn" data-id="btn" value={data.btn} onChange={handleChange} />
                </div>
                <button onClick={handleClick}>Save</button>
            </>)}
        </div>
    )
}
