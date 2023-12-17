import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function CardComponent() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary verticle-line">
  <div className="container">
    <a className="navbar-brand" href="#">Wp Academy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item me-2 ">
          <a className="nav-link active" aria-current="page" href="#">
          <img src="boxes.svg" className='me-2' alt="" />
            Courses</a>
        </li>
        <li className="nav-item me-2">
         
          <a className="nav-link" href="#">
          <img src="tablet.svg" className='me-2' alt="" />
            Tutorial</a>
        </li>
        <li className="nav-item me-2">
        
          <a className="nav-link" href="#">
          <img src="signpost-split-fill.svg" className='me-2' alt="" />
            Streams</a>
        </li>
        <li className="nav-item me-2">
          <a className="nav-link" href="#">
          <img src="send-check.svg" className='me-2' alt="" />
            Articles</a>
        </li>
      </ul>
      <form className="d-flex align-items-center" role="search">
      <a className="nav-link" href="#">
      <img src="search.svg" className='me-4' alt="" /></a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button> */}
        <li className="nav-item me-2">
          <a className="nav-link" href="#"> 
          <img src="trophy-fill.svg" className='me-2' alt="" />
            Sucess Stories</a>
        </li>
        <li className="nav-item me-2">
          <a className="nav-link " href="#">LogIn</a>
        </li>
        <li className="nav-item">
        <button type="button" class="btn btn-dark">Sign Up</button>
        </li>
        </ul>
      </form>
    </div>
  </div>
</nav>
  );
}

export default CardComponent;