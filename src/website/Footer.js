import Axios from 'axios';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';


export default function Footer(props) {
    const [footer, setFooter] = useState('')
    useEffect(() => {
        loadFooter()
    }, [props.websiteId])
    const loadFooter = () => {
        Axios.get(`/page/footer?id=${props.websiteId}`)
            .then(response => {
                setFooter(response.data.content)
                // console.log(footer);
            })
            .catch(error => { console.log('error', error.message) })
    }
    const modifyLinks = (element) => {
        return props.modifyLinks(element)
    }


    const footerHTML = parse(footer, { replace: (element) => modifyLinks(element) })

    return (
        <footer>
            {footerHTML}
        </footer>
    )
}
