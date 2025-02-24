import React, {  useEffect, useRef, useState } from "react";
import HeroSection from "../../../components/HeroSection";
import AdminSidebar from "../../../components/AdminSideBar";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import ImageValidators from "../../../FormValidators/ImageValidators";
import FormValidator from "../../../FormValidators/FormValidator";

import { createProduct } from "../../../Redux/ActionCreators/ProductActionCreators";

import { getMaincategory } from "../../../Redux/ActionCreators/MaincategoryActionCreators";
import { getSubcategory } from "../../../Redux/ActionCreators/SubcategoryActionCreators";
import { getBrand } from "../../../Redux/ActionCreators/BrandActionCreators";
let rte;
const AdminCreateProduct = () => {
  let refDiv = useRef(null);
 


  let MainCategoryStatedata = useSelector(
    (state) => state.MainCategoryStateData
  );
  let SubCategoryStatedata = useSelector((state) => state.SubCategoryStateData);
  let BrandStatedata = useSelector((state) => state.BrandStateData);

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [data, setData] = useState({
    name: "",
    pic: [],
    maincategory: "",
    subcategory: "",
    color: "",
    size:"",
    brand: "",
    stock:true,
    stockQuantity:0,
    basePrice:0,
    discount:0,
    finalPrice:0,
    active: true,
    description: "",
  });
  let [error, setError] = useState({
    name: "Name field is mandatory",
    pic: "Pic field is mandatory",
    color: "Color field is mandatory",
    size: "Size field is mandatory",
    discount: "Discount field is mandatory",
    basePrice: "Base Price field is mandatory", 
    stockQuantity: "Stock Quantity field is mandatory",
  

  });
  let [show, setShow] = useState(false);

  const getInputData = (e) => {
    let name = e.target.name;
    let value = e.target.files
      ?  Array.from(e.target.files).map((file) =>"product/" + file.name)
      : e.target.value;
    // let value = e.target.files?  e.target.files: e.target.value;

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
        [name]: name === "active" || name ==="stock" ? (value === "1" ? true : false) : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorItem = Object.values(error).find((x) => x !== "");
    if (errorItem) setShow(true);
    else {
      let bp = parseInt(data.basePrice);
      let dis = parseInt(data.discount);
      let fp = parseInt(bp - (bp * dis) / 100  )
      let sq = parseInt(data.stockQuantity);
      dispatch(createProduct({ ...data 
        ,"maincategory":data.maincategory?data.maincategory:MainCategoryStatedata[0].name,
        "subcategory":data.subcategory?data.subcategory:SubCategoryStatedata[0].name,
        "brand":data.brand?data.brand:BrandStatedata[0].name,
        "finalPrice":fp,
        "stock":true,
        "basePrice":bp,
        "discount":dis,
        "description": rte.getHTMLCode(),

      }));

      // let formdata = new FormData();
      // formdata.append("name", data.name);
      // formdata.append("pic", data.pic);
      // formdata.append ("maincategory",data.maincategory?data.maincategory:MainCategoryStatedata[0].name,)
      // formdata.append ("subcategory",data.subcategory?data.subcategory:SubCategoryStatedata[0].name,)
      // formdata.append( "brand",data.brand?data.brand:BrandStatedata[0].name),
      // formdata.append ("finalPrice",fp,)
      // formdata.append( "stock",sq,)
      // formdata.append ("basePrice",bp,)
      // formdata.append ("discount",dis)
      // formdata.append ("color",data.color)
      // formdata.append ("size",data.size)
      // formdata.append ("stockQuantity",data.stockQuantity)
      // formdata.append ("description",data.description)
      // formdata.append("active", data.active);
      // dispatch(createProduct(formdata));

      navigate("/admin/product");
    }
  };

  useEffect(() => {
    rte=new window.RichTextEditor(refDiv.current);
    rte.setHTMLCode("");
  }, []);

  useEffect(() => {
    (() => {
      dispatch(getMaincategory());
    })();
  }, [MainCategoryStatedata.length]);
  useEffect(() => {
    (() => {
      dispatch(getSubcategory());
    })();
  }, [SubCategoryStatedata.length]);
  useEffect(() => {
    (() => {
      dispatch(getBrand());
    })();
  }, [BrandStatedata.length]);

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
              Product{" "}
              <Link to="/admin/product">
                <i className="fa fa-arrow-left text-light float-end"></i>
              </Link>
            </h5>
            <div className="my-3">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name">Name*</label>
                  <input
                    type="text"
                    className={`form-control ${
                      show && error.name ? "border-danger" : "border-primary"
                    } border-3 mb-3`}
                    placeholder="Product"
                    name="name"
                    onChange={getInputData}
                  />
                  {show && error.name ? (
                    <p className="text-danger text-capitalize">{error.name}</p>
                  ) : null}
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 col-lg-3">
                    <label>MainCategory*</label>
                    <select
                      name="maincategory"
                      className={`form-select border-3 border-primary`}
                      onChange={getInputData}
                    >
                      {MainCategoryStatedata &&
                        MainCategoryStatedata.filter((x) => x.active).map(
                          (item) => {
                            return <option key={item.id}>{item.name}</option>;
                            //  return <option key={item._id} value={item._id}>{item.name}</option>
                          }
                        )}
                    </select>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <label>SubCategory*</label>
                    <select
                      name="subcategory"
                      className={`form-select border-3 border-primary`}
                      onChange={getInputData}
                    >
                      {SubCategoryStatedata &&
                        SubCategoryStatedata.filter((x) => x.active).map(
                          (item) => {
                            return <option key={item.id}>{item.name}</option>;
                            //  return <option key={item._id} value={item._id}>{item.name}</option>
                          }
                        )}
                    </select>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <label>Brand*</label>
                    <select
                      name="maincategory"
                      className={`form-select border-3 border-primary`}
                      onChange={getInputData}
                    >
                      {BrandStatedata &&
                        BrandStatedata.filter((x) => x.active).map((item) => {
                          return <option key={item.id}>{item.name}</option>;
                          //  return <option key={item._id} value={item._id}>{item.name}</option>
                        })}
                    </select>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <label>Active*</label>
                    <select
                      name="active"  className={`form-select border-3 border-primary`}  value={data.active ? "1" : "0"} onChange={getInputData}>
                       <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                </div>
                     
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="color">Color*</label>
                      <input type="text" onChange={getInputData} name="color" className={`form-control ${show && error.color ? "border-danger" : "border-primary"} border-3 mb-3`} placeholder=" Product color" />
                      {show && error.color ? <p className="text-danger text-capitalize">{error.color}</p> : null}
                      </div>
                    <div className="col-md-6">
                      <label htmlFor="color">Size*</label>
                      <input type="text" onChange={getInputData} name="size" className={`form-control ${show && error.size ? "border-danger" : "border-primary"} border-3 mb-3`} placeholder="Product size" />
                      {show && error.size ? <p className="text-danger text-capitalize">{error.size}</p> : null}
                      </div>
                  </div>   
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="basePrice">BasePrice*</label>
                      <input type="text" onChange={getInputData} name="basePrice" className={`form-control ${show && error.basePrice ? "border-danger" : "border-primary"} border-3 mb-3`} placeholder="Product basePrice" />
                      {show && error.basePrice ? <p className="text-danger text-capitalize">{error.basePrice}</p> : null}
                      </div>
                    <div className="col-md-6">
                      <label htmlFor="discount">Discount*</label>
                      <input type="text" onChange={getInputData} name="discount" className={`form-control ${show && error.discount ? "border-danger" : "border-primary"} border-3 mb-3`} placeholder="Product discount" />
                      {show && error.discount ? <p className="text-danger text-capitalize">{error.discount}</p> : null}
                      </div>
                  </div>   
                  

                <div className="mb-3">
                  <label htmlFor="description">Description*</label>
                  <div ref={refDiv} className="border-primary border-2"></div>
                </div>

                <div className="row mb-3">
                <div className="col-md-6">
                      <label htmlFor="stockQunatity">Stock Quantity*</label>
                      <input type="text" onChange={getInputData} name="stockQuantity" className={`form-control ${show && error.stockQuantity ? "border-danger" : "border-primary"} border-3 mb-3`} placeholder="Product stock quantity " />
                      {show && error.stockQuantity ? <p className="text-danger text-capitalize">{error.stockQuantity}</p> : null}
                      </div>
                  <div className="col-md-6">
                    <label htmlFor="pic">Product Image*</label>
                    <input
                      type="file"
                      className={`form-control ${
                        show && error.pic? "border-danger" : "border-primary"
                      }  border-3 mb-3`}
                      name="pic"
                      onChange={getInputData}
                      multiple
                    />
                    {show && error.pic ?typeof error.pic ==="string"?<p className="text-danger text-capitalize">{error.pic}</p>:error.pic.map((err,ind)=>{return <p key={ind} className="text-danger text-capitalize">{error.pic}</p>}):null}
                    </div>  
                  
                  <div className="col-md-6">
                    <label>Active*</label>
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
                    Create
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

export default AdminCreateProduct;
