import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import Searchbar from '../searchbar/Searchbar'
import { ThemeContext } from '../../context/themeProvider'

const Navbar = () => {

const { color } = useContext(ThemeContext);

  return (
    <header className='navbar' style={{background: color}}>
      <nav>
        <Link to="/" className='brand'>
        <h1>Recept</h1>
        </Link>
        <Searchbar/>
        <Link to="/create">Create Recept</Link>
      </nav>
    </header>
  )
}

export default Navbar;