import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
              <div className="container-fluid footer bg-dark wow fadeIn overflow-hidden" data-wow-delay=".3s">
            <div className=" pt-5 pb-4">
                <div className="row g-5 px-4 py-5">
                    <div className="col-lg-3 col-md-6">
                        <Link to="/">
                            <h1 className="text-white fw-bold d-block">Shop<span className="text-secondary">Karo</span> </h1>
                        </Link>
                        <p className="mt-4 text-light">
                        "ShopKaro: Your One-Stop Destination for Everything You Need!"</p>
                        <div className="d-flex hightech-link">
                            <Link to="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary"></i></Link>
                            <Link to="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary"></i></Link>
                            <Link to="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary"></i></Link>
                            <Link to="#" className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <Link to="#" className="h3 text-secondary">Contact Us</Link>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                            <Link to="#" className="pb-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-secondary me-2"></i> Block D,New Ashok Nagar</Link>
                            <Link to="tel:+917054330633"  target="_blank" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-secondary me-2"></i> +91-7054330633</Link>
                            <Link to="mailto:shopkaro@gmail.com" target='_blank' className="py-3 text-light border-bottom border-primary"><i className="fas fa-envelope text-secondary me-2"></i> shopkaro@gamil.com</Link>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <Link to="#" className="h3 text-secondary">Quick Link</Link>
                        <div className="mt-4 d-flex flex-column short-link">
                            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Home</Link>
                            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>About</Link>
                            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Features</Link>
                          
                            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Refund Policy</Link>
                            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Delivery Policy</Link>
                            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Terms & condition</Link>
                           
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <Link to="#" className="h3 text-secondary">Quick Link</Link>
                        <div className="mt-4 d-flex flex-column help-link">
                            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Terms Of use</Link>
                            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Privacy Policy</Link>
                            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Helps</Link>
                            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>FQAs</Link>
                            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact</Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-12">
                        <Link to="#" className="h3 text-secondary">Newsletter</Link>
                        <div className="mt-2">
                            <h6 className='text-light'>Subscribe Our Newsletter Service to Get Latest Update About Our New Products and Great Deals</h6>
                        </div>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                          <div className="mb-2">
                            <form action="">
                                <input type="text" placeholder='Enter Email' className='form-control' />
                                <button className='btn bg-secondary text-light w-100 my-3'>Submit</button>
                            </form>
                          </div>
                        </div>
                    </div>

                </div>
                <hr className="text-light mt-5 mb-4"/>
                <div className="row">
                    <div className="col-md-12 text-center text-md-center">
                        <span className="text-light"><Link to="#" className="text-secondary"><i className="fas fa-copyright text-secondary me-2"></i>Shop Karo</Link>, All right reserved.</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
