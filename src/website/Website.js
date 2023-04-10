import Axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
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

        Axios.get(`/website/domain?domain=${websiteDomain}`)
            .then(response => {
                // console.log('getWebsiteID')
                // console.log(response)
                setWebsite(response.data)
            })
            .catch(error => { console.log(error.message) })
    }

    const modifyLinks = (element) => {
        if (element.tagName === 'a')
            console.log(element.children);
        // Check if this element is an <a> tag with an href attribute and it is relative path
        if (element.tagName === 'a' && element.attribs.href && element.attribs.href.startsWith('/')) {
            // Add the proxy to the href attribute value
            // element.attribs.href = `/website/WebDevGuru${element.attribs.href}`;
            return <Link to={`/website/WebDevGuru${element.attribs.href}`}>{element.children[0].data}</Link>
            // element.attribs.href = `/website/WebDevGuru${element.attribs.href}`;
        }
        // // Recurse through any child elements
        // if (element.children) {
        //     element.children = modifyLinks(element.children)
        // }
        // return element;
    }
    const loadMain = () => {
        // console.log('useEffect', websiteDomain, path);

        return <Main websiteId={website.id} path={path} />
    }

    return (
        <>
            <Header websiteId={website.id} modifyLinks={modifyLinks} />
            <Main websiteId={website.id} path={path ? path : 'index'} modifyLinks={modifyLinks} />
            <Footer websiteId={website.id} modifyLinks={modifyLinks} />
        </>
    )
}