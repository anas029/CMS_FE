import { useState } from 'react'
import Header from './Header'

export default function HeaderPanel() {

    const [data, setData] = useState('')
    const handleClick = (e) => {
        console.log(e.target.dataset.number);
        const value = parseInt(e.target.dataset.number)
        console.log(value);
        setData(value)

    }
    return (
        <div>
            <h1>HeaderPanel</h1>
            <button data-number="1" onClick={handleClick}>Header1</button> &nbsp;
            <button data-number="2" onClick={handleClick}>Header2</button> &nbsp;
            {data && (<Header template={data - 1} />)}
        </div>
    )
}
