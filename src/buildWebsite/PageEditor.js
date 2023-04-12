import React, { useEffect } from 'react'
import Axios from "axios"

import Header from './Header'
import Home from './Home'
import About from './About'
import Service from './Service'
import Feature from './Feature'
import Projects from './Projects'
import Footer from './Footer'



export default function PageEditor(props) {

    const handleSave = (name, path, dataPage) => {
        const data = { name, path, ...dataPage, website: props.websiteID }
        Axios.post('/pagedetail', data)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        Axios.get(`/pagedetail/all?website=${props.website.id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => { console.log(err) })
    }, [])

    return (
        <>
            {(props.path === 'header') && (<Header handleSave={handleSave} edit={true} />)}
            {(props.path === 'index') && (<Home handleSave={handleSave} edit={true} />)}
            {(props.path === 'about') && (<About handleSave={handleSave} edit={true} />)}
            {(props.path === 'service') && (<Service handleSave={handleSave} edit={true} />)}
            {(props.path === 'feature') && (<Feature handleSave={handleSave} edit={true} />)}
            {(props.path === 'projects') && (<Projects handleSave={handleSave} edit={true} />)}
            {(props.path === 'footer') && (<Footer handleSave={handleSave} edit={true} />)}
        </>
    )
}