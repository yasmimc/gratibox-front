import { RegisterButton } from "./styles";
import { Input } from "../../components/Input";
import { PageContainer } from "../../components/PageContainer";

export default function Register() {
	return (
		<PageContainer>
			<h1>Bem vinde ao GratiBox</h1>
			<Input type="text" placeholder="Nome" />
			<Input type="email" placeholder="Email" />
			<Input type="password" placeholder="Senha" />
			<Input type="password" placeholder="Confirmar senha" />
			<RegisterButton type="submit" children="Cadastrar" />
		</PageContainer>
	);
}
