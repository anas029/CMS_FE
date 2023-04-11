import React from 'react'
import Axios from "axios"

import Main from "./Main"
import HeaderPanel from './HeaderPanel'
import Header from './Header2'
import MainPage from './MainPage'
import Footer from './Footer2'
import Page1 from './Page1'
import Page2 from './Page2'
import About from './About'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from './Page8'
import Home from './Home'


export default function PageBuilder(props) {

    const handleSave = (name, type, path, content, data) => {
        const pageData = { name, type, path, content, website: props.websiteID }


        Axios.post('page', pageData)
            .then(res => {
                const page = res.data._id
                const details = { ...data, page }
                console.log(details)
                Axios.post('pagedetail', details)
                    .then(res => console.log(res))
                    .catch(error => console.log(error))

            })
            .catch(error => console.log(error))

    }
    const handleSave2 = (name, path, dataPage) => {
        const data = { name, path, ...dataPage, website: props.websiteID }
        Axios.post('pagedetail', data)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    return (
        <>
            <Header handleSave={handleSave2} edit={true} />
            <Home handleSave={handleSave2} edit={true} />
            {/* <Page1 handleSave={handleSave} /> */}
            <Footer handleSave={handleSave} edit={true} />
        </>
    )
}
/*<Page2 />
<Page3 />
<Page4 />
<Page5 />
<Page6 />
<Page7 />
<Page8 />
//<MainPage />
*/
/* <HeaderPanel websiteID={props.websiteID} />
<p>Add Home</p>
<Main websiteID={props.websiteID} />
<p>Add Footer</p>
<Main websiteID={props.websiteID} /> */