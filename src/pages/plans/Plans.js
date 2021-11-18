import { PageContainer as Container } from "../../components/PageContainer";
import plansBackgroundImg from "../../assets/images/image04.jpg";
import styled from "styled-components";
import { Button } from "../../components/Button";

export default function Plans() {
	return (
		<PageContainer>
			<div>
				<h1>Bom te ver por aqui, @User</h1>
				<h3>Você ainda não assinou um plano, que tal começar agora?</h3>
			</div>

			<SignPlan>
				<img src={plansBackgroundImg} alt="plansBackgroundImg" />
				<h3>
					Você recebe um box por semana. Ideal para quem quer exercer a gratidão
					todos os dias.
				</h3>
				<Button children="Assinar" />
			</SignPlan>
		</PageContainer>
	);
}

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
