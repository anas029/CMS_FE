import { useState, useEffect } from 'react'
import parse from 'html-react-parser';
import Axios from "axios"


export default function Main() {

    const initData = {
        h1: 'Responsive left-aligned hero with image',
        p: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
        button1: 'Prime',
        button2: 'Sec',
    }
    const [data, setData] = useState(initData)

    const [html, setHTML] = useState('')
    useEffect(() => {
        const initHTML = `<div class='container col-xxl-12 px-4 py-5'><div class='row flex-lg-row-reverse align-items-center g-5 py-5'><div class='col-10 col-sm-8 col-lg-6'><img src='https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png' class='d-block mx-lg-auto img-fluid' alt='Bootstrap Themes' width='700' height='500' loading='lazy'></div><div class='col-lg-6'><h1 class='display-5 fw-bold lh-1 mb-3'>${data.h1}</h1><p class='lead'>${data.p}</p><div class='d-grid gap-2 d-md-flex justify-content-md-start'><button type='button' class='btn btn-primary btn-lg px-4 me-md-2'>${data.button1}</button><button type='button' class='btn btn-outline-secondary btn-lg px-4'>${data.button2}</button></div></div></div></div>`
        //     const initHTML = `<div class='container col-xxl-8 px-4 py-5'>
        //     <div class='row flex-lg-row-reverse align-items-center g-5 py-5'>
        //       <div class='col-10 col-sm-8 col-lg-6'>
        //         <img src='https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png' class='d-block mx-lg-auto img-fluid' alt='Bootstrap Themes' width='700' height='500' loading='lazy'>
        //       </div>
        //       <div class='col-lg-6'>
        //         <h1 class='display-5 fw-bold lh-1 mb-3'>${data.h1}</h1>
        //         <p class='lead'>${data.p}</p>
        //         <div class='d-grid gap-2 d-md-flex justify-content-md-start'>
        //           <button type='button' class='btn btn-primary btn-lg px-4 me-md-2'>${data.button1}</button>
        //           <button type='button' class='btn btn-outline-secondary btn-lg px-4'>${data.button2}</button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>`
        setHTML(initHTML)

    }, [data])
    const handleData = (e) => {
        const newData = { ...data }
        console.log(e.target.value);
        newData[e.target.name] = e.target.value;
        setData(newData)
    }
    const handleCreate = () => {
        let page = {
            name: "Services",
            type: "main",
            path: "services",
            content: html,
            website: "642fc2ccd811361ceea76e0f"
        }
        Axios.post('page', page)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <div>{parse(html)}</div>
            <hr />
            <p>Edit page</p>
            <div>
                <label htmlFor="h1">h1</label>
                <textarea name="h1" id="" cols="30" rows="10" onChange={handleData} value={data.h1} />
            </div>
            <div>
                <label htmlFor="p">p</label>
                <textarea name="p" id="" cols="30" rows="10" onChange={handleData} value={data.p} />
            </div>
            <button onClick={handleData}>change</button>
            <button onClick={handleCreate}>Create</button>


        </>
    )
}
