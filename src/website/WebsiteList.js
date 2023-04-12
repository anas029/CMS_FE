// import React,{ useEffect, useState } from 'react'
// import Axios from 'axios'


// export default function WebSiteList() {
    
    
//     const [websites, setWebsites] = useState([])
// //   const [isEdit, setIsEdit] = useState(false)
// //   const [currentAuthor, setCurrentAuthor] = useState("")
//     useEffect(() => {
//         loadWebsiteList()
//   }, [])

//   const loadWebsiteList = () =>{
//     Axios.get("website/index")  //Axios.get("Profile")
//     .then(response => {
//       console.log(response)
//       setWebsites(response.data.WebSiteList)
//     })
//     .catch(err => {
//       console.log("Error Retreiving websites")
//       console.log(err)
//     })
//   }

//   const addWebsite = (website) =>{
//     Axios.post("website/create", website,
//     {
//       headers:{
//         "Authorization": "Bearer " + localStorage.getItem("token")
//       }
//     }
//     )
//     .then(res => {
//       console.log("website Created successfully")
//       loadWebsiteList()
//     })
//     .catch(err => {
//       console.log("Error Creating website")
//       console.log(err)
//     })
//   } 



//   const deleteWebsite = (id) =>{
//     Axios.delete(`website/delete?id=${id}`,
//     {
//       headers:{
//         "Authorization": "Bearer " + localStorage.getItem("token")
//       }
//     }
//     )
//     .then(res =>{
//       console.log("website Successfully deleted")
//       console.log(res)
//       loadWebsiteList()
//     })
//     .catch(err =>{
//       console.log("Error Deleting website")
//       console.log(err)
//     })
    
    
//     return (

//         <div>WebSite List</div>




//     )
// }}
