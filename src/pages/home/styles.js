import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	img {
		position: absolute;
		left: 0;
		z-index: 1;
		width: 100%;
	}
`;

const TopSide = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	color: white;

	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50%;
	background-color: #6d7ce4;

	h1 {
		font-weight: 700;
		font-size: 28px;
		margin-top: 50px;
	}

	h3 {
		margin-top: 40px;
		font-weight: 300;
		font-size: 18px;
	}
`;

const BottomSide = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: end;
	align-items: center;
	padding-bottom: 50px;

	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50%;
	background-color: #4d65a8;

	button {
		width: 202px;
		height: 45px;
		border-radius: 10px;
		border: none;
		color: white;
		font-weight: 700;
		font-size: 18px;
	}
`;

const RegisterButton = styled.button`
	background: #8c97ea;
`;

const LoginButton = styled.button`
	background: transparent;
`;

export { Container, TopSide, BottomSide, RegisterButton, LoginButton };
