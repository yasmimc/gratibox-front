import styled from "styled-components";

export const Input = styled.input`
	width: 100%;
	height: 64px;

	background: #ffffff;
	border: 1px solid #604848;
	border-radius: 10px;

	font-weight: 500;
	font-size: 24px;
	font-family: Roboto;

	padding: 18px;
	margin: 5px 0;
	color: rgb(96, 72, 72);

	&&:placeholder {
		color: rgba(96, 72, 72, 0.4);
	}
`;
