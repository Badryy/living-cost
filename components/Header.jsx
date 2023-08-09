import React from 'react'
import Image from 'next/image'
//import components
import Navbar from './Navbar'
import MinNav from './MinNav'
//import styles
import { StyledHeader, HeaderContainer } from '../styles/comonentsStyles/headerStyles'
//import assets
import search from '../assets/search.svg'
//import <windowsize></windowsize>
import { useWindowSize } from '../utils/useWindowSize';

const Header = () => {
  //set viewport
  const width = useWindowSize();

  return (
    <StyledHeader>
      <HeaderContainer>
        {width <= 815 ? (
          <MinNav />
        ) : (
          <Navbar />
        )}
        <div className='container'>
          <h1>The most affordable place to stay in the Lagos City, Ikeja area</h1>

          <div className='right-column'>
            <iframe src="https://maps.google.com/maps?q=lagos,%20ikeja&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe>
            <div className="search">
              <div className="search-input">
                <select className='select-1'>
                  <option value="">All Type</option>
                </select>

                <select className="select-2">
                  <option value="">Neigborhood</option>
                </select>
                <span className='search-icon'><Image src={search} alt="search" className='icon' /></span>

              </div>
            </div>
          </div>

        </div>
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header