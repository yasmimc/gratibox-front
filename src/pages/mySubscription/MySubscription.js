import Greetings from "../../components/Greetings";
import mySubscriptionBackGroundImg from "../../assets/images/image03.jpg";
import {
    PageContainer,
    MySubscriptionDetails,
    RateButton,
    NextPageButton,
} from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import routes from "../../routes/routes";
import SubscriptionDetails from "./SubscriptionDetails";
import FirstStepSignPlan from "./FirstStepSignPlan";
import SecondStepSignPlan from "./SecondStepSignPlan";
import API from "../../services/API/requests";

export default function MySubscription() {
    const navigate = useNavigate();

    const {
        validateToken,
        userData,
        activeSubscription,
        setActiveSubscription,
        userPlan,
        setUserPlan,
        planType,
        setPlanType,
    } = useContext(UserContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData?.user) {
            (async function () {
                const authenticate = await validateToken();
                if (!authenticate) navigate(routes.login);
            })();
        } else if (!activeSubscription) {
            setLoading(true);
            API.getUserPlan(userData.token)
                .then((resp) => {
                    setUserPlan(resp.data);
                    setPlanType(resp.data.planName);
                    setActiveSubscription(true);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                    console.error("Fail to get user plan");
                });
        }
    }, [userData, activeSubscription, userPlan, planType]);

    const [subscriptionInfo, setSubscriptionInfo] = useState({
        plan: "",
        startDate: "",
        products: [],
    });

    function updateProducts(event) {
        if (event.target.checked) {
            setSubscriptionInfo({
                ...subscriptionInfo,
                products: [...subscriptionInfo.products, event.target.value],
            });
        } else
            setSubscriptionInfo({
                ...subscriptionInfo,
                products: subscriptionInfo.products.filter(
                    (product) => product !== event.target.value
                ),
            });
    }

    const [next, setNext] = useState(false);

    const [subscriptionInputError, setSubscriptionInputError] = useState(false);

    function nextPage() {
        const emptyFields = Object.values(subscriptionInfo).some(
            (key) => key === ""
        );
        if (emptyFields) setSubscriptionInputError(true);
        else setNext(true);
    }

    const [addressInfo, setAddressInfo] = useState({
        userFullName: "",
        deliveryAddress: "",
        cep: "",
        city: "",
        state: "",
    });

    function signPlan() {
        const emptyFields = Object.values(addressInfo).some(
            (key) => key === ""
        );
        if (emptyFields) setSubscriptionInputError(true);
        else {
            API.signPlan(
                {
                    userId: userData.user.id,
                    ...subscriptionInfo,
                    ...addressInfo,
                },
                userData.token
            )
                .then(() => {
                    setUserPlan({
                        userId: userData.user.id,
                        ...subscriptionInfo,
                        ...addressInfo,
                    });
                    setActiveSubscription(true);
                })
                .catch(() => console.error("Fail to sign plan"));
        }
    }

    return (
        <PageContainer>
            <Greetings name={userData?.user?.name} />
            <h3>“Agradecer é arte de atrair coisas boas”</h3>
            <MySubscriptionDetails>
                <img
                    src={mySubscriptionBackGroundImg}
                    alt="mySubscriptionBackgroundImg"
                />
                {activeSubscription && !loading ? (
                    <SubscriptionDetails
                        userPlan={userPlan}
                        planType={planType}
                    />
                ) : null}
                {!activeSubscription && !next ? (
                    <FirstStepSignPlan
                        userData={userData}
                        setSubscriptionInfo={setSubscriptionInfo}
                        subscriptionInfo={subscriptionInfo}
                        setSubscriptionInputError={setSubscriptionInputError}
                        updateProducts={updateProducts}
                        subscriptionInputError={subscriptionInputError}
                    />
                ) : null}
                {!activeSubscription && next ? (
                    <SecondStepSignPlan
                        userData={userData}
                        setAddressInfo={setAddressInfo}
                        addressInfo={addressInfo}
                        setSubscriptionInputError={setSubscriptionInputError}
                        subscriptionInputError={subscriptionInputError}
                    />
                ) : null}
            </MySubscriptionDetails>
            {activeSubscription ? (
                <RateButton children="Avaliar entregas" />
            ) : null}
            {!activeSubscription && !next ? (
                <NextPageButton
                    type="submit"
                    children="Próximo"
                    onClick={nextPage}
                />
            ) : null}
            {!activeSubscription && next ? (
                <NextPageButton
                    type="submit"
                    children="Finalizar"
                    onClick={signPlan}
                />
            ) : null}
        </PageContainer>
    );
}
