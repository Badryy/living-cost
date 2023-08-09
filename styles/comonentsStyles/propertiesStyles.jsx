import styled from "styled-components";
import { manrope } from "../../pages/_app";

export const ContainerFluid = styled.div`
  background: #F5F5F5;
  padding: 30px 140px;
  @media (max-width: 876px) {
    padding: 30px 30px;
	}
  @media (max-width: 576px) {
    padding: 30px 25px;
	}
`
export const Title = styled.div`
  display: flex;
  justify-content:space-between ;
  margin-top: 60px;
  padding-right: 50px;
  h1 {
    font-weight: 800;
    font-size: 36px;
    line-height: 64px;
    text-transform: capitalize;
  
    hr {
      max-width: 90px;
      border-top: 3px solid #F4511E;
    }

    @media (max-width: 876px) {
      font-size: 29px;
      padding: 10px 0px;
      hr {
      max-width: 90px;
      }
	  }
    @media (max-width: 576px) {
      font-size: 19px;
      line-height: 44px;
      hr {
      max-width: 90px;
      }
    }
  }
  button {
    width: 180px;
    height: 65px;
    background: #F4511E;
    font-size: 17px;
    font-family: ${manrope};
    color: #fff;
    border: none;
    box-shadow: 0px 20px 13px rgba(248, 90, 71, 0.035), 0px 8.14815px 6.51852px rgba(248, 90, 71, 0.0274815), 0px 1.85185px 3.14815px rgba(248, 90, 71, 0.0168519);
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
    @media (max-width: 876px) {
      width: 150px;
      height: 55px;
      font-size: 15px;
	}
  }

  @media (max-width: 1508px) {
    padding-right: 0px;
	}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 20px;
  margin: 40px auto;

  @media (max-width: 1208px) {
			grid-template-columns: repeat(2, 1fr);
      gap: 2rem 1rem;
      h4 {
        font-size: 14px;
        line-height: 22px;
      }
		}

		@media (max-width: 776px) {
      padding-left: 40px;
			grid-template-columns: repeat(1, 1fr);
			//text-align: center;
		}
    @media (max-width: 499px) {
      padding-left: 0px;
			grid-template-columns: repeat(1, 1fr);
		}
`
export const Button = styled.div`
padding: 20px;
  display: flex;
  justify-content: center;
.pageButtons {
    padding: 25px;
    width: 90px;
    height: 64px;
    background: #FFFFFF;
    color: #F4511E;
    border: 2px solid #E9E9E9;
    cursor: pointer;

    &:disabled {
      background: #F3F3F3;
      color: #BDBDBD;
      cursor: not-allowed;
    }
    &:disabled:hover {
      background: #F3F3F3;
      color: #BDBDBD;
    }
    &:hover {
      background: #F4511E;
      color: #FFF;
    }
  }
  .a.active, .a.active:hover {
      background: #F4511E;
      color: #FFF;
    }
  .prev {
    border-radius: 10px 0 0px 10px;
    border-right: 1px solid #E9E9E9;
    border-left: 1px solid #E9E9E9;
  }
  .next {
    border-radius: 0px 10px 10px 0px;
    border-right: 1px solid #E9E9E9;
    border-left: 1px solid #E9E9E9;
  }
  
  .middle {
    padding: 25px 20px;
    width: 47px;
    border-radius: 0px;
    border-right: 1px solid #E9E9E9;
    border-left: 1px solid #E9E9E9;
  }
`