import React, { Children } from 'react'
import HeaderPage from './header'
import Footer from './footer'
//  import Navbar from "./navbar"
function LayoutPage({children}) {
  return (
   <>
   <HeaderPage/>
   {children}
   <Footer/>
 </> )
}

export default LayoutPage;  
