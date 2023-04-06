import { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Admin() {

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    loadAuthorsList()
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


  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  )
}