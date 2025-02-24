 import { combineReducers } from "@reduxjs/toolkit";
import MaincategoryReducer from "./MaincategoryReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import BrandReducer from "./BrandReducer";
import TestimonialReducer from "./TestimoninalReducer";
import ProductReducer from "./ProductReducer";

 export default combineReducers ({
   MainCategoryStateData: MaincategoryReducer,
   SubCategoryStateData: SubcategoryReducer,
   BrandStateData: BrandReducer,
   TestimonialStateData:TestimonialReducer,
   ProductStateData: ProductReducer
 })