import { useEffect, useState } from "react"

export default function WebsiteCreate(props) {
    const [website, setWebsite] = useState({ owner: '642fc27dd811361ceea76e0d' })
    const handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        const newWebsite = { ...website }
        if ((!key === 'domain') || (key === 'domain' && /[a-zA-Z]/g.test(value.at(-1))))
            newWebsite[key] = value
        // console.log(/[a-zA-Z]/g.test(value.at(-1)))
        setWebsite(newWebsite)
        console.log(website);
    }
    return (
        <div>
            <h1>WebsiteCreate</h1>
            <form onSubmit={() => console.log('submit')}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={handleChange} placeholder="please enter a name for the website" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" onChange={handleChange} placeholder="Description for the website" />
                </div>
                <div>
                    <label htmlFor="domain">Domain</label>
                    <input type="text" name="domain" onChange={handleChange} placeholder="Domain for the website" />
                </div>
            </form>
        </div>
    )
}
