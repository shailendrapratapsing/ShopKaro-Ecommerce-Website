
import { useEffect } from "react";
import HeroSection from "../../../components/HeroSection";
import { Link } from "react-router-dom";
import AdminSidebar from "../../../components/AdminSideBar";

import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

import { deleteProduct, getProduct } from "../../../Redux/ActionCreators/ProductActionCreators"
import { useDispatch, useSelector } from "react-redux";


export default function AdminProduct() {
 let ProductStateData = useSelector(state=>state.ProductStateData)
 let dispatch = useDispatch()


  function deleteRecord(id) {
    if (window.confirm("Are you sure want to delete?")) {
    dispatch(deleteProduct({id}))
      getApiData();
    }
  }

  // function deleteRecord(_id) {
  //   if (window.confirm("Are you sure want to delete?")) {
  //   dispatch(deleteProduct({_id}))
  //     getApiData();
  //   }
  // }

   function getApiData() {
  dispatch(getProduct())
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
  }, [ProductStateData.length]);

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
                Product{" "}
                <Link to="/admin/product/create">
                  <i className="fa fa-plus text-light float-end"></i>
                </Link>
              </h5>
              <div className="table-responsive">
                <table id="Datatable" className="table table-bordered my-3">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Maincategory</th>
                      <th>Subcategory</th>
                      <th>Brand</th>
                      <th>Color</th>
                      <th>Size</th>
                      <th>BasePrice</th>
                      <th>Discount</th>
                      <th>Final Price</th>
                      <th>Stock</th>
                      <th>StockQuantity</th>
                      <th>Product Image</th>
                      <th>Active</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {ProductStateData.map((item) => {
                      return (
                        <tr key={item.id}>
                        {/* <tr key={item._id}> */}
                          <td>{item.id}</td>
                          {/* <td>{item._id}</td> */}
                          <td>{item.name}</td>
                          <td>{item.maincategory}</td>
                          <td>{item.subcategory}</td>
                          <td>{item.brand}</td>
                          <td>{item.color}</td>
                          <td>{item.size}</td>
                          <td>&#8377;{item.basePrice}</td>
                          <td>{item.discount}</td>
                          <td>&#8377;{item.finalPrice}</td>
                          <td> {item.active ? ( <p className="text-success fs-5 fw-bold">Yes</p> ) : ( <p className="text-danger fs-5 fw-bold">No</p>  )}</td>
                          <td>{item.stockQuantity}</td>   
                          <td>
                            <div className="product-image">
                              {item.pic?.map((pic, index) => {
                                return <Link key={index}
                                to={`${process.env.REACT_APP_BACKEND_SERVER}/${pic}`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src={`${process.env.REACT_APP_BACKEND_SERVER}/${pic}`}
                                  alt={pic}
                                  style={{ width: "100px", height: "80px" }}  className="me-2"
                                />
                              </Link>
                              })
                            }
                            </div>
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
                              to={`/admin/product/update/${item.id}`}
                              className="btn btn-primary"
                            >
                              <i className="fa fa-edit text-light fs-4"></i>
                            </Link>
                          </td>
                          {/* <td>
                            <Link
                              to={`/admin/product/update/${item._id}`}
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
