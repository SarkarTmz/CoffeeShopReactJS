import React from 'react'
import '../styles/Home.css'
import TopRated from './TopRated';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'


const Home = () => {
  return (
    <>
      <div className='home'>
          <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={3}
              infiniteLoop={true}
              showStatus={false}
          >
                      <div className='pp'>
                          <img src={img1} />
                          <p className="legend">Legend 1</p>
                      </div>
                      <div className='pp'>
                          <img src={img2} />
                          <p className="legend">Legend 2</p>
                      </div>
                      <div className='pp'>
                          <img src={img3} />
                          <p className="legend">Legend 3</p>
                      </div>
                      <div className='pp'>
                          <img src={img4} />
                          <p className="legend">Legend 4</p>
                      </div>
                      <div className='pp'>
                          <img src={img5} />
                          <p className="legend">Legend 4</p>
                      </div>
                      <div className='pp'>
                          <img src={img5} />
                          <p className="legend">Legend 4</p>
                      </div>
                      <div className='pp'>
                          <img src={img5} />
                          <p className="legend">Legend 4</p>
                      </div>
                      <div className='pp'>
                          <img src={img5} />
                          <p className="legend">Legend 4</p>
                      </div>
          </Carousel>
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