import Axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";


export default function Website() {
    const { websiteDomain, path } = useParams()
    const [website, setWebsite] = useState({})

    // useEffect(() => {
    //     getWebsiteID()
    //     loadMain()
    //     // console.log('useEffect\n'.websiteDomain, path);
    //     // loadMain()
    //     // loadFooter()

    // }, [path])
    useEffect(() => {
        if (path) {
            loadMain();
        }
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
    const loadMain = () => {
        // console.log('useEffect', websiteDomain, path);

        return <Main websiteId={website.id} path={path} />
    }
    return (
        <>
            < h1 > {websiteDomain}</h1 >
            <p>{website.name}</p>
            <Header websiteId={website.id} />
            <Main websiteId={website.id} path={path} />
            <Footer websiteId={website.id} />

        </>
    )
}