import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <ul className="list-group">
        <Link to="/">
          <li className="list-group-item mb-2 bg-primary text-light ">
            <i className="bi bi-house-fill"></i>
            <span className="float-end">Home</span>
          </li>
        </Link>
        <Link to="/admin/maincategory">
          <li className="list-group-item mb-2 bg-primary text-light">
            <i className="bi bi-list-ul"></i> 
            <span className="float-end">MainCategory</span>
          </li>
        </Link>
        <Link to="/admin/subcategory" className="list-group-item mb-2 bg-primary text-light">
          <i className="bi bi-list-ul"></i>
          <span className="float-end">SubCategory</span>
        </Link>
        <Link to="/admin/brand" className="list-group-item mb-2 bg-primary text-light">
          <i className="bi bi-list-ul"></i>
          <span className="float-end">Brand</span>
        </Link>
        <Link to="/admin/product" className="list-group-item mb-2 bg-primary text-light">
          <i className="bi bi-list-ul"></i>
          <span className="float-end">Product</span>
        </Link>
        <Link  to="/admin/testimonial"className="list-group-item mb-2 bg-primary text-light">
          <i className="bi bi-star-fill"></i>
          <span className="float-end">Testimonial</span>
        </Link>
        <Link className="list-group-item mb-2 bg-primary text-light">
          <i className="bi bi-people-fill"></i>
          <span className="float-end">User</span>
        </Link>
        <Link className="list-group-item mb-2 bg-primary text-light">
          <i className="bi bi-envelope-fill"></i>
          <span className="float-end">Newsletter</span>
        </Link>
        <Link className="list-group-item mb-2 bg-primary text-light">
          <i className="bi bi-cart-dash-fill"></i>
          <span className="float-end">Checkout</span>
        </Link>
        <Link className="list-group-item mb-2 bg-primary text-light">
          <i className="bi bi-telephone-fill"></i>{" "}
          <span className="float-end">Contact Us</span>
        </Link>
      </ul>
    </>
  );
};

export default AdminSidebar;
