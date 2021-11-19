import Greetings from "../../components/Greetings";
import mySignatureBackGroundImg from "../../assets/images/image03.jpg";
import {
	PageContainer,
	MySignatureDetails,
	RateButton,
	Deliveries,
	Products,
	SignPlan,
	SignProducts,
} from "./styles";
import { useState } from "react";

export default function MySignature() {
	const [activeSignature, setActiveSignature] = useState(false);

	return (
		<PageContainer>
			<Greetings />
			<h3>“Agradecer é arte de atrair coisas boas”</h3>
			<MySignatureDetails>
				<img src={mySignatureBackGroundImg} alt="mySignatureBackgroundImg" />
				{activeSignature ? (
					<>
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
						</Products>{" "}
					</>
				) : (
					<SignPlan>
						<select name="plans" id="plans">
							<option value="" disabled selected>
								Plano
							</option>
							<option value="Mensal">Mensal</option>
							<option value="Semanal">Semanal</option>
						</select>
						<select name="entrega" id="entrega">
							<option value="" disabled selected>
								Entrega
							</option>
							<option value="Mensal">Mensal</option>
							<option value="Semanal">Semanal</option>
						</select>
						<SignProducts>
							<p>Quero receber</p>
							<input type="checkbox" value="Chás" />
							<label>Chás</label>
							<input type="checkbox" value="Incensos" />
							<label>Incensos</label>
							<input type="checkbox" value="Produtos organicos" />
							<label>Produtos organicos</label>
						</SignProducts>
					</SignPlan>
				)}
			</MySignatureDetails>
			<RateButton children="Avaliar entregas" />
		</PageContainer>
	);
}
