import styled from "styled-components";
import { Button } from "../../components/Button";

const HomeImage = styled.img`
	position: absolute;
	left: 0;
	z-index: 1;
	width: 100%;
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
`;

const LoginButton = styled(Button)`
	background: transparent;
`;

export { HomeImage, TopSide, BottomSide, LoginButton };
