import Axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
// import Main from "./Main";
import Header from "../buildWebsite/Header";
import Footer from "../buildWebsite/Footer";
import Home from "../buildWebsite/Home";
import About from "../buildWebsite/About";
import Service from "../buildWebsite/Service";
import Feature from "../buildWebsite/Feature";
import Projects from "../buildWebsite/Projects";

export default function Website(props) {
    const { websiteDomain, path = 'index' } = useParams()
    const [website, setWebsite] = useState({})
    // useEffect(() => {
    //     if (path)
    //         loadMain();
    // }, [path]);

    useEffect(() => {
        Axios.get(`/website/domain?domain=${websiteDomain}`)
            .then(response => {
                let res = { ...website, ...response.data }
                setWebsite(res)
                loadPage()
            })
            .catch(error => { console.log(error.message) })
    }, [websiteDomain]);
    const getWebsiteID = () => {
        // console.log(websiteDomain)
        // console.log('useEffect', websiteDomain, path);

        Axios.get(`/website/domain?domain=${websiteDomain}`)
            .then(response => {
                // console.log('getWebsiteID')
                console.log(response)
                setWebsite(response.data)
                loadPage()
            })
            .catch(error => { console.log(error.message) })
    }

    // const modifyLinks = (element) => {
    //     if (element.tagName === 'a')
    //         console.log(element.children);
    //     // Check if this element is an <a> tag with an href attribute and it is relative path
    //     if (element.tagName === 'a' && element.attribs.href && element.attribs.href.startsWith('/')) {
    //         // Add the proxy to the href attribute value
    //         // element.attribs.href = `/website/WebDevGuru${element.attribs.href}`;
    //         return <Link to={`/website/${websiteDomain}${element.attribs.href}`}>{element.children[0].data}</Link>
    //         // element.attribs.href = `/website/WebDevGuru${element.attribs.href}`;
    //     }
    //     // // Recurse through any child elements
    //     // if (element.children) {
    //     //     element.children = modifyLinks(element.children)
    //     // }
    //     // return element;
    // }
    const loadPage = () => {
        // console.log('useEffect', websiteDomain, path);

        return <>
            <br />
            <Header websiteID={website.id} />
            <Home websiteID={website.id} />
            <About websiteID={website.id} />
            <Service websiteID={website.id} />
            <Feature websiteID={website.id} />
            <Projects websiteID={website.id} />
            <Footer websiteID={website.id} />
        </>
    }

    return (
        <>
            {loadPage()}
        </>
    )
}

//<>
//<Header websiteId={website.id} modifyLinks={modifyLinks} />
//<Main websiteId={website.id} path={path ? path : 'index'} modifyLinks={modifyLinks} />
//<Footer websiteId={website.id} modifyLinks={modifyLinks} />
//</>