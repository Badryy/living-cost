import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 100%;
	width: 100%;
	background-image: url(/header/header-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
export const HeaderContainer = styled.div`
  position: relative;
  z-index: 1;

  .container {
    display: flex;
    padding: 100px 160px;
    justify-content: space-between;

    h1 {
      width: 580px;
      padding: 100px 0;
      font-weight: 700;
      font-size: 52px;
      line-height: 70px;
      color: #fff !important;
    }
    iframe {
      width: 400px;
      height: 350px;
      box-shadow: 0px 0px 18px 3px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
    }
    .search {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 78px;
      background: #fff;
      border-radius: 10px;
      margin-top: 20px;
    }
    .search-input {
      margin: auto;
      .select-1 {
        padding: 18px 30px 12px;
        background: #F9F9F9;
        border: 1px solid #E6E6E6;
        border-radius: 5px 0px 0px 5px;
      }
      .select-2 {
        padding: 18px 35px 12px;
        background: #F9F9F9;
        border: 1px solid #E6E6E6;
        border-radius: 0px;
      }
      .search-icon {
        padding: 16px 10px 12px;
        background: #23A6F0;
        border: 0.3px solid #23A6F0;
        border-radius: 0px 5px 5px 0px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .icon {
          height: 15px;
        }
      }
    }
    @media (max-width: 1240px) {
	  	padding: 20px 50px;

	  	h1 {
	  		margin-top: 0px;
        font-size: 35px;
        line-height: 50px;
	  	}

	  	iframe {
	  		margin-top: 50px;
	  	}
	  }

	  @media (max-width: 768px) {
      margin-top: -60px;
	  	padding: 20px;
	  	text-align: center;
	  	flex-direction: column;

      .right-column {
        padding-bottom: 30px;
        display: flex;
        flex-direction: column-reverse;
      }
	  	iframe {
	  		//padding: 20px;
	  		width: 100% !important;
	  	}
	  	h1 {
        margin-bottom: -50px;
	  		//margin-top: 10px !important;
	  		width: 100% !important;
	  	}
    }
  }
`