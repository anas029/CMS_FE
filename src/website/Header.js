import Axios from 'axios';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';

export default function Header(props) {
    const [header, setHeader] = useState('')
    useEffect(() => {
        loadHeader()
    }, [props.websiteId])
    const loadHeader = () => {
        Axios.get(`/page/header?id=${props.websiteId}`)
            .then(response => {
                setHeader(response.data.content)
                // console.log(header);
            })
            .catch(error => { console.log('error', error.message) })
    }
    const modifyLinks = (element) => {
        return props.modifyLinks(element)
    }


    const headerHTML = parse(header, { replace: (element) => modifyLinks(element) })


    return (
        <header>
            {headerHTML}
        </header>
    )
}
