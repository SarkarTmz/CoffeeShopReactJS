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
  const deleteBlog = async ()=>{
    const response = await axios.delete("https://657c62f5853beeefdb995637.mockapi.io/api/menu/" + id)
      if(response.status == 200){
        navigate("/")
      }else{
        alert("Something went wrong")
      }
  }

  useEffect(()=>{
    fetchApi()

  },[])
  return (
    <>
         <div className="single__menu">
            <div className="menu__image">
                <img src={list?.images} alt="Author Avatar" />
            </div>
            <div className="">
                <h1 className="menu__title">{list?.title}</h1>
                <p className="menu__price">{list?.price}</p>
                <p className="menu__description">{list?.description}</p>
            </div>
            <button onClick={deleteBlog} >Delete</button>
          </div>
    </>
  )
}

export default Single