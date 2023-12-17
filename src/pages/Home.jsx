import React from 'react'
import '../styles/Home.css'
import TopRated from './TopRated';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.webp'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import Menu from '../component/Menu';

const Home = () => {
    const menu = [
        {
            id : 1,
            img : img1,
            title : 'Espresso'
        },
        {
            id : 2,
            img : img2,
            title : 'Americano'
        },
        {
            id : 3,
            img : img3,
            title : 'Macchiato'
        },
        {
            id : 4,
            img : img5,
            title : 'Iced Coffee'
        },
        {
            id : 5,
            img : img6,
            title : 'Hot Chocolate'
        },
        {
            id : 6,
            img : img7,
            title : 'Mocha'
        },
        {
            id : 7,
            img : img4,
            title : 'Latte'
        },
        {
            id : 8,
            img : img8,
            title : 'Cold Brew',
        },
    ]
  return (
    <>
      <div className='home'>
          <Carousel
              className='dd'
              showThumbs={false}
              autoPlay={true}
              transitionTime={3}
              infiniteLoop={true}
              showStatus={false}
          >
                {
                    menu.map((item) =>(
                        <>
                        <div className="image">
                            <img src={item.img} />
                        </div>
                        <div className='pp'>
                            <p className="">{item.title}</p>
                        </div>
                        </>
                    ))
                }
          </Carousel>

          <div className="items">
              <button className='btn'>Coffee</button>
              <button className='btn'>Tea</button>
              <button className='btn'>Cookie</button>
              <button className='btn'>Cake</button>
          </div>
          {/* <TopRated /> */}
          <Menu/>
      </div>
    </>
  )
}

export default Home