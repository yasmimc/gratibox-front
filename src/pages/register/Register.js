import { RegisterButton, LoginButton } from "./styles";
import { Input } from "../../components/Input";
import { PageContainer } from "../../components/PageContainer";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import Welcome from "../../components/Welcome";

export default function Register() {
	return (
		<PageContainer>
			<Welcome />
			<Input type="text" placeholder="Nome" />
			<Input type="email" placeholder="Email" />
			<Input type="password" placeholder="Senha" />
			<Input type="password" placeholder="Confirmar senha" />
			<RegisterButton type="submit" children="Cadastrar" />
			<Link to={routes.login}>
				<LoginButton children="Já sou grato" />
			</Link>
		</PageContainer>
	);
}
