import React, { useState } from 'react';
//import component
import Card from './Card'
//import styles
import { ContainerFluid, Title, Container, Button } from '../styles/comonentsStyles/propertiesStyles'
//import data
import { properties } from '../data/properties'
const Properties = () => {
  const [propertiesPerPage, SetPropertiesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  
  //Pagination
  const fullPage = properties.length;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const paginatedProperties = properties.slice(startIndex, endIndex);
  //Pagination buttons
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    const isCurrentPage = i === currentPage;
    const button = (
      <button className={`middle pageButtons a${isCurrentPage ? ' active' : ''}`} key={i} disabled={isCurrentPage} onClick={() => setCurrentPage(i)}>
        {i}
      </button>
    );
    pageButtons.push(button);
  }


  return (
    <ContainerFluid>
      <Title>
        <h1>list of properties <hr /></h1>
        <button onClick={() => SetPropertiesPerPage(fullPage)}>View All Properties</button>
      </Title>
      <Container>
        {paginatedProperties.map((property) => (
          <Card
            image={property.image}
            title={property.title}
            description={property.descr}
            highlight={property.higlight}
          />
        ))}
      </Container>
      <Button>
        <button className='pageButtons prev' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        {pageButtons}
        <button className='pageButtons next' disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </Button>

    </ContainerFluid>
  )
}

export default Properties