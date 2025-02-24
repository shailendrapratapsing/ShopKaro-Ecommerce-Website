import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import HeroSection from "../../../components/HeroSection";
import AdminSidebar from "../../../components/AdminSideBar";
import ImageValidators from "../../../FormValidators/ImageValidators";
import FormValidator from "../../../FormValidators/FormValidator";

import { useDispatch, useSelector } from "react-redux";
import {getTestimonial,updateTestimonial,} from "../../../Redux/ActionCreators/TestimonialActionCreators";
  
  


const AdminUpdateTestimonial = () => {
  let { id } = useParams();
  // let { _id } = useParams();

  let TestimonialStateData = useSelector((state) => state.TestimonialStateData);
  let dispatch = useDispatch();

  let navigate = useNavigate();
  let [data, setData] = useState({
    name: "",
    pic: "",
    active: true,
    message: "",
  });
  let [error, setError] = useState({
    name: "",
    pic: "",
    message: "",
  });
  let [show, setShow] = useState(false);
  const getInputData = (e) => {
    let name = e.target.name;
    let value = e.target.files
      ? "testimonial/" + e.target.files[0].name
      : e.target.value;
    // let value = e.target.files ?  e.target.files[0]: e.target.value;

    if (name !== "active") {
      setShow(true);
      setError((old) => {
        return {
          ...old,
          [name]: e.target.files ? ImageValidators(e) : FormValidator(e),
        };
      });
    }

    setData((prev) => {
      return {
        ...prev,
        [name]: name === "active" ? (value === "1" ? true : false) : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorItem = Object.values(error).find((x) => x !== "");
    if (errorItem) setShow(true);
    else {
      dispatch(updateTestimonial({ ...data }));
      // let formdata = new FormData();
      // formdata.append("name", data.name);
      // formdata.append("pic", data.pic);
      // formdata.append("_id", data._id);
      // formdata.append("active", data.active);
      // dispatch(createTestimonial(formdata));

      navigate("/admin/testimonial/");
    }
  };

  useEffect(() => {
    (() => {
      dispatch(getTestimonial());
      if (TestimonialStateData.length) {
        let item = TestimonialStateData.find((x) => x.id === id);
        // let item = TestimonialStateData.find((x) => x._id === _id);
        if (item) setData({ ...item });
      }
    })();
  }, [TestimonialStateData.length]);

  return (
    <>
      <HeroSection title="Admin" />
      <div className="container-fluid py-5 mb-5">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary text-light text-center p-2">
              Testimonial{" "}
              <Link to="/admin/testimonial">
                <i className="fa fa-arrow-left text-light float-end"></i>
              </Link>
            </h5>
            <div className="my-3">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={data.name}
                  className={`form-control ${
                    show && error.name ? "border-danger" : "border-primary"
                  } border-2 mb-3`}
                  placeholder="Testimonial"
                  name="name"
                  onChange={getInputData}
                />
                {show && error.name ? (
                  <p className="text-danger text-capitalize">{error.name}</p>
                ) : null}

                <div>
                  <label htmlFor="message">Message*</label>
                  <textarea
                    className={`form-control ${
                      show && error.message ? "border-danger" : "border-primary"
                    } border-2 mb-3`}
                    placeholder="Message"
                    name="message"
                    value={data.message}
                    onChange={getInputData}
                    rows={5}
                  ></textarea>
                  {show && error.message ? (
                    <p className="text-danger text-capitalize">
                      {error.message}
                    </p>
                  ) : null}
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="pic">Product Image</label>
                    <input
                      type="file"
                      className={`form-control ${
                        show && error.name ? "border-danger" : "border-primary"
                      }  border-2 mb-3`}
                      name="pic"
                      onChange={getInputData}
                    />
                    {show && error.pic ? (
                      <p className="text-danger text-capitalize">{error.pic}</p>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <label>Active</label>
                    <select
                      name="active"
                      className={`form-select border-3 border-primary`}
                      value={data.active ? "1" : "0"}
                      onChange={getInputData}
                    >
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 text-light"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUpdateTestimonial;
