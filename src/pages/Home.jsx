import React from 'react'
import '../styles/Home.css'
import TopRated from './TopRated';

import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";


const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  return (
    <>
    <div className='container'>
        <img src="https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.webp" alt="home image" className='home-img' />

        <div className="searchMain">
            <TextField className='search'
                id="search"
                type="search"
                label="Search"
                value={searchTerm}
                onChange={handleChange}
                // sx={{ width: 600 }}
                InputProps={{ 
                endAdornment: (
                    <InputAdornment position="end">
                    <SearchIcon />
                    </InputAdornment>
                ),
                }}
            />
        </div>
        <div className="items">
            <button className='btn'>Coffee</button>
            <button className='btn'>Tea</button>
            <button className='btn'>Cookie</button>
            <button className='btn'>Cake</button>
        </div>
        <TopRated />
        
    </div>
    </>
  )
}

export default Home