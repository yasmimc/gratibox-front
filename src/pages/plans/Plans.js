import plansBackgroundImg from "../../assets/images/image04.jpg";
import { SignPlan, PageContainer } from "./styles";
import { Button } from "../../components/Button";
import Greetings from "../../components/Greetings";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import { useNavigate } from "react-router";
import routes from "../../routes/routes";

export default function Plans() {
    const { validateToken, userData } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData.user) {
            (async function () {
                const authenticate = await validateToken();
                if (!authenticate) navigate(routes.login);
            })();
        }
    }, [userData]);

    return (
        <PageContainer>
            <div>
                <Greetings name={userData?.user?.name} />
                <h3>Você ainda não assinou um plano, que tal começar agora?</h3>
            </div>

            <SignPlan>
                <img src={plansBackgroundImg} alt="plansBackgroundImg" />
                <h3>
                    Você recebe um box por semana. Ideal para quem quer exercer
                    a gratidão todos os dias.
                </h3>
                <Button children="Assinar" />
            </SignPlan>
        </PageContainer>
    );
}
