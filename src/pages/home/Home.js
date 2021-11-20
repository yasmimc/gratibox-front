import { Link, useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import homeBackground from "../../assets/images/image05.webp";
import { PageContainer } from "../../components/PageContainer";
import { HomeImage, TopSide, BottomSide, LoginButton } from "./styles";
import { Button as RegisterButton } from "../../components/Button";
import Welcome from "../../components/Welcome";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/userContext";

export default function Home() {
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

    return (
        <PageContainer>
            <TopSide>
                <Welcome />
                <h3>
                    Receba em casa um box com chás, produtos organicos, incensos
                    e muito mais...
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
