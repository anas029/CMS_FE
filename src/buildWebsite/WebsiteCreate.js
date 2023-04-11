import Axios from "axios"
import { useEffect, useState } from "react"
import DomainForm from "./DomainForm"
import Main from "./Main"
export default function WebsiteCreate(props) {
    const [website, setWebsite] = useState({ owner: props.owner.id })

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
            <h1>WebsiteCreate</h1>
            {website.id || true ?
                <>
                    <p>add page</p>
                    <Main />
                </>
                :
                <DomainForm website={website} handleDomain={handleDomain} />
            }
        </div>
    )
}
