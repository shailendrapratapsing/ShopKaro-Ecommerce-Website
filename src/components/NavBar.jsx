import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>

<div className="container-fluid bg-dark py-2  d-md-flex">
            <div className="container">
                <div className="d-flex justify-content-between topbar">
                    <div className="top-info">
                        
                        <small className="me-3 text-white-50"><Link to="mailto:shopkaro@gmail.com" target='_blank' ><i className="fas fa-envelope me-2 text-secondary"></i></Link><span className='d-none d-lg-inline-block text-light'>shopkaro@gamil.com</span></small>
                        <small className="me-3 text-white-50"><Link to="tel:+917054330633" target='_blank' ><i className="fas fa-phone me-2 text-secondary"></i></Link><span className='d-none d-lg-inline-block text-light'>+91-7054330633</span></small>
                        <small className="me-3 text-white-50"><Link to="https://wa.me/+917054330633" target='_blank' ><i className="fa-brands fa-whatsapp me-2 fs-5 text-secondary"></i></Link><span className='d-none d-lg-inline-block text-light'>Whatsapp</span></small>
                    </div>
                   
                    <div className="top-link">
                        <Link href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></Link>
                        <Link href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></Link>
                        <Link href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></Link>
                        <Link href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></Link>
                    </div>
                </div>
            </div>
        </div>



      <div className="container-fluid bg-primary">
            <div className="mx-5">
                <nav className="navbar navbar-dark navbar-expand-lg py-0">
                    <Link to="/" className="navbar-brand">
                        <h1 className="text-white fw-bold d-block">Shop<span className="text-secondary">Karo</span> </h1>
                    </Link>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                        <div className="navbar-nav ms-auto mx-xl-auto p-0">
                            <Link to="/" className="nav-item nav-link active text-secondary">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/shop" className="nav-item nav-link">Shop</Link>
                            <Link to="/features" className="nav-item nav-link">Features</Link>
                            <Link to="/products" className="nav-item nav-link">Products</Link>
                            <Link to="/testimonials" className="nav-item nav-link">Testimonial</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                            <Link to="/admin" className="nav-item nav-link">Admin</Link>
                            <div className="nav-item dropdown">
                                <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu rounded">
                                    <Link to="/blogs" className="dropdown-item">Our Blog</Link>
                                    <Link to="/newproducts" className="dropdown-item">Our Products</Link>
                                    <Link to="/testimonials" className="dropdown-item">Testimonial</Link>
                                    <Link to="/*" className="dropdown-item">404 Page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shirink-0">
                        <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                            <Link to="tel:+917054330633" className="position-relative animated tada infinite">
                                <i className="fa fa-phone-alt text-white fa-2x"></i>
                                <div className="position-absolute" style={{top: "-7px", left: "20px"}}>
                                    <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex flex-column ">
                            <span className="text-white-50">Have any questions?</span>
                           <Link to="tel:+917054330633"> <span className="text-secondary">Call: +91-7054330633</span></Link>
                        </div>
                      
                    </div>
                </nav>
            </div>
        </div>
      
      
    </>
  )
}

export default NavBar
