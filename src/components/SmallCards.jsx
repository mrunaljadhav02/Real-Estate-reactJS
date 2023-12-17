import React from 'react'

const SmallCards = () => {
  return (
    <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <img src="lightbulb-fill.svg" class="card-img-top m-auto mt-3" style={{maxWidth: "50px"}} alt="..." />
      <div class="card-body text-center">
        <h5 class="card-title fw-bold">FREE LEARNING</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="laptop-fill.svg" class="card-img-top m-auto mt-3" style={{maxWidth: "50px"}} alt="..." />
      <div class="card-body text-center ">
        <h5 class="card-title fw-bold">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="patch-check-fill.svg" class="card-img-top m-auto mt-3" style={{maxWidth: "50px"}} alt="..." />
      <div class="card-body text-center">
        <h5 class="card-title fw-bold">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="question-circle-fill.svg" class="card-img-top m-auto mt-3" style={{maxWidth: "50px"}} alt="..." />
      <div class="card-body text-center">
        <h5 class="card-title fw-bold">Card title</h5>
        <p class="card-text">This is a longer card with <span style={{ color: 'green' }}>supporting text</span> below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default SmallCards
