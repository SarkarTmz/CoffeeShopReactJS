import React from 'react'
import '../styles/TopRated.css'


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
            img : "https://images.unsplash.com/photo-1610137312679-8de3a836b455?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHw2fHxibGFjayUyMHRlYXxlbnwwfHx8fDE2OTcwMDIyNzl8MA&ixlib=rb-4.0.3&fm=jpg&w=5836&h=3629&fit=max",
            title : 'Black Tea',
            price:'$30',
        },
        {
            id : 4,
            img : "https://www.organicfacts.net/wp-content/uploads/milktea1.jpg",
            price:'$30',
            title : 'White Tea'
        },
        {
            id : 5,
            img : "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN538-Oolong-Tea-732x549-thumb.jpg",
            price:'$30',
            title : 'Oolong Tea'
        },
        {
            id : 6,
            img : "https://www.naturalnews.com/wp-content/uploads/sites/91/2019/04/Rooibos-Tea-Healthy-Background-Plant-Roibos-Africa.jpg",
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