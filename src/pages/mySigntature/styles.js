import styled from "styled-components";
import { PageContainer as Container } from "../../components/PageContainer";
import { Button } from "../../components/Button";

const PageContainer = styled(Container)`
	padding-bottom: 0;

	h1 {
		width: 100%;
	}
	h3 {
		margin-top: 22px;
		width: 100%;
	}
`;

const MySignatureDetails = styled.div`
	background: #ffffff;
	border-radius: 10px;
	width: 356px;
	height: 382px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 5px;
	margin-top: 10px;

	img {
		width: 100%;
		height: 50%;
		object-fit: cover;
		border-radius: 10px;
	}

	p {
		font-weight: 700;
		font-size: 18px;
		padding: 0 16px;
		color: #e63c80;
	}

	.label {
		color: #4d65a8;
	}
`;

const RateButton = styled(Button)`
	width: 237px;
	height: 56px;
	font-weight: 500;
	font-size: 24px;

	margin-top: 20px;
`;

const Deliveries = styled.div`
	p {
		margin-top: 5px;
	}
	li {
		list-style-type: none;
		padding-left: 20px;
	}
`;

const Products = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;

	p {
		font-size: 17px;
		font-weight: 400;
	}
`;

export { PageContainer, MySignatureDetails, RateButton, Deliveries, Products };
