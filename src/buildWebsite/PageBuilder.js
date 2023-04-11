import React from 'react'
import Axios from "axios"

import Main from "./Main"
import HeaderPanel from './HeaderPanel'
import Header from './Header'
import MainPage from './MainPage'
import Footer from './Footer'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from './Page8'


export default function PageBuilder(props) {

    const handleSave = (name, path, content, data) => {
        const pageData = { name, type: 'main', path, content, website: props.websiteID }


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

    return (
        <>
            <div>PageBuilder</div>
            <p>Add Header</p>
            <Header />
            <Page1 handleSave={handleSave} />
            <Footer />
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