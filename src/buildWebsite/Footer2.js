import { useState, useEffect } from 'react'
import Axios from "axios"


export default function Footer(props) {
    const [data, setData] = useState({
        heading4_1: "Address",
        address: "123 Street, New York, USA",
        phone: "+012 345 67890",
        email: "info@example.com",
        twitterLink: "",
        facebookLink: "",
        youtubeLink: "",
        linkedinLink: "",

        heading4_2: "Services",
        carpentry: "General Carpentry",
        carpentryLink: "",
        furnitureRemodeling: "Furniture Remodeling",
        furnitureRemodelingLink: "",
        woodenFloor: "Wooden Floor",
        woodenFurniture: "Wooden Furniture",
        woodenFloorLink: "",
        woodenFurnitureLink: "",
        customCarpentry: "Custom Carpentry",
        customCarpentryLink: "",


        heading4_3: "Quick Links",
        aboutUs: "About Us",
        aboutUsLink: "",
        contactUs: "Contact Us",
        contactUsLink: "",
        services: "Our Services",
        servicesLink: "",
        termsAndCondition: "Terms & Condition",
        termsAndConditionLink: "",
        support: "Support",
        supportLink: "",
        heading4_4: "Newsletter",
        siteName: "Your Site Name",
        newsletterText: "Dolor amet sit justo amet elitr clita ipsum elitr est."
    })
    useEffect(() => {
        if (props.websiteID) {
            Axios.get(`http://localhost:4000/pagedetail?path=footer&website=${props.websiteID}`)
                .then(res => {
                    console.log(res)
                    setData(res.data)
                })
                .catch(error => console.log(error))
        }

    }, [])

    const handleChange = (event) => {
        const { dataset, value } = event.target;
        setData(prevState => ({
            ...prevState,
            [dataset.id]: value
        }));
    }
    const handleClick = () => {
        props.handleSave('Footer', 'footer', data)

    }
    return (
        <div>
            <div className="container-fludata-id bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        {data.heading4_1 && (<div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">{data.heading4_1}</h4>
                            {data.address && (<p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{data.address}</p>)}
                            {data.phone && (<p className="mb-2"><i className="fa fa-phone-alt me-3"></i>{data.phone}</p>)}
                            {data.email && (<p className="mb-2"><i className="fa fa-envelope me-3"></i>{data.email}</p>)}
                            <div className="d-flex pt-2">
                                {data.twitterLink && (<a className="btn btn-outline-light btn-social" href={data.twitterLink}><i className="fab fa-twitter"></i></a>)}
                                {data.facebookLink && (<a className="btn btn-outline-light btn-social" href={data.facebookLink}><i className="fab fa-facebook-f"></i></a>)}
                                {data.youtubeLink && (<a className="btn btn-outline-light btn-social" href={data.youtubeLink}><i className="fab fa-youtube"></i></a>)}
                                {data.linkedinLink && (<a className="btn btn-outline-light btn-social" href={data.linkedinLink}><i className="fab fa-linkedin-in"></i></a>)}
                            </div>
                        </div>)}
                        {data.heading4_2 && (<div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">{data.heading4_2}</h4>
                            {data.carpentry && (<a className="btn btn-link" href={data.carpentryLink}>{data.carpentry}</a>)}
                            {data.furnitureRemodeling && (<a className="btn btn-link" href={data.furnitureRemodelingLink}>{data.furnitureRemodeling}</a>)}
                            {data.woodenFloor && (<a className="btn btn-link" href={data.woodenFloorLink}>{data.woodenFloor}</a>)}
                            {data.woodenFurniture && (<a className="btn btn-link" href={data.woodenFurnitureLink}>{data.woodenFurniture}</a>)}
                            {data.customCarpentry && (<a className="btn btn-link" href={data.customCarpentryLink}>{data.customCarpentry}</a>)}
                        </div>)}
                        {data.heading4_3 && (<div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">{data.heading4_3}</h4>
                            {data.aboutUs && (<a className="btn btn-link" href={data.aboutUsLink}>{data.aboutUs}</a>)}
                            {data.contactUs && (<a className="btn btn-link" href={data.contactUsLink}>{data.contactUs}</a>)}
                            {data.services && (<a className="btn btn-link" href={data.servicesLink}>{data.services}</a>)}
                            {data.termsAndCondition && (<a className="btn btn-link" href={data.termsAndConditionLink}>{data.termsAndCondition}</a>)}
                            {data.support && (<a className="btn btn-link" href={data.supportLink}>{data.support}</a>)}
                        </div>)}
                        {data.heading4_4 && (<div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">{data.heading4_4}</h4>
                            <p>{data.newsletterText}</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                                <input className="form-}control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>)}
                    </div>
                    <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    © <a className="border-bottom" href="#">{data.siteName}</a>, All Right Reserved.
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {props.edit && (<>
                <div>
                    <div>
                        <label htmlFor="heading4_1">Heading 1</label>
                        <input type="text" data-id="heading4_1" name="heading4_1" value={data.heading4_1} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input type="text" data-id="address" value={data.address} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" data-id="phone" value={data.phone} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" data-id="email" value={data.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="twitterLink">Twitter Link:</label>
                        <input type="text" data-id="twitterLink" value={data.twitterLink} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="facebookLink">Facebook Link:</label>
                        <input type="text" data-id="facebookLink" value={data.facebookLink} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="youtubeLink">Youtube Link:</label>
                        <input type="text" data-id="youtubeLink" value={data.youtubeLink} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="linkedinLink">Linkedin Link:</label>
                        <input type="text" data-id="linkedinLink" value={data.linkedinLink} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="heading4_2">Heading 2</label>
                        <input type="text" id="heading4_2" data-id="heading4_2" value={data.heading4_2} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="carpentry">Carpentry</label>
                        <input type="text" id="carpentry" data-id="carpentry" value={data.carpentry} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="carpentryLink">Carpentry Link</label>
                        <input type="text" id="carpentryLink" data-id="carpentryLink" value={data.carpentryLink} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="furnitureRemodeling">Furniture Remodeling</label>
                        <input type="text" id="furnitureRemodeling" data-id="furnitureRemodeling" value={data.furnitureRemodeling} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="furnitureRemodelingLink">Furniture Remodeling Link</label>
                        <input type="text" id="furnitureRemodelingLink" data-id="furnitureRemodelingLink" value={data.furnitureRemodelingLink} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="woodenFloor">Wooden Floor</label>
                        <input type="text" id="woodenFloor" data-id="woodenFloor" value={data.woodenFloor} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="woodenFloorLink">Wooden Floor Link</label>
                        <input type="text" id="woodenFloorLink" data-id="woodenFloorLink" value={data.woodenFloorLink} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="woodenFurniture">Wooden Furniture</label>
                        <input type="text" id="woodenFurniture" data-id="woodenFurniture" value={data.woodenFurniture} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="woodenFurnitureLink">Wooden Furniture Link</label>
                        <input type="text" id="woodenFurnitureLink" data-id="woodenFurnitureLink" value={data.woodenFurnitureLink} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="customCarpentry">Custom Carpentry</label>
                        <input type="text" id="customCarpentry" data-id="customCarpentry" value={data.customCarpentry} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="customCarpentryLink">Custom Carpentry Link</label>
                        <input type="text" id="customCarpentryLink" data-id="customCarpentryLink" value={data.customCarpentryLink} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="heading4_3">Heading 3</label>
                        <input type="text" id="heading4_3" data-id="heading4_3" value={data.heading4_3} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="aboutUs">About Us</label>
                        <input type="text" id="aboutUs" data-id="aboutUs" value={data.aboutUs} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="aboutUsLink">About Us Link</label>
                        <input type="text" id="aboutUsLink" data-id="aboutUsLink" value={data.aboutUsLink} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="contactUs">Contact Us</label>
                        <input type="text" id="contactUs" data-id="contactUs" value={data.contactUs} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="contactUsLink">Contact Us Link</label>
                        <input type="text" id="contactUsLink" data-id="contactUsLink" value={data.contactUsLink} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="services">Services</label>
                        <input type="text" id="services" data-id="services" value={data.services} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="servicesLink">Services Link</label>
                        <input type="text" id="servicesLink" data-id="servicesLink" value={data.servicesLink} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="termsAndCondition">Terms and Condition</label>
                        <input type="text" id="termsAndCondition" data-id="termsAndCondition" value={data.termsAndCondition} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="termsAndConditionLink">Terms and Condition Link</label>
                        <input type="text" id="termsAndConditionLink" data-id="termsAndConditionLink" value={data.termsAndConditionLink} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="support">Support</label>
                        <input type="text" id="support" data-id="support" value={data.support} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="supportLink">Support Link</label>
                        <input type="text" id="supportLink" data-id="supportLink" value={data.supportLink} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="heading4_4">Heading 4</label>
                        <input type="text" data-id="heading4_4" name="heading4_4" value={data.heading4_4} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="newsletterText">Newsletter Text:</label>
                        <input type="text" data-id="newsletterText" value={data.newsletterText} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="siteName">Site Name:</label>
                        <input type="text" data-id="siteName" value={data.siteName} onChange={handleChange} />
                    </div>
                </div>
                {props.websiteID ?
                    <button onClick={handleClick}>Update</button>
                    :
                    <button onClick={handleClick}>Save</button>
                }
            </>)}
        </div>

    )

}
