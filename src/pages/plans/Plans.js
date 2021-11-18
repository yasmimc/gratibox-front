import plansBackgroundImg from "../../assets/images/image04.jpg";
import { SignPlan, PageContainer } from "./styles";
import { Button } from "../../components/Button";
import Greetings from "../../components/Greetings";

export default function Plans() {
	return (
		<PageContainer>
			<div>
				<Greetings />
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
