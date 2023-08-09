import React, { useRef, useState } from 'react';
//import styles
import { Container, FormContainer, FormGroup, Textera } from '../styles/comonentsStyles/formStyles'

//Create a reusable input component
const Input = ({ name, placeholder }) => {
  return <div className="form-group" >
    <label htmlFor="name">{name} <span>*</span></label>
    <input
      type="text"
      className="form-control"
      placeholder={placeholder} />
  </div >

}
const Form = () => {
  const fileInput = useRef(null);
  const [preview, setPreview] = useState(null);

  //Use the div instead of input to select file
  const handleClick = () => {
    fileInput.current.click();
  };
  //Display selected file 
  const handleChange = e => {
    const file = fileInput.current.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', e => {
      setPreview(e.target.result);
    });

    reader.readAsDataURL(file);
  };

  return (
    <Container>
      <h4>Your property with us and be Confident that Your Room will be Filled Out!</h4>
      <FormContainer>
        <h4>Add A New Property</h4>
        <FormGroup>
          <Input name={'Name'} placeholder={'Enter Name'} />
          <Input name={'Address'} placeholder={'Enter Address'} />
          <Input name={'Unit Number'} placeholder={'Enter Unit'} />
          <Input name={'City'} placeholder={'Select City'} />
          <Input name={'State'} placeholder={'Select State'} />
          <Input name={'Room Type'} placeholder={'Select Room Type'} />
          <Input name={'Price'} placeholder={'Enter Price'} />
          <Input name={'Room Type'} placeholder={'Select Room Type'} />
        </FormGroup>
        <Textera>
          <div className="form-group" >
            <label htmlFor="name">Description <span>*</span></label>
            <textarea
              type="text"
              className="form-control"
              placeholder='Enter Description' />
          </div >

          <div className="form-group" >
            <label htmlFor="address">Upload Image</label>
            <input type="file"
              ref={fileInput}
              onChange={handleChange}
              style={{ display: 'none' }} />

            <div onClick={handleClick}
              className='form-control image-upload'>
              {preview ? <img src={preview} />
                : <p>Click to Select Your <b style={{color: '#F4511E'}}>Image</b><br />
                  <span>Supported:  JPG, JPEG, PNG</span></p>}
            </div>
          </div >
          <button>Add New Property</button>
        </Textera>
      </FormContainer>
    </Container>
  )
}

export default Form