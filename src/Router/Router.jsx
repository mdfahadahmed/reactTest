import { Route, Routes } from 'react-router-dom';

import About from "../Page/About";
import Blog from "../Page/Blog";
import Category from "../Page/Category";
import Contact from "../Page/Contact";
import Home from "../Page/Home";
import Services from "../Page/Services";


function Router() {
  return (
    <div>
     <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/category' element={<Category/>} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/blog' element={<Blog/>} />
        <Route exact path='/contact' element={<Contact/>} />   

     </Routes>
    </div>
  )
}

export default Router;
