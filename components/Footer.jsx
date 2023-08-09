import React from 'react'
import Image from 'next/image'
//import styles
import { Container, Column } from '../styles/comonentsStyles/footerStyles'
//import assets
import logo from '../assets/logo.svg'
import place from '../assets/footer/place.svg'
import phone from '../assets/footer/phone.svg'
import printshop from '../assets/footer/printshop.svg'
import facebook from '../assets/footer/facebook.svg'
import twitter from '../assets/footer/twitter.svg'
import linkedin from '../assets/footer/linkedin.svg'
import youtube from '../assets/footer/youtube.svg'
import instagram from '../assets/footer/instagram.svg'
import googleplus from '../assets/footer/googleplus.svg'
import pinterest from '../assets/footer/pinterest.svg'
import rss from '../assets/footer/rss.svg'


const Footer = () => {
  return (
    <Container>
      <hr />
      <Column>
        <div className='img'>
          <Image src={logo} alt="logo" />
        </div>

        <div className='info'>
          <div>
            <Image src={place} alt='place' />
            <p>
              345 Faulconer Drive, Suite 4 •
              Charlottesville, CA, 12345
            </p>
          </div>

          <div className='pp'>
            <Image src={phone} alt='phone' />
            <p>
              (123) 456-7890
            </p>

            <Image src={printshop} alt='printshop' className='pad' />
            <p>
              (123) 456-7890
            </p>
          </div>

          <div className='sm'>
            <p>
              Social Media
            </p>
            <Image src={facebook} alt='facebook' />
            <Image src={twitter} alt='twitter' />
            <Image src={linkedin} alt='linkdin' />
            <Image src={youtube} alt='youtube' />
            <Image src={instagram} alt='instagram' />
            <Image src={googleplus} alt='googleplus' />
            <Image src={pinterest} alt='pinterest' />
            <Image src={rss} alt='rss' />
          </div>
        </div>
      </Column>

      <div className='foot'>
        <div className='ul'>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Help</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        <p>Copyright © 2023 Minimumlivingcost. All rights reserved</p>
      </div>
    </Container>
  )
}

export default Footer