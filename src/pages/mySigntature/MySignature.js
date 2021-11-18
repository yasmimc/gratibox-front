import Greetings from "../../components/Greetings";
import mySignatureBackGroundImg from "../../assets/images/image03.jpg";
import {
	PageContainer,
	MySignatureDetails,
	RateButton,
	Deliveries,
	Products,
} from "./styles";

export default function MySignature() {
	return (
		<PageContainer>
			<Greetings />
			<h3>“Agradecer é arte de atrair coisas boas”</h3>
			<MySignatureDetails>
				<img src={mySignatureBackGroundImg} alt="mySignatureBackgroundImg" />
				<Deliveries>
					<p>
						<span className="label">Plano: </span>
						@tipo_de_plano
					</p>
					<p>
						<span className="label">Data de assinatura: </span>
						dd/mm/aa
					</p>
					<p>
						<span className="label">Próximas entregas:</span>
						<li>dd/mm/aa</li>
						<li>dd/mm/aa</li>
						<li>dd/mm/aa</li>
					</p>
				</Deliveries>

				<Products>
					<p>Chás</p>
					<p>Produtos organicos</p>
					<p>Incensos</p>
				</Products>
			</MySignatureDetails>
			<RateButton children="Avaliar entregas" />
		</PageContainer>
	);
}
