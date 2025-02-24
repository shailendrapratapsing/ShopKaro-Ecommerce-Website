import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import AboutPages from './pages/AboutPages'
import FeaturePages from './pages/FeaturePages'
import ShopPages from './pages/ShopPages'
import ErrorPages from './pages/ErrorPages'
import TestimonialPages from './pages/TestimonialPages'
import ContactUsPage from './pages/ContactUsPage'
import BlogPages from './pages/BlogPages'
import ProductPages from './pages/ProductPages'
import NewProducts from './pages/NewProducts'

import AdminHome from './pages/Admin/AdminHome'

import AdminMainCategory from './pages/Admin/MainCategory/AdminMainCategory'
import AdminCreateMainCategory from './pages/Admin/MainCategory/AdminCreateMainCategory'
import AdminUpdateMainCategory from './pages/Admin/MainCategory/AdminupdateMainCategory'

import AdminSubCategory from './pages/Admin/SubCategory/AdminSubCategory'
import AdminCreateSubCategory from './pages/Admin/SubCategory/AdminCreateSubCategory'
import AdminUpdateSubCategory from './pages/Admin/SubCategory/AdminupdateSubCategory'

import AdminBrand from './pages/Admin/Brand/AdminBrand'
import AdminCreateBrand from './pages/Admin/Brand/AdminCreateBrand'
import AdminUpdateBrand from './pages/Admin/Brand/AdminUpdateBrand'

import AdminTestimonial from './pages/Admin/Testimonial/AdminTestimonial'
import AdminCreateTestimonial from './pages/Admin/Testimonial/AdminCreateTestimonial'
import AdminUpdateTestimonial from './pages/Admin/Testimonial/AdminUpdateTestimonial'
import AdminProduct from './pages/Admin/Product/AdminProduct'
import AdminCreateProduct from './pages/Admin/Product/AdminCreateProduct'
import AdminUpdateProduct from './pages/Admin/Product/AdminUpdateProduct'



const App = () => {
  return (
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<AboutPages/>} />
      <Route path='/shop' element={<ShopPages/>} />
      <Route path='/features' element={<FeaturePages/>} />
      <Route path='/testimonials' element={<TestimonialPages/>} />
      <Route path='/contact' element={<ContactUsPage/>} />
      <Route path='/products' element={<ProductPages/>} />
      <Route path='/newproducts' element={<NewProducts/>} />
      <Route path='/blogs' element={<BlogPages/>} />
      <Route path='/*' element={<ErrorPages/>} />

      <Route path='/admin' element={<AdminHome/>} />

      <Route path='/admin/maincategory' element={<AdminMainCategory/>} />
      <Route path='/admin/maincategory/create' element={<AdminCreateMainCategory/>} />
      <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMainCategory/>} />
      
      <Route path='/admin/subcategory' element={<AdminSubCategory/>} />
      <Route path='/admin/subcategory/create' element={<AdminCreateSubCategory/>} />
      <Route path='/admin/subcategory/update/:id' element={<AdminUpdateSubCategory/>} />

      <Route path='/admin/brand' element={<AdminBrand/>} />
      <Route path='/admin/brand/create' element={<AdminCreateBrand/>} />
      <Route path='/admin/brand/update/:id' element={<AdminUpdateBrand/>} />

      <Route path='/admin/testimonial' element={<AdminTestimonial/>} />
      <Route path='/admin/testimonial/create' element={<AdminCreateTestimonial/>} />
      <Route path='/admin/testimonial/update/:id' element={<AdminUpdateTestimonial/>} />

      <Route path='/admin/product' element={<AdminProduct/>} />
      <Route path='/admin/product/create' element={<AdminCreateProduct/>} />
      <Route path='/admin/product/update/:id' element={<AdminUpdateProduct/>} />
      

      
    </Routes>
    <Footer/>
    </BrowserRouter>
  
  )
}

export default App
