import React from 'react'

import bannerImageBG from '../assets/svg/looperBG.svg'

const Banner = () => {
  return (
    <div className="row">
        <img src={bannerImageBG} alt="" />
        <div className="col-6"></div>
        <div className="col-6"></div>
    </div>
  )
}

export default Banner