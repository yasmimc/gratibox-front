import { Link } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer";
import { LoginButton, RegisterButton } from "./styles";
import { Input } from "../../components/Input";
import routes from "../../routes/routes";

export default function Login() {
	return (
		<PageContainer>
			<h1>Bem vinde ao GratiBox</h1>
			<Input type="email" placeholder="Email" />
			<Input type="password" placeholder="Senha" />
			<LoginButton type="submit" children="Login" />
			<Link to={routes.register}>
				<RegisterButton children="Ainda não sou grato" />
			</Link>
		</PageContainer>
	);
}
