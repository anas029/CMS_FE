import Axios from "axios"
import { useEffect, useState } from "react"
import { Form, Button } from 'react-bootstrap';


export default function DomainForm(props) {
    const [website, setWebsite] = useState({ ...props.website })
    const [availStatus, setAvailStatus] = useState('')
    const [isAvailable, setIsAvailable] = useState(false)

    useEffect(() => {
        if (props.edit && website.domain === props.website.domain) {
            setIsAvailable(true)
        }
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
        const newWebsite = { ...website }
        if (name === 'domain' && /^[A-Za-z]*$/.test(value)) {
            setIsAvailable(false)
            setAvailStatus('')
            newWebsite[name] = value
        } else if (name !== 'domain') {
            newWebsite[name] = value
        }
        setWebsite(newWebsite)
    }
    const checkAvailable = () => {
        if (props.edit && website.domain === props.website.domain) {
            setIsAvailable(true)
        } else {
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
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        checkAvailable()
        if (isAvailable) {
            props.handleDomain(website)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group style={{ padding: '10px 0' }} controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" required value={website.name ? website.name : ''} onChange={handleChange} placeholder="Please enter a name for the website" />
            </Form.Group>

            <Form.Group style={{ padding: '10px 0' }} controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="description" required value={website.description ? website.description : ''} onChange={handleChange} placeholder="Description for the website" rows={10} />
            </Form.Group>

            <Form.Group style={{ padding: '10px 0' }} controlId="domain">
                <Form.Label>Domain</Form.Label> &nbsp;
                <Form.Control type="text" name="domain" required value={website.domain ? website.domain : ''} onChange={handleChange} placeholder="At least 6 letters" style={{ width: '50%', display: 'inline-block' }} />&nbsp;
                <Button type="button" onClick={checkAvailable} variant={isAvailable ? "success" : "danger"} disabled={(website.domain && website.domain.length) > 5 ? false : true}>Check Availability</Button>&nbsp;
                <Form.Text style={{ display: 'block', fontWeight: '500', fontSize: '30px' }}>{availStatus}</Form.Text>
            </Form.Group>

            <Button style={{ margin: '10px 0' }} variant="primary" type="submit" disabled={isAvailable ? false : true}>{props.edit ? 'Update' : 'Create'}</Button>
        </Form>
    );
}