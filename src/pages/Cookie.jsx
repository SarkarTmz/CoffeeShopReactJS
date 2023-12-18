import React from 'react'
import '../styles/TopRated.css'


const Cookie = () => {
    const items = [
        {
            id : 1,
            img : "https://theheritagecook.com/wp-content/uploads/2011/07/Gingersnaps-Closeup.jpg",
            price:'$30',
            title : 'Gingersnaps'
        },
        {
            id : 2,
            img : "https://preppykitchen.com/wp-content/uploads/2021/07/Shortbread-cookies-Recipe-New.jpg",
            title : 'Shortbread Cookies',
            price:'$30',
        },
        {
            id : 3,
            img : "https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/85-reeses-candy-double-peanut-butter-cookies.jpg",
            title : 'Peanut Butter Cookies',
            price:'$30',
        },
        {
            id : 4,
            img : "https://i0.wp.com/frostingandglue.com/wp-content/uploads/2021/05/Whoopie-Pies-Michele-Final-H-scaled.jpg",
            price:'$30',
            title : 'Whoopie Pies'
        },
        {
            id : 5,
            img : "https://preppykitchen.com/wp-content/uploads/2022/11/Chocolate-Biscotti-Recipe-Card.jpg",
            price:'$30',
            title : 'Biscotti'
        },
        {
            id : 6,
            img : "https://www.savingdessert.com/wp-content/uploads/2013/12/Spritz-Cookies-2.jpg",
            price:'$30',
            title : 'Spritz Cookies'
        },
    ]
  return (
    <>
        <div>
        <h2 className='top-h2'>Cookies</h2>
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

export default Cookie