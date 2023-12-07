import React from 'react'
import '../styles/TopRated.css'

const TopRated = () => {
    const items = [
        { id: 1, name: "Expresso", price:'$20',  imageUrl: 'https://t4.ftcdn.net/jpg/00/21/34/51/360_F_21345188_RjZizeIMhCVnvYzOpuCJhMs6rRy5gPIx.webp' },
        { id: 2, name: "Expresso", price:'$20',  imageUrl: 'https://t4.ftcdn.net/jpg/00/21/34/51/360_F_21345188_RjZizeIMhCVnvYzOpuCJhMs6rRy5gPIx.webp' },
        { id: 3, name: "Expresso", price:'$20',  imageUrl: 'https://t4.ftcdn.net/jpg/00/21/34/51/360_F_21345188_RjZizeIMhCVnvYzOpuCJhMs6rRy5gPIx.webp' },
        { id: 4, name: "Expresso", price:'$20',  imageUrl: 'https://t4.ftcdn.net/jpg/00/21/34/51/360_F_21345188_RjZizeIMhCVnvYzOpuCJhMs6rRy5gPIx.webp' },
        { id: 5, name: "Expresso", price:'$20',  imageUrl: 'https://t4.ftcdn.net/jpg/00/21/34/51/360_F_21345188_RjZizeIMhCVnvYzOpuCJhMs6rRy5gPIx.webp' },
        { id: 6, name: "Expresso", price:'$20',  imageUrl: 'https://t4.ftcdn.net/jpg/00/21/34/51/360_F_21345188_RjZizeIMhCVnvYzOpuCJhMs6rRy5gPIx.webp' },
        { id: 7, name: "Expresso", price:'$20',  imageUrl: 'https://t4.ftcdn.net/jpg/00/21/34/51/360_F_21345188_RjZizeIMhCVnvYzOpuCJhMs6rRy5gPIx.webp' },
        { id: 8, name: "Expresso", price:'$20',  imageUrl: 'https://t4.ftcdn.net/jpg/00/21/34/51/360_F_21345188_RjZizeIMhCVnvYzOpuCJhMs6rRy5gPIx.webp' },
      ];
  return (
    <>
        <div>
        <h2 className='top-h2'>Top Tests</h2>
            <div className="lists">
                {
                    items.map((item) => (
                            <div className="list">
                                <img src={item.imageUrl} alt="" />
                                <div className="list-dis">
                                <p>{item.name}</p>
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

export default TopRated