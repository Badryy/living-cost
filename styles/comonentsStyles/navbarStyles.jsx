import styled from "styled-components";

export const StyledNav = styled.div`
	padding: 20px 90px;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;

  .centered-border {
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 95%;
  }
  img {
  	width: 100%;
  	cursor: pointer;
  }

  @media (max-width: 576px) {
  	//padding: 20px 0;
  }
`;

export const NavigationContainer = styled.div`
  .nav-ul {
		list-style-type: none;
		/* overflow: hidden; */
		margin: 0;
		padding-right: 500px;

		@media (max-width: 1400px) {
  	padding-right: 0px;
  }
	}

	li {
		display: inline-block;
		position: relative;
	}

  .dropBtn {
		font-size: 18px;
	}
  .active {
      border-bottom: 2px solid #fff;
    }

	li a,
	.dropBtn {
		display: inline-block;
		color: #fff;
		text-align: center;
		padding: 20px 22px;
		text-decoration: none;
	}
`