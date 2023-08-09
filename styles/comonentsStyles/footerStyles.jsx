import styled from "styled-components";

export const Container = styled.div`
  padding: 150px 80px 50px;
  @media (max-width: 460px) {
    padding: 150px 20px 50px;
  }

  hr {
    border-top: 3px solid #F4511E;
  }

  .foot {
    @media (max-width: 1060px) {
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 0 0px;
    }
    margin: 0 70px;
    padding: 20px 0;
    border-top: 1px solid #7bb9fc68;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: inline-flex;
      gap: 25px;
      list-style: none;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      @media (max-width: 1060px) {
      display: none;
      }
    }
    p {
      font-size: 14px;
      mix-blend-mode: normal;
      opacity: 0.5;
    }
  }
`
export const Column = styled.div`
  @media (max-width: 1060px) {
    padding: 50px 80px;
    gap: 50px;
	  flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  display: flex;
  justify-content: space-between;
  padding: 90px 80px 60px;

  .img {
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: #000000;
    border-radius: 10px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 40px;
    padding: 10px 20px;
  }
  .info {
    @media (max-width: 460px) {
      align-items: center;
      width: 100%;

      .pp {
        //flex-direction: column;
        justify-content: center;
        .pad {
          margin-left: 0px;
        }
      }
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
    
    div {
      display: flex;
      gap: 10px;
      img {
        margin-top: -3px;
      }
      .pad {
        margin-left: 90px;
      }
    }
    .sm {
      margin-top: 20px;
      gap: 25px;

      p { 
        opacity: 0.6; 
        @media (max-width: 460px) {
          display: none;
        }
      }
    }
    p {
      font-size: 14px;
      line-height: 18px;
      color: #0A142F;
    }
  }
`