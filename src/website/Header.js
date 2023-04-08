import Axios from 'axios';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';

export default function Header(props) {
    const [header, setHeader] = useState('')
    useEffect(() => {
        loadHeader()
    }, [props.websiteId])
    const loadHeader = () => {
        Axios.get(`http://localhost:4000/page/header?id=${props.websiteId}`)
            .then(response => {
                setHeader(response.data.content)
                // console.log(header);
            })
            .catch(error => { console.log('error', error.message) })
    }
    // const modifyLinks = (element) => {
    //     return props.modifyLinks(element)
    // }

    const modifyLinks = (element) => {
        // if (element.tagName === 'a')
        //     console.log('element: ', element)
        // Check if this element is an <a> tag with an href attribute
        if (element.tagName === 'a' && element.attribs.href && element.attribs.href.startsWith('/')) {
            // Add the proxy to the href attribute value
            element.attribs.href = `/website/WebDevGuru${element.attribs.href}`;
        }
        // // Recurse through any child elements
        // if (element.children) {
        //     element.children = React.Children.map(element.children, modifyLinks);
        // }
        return element;
    };
    const headerHTML = parse(header, { replace: (element) => modifyLinks(element) })


    return (
        <header>
            {console.log('render Header comp')}
            {headerHTML}
        </header>
    )
}
