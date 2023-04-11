import { useState } from 'react'
import parse from 'html-react-parser';


export default function Page1(props) {
    const [data, setData] = useState({
        imgSrc: 'img/carousel-3.jpg',
        heading5: 'WELCOME TO WOODY',
        heading1: 'Best Carpenter & Craftsman Services',
        paragraph: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.',
        link1: '!#',
        link1Text: 'Read More',
        link2: '!#',
        link2Text: 'Free Quota',
    });
    const myTemplate = `<div class="container-fluid p-0 pb-5"><div class="header-carousel position-relative"><div class="owl-carousel-item position-relative"><img class="img-fluid" src="${data.imgSrc}" alt=""><div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(53, 53, 53, .7);"><div class="container"><div class="row justify-content-center"><div class="col-12 col-lg-8 text-center"><h5 class="text-white text-uppercase mb-3 animated slideInDown">${data.heading5}</h5><h1 class="display-3 text-white animated slideInDown mb-4">${data.heading1}</h1><p class="fs-5 fw-medium text-white mb-4 pb-2">${data.paragraph}</p><a href="${data.link1}" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">${data.link1Text}</a><a href="${data.link2}" class="btn btn-light py-md-3 px-md-5 animated slideInRight">${data.link2Text}</a></div></div></div></div></div></div>`

    const handleChange = (event) => {
        const { dataset, value } = event.target;
        setData(prevState => ({
            ...prevState,
            [dataset.id]: value
        }));
    }
    const handleClick = () => {
        props.handleSave('Home', 'index', myTemplate, data)

    }
    return (
        <>
            <div>{parse(myTemplate)}</div>
            <hr />
            <div>
                <label htmlFor="imgSrc">imgSrc</label>
                <input type="text" id="imgSrc" data-id="imgSrc" value={data.imgSrc} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="heading5">heading5</label>
                <input type="text" id="heading5" data-id="heading5" value={data.heading5} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="heading1">heading1</label>
                <input type="text" id="heading1" data-id="heading1" value={data.heading1} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="paragraph">paragraph</label>
                <input type="text" id="paragraph" data-id="paragraph" value={data.paragraph} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="link1">link1</label>
                <input type="text" id="link1" data-id="link1" value={data.link1} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="link1Text">link1Text</label>
                <input type="text" id="link1Text" data-id="link1Text" value={data.link1Text} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="link2">link2</label>
                <input type="text" id="link2" data-id="link2" value={data.link2} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="link2Text">link2Text</label>
                <input type="text" id="link2Text" data-id="link2Text" value={data.link2Text} onChange={handleChange} />
            </div>
            <button onClick={handleClick}>Save</button>
        </>


    )
}
