import styled from "styled-components";

export const StyledRoom = styled.div`
  display: flex;
  padding: 130px 150px;

  @media (max-width: 1060px) {
    padding: 0px 150px;
	  flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 760px) {
    padding: 40px 50px;
  }
  @media (max-width: 560px) {
    padding: 40px 0px;
  }
`
export const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 760px) {
    gap: 15px;
    margin-top: -30px;
  }
  .top-img-group {
    display: flex;
    gap: 25px;
    align-items: flex-end;
    @media (max-width: 760px) {
      gap: 15px;

    }
  }

  .bottom-img-group {
    display: flex;
    gap: 25px;
    align-items: flex-start;
    @media (max-width: 760px) {
      gap: 15px;

    }
  }
`
export const Container = styled.div`
  padding: 190px 90px;
  h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  p {
    padding: 20px 0;
    font-size: 18px;
    line-height: 32px;
  }
  button {
    margin-top: 10px;
    width: 185px;
    height: 63px;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: #fff;
    background: #F4511E;
    border: #F4511E;
    border-radius: 13px;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  @media (max-width: 1440px) {
	  	padding: 100px 20px;
      //margin-left: 40px;
  }
`
export const CustomCard = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.url});

  @media (max-width: 560px) {
    width: ${props => props.mobileWidth};
    height: ${props => props.mobileHeight};
    border-radius: 25px;
  }
    h1 {
      position: relative;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      padding: 10px;
      font-weight: 600;
      font-size: 24px;
      text-align: center;
      color: #FFFFFF;
      padding-top: 20px;
      @media (max-width: 560px) {
        font-size: 20px;
        padding: 35px;
      }
    }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.344);
    border-radius: 20px;
    @media (max-width: 560px) {
      border-radius: 25px;
    }
  }
`