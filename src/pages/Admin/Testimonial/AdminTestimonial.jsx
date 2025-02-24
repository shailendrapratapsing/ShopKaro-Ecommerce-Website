
import { useEffect } from "react";
import HeroSection from "../../../components/HeroSection";
import { Link } from "react-router-dom";
import AdminSidebar from "../../../components/AdminSideBar";

import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

import { deleteTestimonial, getTestimonial } from "../../../Redux/ActionCreators/TestimonialActionCreators"
import { useDispatch, useSelector } from "react-redux";


export default function AdminTestimonial() {
 let TestimonialStateData = useSelector(state=>state.TestimonialStateData)
 let dispatch = useDispatch()


  function deleteRecord(id) {
    if (window.confirm("Are you sure want to delete?")) {
    dispatch(deleteTestimonial({id}))
      getApiData();
    }
  }

  // function deleteRecord(_id) {
  //   if (window.confirm("Are you sure want to delete?")) {
  //   dispatch(deleteTestimonial({_id}))
  //     getApiData();
  //   }
  // }

   function getApiData() {
  dispatch(getTestimonial())
    let time = setTimeout(() => {
      $("#Datatable").DataTable();
    }, 500);
    return time;
  }

  useEffect(() => {
   let time = getApiData();
   return ()=>{
     clearTimeout(time)
   } 
  }, [TestimonialStateData.length]);

  return (
    <>
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
                <Link to="/admin/testimonial/create">
                  <i className="fa fa-plus text-light float-end"></i>
                </Link>
              </h5>
              <div className="table-responsive">
                <table id="Datatable" className="table table-bordered my-3">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Message</th>
                      <th>Active</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TestimonialStateData.map((item) => {
                      return (
                        <tr key={item.id}>
                        {/* <tr key={item._id}> */}
                          <td>{item.id}</td>
                          {/* <td>{item._id}</td> */}
                          <td>{item.name}</td>
                          <td>
                            <Link
                              to={`${process.env.REACT_APP_BACKEND_SERVER}/${item.pic}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={`${process.env.REACT_APP_BACKEND_SERVER}/${item.pic}`}
                                alt={item.name}
                                style={{ width: "100px", height: "80px" }}
                              />
                            </Link>
                          </td>
                          <td>
                            <div className="testimonial-message">{item.message}</div>
                            </td>
                          <td>
                            {item.active ? (
                              <p className="text-success fs-5 fw-bold">Yes</p>
                            ) : (
                              <p className="text-danger fs-5 fw-bold">No</p>
                            )}
                          </td>
                          <td>
                            <Link
                              to={`/admin/testimonial/update/${item.id}`}
                              className="btn btn-primary"
                            >
                              <i className="fa fa-edit text-light fs-4"></i>
                            </Link>
                          </td>
                          {/* <td>
                            <Link
                              to={`/admin/testimonial/update/${item._id}`}
                              className="btn btn-primary"
                            >
                              <i className="fa fa-edit text-light fs-4"></i>
                            </Link>
                          </td> */}
                          <td>
                            <button
                              onClick={() => deleteRecord(item.id)}
                              className="btn btn-danger"
                            >
                              <i className="fa fa-trash text-light fs-4"></i>
                            </button>
                          </td>
                          {/* <td>
                            <button
                              onClick={() => deleteRecord(item._id)}
                              className="btn btn-danger"
                            >
                              <i className="fa fa-trash text-light fs-4"></i>
                            </button>
                          </td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
