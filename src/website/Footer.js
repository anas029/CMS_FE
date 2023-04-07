import Axios from 'axios';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';


export default function Footer(props) {
    const [footer, setFooter] = useState('')
    useEffect(() => {
        loadFooter()
    }, [props.websiteId])
    const loadFooter = () => {
        Axios.get(`http://localhost:4000/page/footer?id=${props.websiteId}`)
            .then(response => {
                setFooter(response.data.content)
                console.log(footer);
            })
            .catch(error => { console.log('error', error.message) })
    }
    return (
        <footer>
            {parse(footer)}
        </footer>
    )
}
