import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/userContext";
import routes from "../../routes/routes";
import API from "../../services/API/requests";
import { SignPlan, SignProducts } from "./styles";

export default function FirstStepSignPlan({
    userData,
    setSignatureInfo,
    signatureInfo,
    setSignatureInputError,
    updateProducts,
    signatureInputError,
}) {
    const [type, setType] = useState("text");
    const [plans, setPlans] = useState([]);

    const navigate = useNavigate();

    const { validateToken } = useContext(UserContext);

    useEffect(() => {
        if (!userData.user) {
            (async function () {
                const authenticate = await validateToken();
                if (!authenticate) navigate(routes.login);
            })();
        }
    }, [userData]);

    useEffect(() => {
        if (userData.token)
            API.getPlans(userData.token)
                .then((resp) => setPlans(resp.data))
                .catch(() => console.error("Fail to load plans"));
    }, [userData]);

    return (
        <SignPlan>
            <select
                name="plans"
                id="plans"
                onChange={(event) => {
                    setSignatureInfo({
                        ...signatureInfo,
                        plan: event.target.value,
                    });
                    setSignatureInputError(false);
                }}
            >
                <option value="" disabled selected>
                    Plano
                </option>
                {plans.length > 0 ? (
                    plans.map((plan) => (
                        <option value={plan.name}>{plan.name}</option>
                    ))
                ) : (
                    <option value="" disabled>
                        Nenhum plano encontrado
                    </option>
                )}
            </select>
            <input
                type={type}
                placeholder="Entrega"
                onFocus={() => setType("date")}
                onBlur={() => {
                    if (!signatureInfo.date) setType("text");
                }}
                onChange={(event) => {
                    setSignatureInputError(false);
                    setSignatureInfo({
                        ...signatureInfo,
                        date: event.target.value,
                    });
                }}
            />
            <SignProducts>
                <p>Quero receber</p>
                <input
                    type="checkbox"
                    value="Chás"
                    onChange={(event) => {
                        setSignatureInputError(false);
                        updateProducts(event);
                    }}
                />
                <label>Chás</label>
                <input
                    type="checkbox"
                    value="Incensos"
                    onChange={(event) => {
                        setSignatureInputError(false);
                        updateProducts(event);
                    }}
                />
                <label>Incensos</label>
                <input
                    type="checkbox"
                    value="Produtos organicos"
                    onChange={(event) => {
                        setSignatureInputError(false);
                        updateProducts(event);
                    }}
                />
                <label>Produtos organicos</label>
            </SignProducts>
            {signatureInputError ? <p>Selecione todos os campos</p> : null}
        </SignPlan>
    );
}
