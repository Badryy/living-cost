import styled from 'styled-components';

export const StyledMinNav = styled.div`
	padding: 20px 60px;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		cursor: pointer;
	}

	@media (max-width: 576px) {
		padding: 30px 40px;
	}
`;

export const LogoContainer = styled.div`
	img {
		width: 140px;
	}	
`;

export const MenuHeader = styled.div`
	color: #000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;

	.close-menu {
		cursor: pointer;
		font-size: 29px;
	}
`;

export const NavigationContainer = styled.div`
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	padding: 10px;
	position: absolute;
	background: #fff;
	right: 0;
	top: 30px;
	width: 250px;
	transition: 0.5s;
	z-index: 1;

	.nav-ul {
		list-style-type: none;
	}

	.dropBtn {
		display: flex;
		justify-content: space-between;
		color: #000;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 16px;
		font-weight: 400;

		&:hover {
			background: #bfb9b950;

		}
	}
`;
