import { useState, useEffect } from 'react'
import Axios from "axios"
import { uploadFileAndGetURL } from '../firebase';


export default function Feature(props) {
    const [created, setCreated] = useState(false)
    const initData = {
        heading: 'Why Choose Us',
        paragraph: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet',
        icon1title: 'Services',
        icon1subtitle: 'Quality',
        icon2subtitle: 'Creative',
        icon2title: 'Designers',
        icon3subtitle: 'Free',
        icon3title: 'Consultation',
        icon4title: 'Support',
        icon4subtitle: 'Customer',
        imgSrc: 'img/feature.jpg'

    }
    const [data, setData] = useState(initData)
    useEffect(() => {
        if (props.websiteID) {
            Axios.get(`/pagedetail?path=feature&website=${props.websiteID}`)
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
                <div className="container feature px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 ps-lg-0">
                                <div className="section-title text-start">
                                    <h1 className="display-5 mb-4">{data.heading}</h1>
                                </div>
                                {data.paragraph && (<p className="mb-4 pb-2">{data.paragraph}</p>)}
                                <div className="row g-4">
                                    {data.icon1title && (<div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                                                <i className="fa fa-check fa-2x text-primary"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-2">{data.icon1subtitle}</p>
                                                <h5 className="mb-0">{data.icon1title}</h5>
                                            </div>
                                        </div>
                                    </div>)}
                                    {data.icon2title && (<div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                                                <i className="fa fa-user-check fa-2x text-primary"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-2">{data.icon2subtitle}</p>
                                                <h5 className="mb-0">{data.icon2title}</h5>
                                            </div>
                                        </div>
                                    </div>)}
                                    {data.icon3title && (<div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                                                <i className="fa fa-drafting-compass fa-2x text-primary"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-2">{data.icon3subtitle}</p>
                                                <h5 className="mb-0">{data.icon3title}</h5>
                                            </div>
                                        </div>
                                    </div>)}
                                    {data.icon4title && (<div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                                                <i className="fa fa-headphones fa-2x text-primary"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-2">{data.icon4subtitle}</p>
                                                <h5 className="mb-0">{data.icon4title}</h5>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={data.imgSrc} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}

            {props.edit && (<><hr />
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="heading">Heading</label>
                            <input type="text" id="heading" className="form-control" data-id="heading" value={data.heading} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="paragraph">Paragraph</label>
                            <textarea id="paragraph" className="form-control" data-id="paragraph" value={data.paragraph} onChange={handleChange}></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="icon1title">Icon 1 Title</label>
                            <input type="text" id="icon1title" className="form-control" data-id="icon1title" value={data.icon1title} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="icon1subtitle">Icon 1 Subtitle</label>
                            <input type="text" id="icon1subtitle" className="form-control" data-id="icon1subtitle" value={data.icon1subtitle} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="icon2subtitle">Icon 2 Subtitle</label>
                            <input type="text" id="icon2subtitle" className="form-control" data-id="icon2subtitle" value={data.icon2subtitle} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="icon2title">Icon 2 Title</label>
                            <input type="text" id="icon2title" className="form-control" data-id="icon2title" value={data.icon2title} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="icon3subtitle">Icon 3 Subtitle</label>
                            <input type="text" id="icon3subtitle" className="form-control" data-id="icon3subtitle" value={data.icon3subtitle} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="icon3title">Icon 3 Title</label>
                            <input type="text" id="icon3title" className="form-control" data-id="icon3title" value={data.icon3title} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="icon4title">Icon 4 Title</label>
                            <input type="text" id="icon4title" className="form-control" data-id="icon4title" value={data.icon4title} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="icon4subtitle">Icon 4 Subtitle</label>
                            <input type="text" id="icon4subtitle" className="form-control" data-id="icon4subtitle" value={data.icon4subtitle} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="imgSrc">Image Source</label>
                            <div className='input-group'>
                                <input type="text" id="imgSrc" className="form-control" data-id="imgSrc" value={data.imgSrc} onChange={handleChange} />
                                <input type="file" id="profileImageInput" className="form-control" data-id="imgSrc" accept="image/*" onChange={handleImageChange} />
                            </div>

                        </div>
                    </div>
                </div>
                <button className="btn btn-primary my-4" onClick={handleClick}>{props.websiteID ? 'Update' : 'Save'}</button>&nbsp;
                {props.handleDelete && (<button className="btn btn-danger my-4" onClick={() => { props.handleDelete('index'); setData(initData) }}>Delete</button>)}&nbsp;
            </>

            )}
        </>
    )
}
