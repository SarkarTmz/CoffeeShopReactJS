import {useState, useEffect} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import '../styles/Card.css'

const Menu = () => {
    const navigate = useNavigate()
    const [list,setList] = useState([])
  
  
    const fetchApi = async()=>{
          const response = await axios.get("https://657c62f5853beeefdb995637.mockapi.io/api/menu")
          if(response.status == 200){
            // console.log(response.data)
  
          setList(response.data)
          }
  
  
    }
  
    useEffect(()=>{
      fetchApi()
     
    },[])
  
  
  return (
    <>
    <div className="menu__card">
        {
          list.map((menu)=>{
            return (
              <div className="card" key={menu.id}>
                    <img src={menu.images} alt="Avatar"  width='100%' />
                      <div className="card__detail">
                        <h3 className="title">{menu.title}</h3> 
                        <p className="description">{menu.description}</p>
                        <p className="price">{menu.price}</p>
                      </div>
                      <p onClick={()=>navigate("/single/" + menu.id)} className="next">See More</p>
              </div>
            )
          })
        }
        </div>
    </>
  )
}

export default Menu