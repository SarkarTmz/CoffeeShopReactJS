import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const Single = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [list,setList]  =  useState();

        const fetchApi = async ()=>{
        const response = await axios.get("https://657c62f5853beeefdb995637.mockapi.io/api/menu/" + id)
          if(response.status == 200){
            setList(response.data)
            // console.log(blog)
          }else{
            alert("Something went wrong")
          }
  }
  useEffect(()=>{
    fetchApi()

  },[])
  return (
    <>
         <div className="blog-post">
            <div className="avatar">
                <img src={list?.images} alt="Author Avatar" />
            </div>
            <div className="post-content">
                <h1 className="post-title">{list?.title}</h1>
                <p className="post-description">{list?.price}</p>
                <p className="post-content">{list?.description}</p>
            </div>
          </div>
    </>
  )
}

export default Single