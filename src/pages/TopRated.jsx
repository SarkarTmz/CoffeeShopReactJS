import React from 'react'
import '../styles/TopRated.css'

import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.webp'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'

const TopRated = () => {
    const items = [
        {
            id : 1,
            img : img1,
            price:'$30',
            title : 'Espresso'
        },
        {
            id : 2,
            img : img2,
            title : 'Americano',
            price:'$30',
        },
        {
            id : 3,
            img : img3,
            title : 'Macchiato',
            price:'$30',
        },
        {
            id : 4,
            img : img5,
            price:'$30',
            title : 'Iced Coffee'
        },
        {
            id : 5,
            img : img6,
            price:'$30',
            title : 'Hot Chocolate'
        },
        {
            id : 6,
            img : img7,
            price:'$30',
            title : 'Mocha'
        },
        {
            id : 7,
            img : img4,
            price:'$30',
            title : 'Latte'
        },
        {
            id : 8,
            img : img8,
            price:'$30',
            title : 'Cold Brew',
        },
    ]
  return (
    <>
        <div>
        <h2 className='top-h2'>Coffee</h2>
            <div className="lists">
                {
                    items.map((item) => (
                            <div className="list">
                                  <div className="list-dis">
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <button>Order Now</button>
                                </div>
                                <img src={item.img} alt="" />
                              
                            </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default TopRated