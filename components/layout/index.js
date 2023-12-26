import React, { Children } from 'react'
import HeaderPage from './header'
import Footer from './footer'
//  import Navbar from "./navbar"
function layout({children}) {
  return (
   <>
   <HeaderPage/>
   {children}
   <Footer/>
 </> )
}

export default layout;  
