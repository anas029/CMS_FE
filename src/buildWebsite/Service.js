import { useState, useEffect } from 'react'
import Axios from "axios"
import { uploadFileAndGetURL } from '../firebase';


export default function Service(props) {
    const [created, setCreated] = useState(false)
    const [data, setData] = useState({
        heading: 'Our Services',
        card1title: 'General Carpentry',
        card1p: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
        card1btn: 'Read More',
        card1img: '/img/service-1.jpg',
        card2title: 'Furniture Manufacturing',
        card2p: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
        card2btn: 'Read More',
        card2img: "/img/service-2.jpg",
        card3title: 'Furniture Remodeling',
        card3p: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
        card3btn: 'Read More',
        card3img: "/img/service-3.jpg",
        card4title: 'Wooden Floor',
        card4p: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
        card4btn: 'Read More',
        card4img: "/img/service-4.jpg",
        card5title: 'Wooden Furniture',
        card5p: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
        card5btn: 'Read More',
        card5img: "/img/service-5.jpg",
        card6title: 'Custom Work',
        card6p: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
        card6btn: 'Read More',
        card6img: "/img/service-6.jpg",
    })

    useEffect(() => {
        if (props.websiteID) {
            Axios.get(`/pagedetail?path=service&website=${props.websiteID}`)
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
        props.handleSave('Services', 'service', data)
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
        <div>
            {(created || props.edit) && (<div className="container-xxl py-5">
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
                        {data.card3title && (<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={data.card3img} alt="" />
                                </div>
                                <div className="p-4 text-center border border-5 border-light border-top-0">
                                    <h4 className="mb-3">{data.card3title}</h4>
                                    <p>{data.card3p}</p>
                                    {data.card3btn && (<a className="fw-medium" href="!#">{data.card3btn}<i className="fa fa-arrow-right ms-2"></i></a>)}
                                </div>
                            </div>
                        </div>)}
                        {data.card4title && (<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={data.card4img} alt="" />
                                </div>
                                <div className="p-4 text-center border border-5 border-light border-top-0">
                                    <h4 className="mb-3">{data.card4title}</h4>
                                    <p>{data.card4p}</p>
                                    {data.card4btn && (<a className="fw-medium" href="!#">{data.card4btn}<i className="fa fa-arrow-right ms-2"></i></a>)}
                                </div>
                            </div>
                        </div>)}
                        {data.card5title && (<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={data.card5img} alt="" />
                                </div>
                                <div className="p-4 text-center border border-5 border-light border-top-0">
                                    <h4 className="mb-3">{data.card5title}</h4>
                                    <p>{data.card5p}</p>
                                    {data.card5btn && (<a className="fw-medium" href="!#">{data.card5btn}<i className="fa fa-arrow-right ms-2"></i></a>)}
                                </div>
                            </div>
                        </div>)}
                        {data.card6title && (<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={data.card6img} alt="" />
                                </div>
                                <div className="p-4 text-center border border-5 border-light border-top-0">
                                    <h4 className="mb-3">{data.card6title}</h4>
                                    <p>{data.card6p}</p>
                                    {data.card6btn && (<a className="fw-medium" href="!#">{data.card6btn}<i className="fa fa-arrow-right ms-2"></i></a>)}
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>)}

            {props.edit && (<>
                <hr />
                <div>
                    <label htmlFor="heading">Heading</label>
                    <input type="text" id="heading" data-id="heading" value={data.heading} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="card1title">Card 1 Title</label>
                    <input type="text" id="card1title" data-id="card1title" value={data.card1title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card1p">Card 1 Paragraph</label>
                    <input type="text" id="card1p" data-id="card1p" value={data.card1p} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card1btn">Card 1 Button</label>
                    <input type="text" id="card1btn" data-id="card1btn" value={data.card1btn} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card1img">Card 1 Image</label>
                    <input type="text" id="card1img" data-id="card1img" value={data.card1img} onChange={handleChange} />
                    <input type="file" id="profileImageInput" data-id="card1img" accept="image/*" onChange={handleImageChange} />
                </div>

                <div>
                    <label htmlFor="card2title">Card 2 Title</label>
                    <input type="text" id="card2title" data-id="card2title" value={data.card2title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card2p">Card 2 Paragraph</label>
                    <input type="text" id="card2p" data-id="card2p" value={data.card2p} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card2btn">Card 2 Button</label>
                    <input type="text" id="card2btn" data-id="card2btn" value={data.card2btn} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card2img">Card 2 Image</label>
                    <input type="text" id="card2img" data-id="card2img" value={data.card2img} onChange={handleChange} />
                    <input type="file" id="profileImageInput" data-id="card2img" accept="image/*" onChange={handleImageChange} />
                </div>

                <div>
                    <label htmlFor="card3title">Card 3 Title</label>
                    <input type="text" id="card3title" data-id="card3title" value={data.card3title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card3p">Card 3 Paragraph</label>
                    <input type="text" id="card3p" data-id="card3p" value={data.card3p} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card3btn">Card 3 Button</label>
                    <input type="text" id="card3btn" data-id="card3btn" value={data.card3btn} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card3img">Card 3 Image</label>
                    <input type="text" id="card3img" data-id="card3img" value={data.card3img} onChange={handleChange} />
                    <input type="file" id="profileImageInput" data-id="card3img" accept="image/*" onChange={handleImageChange} />
                </div>

                <div>
                    <label htmlFor="card4title">Card 4 Title</label>
                    <input type="text" id="card4title" data-id="card4title" value={data.card4title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card4p">Card 4 Paragraph</label>
                    <input type="text" id="card4p" data-id="card4p" value={data.card4p} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="card4btn">Card 4 Button Text</label>
                    <input type="text" id="card4btn" data-id="card4btn" value={data.card4btn} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="card4img">Card 4 Image URL</label>
                    <input type="text" id="card4img" data-id="card4img" value={data.card4img} onChange={handleChange} />
                    <input type="file" id="profileImageInput" data-id="card4img" accept="image/*" onChange={handleImageChange} />
                </div>

                <div>
                    <label htmlFor="card5title">Card 5 Title</label>
                    <input type="text" id="card5title" data-id="card5title" value={data.card5title} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="card5p">Card 5 Paragraph</label>
                    <input type="text" id="card5p" data-id="card5p" value={data.card5p} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="card5btn">Card 5 Button Text</label>
                    <input type="text" id="card5btn" data-id="card5btn" value={data.card5btn} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="card5img">Card 5 Image URL</label>
                    <input type="text" id="card5img" data-id="card5img" value={data.card5img} onChange={handleChange} />
                    <input type="file" id="profileImageInput" data-id="card5img" accept="image/*" onChange={handleImageChange} />
                </div>

                <div>
                    <label htmlFor="card6title">Card 6 Title</label>
                    <input type="text" id="card6title" data-id="card6title" value={data.card6title} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="card6p">Card 6 Paragraph</label>
                    <input type="text" id="card6p" data-id="card6p" value={data.card6p} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="card6btn">Card 6 Button Text</label>
                    <input type="text" id="card6btn" data-id="card6btn" value={data.card6btn} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="card6img">Card 6 Image URL</label>
                    <input type="text" id="card6img" data-id="card6img" value={data.card6img} onChange={handleChange} />
                    <input type="file" id="profileImageInput" data-id="card6img" accept="image/*" onChange={handleImageChange} />
                </div>

                <button onClick={handleClick}>Save</button>
            </>)}
        </div>
    )
}
