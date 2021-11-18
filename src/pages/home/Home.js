import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import homeBackground from "../../assets/images/image05.webp";
import { PageContainer } from "../../components/PageContainer";
import { HomeImage, TopSide, BottomSide, LoginButton } from "./styles";
import { Button as RegisterButton } from "../../components/Button";

export default function Home() {
	return (
		<PageContainer>
			<TopSide>
				<h1>Bem vinde ao GratiBox</h1>
				<h3>
					Receba em casa um box com chás, produtos organicos, incensos e muito
					mais...
				</h3>
			</TopSide>
			<HomeImage src={homeBackground} alt="homeBackground" />
			<BottomSide>
				<Link to={routes.register}>
					<RegisterButton children="Quero começar" />
				</Link>
				<Link to={routes.login}>
					<LoginButton children="Já sou grato" />
				</Link>
			</BottomSide>
		</PageContainer>
	);
}
