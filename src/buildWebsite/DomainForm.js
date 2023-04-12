import Axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from 'react-bootstrap';


export default function DomainForm(props) {
    const [website, setWebsite] = useState({ ...props.website })
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
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name</label>
//                     <input type="text" name="name" required value={website.name ? website.name : ''} onChange={handleChange} placeholder="please enter a name for the website" />
//                 </div>
//                 <div>
//                     <label htmlFor="description">Description</label>
//                     <textarea name="description" required value={website.description ? website.description : ''} onChange={handleChange} placeholder="Description for the website" cols="30" rows="10" />
//                 </div>
//                 <div>
//                     <label htmlFor="domain">Domain</label>
//                     <input type="text" name="domain" required value={website.domain ? website.domain : ''} onChange={handleChange} placeholder="At least 6 letters" />
//                     <button type="button" onClick={checkAvailable} disabled={(website.domain && website.domain.length) > 5 ? false : true}>Check Availability</button>
//                     <p>{availStatus}</p>
//                 </div>
//                 <button disabled={isAvailable ? false : true}>Create</button>
//             </form>
//         </div>
//     )
// }

return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" required value={website.name ? website.name : ''} onChange={handleChange} placeholder="Please enter a name for the website" />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description" required value={website.description ? website.description : ''} onChange={handleChange} placeholder="Description for the website" rows={10} />
      </Form.Group>

      <Form.Group controlId="domain">
        <Form.Label>Domain</Form.Label>
        <Form.Control type="text" name="domain" required value={website.domain ? website.domain : ''} onChange={handleChange} placeholder="At least 6 letters" />
        <Button type="button" onClick={checkAvailable} variant={isAvailable ? "success" : "danger"} disabled={(website.domain && website.domain.length) > 5 ? false : true}>Check Availability</Button>
        <Form.Text>{availStatus}</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isAvailable ? false : true}>Create</Button>
    </Form>
  );
}