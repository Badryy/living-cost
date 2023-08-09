import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//import styles
import {
  Container,
  SliderColumn,
  VideoColumn
} from '../styles/comonentsStyles/testimonialsStyles'
//import assets
import _ from '../assets/testimonials/_.svg'
import play from '../assets/testimonials/play.svg'
import avatar from '../assets/testimonials/avatar.png'

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const indexOne = () => {
    setIndex(0);
  };

  const indexTwo = () => {
    setIndex(1);
  };

  const indexThree = () => {
    setIndex(2);
  };

  return (
    <Container>
      <SliderColumn>
        <Image src={_} alt="icon" className='_' />
        {index === 0 &&
          <>
            <p>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam interdum nisl et nunc
              facilisis, a commodo eros mollis. Nunc vel
              pellentesque est. Curabitur at odio sit amet
              libero vulputate efficitur ac nec justo.</p>

            <div className='client'>
              <Image src={avatar} alt="Play" />
              <div>
                <h4>Harry Wilson</h4>
                <p>Property Owner</p>
              </div>
            </div>
          </>
        }
        {index === 1 &&
        <>
          <p>ss ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam interdum nisl et nunc
            facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet
            libero vulputate efficitur ac nec justo.</p>
          
            <div className='client'>
              <Image src={avatar} alt="Play" />
              <div>
                <h4>Peter Obi</h4>
                <p>Property Agent</p>
              </div>
            </div>
        </>
        }
        {index === 2 &&
        <>
          <p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam interdum nisl et nunc
            facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet
            libero vulputate efficitur ac nec justo.</p>
          
            <div className='client'>
              <Image src={avatar} alt="Play" />
              <div>
                <h4>Stones Lincoln</h4>
                <p>Property Buyer</p>
              </div>
            </div>
        </>
        }

        <div>
          <button onClick={indexOne}
            className={index === 0 ? 'active' : ''}></button>
          <button onClick={indexTwo}
            className={index === 1 ? 'active' : ''}></button>
          <button onClick={indexThree}
            className={index === 2 ? 'active' : ''}></button>
        </div>
      </SliderColumn>
      <VideoColumn>
        <Link href="https://youtube.com" target="_blank">
          <Image src={play} alt="play" />
        </Link>
      </VideoColumn>
    </Container>
  )
}

export default Testimonials