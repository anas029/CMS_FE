import { useState } from 'react'
import parse from 'html-react-parser';


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
    });
    const footerTemplate = `
    <div class="container-fludata-id bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">${data.heading4_1}</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>${data.address}</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>${data.phone}</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>${data.email}</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href="${data.twitterLink}"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href="${data.facebookLink}"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href="${data.youtubeLink}"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href="${data.linkedinLink}"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">${data.heading4_2}</h4>
                    <a class="btn btn-link" href="${data.carpentryLink}">${data.carpentry}</a>
                    <a class="btn btn-link" href="${data.furnitureRemodelingLink}">${data.furnitureRemodeling}</a>
                    <a class="btn btn-link" href="${data.woodenFloorLink}">${data.woodenFloor}</a>
                    <a class="btn btn-link" href="${data.woodenFurnitureLink}">${data.woodenFurniture}</a>
                    <a class="btn btn-link" href="${data.customCarpentryLink}">${data.customCarpentry}</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">${data.heading4_3}</h4>
                    <a class="btn btn-link" href="${data.aboutUsLink}">${data.aboutUs}</a>
                    <a class="btn btn-link" href="${data.contactUsLink}">${data.contactUs}</a>
                    <a class="btn btn-link" href="${data.servicesLink}">${data.services}</a>
                    <a class="btn btn-link" href="${data.termsAndConditionLink}">${data.termsAndCondition}</a>
                    <a class="btn btn-link" href="${data.supportLink}">${data.support}</a>
                </div>
                    <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">${data.heading4_4}</h4>
                    <p>${data.newsletterText}</p>
                    <div class="position-relative mx-auto" style="max-wdata-idth: 400px;">
                    <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                    <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                    </div>
                    </div>
                    <div class="container">
                    <div class="copyright">
                    <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    © <a class="border-bottom" href="#">${data.siteName}</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                    <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                    Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>`


    const handleChange = (event) => {
        const { dataset, value } = event.target;
        setData(prevState => ({
            ...prevState,
            [dataset.id]: value
        }));
    }
    const handleClick = () => {
        props.handleSave('Home', 'footer', footerTemplate, data)

    }
    return (
        <div>
            <div>{parse(footerTemplate)}</div>
            <div>
                <div>
                    <label htmlFor="heading4_1">Heading 4.1:</label>
                    <input type="text" data-id="heading4_1" name="heading4_1" value={data.heading4_1} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="heading4_2">Heading 4.2:</label>
                    <input type="text" data-id="heading4_2" name="heading4_2" value={data.heading4_2} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="heading4_3">Heading 4.3:</label>
                    <input type="text" data-id="heading4_3" name="heading4_3" value={data.heading4_3} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="heading4_4">Heading 4.4:</label>
                    <input type="text" data-id="heading4_4" name="heading4_4" value={data.heading4_4} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" data-id="address" name="address" value={data.address} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" data-id="phone" name="phone" value={data.phone} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" data-id="email" name="email" value={data.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="twitterLink">Twitter Link:</label>
                    <input type="text" data-id="twitterLink" name="twitterLink" value={data.twitterLink} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="facebookLink">Facebook Link:</label>
                    <input type="text" data-id="facebookLink" name="facebookLink" value={data.facebookLink} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="youtubeLink">Youtube Link:</label>
                    <input type="text" data-id="youtubeLink" name="youtubeLink" value={data.youtubeLink} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="linkedinLink">Linkedin Link:</label>
                    <input type="text" data-id="linkedinLink" name="linkedinLink" value={data.linkedinLink} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="carpentryLink">Carpentry Link:</label>
                    <input type="text" data-id="carpentryLink" name="carpentryLink" value={data.carpentryLink} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="furnitureRemodelingLink">Furniture Remodeling Link:</label>
                    <input type="text" data-id="furnitureRemodelingLink" name="furnitureRemodelingLink" value={data.furnitureRemodelingLink} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="woodenFloorLink">Wooden Floor Link:</label>
                    <input type="text" data-id="woodenFloorLink" name="woodenFloorLink" value={data.woodenFloorLink} onChange={handleChange} />
                    <label htmlFor="woodenFurnitureLink">Wooden Furniture Link:</label>
                    <input type="text" data-id="woodenFurnitureLink" name="woodenFurnitureLink" value={data.woodenFurnitureLink} onChange={handleChange} />

                    <label htmlFor="customCarpentryLink">Custom Carpentry Link:</label>
                    <input type="text" data-id="customCarpentryLink" name="customCarpentryLink" value={data.customCarpentryLink} onChange={handleChange} />

                    <label htmlFor="aboutUsLink">About Us Link:</label>
                    <input type="text" data-id="aboutUsLink" name="aboutUsLink" value={data.aboutUsLink} onChange={handleChange} />

                    <label htmlFor="contactUsLink">Contact Us Link:</label>
                    <input type="text" data-id="contactUsLink" name="contactUsLink" value={data.contactUsLink} onChange={handleChange} />

                    <label htmlFor="servicesLink">Services Link:</label>
                    <input type="text" data-id="servicesLink" name="servicesLink" value={data.servicesLink} onChange={handleChange} />

                    <label htmlFor="termsAndConditionLink">Terms &amp; Condition Link:</label>
                    <input type="text" data-id="termsAndConditionLink" name="termsAndConditionLink" value={data.termsAndConditionLink} onChange={handleChange} />

                    <label htmlFor="supportLink">Support Link:</label>
                    <input type="text" data-id="supportLink" name="supportLink" value={data.supportLink} onChange={handleChange} />
                </div>
            </div>
        </div>

    )
}
