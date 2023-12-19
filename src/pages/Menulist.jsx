import React from 'react'
import TopRated from '../pages/TopRated'
import Tea from '../pages/Tea'
import Cookie from '../pages/Cookie'
import Cake from '../pages/Cake'

const Menulist = () => {
  return (
    <>
        <div className="menulist">
            <div className="section">
                <TopRated/>
            </div>
            <div className="section">
                <Tea/>
            </div>
            <div className="section">
              <Cookie/>
            </div>
            <div className="section">
                <Cake/>
            </div>
        </div>
    </>
  )
}

export default Menulist