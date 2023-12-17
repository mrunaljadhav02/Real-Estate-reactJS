import React from 'react'
import SmallCards from './SmallCards'

const CardsCom = () => {
  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-evenly flex-wrap mb-5">
        <div className='text-center me-3'>
          <span className='fw-bold fs-3'>11,832</span>
          <p>STUDENTS</p>
        </div>
        <div className='text-center me-3'>
        <span className='fw-bold fs-3'>12</span>
          <p>COURSES</p>
        </div>
        <div className='text-center me-3'>
        <span className='fw-bold fs-3'>59</span>
          <p>TUITORIAL</p>
        </div>
        <div className='text-center me-3'>
        <span className='fw-bold fs-3'>19</span>
          <p>STREAM</p>
        </div>
        <div className='text-center'>
        <span className='fw-bold fs-3'>5</span>
          <p>ARTICLES</p>
        </div>
      </div>
      <SmallCards />
    </div>

  )
}

export default CardsCom
