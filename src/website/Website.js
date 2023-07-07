import Axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from "../buildWebsite/Header";
import Footer from "../buildWebsite/Footer";
import Home from "../buildWebsite/Home";
import About from "../buildWebsite/About";
import Service from "../buildWebsite/Service";
import Feature from "../buildWebsite/Feature";
import Projects from "../buildWebsite/Projects";

export default function Website(props) {
    const { websiteDomain } = useParams()
    const [website, setWebsite] = useState({})
    
    useEffect(() => {
        Axios.get(`/website/domain?domain=${websiteDomain}`)
            .then(response => {
                let res = { ...website, ...response.data }
                setWebsite(res)
                loadPage()
            })
            .catch(error => { console.log(error.message) })
    }, [websiteDomain]);

    const loadPage = () => {
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