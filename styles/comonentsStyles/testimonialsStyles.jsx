import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 1060px) {
    //padding: 0px 150px;
	  flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const SliderColumn = styled.div`
  padding: 150px 150px;
  width: 100%;
  height: 596px;
  background: rgba(244, 81, 30, 0.07);
  @media (max-width: 1060px) {
    padding: 80px 100px;
  }
  @media (max-width: 860px) {
    padding: 70px 40px;
  }
  ._ {
    position: absolute;
    margin-top: -30px;
    margin-left: -40px;
  }
  p {
    font-size: 21px;
    line-height: 36px;
  }
  .client {
    padding: 40px 0 70px;
    display: flex;
    gap: 20px;

    @media (max-width: 1060px) {
    justify-content: center;
    align-items: center;

  }
    h4 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: #F4511E;
    }
    p {
      font-size: 16px;
      line-height: 26px;
    }
  }
  button {
    width: 10px;
    height: 10px;
    background: #D9DBE1;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin: 6px;
    &:hover, :active {
      background: #F4511E;
    }
  }
  .active {
      background: #F4511E;
    }
`

export const VideoColumn = styled.div`
  width: 100%;
  height: 596px;
  background-image: url('/room/cover.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1060px) {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.34);
  }
  a {
    z-index: 1;
    width: 92px;
    height: 92px;
    background: #F4511E;
    border-radius: 73px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      opacity: 0.7;
    }
  }
`