import Axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PageEditor from "./PageEditor"

export default function DomainForm(props) {

    return (
        <>
            <DomainForm edit={true} website={props.website} />
            <PageEditor />
        </>
    )
}
