import React from 'react'

const Banner = () => {
  return (
    <div style={{ backgroundColor: '#eee' }}>
    <div className="container ">
    <div className="card mb-3 border-0 " style={{ backgroundColor: '#eee' }}>
  <div className="row g-0">
    
    <div className="col-md-8 pt-5">
      <div className="card-body ">
        <h5 className="card-title d-inline p-2" style={{ backgroundColor: 'orange', borderRadius: '3px'  }}>Disign</h5>
        <h1 className="card-text fw-bold mt-3">Free Online Education <br/> for  <span style={{ color: 'green' }}>Everyone !</span> </h1>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa nam dolorum dolor quaerat natus, voluptates 
        quasi ab animi quidem ullam,commodi voluptatibus earum non libero error vitae quis numquam.</p>
        <button type="button" class="btn btn-dark">EXPLORE COURSES <img src="/arrow-right.svg" alt="" /></button>
        <h8 className="card-title ms-4"> <img src="play-circle-fill.svg" alt="" /> INTRODUCTION </h8>
      </div>
    </div>
    <div className="col-md-4">
      <img src="bgimage.png" className="img-fluid rounded-start" alt="..." />
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default Banner
