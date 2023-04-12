import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios"


export default function Header(props) {
    const [created, setCreated] = useState(false)

    const [data, setData] = useState({
        address: "123 Street, New York, USA",
        hours: "Mon - Fri : 09.00 AM - 09.00 PM",
        phone: "+012 345 6789",
        facebook: '!#',
        twitter: '!#',
        linkedin: '!#',
        instagram: '!#',
        homeLink: '!#',
        name: 'WooDY',
        home: 'Home',
        about: 'About',
        services: 'Service',
        projects: 'Project',
        feature: 'Feature',
        quote: 'Quote',
        team: 'Our Team',
        contact: 'Contact',

    })
    useEffect(() => {
        if (props.websiteID) {
            Axios.get(`/pagedetail?path=header&website=${props.websiteID}`)
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
        props.handleSave('Header', 'header', data)

    }

    return (
        <div>
            <link href="/img/favicon.ico" rel="icon"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap" rel="stylesheet"></link>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"></link>
            <link href="/lib/animate/animate.min.css" rel="stylesheet"></link>
            <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"></link>
            <link href="/lib/lightbox/css/lightbox.min.css" rel="stylesheet"></link>
            <link href="/css/bootstrap.min.css" rel="stylesheet"></link>
            <link href="/css/style.css" rel="stylesheet"></link>

            {(created || props.edit) && (<><div className="container-fluid bg-light p-0">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        {data.address && (<div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2"></small>
                            <small>{data.address}</small>
                        </div>)}
                        {data.hours && (<div className="h-100 d-inline-flex align-items-center py-3">
                            <small className="far fa-clock text-primary me-2"></small>
                            <small>{data.hours}</small>
                        </div>)}
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        {data.phone && (<div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-phone-alt text-primary me-2"></small>
                            <small>{data.phone}</small>
                        </div>)}
                        <div className="h-100 d-inline-flex align-items-center">
                            {data.facebook && (<a className="btn btn-sm-square bg-white text-primary me-1" href={data.facebook}><i className="fab fa-facebook-f"></i></a>)}
                            {data.twitter && (<a className="btn btn-sm-square bg-white text-primary me-1" href={data.twitter}><i className="fab fa-twitter"></i></a>)}
                            {data.linkedin && (<a className="btn btn-sm-square bg-white text-primary me-1" href={data.linkedin}><i className="fab fa-linkedin-in"></i></a>)}
                            {data.instagram && (<a className="btn btn-sm-square bg-white text-primary me-0" href={data.instagram}><i className="fab fa-instagram"></i></a>)}
                        </div>
                    </div>
                </div>
            </div>
                <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                    {data.name && (<Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                        <h2 className="m-0 text-primary">{data.name}</h2>
                    </Link>)}
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            {data.home && (<Link to="/index" className="nav-item nav-link active">{data.home}</Link>)}
                            {data.about && (<Link to="/about" className="nav-item nav-link">{data.about}</Link>)}
                            {data.services && (<Link to="/service" className="nav-item nav-link">{data.services}</Link>)}
                            {data.projects && (<Link to="/project" className="nav-item nav-link">{data.projects}</Link>)}
                            {(data.feature || data.quote || data.team) && (<div className="nav-item dropdown">
                                <a href="!#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">more</a>
                                <div className="dropdown-menu fade-up m-0">
                                    {data.feature && (<Link to="/feature" className="dropdown-item">{data.feature}</Link>)}
                                    {data.quote && (<Link to="/quote" className="dropdown-item">{data.quote}</Link>)}
                                    {data.team && (<Link to="/team" className="dropdown-item">{data.team}</Link>)}
                                </div>
                            </div>)}
                        </div>
                        {data.contact && (<Link to="/contact" className="nav-item nav-link">{data.contact}</Link>)}
                    </div>
                </nav ></>)}

            {props.edit && (<>
                <hr />
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" data-id="address" value={data.address} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="hours">Hours</label>
                    <input type="text" id="hours" data-id="hours" value={data.hours} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" data-id="phone" value={data.phone} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" id="facebook" data-id="facebook" value={data.facebook} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" id="twitter" data-id="twitter" value={data.twitter} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input type="text" id="linkedin" data-id="linkedin" value={data.linkedin} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="instagram">Instagram</label>
                    <input type="text" id="instagram" data-id="instagram" value={data.instagram} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="homeLink">Home Link</label>
                    <input type="text" id="homeLink" data-id="homeLink" value={data.homeLink} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" data-id="name" value={data.name} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="home">Home</label>
                    <input type="text" id="home" data-id="home" value={data.home} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="about">About</label>
                    <input type="text" id="about" data-id="about" value={data.about} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="services">Services</label>
                    <input type="text" id="services" data-id="services" value={data.services} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="projects">Projects</label>
                    <input type="text" id="projects" data-id="projects" value={data.projects} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="feature">Feature</label>
                    <input type="text" id="feature" data-id="feature" value={data.feature} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="quote">Quote</label>
                    <input type="text" id="quote" data-id="quote" value={data.quote} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="team">Team</label>
                    <input type="text" id="team" data-id="team" value={data.team} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="contact">Contact</label>
                    <input type="text" id="contact" data-id="contact" value={data.contact} onChange={handleChange} />
                </div>
                <button onClick={handleClick}>Save</button>
            </>)}
        </div >
    )
}
