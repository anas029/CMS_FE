import { useState, useEffect } from 'react'
import Axios from 'axios'
import axios from 'axios';

export default function Admin() {

  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    loadAuthorsList()
    loadWebsites()
  }, [])

  const loadAuthorsList = () => {
    Axios.get("author/index")
      .then((response) => {
        console.log(response)
        // State to store the data
      })
      .catch((err) => {
        console.log("Error Retreiving Authors")
      })
  }
  const loadWebsites = () => {
    console.log('test');
    Axios.get('website/all')
      .then((response) => {
        console.log(response.data)
        setWebsites(response.data)
        // State to store the data
      })
      .catch((err) => {
        console.log("Error Retreiving Authors")
      })
  }
  const allWebsites = websites.map((website) => (<option key={website._id}>{website.name}</option>))

  return (
    <div>
      <h1>Admin Page</h1>
      <select name="wesites">
        {allWebsites}
      </select>
    </div>
  )
}