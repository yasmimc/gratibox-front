import styled from "styled-components";
import { PageContainer as Container } from "../../components/PageContainer";

const SignPlan = styled.div`
	background-color: #e5cdb3;
	border-radius: 25px;
	width: 358px;
	height: 400px;

	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;

	h3 {
		color: #4d65a8;
		font-size: 18px;
		font-weight: 700;
		padding: 0 22px;
		margin: 20px 0;
	}

	img {
		width: 100%;
		height: 60%;
		object-fit: cover;
		border-radius: 25px;
	}
`;

const PageContainer = styled(Container)`
	padding-bottom: 20px;

	justify-content: space-between;
`;

export { SignPlan, PageContainer };
