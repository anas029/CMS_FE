import Axios from "axios"
import { useEffect, useState } from "react"
import DomainForm from "./DomainForm"
import PageBuilder from "./PageBuilder"
import { useNavigate } from "react-router-dom"

export default function WebsiteCreate(props) {
    const [website, setWebsite] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.currentUser) {
            navigate('/');
        }
    }, [props.currentUser, navigate]);

    if (!props.currentUser) {
        return null;
    } else {
        //setting the current user id
        website.owner = props.currentUser.id;
        console.log(website.owner);
    }

    const handleDomain = (website) => {
        Axios.post('website', website)
            .then(res => {
                console.log(res)
                setWebsite(res.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h1>Create Website {website?.id? `(${website.domain})`:null}</h1>
            {website.id ?
                <>
                    <PageBuilder websiteID={website.id} websiteDomain={website.domain} />
                </>
                :
                <DomainForm website={website} handleDomain={handleDomain} />
            }
        </div>
    )
}

