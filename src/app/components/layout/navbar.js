import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  navMenuItems: {
    display: 'inline-block',
    color: 'blue'
  },
  navContainer: {
    borderBottom: '1px solid black',
    width: '100%'
  }
}

const Navbar = ({sheet: {classes}, children}) => (
  <nav className={classes.navContainer}>
    <ul className={classes.navMenuItems}>
      {children}
    </ul>
  </nav>
)

export default injectSheet(styles)(Navbar)