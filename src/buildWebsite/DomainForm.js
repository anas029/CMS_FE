import Axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

<<<<<<< HEAD:src/admin/WebsiteCreate.js
export default function WebsiteCreate(props) {
    const [website, setWebsite] = useState({ owner: props.owner })
=======
export default function DomainForm(props) {
    const [website, setWebsite] = useState({ ...props.website })
>>>>>>> 176b053e11bc781e3a0c983c789d473ebab3e6ec:src/buildWebsite/DomainForm.js
    const [availStatus, setAvailStatus] = useState('')
    const [isAvailable, setIsAvailable] = useState(false)
    const handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        const newWebsite = { ...website }
        console.log(value);
        if (key === 'domain' && /^[A-Za-z]*$/.test(value)) {
            setIsAvailable(false)
            setAvailStatus('')
            newWebsite[key] = value
        } else if (key !== 'domain') {
            newWebsite[key] = value
        }
        // console.log(/[a-zA-Z]/g.test(value.at(-1)))
        setWebsite(newWebsite)
        console.log(website);
    }
    const checkAvailable = () => {
        Axios.get(`website/domain?domain=${website.domain}`)
            .then(response => {
                if (response.data) {
                    console.log('Unavailable')
                    setAvailStatus('Unavailable')
                    setIsAvailable(false)
                }
                else {
                    setAvailStatus('Available')
                    console.log('Available')
                    setIsAvailable(true)
                }
            })
            .catch(error => { console.log(error.message) })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
        checkAvailable()
        if (isAvailable) {
            props.handleDomain(website)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required value={website.name ? website.name : ''} onChange={handleChange} placeholder="please enter a name for the website" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" required value={website.description ? website.description : ''} onChange={handleChange} placeholder="Description for the website" cols="30" rows="10" />
                </div>
                <div>
                    <label htmlFor="domain">Domain</label>
                    <input type="text" name="domain" required value={website.domain ? website.domain : ''} onChange={handleChange} placeholder="At least 6 letters" />
                    <button type="button" onClick={checkAvailable} disabled={(website.domain && website.domain.length) > 5 ? false : true}>Check Availability</button>
                    <p>{availStatus}</p>
                </div>
                <button disabled={isAvailable ? false : true}>Create</button>
            </form>
        </div>
    )
}
