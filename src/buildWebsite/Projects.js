import { useState, useEffect } from 'react'
import Axios from "axios"
import { uploadFileAndGetURL } from '../firebase';



export default function Projects(props) {
    const [created, setCreated] = useState(false)
    const [data, setData] = useState({
        heading: 'Our Projects',
        card1title: 'General Carpentry',
        card1description: 'Wooden Furniture Manufacturing And Remodeling',
        card1img: '/img/portfolio-1.jpg',
        card2title: 'General Carpentry',
        card2description: 'Wooden Furniture Manufacturing And Remodeling',
        card2img: '/img/portfolio-2.jpg',
        card3title: 'General Carpentry',
        card3description: 'Wooden Furniture Manufacturing And Remodeling',
        card3img: '/img/portfolio-3.jpg',
    })
    useEffect(() => {
        if (props.websiteID) {
            console.log('projects -----------------');
            Axios.get(`/pagedetail?path=projects&website=${props.websiteID}`)
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
        props.handleSave('Projects', 'projects', data)
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
                    <div className="row g-4 portfolio-container">
                        {data.card1title && (<div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                            <div className="rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={data.card1img} alt="" />
                                </div>
                                <div className="border border-5 border-light border-top-0 p-4">
                                    <p className="text-primary fw-medium mb-2">{data.card1title}</p>
                                    <h5 className="lh-base mb-0">{data.card1description}</h5>
                                </div>
                            </div>
                        </div>)}
                        {data.card2title && (<div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                            <div className="rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={data.card2img} alt="" />
                                </div>
                                <div className="border border-5 border-light border-top-0 p-4">
                                    <p className="text-primary fw-medium mb-2">{data.card2title}</p>
                                    <h5 className="lh-base mb-0">{data.card2description}</h5>
                                </div>
                            </div>
                        </div>)}
                        {data.card3title && (<div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                            <div className="rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={data.card3img} alt="" />
                                </div>
                                <div className="border border-5 border-light border-top-0 p-4">
                                    <p className="text-primary fw-medium mb-2">{data.card3title}</p>
                                    <h5 className="lh-base mb-0">{data.card3description}</h5>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            )}
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
                    <label htmlFor="card1description">Card 1 Description</label>
                    <textarea id="card1description" data-id="card1description" value={data.card1description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card1img">Card 1 Image URL</label>
                    <input type="text" id="card1img" data-id="card1img" value={data.card1img} onChange={handleChange} />
                    <input type="file" id="profileImageInput" data-id="card1img" accept="image/*" onChange={handleImageChange} />

                </div>
                <div>
                    <label htmlFor="card2title">Card 2 Title</label>
                    <input type="text" id="card2title" data-id="card2title" value={data.card2title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card2description">Card 2 Description</label>
                    <textarea id="card2description" data-id="card2description" value={data.card2description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card2img">Card 2 Image URL</label>
                    <input type="text" id="card2img" data-id="card2img" value={data.card2img} onChange={handleChange} />
                    <input type="file" id="profileImageInput" data-id="card2img" accept="image/*" onChange={handleImageChange} />

                </div>
                <div>
                    <label htmlFor="card3title">Card 3 Title</label>
                    <input type="text" id="card3title" data-id="card3title" value={data.card3title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card3description">Card 3 Description</label>
                    <textarea id="card3description" data-id="card3description" value={data.card3description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="card3img">Card 3 Image URL</label>
                    <input type="text" id="card3img" data-id="card3img" value={data.card3img} onChange={handleChange} />
                    <input type="file" id="profileImageInput" data-id="card3img" accept="image/*" onChange={handleImageChange} />

                </div>
                <button onClick={handleClick}>Save</button>
            </>)}
        </div>
    )
}
