import { Route, Routes } from 'react-router-dom';

import About from "../Page/About";
import Contact from "../Page/Contact";
import Home from "../Page/Home";


function Router() {
  return (
    <div>
     <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<About/>} />
        <Route exact path='/signup' element={<Contact/>} />
     </Routes>
    </div>
  )
}

export default Router;
