import React, { Component } from 'react'

import NavPic from './NavPic/NavPic'
import NavMenu from './NavMenu/NavMenu'
 
class Navbar extends Component {
  render() {
   return (
    <div>
      <NavPic />
      <NavMenu />
    </div>
  )}
}
 
export default Navbar