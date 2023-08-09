import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import styles
import { StyledNav, NavigationContainer } from '../styles/comonentsStyles/navbarStyles'
//import assets
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <StyledNav>
      <div className="centered-border">
        <Link href='/'>
          <Image src={logo} alt='Logo' />
        </Link>

        <NavigationContainer>
          <ul className='nav-ul'>
            <li className='nav-item'>
              <Link href='#' className='dropBtn active'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link href='#' className='dropBtn'>Landlord</Link>
            </li>
            <li className='nav-item'>
              <Link href='#' className='dropBtn'>Tenant</Link>
            </li>
            <li className='nav-item'>
              <Link href='#' className='dropBtn'>Contact Us</Link>
            </li>
          </ul>
        </NavigationContainer>
      </div>
    </StyledNav>
  )
}

export default Navbar