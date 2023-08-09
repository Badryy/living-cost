import { useState } from 'react';
import Image from 'next/image'
import styled from 'styled-components';
//import assets
import icon1 from '../assets/properties/vector-1.svg'
import icon2 from '../assets/properties/vector-2.svg'
import icon3 from '../assets/properties/vector-3.svg'

import icon1Light from '../assets/properties/vector-light-1.svg'
import icon2Light from '../assets/properties/vector-light-2.svg'
import icon3Light from '../assets/properties/vector-light-3.svg'

//card styles
const CardContainer = styled.div`
  background-color: white;
  border-radius: 26px;
  height: 521px;
  width: 358px;
  box-shadow: 0px 34.0693px 36.1986px rgba(0, 0, 0, 0.133714);
  .container {
    padding: 20px;
  }
  img {
    max-height: 284px;
  }

  h4 {
    font-size: 23px;
    text-transform:capitalize;
    line-height: 30px;
  }

  p.desc {
    margin-top: 25px;
    font-size: 18px;
    color: #818181;
  }

  p.highlight {
    margin-top: 10px;
    font-size: 25px;
    font-weight: 700;
    color: #f4511e;
  }

  .footer {
    display: flex;
    span {
      display: flex;
      gap: 5px;
      font-weight: 700;
      font-size: 18px;
      color: #000;
      justify-content: center;
      align-items: center;
      border-top: .2px solid #E4E4E4;
      border-left: .2px solid #E4E4E4;
      padding: 12px 0;
      width: calc(100%/3);
      margin-top: 0px;
    }
    .footer1 {
      border-left: none;
      border-bottom-left-radius: 26px;
    }
    .footer2 {
      border-bottom-right-radius: 26px;
    }
    span:hover {
    background: #f4511e;
    cursor: pointer;
    p {
      color: #fff;
    }
  }
  }
`;

const Card = ({ image, title, description, highlight }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return <CardContainer>
    <Image src={image} alt="card image" />
    <div className='container'>
      <h4>{title}</h4>
      <p className='desc'>{description}</p>
      <p className="highlight">{highlight}</p>
    </div>
    <div className="footer">
      <span className='footer1'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} >
        <Image src={isHovered ? icon1Light : icon1} /><p>4</p>
      </span>

      <span
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}>
        <Image src={isHovered2 ? icon2Light : icon2} /><p>4</p>
      </span>

      <span className='footer2'
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}>
        <Image src={isHovered3 ? icon3Light : icon3} alt="icon" /><p>4</p>
      </span>
    </div>
  </CardContainer>
};

export default Card;