import React from 'react'
import Main from "./Main"

export default function PageBuilder(props) {
    return (
        <>
            <div>PageBuilder</div>
            <p>Add Header</p>
            <Main websiteID={props.websiteID} />
            <p>Add Home</p>
            <Main websiteID={props.websiteID} />
            <p>Add Footer</p>
            <Main websiteID={props.websiteID} />
        </>
    )
}
