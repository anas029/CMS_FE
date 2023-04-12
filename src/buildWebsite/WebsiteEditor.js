import Axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PageEditor from "./PageEditor"
import DomainForm from "./DomainForm"

export default function WebsiteEditor(props) {

    return (
        <>
            <DomainForm edit={true} website={props.website} />
            <PageEditor />
        </>
    )
}
