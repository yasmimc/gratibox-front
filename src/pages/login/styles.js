import styled from "styled-components";
import { Button } from "../../components/Button";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	align-items: center;
	background-color: #6d7ce4;

	padding: 100px 25px;

	h1 {
		font-weight: 500;
		font-size: 28px;
		color: white;
		margin-bottom: 40px;
	}
`;

const LoginButton = styled(Button)`
	width: 237px;
	height: 56px;
	font-size: 36px;
	margin-top: 150px;
`;

const RegisterButton = styled(Button)`
	background-color: transparent;
`;

export { Container, LoginButton, RegisterButton };
