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

const Tea = () => {
    const items = [
        {
            id : 1,
            img : "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2023_08/story_55314/assets/2.jpeg?time=1691768874&size=*:900",
            price:'$30',
            title : 'Green Tea'
        },
        {
            id : 2,
            img : "https://brodandtaylor.com/cdn/shop/articles/dehydrated-tea-thumb_1024x.jpg?v=1639765759",
            title : 'Herbal Tea',
            price:'$30',
        },
        {
            id : 3,
            img : img3,
            title : 'Black Tea',
            price:'$30',
        },
        {
            id : 4,
            img : img5,
            price:'$30',
            title : 'White Tea'
        },
        {
            id : 5,
            img : img6,
            price:'$30',
            title : 'Oolong Tea'
        },
        {
            id : 6,
            img : img7,
            price:'$30',
            title : 'Rooibos Tea'
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
                                <img src={item.img} alt="" />
                                <div className="list-dis">
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <button>Order Now</button>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Tea