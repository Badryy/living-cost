import React from 'react'
import Image from 'next/image'
//import styles
import { Title, StyledWhyUs,GoalsSection } from '../styles/comonentsStyles/whyUsStyles'
//import assets
import img from '../assets/whyus/cover.png'
//import goals data
import { goals } from '../data/goals'

const WhyUs = () => {
  return (
    <>
    <Title>minimum living cost takes care of everything <hr /></Title>
    <StyledWhyUs>
      <Image src={img} className='img' />
      <GoalsSection>
        <div className='goal-grid'>
          {goals.map((goal) => (
            <div key={goal.id}>
              <div className='icon'><Image src={goal.image} alt='why us' /></div>
              <h4>{goal.title}</h4>
            </div>
          ))}
        </div>
      </GoalsSection>
    </StyledWhyUs>
    </>
  )
}

export default WhyUs