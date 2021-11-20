import { Link, useNavigate } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer";
import { LoginButton, RegisterButton } from "./styles";
import { Input } from "../../components/Input";
import routes from "../../routes/routes";
import Welcome from "../../components/Welcome";
import { useContext, useState } from "react";
import API from "../../services/API/requests";
import { Form } from "../../components/Form";
import { emailRegex } from "../register/regexValidations";
import InputErrorMsg from "../../components/InputErrorMsg";
import UserContext from "../../contexts/userContext";

export default function Login() {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const [inputError, setInputError] = useState({
        email: null,
        password: null,
        emptyFiels: null,
    });

    const [loading, setLoading] = useState(false);

    const { saveUser } = useContext(UserContext);

    function submitSignIn(event) {
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
            API.signIn(input)
                .then((resp) => {
                    saveUser(resp.data);
                    setLoading(false);
                    navigate(routes.plans);
                })
                .catch((err) => {
                    setLoading(false);
                    if (err.response)
                        setInputError({
                            ...inputError,
                            invalidCredentials: true,
                        });
                });
        }
    }

    return (
        <PageContainer>
            <Welcome />
            <Form onSubmit={submitSignIn}>
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
                            invalidCredentials: false,
                        });
                    }}
                />
                {inputError.email ? (
                    <InputErrorMsg
                        children="
                        Por favor, digite um email válido 🙏"
                    />
                ) : null}

                <Input
                    type="password"
                    placeholder="Senha"
                    onChange={(event) => {
                        setInput({ ...input, password: event.target.value });
                        setInputError({
                            ...inputError,
                            invalidCredentials: false,
                        });
                    }}
                />
                {inputError.emptyFields ? (
                    <InputErrorMsg children="Por favor, preencha todos os campos 🙏" />
                ) : null}

                {inputError.invalidCredentials ? (
                    <InputErrorMsg children="Credenciais inválidas. Por favor, tente novamente 🙏" />
                ) : null}
                <LoginButton
                    disabled={loading}
                    type="submit"
                    children="Login"
                />
            </Form>
            <Link to={routes.register}>
                <RegisterButton children="Ainda não sou grato" />
            </Link>
        </PageContainer>
    );
}
