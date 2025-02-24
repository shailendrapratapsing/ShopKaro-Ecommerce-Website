import React, {  useEffect, useState } from 'react'

import Products from "../components/Products"
import HeroSection from '../components/HeroSection'


import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getMaincategory } from '../Redux/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../Redux/ActionCreators/SubcategoryActionCreators'
import { getBrand } from '../Redux/ActionCreators/BrandActionCreators'
import { getProduct } from '../Redux/ActionCreators/ProductActionCreators'

const ShopPages = () => {
   let MaincategoryStateData = useSelector(state => state.MainCategoryStateData)
      let SubcategoryStateData = useSelector(state => state.SubCategoryStateData)
      let BrandStateData = useSelector(state => state.BrandStateData)
      let ProductStateData = useSelector(state => state.ProductStateData)
      let dispatch = useDispatch()
      
      let [data, setData] = useState([])
      let [mc, setMc] = useState('')
      let [sc, setSc] = useState('')
      let [br, setBr] = useState('')
    
      let [searchParams, setSearchParams] = useSearchParams()
      console.log(data)
  
   useEffect(() => { 
     ( ()=>{
          dispatch(getMaincategory())
      } )()
   }, [MaincategoryStateData.length])
  
   useEffect(() => { 
     ( ()=>{
          dispatch(getSubcategory())
      } )()
   }, [SubcategoryStateData.length])
  
   useEffect(() => { 
     ( ()=>{
          dispatch(getBrand())
      } )()
   }, [BrandStateData.length])
  //  function applyPriceFilter(e) {
  //   e.preventDefault()
  //   filterData(mc, sc, br, min, max)
  // }
  function filterData(mc, sc, br) {
    
    setData(ProductStateData.filter((p) => {
     return ((mc === "All" || mc === p.maincategory) &&
     (sc === "All" || sc === p.subcategory) &&
     (br === "All" || br === p.brand))
    }))
  }
console.log(data)
   useEffect(() => { 
     ( ()=>{
          dispatch(getProduct())
          let mc = searchParams.get("mc") ?? "All"
          let sc = searchParams.get("sc") ?? "All"
          let br = searchParams.get("br") ?? "All"
          if (ProductStateData.length) {
            setMc(mc)
            setSc(sc)
            setBr(br)
            filterData(mc, sc, br)
        
          }
      } )()
   }, [ProductStateData.length,searchParams])


   
    
  
  return (
    <>
    <HeroSection title="Shop" />
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-2">
            <div className="list-group mb-3 mt-3">
              <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                Maincategory
              </a>
              <Link to={`/shop?mc=All&sc=${sc}&br=${br}`} className="list-group-item list-group-item-action">All</Link>
              {MaincategoryStateData.filter(x => x.active).map(item => {
                return <Link to={`/shop?mc=${item.name}&sc=${sc}&br=${br}`} key={item.id} className="list-group-item list-group-item-action">{item.name}</Link>
              })}
            </div>

            <div className="list-group mb-3">
              <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                Subcategory
              </a>
              <Link to={`/shop?mc=${mc}&sc=All&br=${br}`} className="list-group-item list-group-item-action">All</Link>
              {SubcategoryStateData.filter(x => x.active).map(item => {
                return <Link to={`/shop?mc=${mc}&sc=${item.name}&br=${br}`} key={item.id} className="list-group-item list-group-item-action">{item.name}</Link>
              })}
            </div>

            <div className="list-group mb-3">
              <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                Brand
              </a>
              <Link to={`/shop?mc=${mc}&sc=${sc}&br=All`} className="list-group-item list-group-item-action">All</Link>
              {BrandStateData.filter(x => x.active).map(item => {
                return <Link to={`/shop?mc=${mc}&sc=${sc}&br=${item.name}`} key={item.id} className="list-group-item list-group-item-action">{item.name}</Link>
              })}
            </div>

            {/* <h5 className='bg-primary text-light text-center p-2'>Price Filter</h5> */}
            {/* <form onSubmit={applyPriceFilter}>
              <div className="row">
                <div className="col-6 mb-3">
                  <label>Min</label>
                  <input type="number" name="min" value={min} placeholder='Min' onChange={(e) => setMin(e.target.value)} className='form-control border-3 border-primary' />
                </div>
                <div className="col-6 mb-3">
                  <label>Max</label>
                  <input type="number" name="max" value={max} placeholder='Max' onChange={(e) => setMax(e.target.value)} className='form-control border-3 border-primary' />
                </div>
              </div>
              <div className="mb-3">
                <button type="submit" className='btn btn-primary w-100'>Apply Filter</button>
              </div>
            </form> */}
          </div>
          <div className="col-md-10">
            <Products  title="Shop" data={data}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopPages
