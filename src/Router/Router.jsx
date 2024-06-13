import { Route, Routes } from 'react-router-dom';

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
        <Route  path='/products/:id' element={<Product/>} />
        <Route  path='/category' element={<Category/>} />
        <Route  path='/services' element={<Services/>} />
        <Route  path='/contact' element={<Contact/>} /> 
        <Route  path='/all-category/:singleCategory' element={<SingleCategory/>} />
     </Routes>
    </div>
  )
}

export default Router;
