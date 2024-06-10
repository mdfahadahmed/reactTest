import { Route, Routes } from 'react-router-dom';

import Blog from "../Page/Blog";
import Category from "../Page/Category";
import Contact from "../Page/Contact";
import Home from "../Page/Home";
import Product from '../Page/Product';
import Services from "../Page/Services";
import SingleCategory from "../Page/SingleCategory";

function Router() {
  return (
    <div>
     <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/products/:id' element={<Product/>} />
        <Route exact path='/category' element={<Category/>} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/blog' element={<Blog/>} />
        <Route exact path='/contact' element={<Contact/>} /> 
        <Route exact path='/all-category/:singleCategory' element={<SingleCategory/>} /> 
            

     </Routes>
    </div>
  )
}

export default Router;
