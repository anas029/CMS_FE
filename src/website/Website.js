import Axios from "axios"
import React, { useEffect, useState } from "react"
import { redirect, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";


export default function Website(props) {
    const { websiteDomain, path = 'index' } = useParams()
    const [website, setWebsite] = useState({})
    useEffect(() => {
        if (path)
            loadMain();
    }, [path]);

    useEffect(() => {
        getWebsiteID();
    }, []);
    const getWebsiteID = () => {
        // console.log(websiteDomain)
        // console.log('useEffect', websiteDomain, path);

        Axios.get(`http://localhost:4000/website/domain?domain=${websiteDomain}`)
            .then(response => {
                // console.log('getWebsiteID')
                // console.log(response)
                setWebsite(response.data)
            })
            .catch(error => { console.log(error.message) })
    }

    const modifyLinks = (element) => {
        // Check if this element is an <a> tag with an href attribute
        if (element.type === 'a' && element.props.href && element.props.href.startsWith('/')) {
            // Add the proxy to the href attribute value
            element.props.href = `/website/${websiteDomain}${element.props.href}`;
        }
        // Recurse through any child elements
        if (element.props && element.props.children) {
            element.props.children = React.Children.map(element.props.children, modifyLinks);
        }
        return element;
    };
    const loadMain = () => {
        // console.log('useEffect', websiteDomain, path);

        return <Main websiteId={website.id} path={path} />
    }
    return (
        <>
            < h1 > {websiteDomain}</h1 >
            <p>{website.name}</p>
            <Header websiteId={website.id} modifyLinks={modifyLinks} />
            <Main websiteId={website.id} path={path ? path : 'index'} />
            <Footer websiteId={website.id} />

        </>
    )
}