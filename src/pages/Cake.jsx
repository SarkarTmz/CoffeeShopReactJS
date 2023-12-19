import React from 'react'
import '../styles/TopRated.css'


const Cake = () => {
    const items = [
        {
            id : 1,
            img : "https://thepastryjournal.com/wp-content/uploads/2022/10/72525049-F792-46ED-9038-D24507249644.png",
            price:'$30',
            title : 'Chocolate Cake'
        },
        {
            id : 2,
            img : "https://i.ytimg.com/vi/dH6HDolxCxE/maxresdefault.jpg",
            title : 'vanilla cake',
            price:'$30',
        },
        {
            id : 3,
            img : "https://thescranline.com/wp-content/uploads/2023/06/RED-VELVET-CAKE-23-S-01.jpg",
            title : 'Red Velvet Cake',
            price:'$30',
        },
        {
            id : 4,
            img : "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/2/16/0/ry0401_carrotcake.jpg.rend.hgtvcom.1280.1280.suffix/1552488933139.jpeg",
            price:'$30',
            title : 'Carrot Cake'
        },
        {
            id : 5,
            img : "https://img.delicious.com.au/ZLE2ZHYD/del/2023/02/p109-strawberry-yoghurt-cheesecake-with-double-crumb-183879-2.png",
            price:'$30',
            title : 'Cheesecake'
        },
        {
            id : 6,
            img : "https://preppykitchen.com/wp-content/uploads/2023/10/Tiramisu-Social.jpg",
            price:'$30',
            title : 'Tiramisu'
        },
    ]
  return (
    <>
        <div>
        <h2 className='top-h2'>Cakes</h2>
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

export default Cake