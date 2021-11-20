import { RegisterButton, LoginButton } from "./styles";
import { Input } from "../../components/Input";
import InputErrorMsg from "../../components/InputErrorMsg";
import { PageContainer } from "../../components/PageContainer";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import Welcome from "../../components/Welcome";
import { useEffect, useState } from "react";
import { Form } from "../../components/Form";
import API from "../../services/API/requests";
import { emailRegex, strongPasswordRegex } from "./regexValidations";
import { conflict } from "../../services/API/statusCode";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";

export default function Register() {
    const { validateToken, userData } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async function () {
            const authenticate = await validateToken();
            if (authenticate) {
                navigate(routes.plans);
            }
        })();
    }, [userData]);

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [inputError, setInputError] = useState({
        name: null,
        email: null,
        password: null,
        passwordEmpty: null,
        confirmPassword: null,
        emptyFiels: null,
    });

    const [loading, setLoading] = useState(false);

    function submitSignUp(event) {
        event.preventDefault();
        setLoading(true);

        const emptyFields = Object.values(input).some((key) => key === "");
        if (emptyFields) {
            setInputError({ ...inputError, emptyFields: true });
            setLoading(false);
            return;
        }

        const inputErrors = Object.values(inputError).some(
            (key) => key === true
        );
        if (!inputErrors) {
            API.signUp(input)
                .then(() => {
                    setLoading(false);
                    navigate(routes.login);
                })
                .catch((err) => {
                    setLoading(false);
                    if (err.response.status === conflict)
                        setInputError({ ...inputError, conflict: true });
                });
        }
    }

    return (
        <PageContainer>
            <Welcome />
            <Form onSubmit={submitSignUp}>
                <Input
                    type="text"
                    placeholder="Nome"
                    onChange={(event) => {
                        setInput({ ...input, name: event.target.value });
                        setInputError({
                            ...inputError,
                            name:
                                event.target.value.length < 3 &&
                                event.target.value !== "",
                        });
                    }}
                />
                {inputError.name ? (
                    <InputErrorMsg children="Seu nome deve ter pelo menos 3 letras 🙏" />
                ) : null}
                <Input
                    type="email"
                    placeholder="Email"
                    onChange={(event) => {
                        setInput({ ...input, email: event.target.value });
                        setInputError({
                            ...inputError,
                            email:
                                !event.target.value.match(emailRegex)?.length &&
                                event.target.value !== "",
                            conflict: false,
                        });
                    }}
                />
                {inputError.email ? (
                    <InputErrorMsg
                        children="
                        Por favor, digite um email válido 🙏"
                    />
                ) : null}
                {inputError.conflict ? (
                    <InputErrorMsg>
                        <p> Usuário já cadastrado.</p>
                        <p> Por favor, escolha outro email 🙏</p>
                    </InputErrorMsg>
                ) : null}
                <Input
                    type="password"
                    placeholder="Senha"
                    onChange={(event) => {
                        setInput({ ...input, password: event.target.value });
                        setInputError({
                            ...inputError,
                            password:
                                !event.target.value.match(
                                    strongPasswordRegex
                                ) && event.target.value !== "",
                            passwordEmpty: !input.password,
                        });
                    }}
                />
                {inputError.password ? (
                    <InputErrorMsg
                        children="
                        Por favor, escolha uma senha alfanumérica com pelo menos
                        8 caracteres contendo algum caractere especial 🙏"
                    />
                ) : null}
                {inputError.passwordEmpty ? (
                    <InputErrorMsg children="Por favor, preencha esse campo 🙏" />
                ) : null}
                <Input
                    type="password"
                    placeholder="Confirmar senha"
                    onChange={(event) => {
                        setInput({
                            ...input,
                            confirmPassword: event.target.value,
                        });
                        setInputError({
                            ...inputError,
                            confirmPassword:
                                input.password &&
                                event.target.value !== input.password &&
                                event.target.value !== "",
                            passwordEmpty:
                                !input.password && event.target.value !== "",
                        });
                    }}
                />
                {inputError.confirmPassword ? (
                    <InputErrorMsg>
                        <p>As senhas não coincidem.</p>
                        <p> Por favor, digite novamente 🙏</p>{" "}
                    </InputErrorMsg>
                ) : null}

                {inputError.emptyFields ? (
                    <InputErrorMsg children="Por favor, preencha todos os campos 🙏" />
                ) : null}
                <RegisterButton
                    disabled={loading}
                    type="submit"
                    children="Cadastrar"
                />
            </Form>
            <Link to={routes.login}>
                <LoginButton children="Já sou grato" />
            </Link>
        </PageContainer>
    );
}
