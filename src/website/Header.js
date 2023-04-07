import Axios from 'axios';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';

export default function Header(props) {
    const [header, setHeader] = useState('')
    useEffect(() => {
        loadHeader()
    }, [props.websiteId])
    const loadHeader = () => {
        Axios.get(`http://localhost:4000/page/header?id=${props.websiteId}`)
            .then(response => {
                setHeader(response.data.content)
                console.log(header);
            })
            .catch(error => { console.log('error', error.message) })
    }
    return (
        <header>
            {parse(header)}
        </header>
    )
}
