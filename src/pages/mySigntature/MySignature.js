import Greetings from "../../components/Greetings";
import mySignatureBackGroundImg from "../../assets/images/image03.jpg";
import {
    PageContainer,
    MySignatureDetails,
    RateButton,
    NextPageButton,
} from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import routes from "../../routes/routes";
import SignatureDetails from "./SignatureDetails";
import FirstStepSignPlan from "./FirstStepSignPlan";
import SecondStepSignPlan from "./SecondStepSignPlan";

export default function MySignature() {
    const navigate = useNavigate();

    const { validateToken, userData } = useContext(UserContext);

    useEffect(() => {
        if (!userData.user) {
            (async function () {
                const authenticate = await validateToken();
                if (!authenticate) navigate(routes.login);
            })();
        }
    }, [userData]);

    const [activeSignature, setActiveSignature] = useState(false);
    const [signatureInfo, setSignatureInfo] = useState({
        plan: "",
        date: "",
        products: [],
    });
    const [products, setProducts] = useState([]);

    function updateProducts(event) {
        if (event.target.checked) {
            setProducts([...products, event.target.value]);
        } else
            setProducts(
                products.filter((product) => product !== event.target.value)
            );

        setSignatureInfo({ ...signatureInfo, products });
    }

    const [next, setNext] = useState(false);

    const [signatureInputError, setSignatureInputError] = useState(false);

    function nextPage() {
        const emptyFields = Object.values(signatureInfo).some(
            (key) => key === ""
        );
        if (emptyFields) setSignatureInputError(true);
        else setNext(true);
    }

    const [addressInfo, setAddressInfo] = useState({
        completeName: "",
        deliveryAddress: "",
        cep: "",
        city: "",
        state: "",
    });

    function signPlan() {
        const emptyFields = Object.values(addressInfo).some(
            (key) => key === ""
        );
        if (emptyFields) setSignatureInputError(true);
        // else
        // finalizar assinatura
    }

    return (
        <PageContainer>
            <Greetings name={userData?.user?.name} />
            <h3>“Agradecer é arte de atrair coisas boas”</h3>
            <MySignatureDetails>
                <img
                    src={mySignatureBackGroundImg}
                    alt="mySignatureBackgroundImg"
                />
                {activeSignature ? <SignatureDetails /> : null}
                {!activeSignature && !next ? (
                    <FirstStepSignPlan
                        userData={userData}
                        setSignatureInfo={setSignatureInfo}
                        signatureInfo={signatureInfo}
                        setSignatureInputError={setSignatureInputError}
                        updateProducts={updateProducts}
                        signatureInputError={signatureInputError}
                    />
                ) : (
                    <SecondStepSignPlan
                        userData={userData}
                        setAddressInfo={setAddressInfo}
                        addressInfo={addressInfo}
                        setSignatureInputError={setSignatureInputError}
                        signatureInputError={signatureInputError}
                    />
                )}
            </MySignatureDetails>
            {activeSignature ? (
                <RateButton children="Avaliar entregas" />
            ) : null}
            {!activeSignature && !next ? (
                <NextPageButton
                    type="submit"
                    children="Próximo"
                    onClick={nextPage}
                />
            ) : (
                <NextPageButton
                    type="submit"
                    children="Finalizar"
                    onClick={signPlan}
                />
            )}
        </PageContainer>
    );
}
