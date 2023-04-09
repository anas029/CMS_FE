import Axios from 'axios';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';

export default function Main(props) {
    const [main, setMain] = useState('')
    useEffect(() => {
        loadMain()
    }, [props.websiteId, props.path])
    const loadMain = (path = props.path) => {
        Axios.get(`http://localhost:4000/page/main?id=${props.websiteId}&path=${path}`)
            .then(response => {
                if (path !== 'index' && !response.data)
                    loadMain('index')
                else
                    setMain(response.data.content)
            })
            .catch(error => { console.log('error', error.message) })
    }
    const modifyLinks = (element) => {
        return props.modifyLinks(element)
    }


    const mainHTML = parse(main, { replace: (element) => modifyLinks(element) })

    return (
        <main>
            {mainHTML}
        </main>
    )
}
