import React from 'react'
import "./styles/Navbar.css"

const Navbar = ({handleClickShowModal}) => {

  return (
    <nav className='navbar'>
      <h1 className='navbar__title'>LIST CARD USER</h1>
      <button className='navbar__btn' onClick={handleClickShowModal}><i className='bx bx-cross'></i> CREATE NEW USER</button>
    </nav>
  )
}

export default Navbar
