import Axios from "axios"
import PageEditor from "./PageEditor"
import DomainForm from "./DomainForm"

export default function WebsiteEditor(props) {
    const handleDomain = (website) => {
        Axios.put('website', website)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <br />
            <h3>Edit Website: {props.website.name}</h3>
            <DomainForm edit={true} handleDomain={handleDomain} website={props.website} />
            <PageEditor website={props.website} />
        </>
    )
}
