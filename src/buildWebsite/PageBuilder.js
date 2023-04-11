import React from 'react'
import Main from "./Main"
import HeaderPanel from './HeaderPanel'
import Header from './Header'
import MainPage from './MainPage'
import Footer from './Footer'

export default function PageBuilder(props) {
    return (
        <>
            <div>PageBuilder</div>
            <p>Add Header</p>
            <HeaderPanel websiteID={props.websiteID} />
            <p>Add Home</p>
            <Main websiteID={props.websiteID} />
            <p>Add Footer</p>
            <Main websiteID={props.websiteID} />
            <Header />
            <MainPage />
            <Footer />
        </>
    )
}
