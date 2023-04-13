import { useState, useEffect } from 'react'
import Axios from "axios"
import { uploadFileAndGetURL } from '../firebase';



export default function About(props) {
    const [created, setCreated] = useState(false)
    const [data, setData] = useState({
        title: 'About Us',
        paragraph: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet',
        counter1: 4444,
        p1: 'Clients',
        counter2: 4444,
        p2: 'Projects',
        btn: 'Explore More',
        img: '/img/about.jpg',
    })
    useEffect(() => {
        if (props.websiteID) {
            Axios.get(`http://localhost:4000/pagedetail?path=about&website=${props.websiteID}`)
                .then(res => {
                    if (res.data) {
                        setData(res.data)
                        console.log(res.data);
                        console.log(res.data);
                        setCreated(true)
                    }
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

    const handleImageChange = async (event) => {
        const { files, dataset } = event.target
        const imgURL = await uploadFileAndGetURL(files[0], Date.now() + 'home');
        if (imgURL) {
            let obj = { ...data }
            obj[dataset.id] = imgURL
            setData(obj)
        }

    }

    return (
        <>
            {(created || props.edit) && (<div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container about px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={data.img} style={{ objectFit: "cover" }} alt="" />
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
                <div class="row"> <div class="col-md-6"> <div class="form-group"> <label for="title">Title</label> <input type="text" class="form-control" id="title" data-id="title" value={data.title} onChange={handleChange} /> </div>
                <div class="form-group">
                <label for="paragraph">Paragraph</label>
                <input type="text" class="form-control" id="paragraph" data-id="paragraph" value={data.paragraph} onChange={handleChange} />
                </div>

                <div class="form-group">
                <label for="counter1">Counter 1</label>
                <input type="text" class="form-control" id="counter1" data-id="counter1" value={data.counter1} onChange={handleChange} />
                </div>

                <div class="form-group">
                <label for="p1">P1</label>
                <input type="text" class="form-control" id="p1" data-id="p1" value={data.p1} onChange={handleChange} />
                </div>
                </div> <div class="col-md-6"> <div class="form-group"> <label for="counter2">Counter 2</label> <input type="text" class="form-control" id="counter2" data-id="counter2" value={data.counter2} onChange={handleChange} /> </div>
                <div class="form-group">
                <label for="p2">P2</label>
                <input type="text" class="form-control" id="p2" data-id="p2" value={data.p2} onChange={handleChange} />
                </div>

                <div class="form-group">
                <label for="btn">Button</label>
                <input type="text" class="form-control" id="btn" data-id="btn" value={data.btn} onChange={handleChange} />
                </div>

                <div class="form-group">
                <label for="img">Image</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="img" data-id="img" value={data.img} onChange={handleChange} />
                    <input type="file" class="form-control" id="profileImageInput" data-id="img" accept="image/*" onChange={handleImageChange} />
                </div>
                </div>
                </div> </div> 
                <div class="row"> 
                    <div class="col-md-12"> 
                         
                    </div> 
                </div>
                <br/>
                <button type="button" class="btn btn-primary" onClick={handleClick}>Save</button>{' '}
            </>)}
        </>
    )
}
