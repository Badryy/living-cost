import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 60px;
  padding: 10px 150px;
  font-weight: 800;
  font-size: 36px;
  line-height: 64px;
  text-transform: capitalize;
  
  hr {
    max-width: 390px;
    border-top: 3px solid #F4511E;
  }
  
  @media (max-width: 876px) {
    font-size: 29px;
    padding: 10px 60px;
    hr {
    max-width: 290px;
  }
	}
  @media (max-width: 576px) {
    font-size: 19px;
    line-height: 44px;
    padding: 10px 60px;
    hr {
    max-width: 190px;
    border-top: 3px solid #F4511E;
  }
	}
`
export const StyledWhyUs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 100px;

  @media (max-width: 876px) {
    padding: 0 0;
			.img {
        display: none;
      }
	}
`
export const GoalsSection = styled.div`
	max-width: 80%;
	margin: 30px auto;

	.goal-grid {
		//margin-top: 40px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5rem 1rem;
    width: 100%;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 77px;
      height: 77px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0px 12px 19px rgba(0, 0, 0, 0.15);
    }

		h4 {
			text-align: left;
			margin-top: 20px;
      font-size: 20px;
      line-height: 35px;
		}

		@media (max-width: 1168px) {
			grid-template-columns: repeat(2, 1fr);
      gap: 2rem 1rem;
      h4 {
        font-size: 14px;
        line-height: 22px;
      }
		}

		@media (max-width: 876px) {
			grid-template-columns: repeat(3, 1fr);
			//text-align: center;
		}
    @media (max-width: 476px) {
      padding-left: 40px;
			grid-template-columns: repeat(2, 1fr);
      h4 {
        font-size: 15px;
      }
		}
	}
  `