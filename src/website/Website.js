import Axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export default function Website() {
    const { websiteDomain } = useParams()
    const [website, setWebsite] = useState({})

    useEffect(() => {
        getWebsiteID()
        // loadMain()
        // loadFooter()

    }, [])
    const getWebsiteID = () => {
        // console.log(websiteDomain)

        Axios.get(`http://localhost:4000/website/domain?domain=${websiteDomain}`)
            .then(response => {
                // console.log('getWebsiteID')
                console.log(response)
                setWebsite(response.data)
            })
            .catch(error => { console.log(error.message) })
    }
    // const loadMain = (id = '643059a80332cc6b744db95a') => {
    //     Axios.get(`page?id=${id}`)
    //         .then(response => {
    //             console.log(response)
    //             setMain(response.data.content)
    //         })
    //         .catch(error => { console.log(error.message) })
    // }
    return (
        <>
            < h1 > {websiteDomain}</h1 >
            <p>{website.name}</p>
            <Header websiteId={website.id} />
            <Footer websiteId={website.id} />

        </>
    )
}