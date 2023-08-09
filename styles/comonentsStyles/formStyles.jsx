import styled from "styled-components";
//import fonts
import { poppins } from "../../pages/_app";

export const Container = styled.div`
  font-family: ${poppins};
  padding: 0px 50px 50px 150px;
  text-align: center;

  @media (max-width: 1060px) {
    margin-top: 50px;
    padding: 0px 50px 50px 50px;
  }

  h4 {
    padding-bottom: 50px;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-transform: capitalize;
    @media (max-width: 660px) {
      font-size: 19px;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  label {
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #252B42;
    padding-bottom: 10px;

    span {
      color: #F4511E;
    }
  }
  .form-control {
    width: 80%;
    height:50px;
    background: #F9F9F9;
    border: 1px solid #E6E6E6;
    border-radius: 5px;
    padding: 15px;
    letter-spacing: 0.5px;
  }
  `
export const FormContainer = styled.div`
  width: 90%;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 63px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  @media (max-width: 760px) {
    width: 100%;
  }

  h4 {
    padding: 40px 0;;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #F4511E;
    @media (max-width: 560px) {
    font-size: 20px;
  }
  }
`
export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px 2px;
  align-items: center;
  padding: 15px 0px 10px 50px;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }  
`
export const Textera = styled.div`
padding: 20px 0px 10px 50px;
  .form-control {
    width: 94%;
    height:151px;
    background: #F9F9F9;
    border: 1px solid #E6E6E6;
    border-radius: 5px;
    padding: 15px;
    letter-spacing: 0.5px;
    @media (max-width: 660px) {
      width: 80%;
    }
  }
  .image-upload {
    cursor: pointer;
    height: 102px;
    background: rgba(244, 81, 30, 0.01);
    border: 1px dashed #F4511E;
    border-radius: 10px;
    @media (max-width: 660px) {
      p {
        font-size: 10px;
        span {
          display: none;
        }
      }
    }
    img {
      //width: 50%;
      height: 100%;
      object-fit: contain;
    }
    p {
      padding: 15px;
      font-weight: 500;
      font-size: 16px;
      span {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .form-group {
    padding-bottom: 30px;
  }

  button {
    @media (max-width: 660px) {
      width: 80%;
      height: 55px;
      margin:10px 70px 20px 0;
      font-size: 15px;
    }
    margin:20px 0 40px;
    width: 50%;
    height: 69px;
    background: #F4511E;
    border: none;
    border-radius: 10px;
    font-weight: 500;
    font-size: 22px;
    line-height: 25px;
    letter-spacing: 0.2px;
    color: #fff;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

  }
`