import React from "react";
import { Link } from "react-router-dom";

const About = ({ title }) => {
  return (
    <>
      <div className="container-fluid py-5 my-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".3s"
            >
              <div className="h-100 position-relative">
                <img
                  src="img/about-1.jpg"
                  className="img-fluid w-75 rounded"
                  alt=""
                  style={{ marginBottom: "25%" }}
                />
                <div
                  className="position-absolute w-75"
                  style={{ top: "25%", left: " 25%" }}
                >
                  <img
                    src="img/banner8.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".5s"
            >
              <h5 className="text-primary">About Us</h5>
              <h1 className="mb-4">About ShopKaro</h1>
              <p className="text-justify">
                ShopKaro is an e-commerce platform dedicated to providing
                customers with a seamless and secure online shopping experience.
                We offer a wide range of genuine beauty products, including
                branded perfumes, fragrances, and cosmetics, all at affordable
                prices across India. APPPAGE.NET Our platform is built using
                modern technologies to ensure a user-friendly interface and
                smooth navigation. We prioritize the security of our customers
                by implementing the latest anti-fraud measures and maintaining a
                dedicated team of cybersecurity experts. ShopKaro is certified
                by the Payment Card Industry Data Security Standards (PCI-DSS)
                with 128-bit encryption, ensuring that every transaction is 100%
                safe.Customer satisfaction is at the
                core of our mission. Our 24/7 customer support is available in
                both English and Hindi to assist you with any inquiries or
                issues you may encounter. Whether you're browsing our extensive
                product catalog or need assistance with an order, our team is
                here to help.At ShopKaro, we are
                committed to delivering quality products and exceptional
                service, making your online shopping experience enjoyable and
                secure. 
              </p>
              {title && (
                <Link
                  to="/about"
                  className="btn btn-secondary rounded-pill w-100 py-2 text-white"
                >
                  More Details
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
