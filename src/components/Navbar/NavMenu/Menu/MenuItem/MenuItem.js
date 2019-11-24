import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import classes from './MenuItem.css'
 
const MenuItem = ({ to, value, icon }) => {
   return (
      <div className={classes.MenuItem} >
        <NavLink to={ to } exact activeClassName={classes.active}>
          <div className={classes.g}>
            <FontAwesomeIcon icon={icon} className={value} />
          </div>
        </NavLink>
      </div>
  )}
 
export default MenuItem