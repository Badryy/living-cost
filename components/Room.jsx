import React from 'react';
//import styles
import { StyledRoom, ImageGroup, Container, CustomCard } from '../styles/comonentsStyles/roomStyles';

const Room = () => {
  return (
    <StyledRoom>
      <ImageGroup>
        <div className='top-img-group'>
          <CustomCard
            width="250px"
            height="334px"
            mobileWidth="180px"
            mobileHeight="260px"
            url="/room/top-left.png">
            <h1>Flexible Leases</h1>
          </CustomCard>

          <CustomCard
            width="270px"
            height="270px"
            mobileWidth="160px"
            mobileHeight="200px"
            url="/room/top-right.png">
            <h1>7-Day Happiness Guaranteed</h1>
          </CustomCard>
        </div>

        <div className="bottom-img-group">
        <CustomCard
            width="212px"
            height="285px"
            mobileWidth="170px"
            mobileHeight="200px"
            url="/room/bottom-left.png">
            <h1>Monthly House Cleaning</h1>
          </CustomCard>

          <CustomCard
            width="338px"
            height="356px"
            mobileWidth="190px"
            mobileHeight="260px"
            url="/room/bottom-right.png">
            <h1>Choose Your Own Roommate</h1>
          </CustomCard>
        </div>
      </ImageGroup>

      <Container>
        <h1>Flexibility and options to suit your lifestyle.</h1>
        <p>
          You need it? We got it. We make finding your
          next home easy, comfortable, and simple. From
          our happiness guarantee to our selective roommate
          finder option. We provide you the flexibility that
          you most desire.
        </p>
        <button>Search Rooms</button>
      </Container>
    </StyledRoom>
  )
}

export default Room