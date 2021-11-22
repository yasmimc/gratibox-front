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
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const { validateToken } = useContext(UserContext);

    useEffect(() => {
        if (!userData?.user) {
            (async function () {
                const authenticate = await validateToken();
                if (!authenticate) navigate(routes.login);
            })();
        }
    }, [userData]);

    useEffect(() => {
        if (userData?.token) {
            API.getPlans(userData.token)
                .then((resp) => setPlans(resp.data))
                .catch(() => {
                    console.error("Fail to load plans");
                });
            API.getProducts(userData.token)
                .then((resp) => setProducts(resp.data))
                .catch(() => {
                    console.error("Fail to load plans");
                });
        }
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
                        <option key={plan.id} value={plan.id}>
                            {plan.name}
                        </option>
                    ))
                ) : (
                    <option key="0" value="" disabled>
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
                        startDate: event.target.value,
                    });
                }}
            />
            <SignProducts>
                <p>Quero receber</p>
                {products.length > 0
                    ? products.map((product) => (
                          <>
                              <input
                                  key={product.id}
                                  type="checkbox"
                                  value={product.id}
                                  onChange={(event) => {
                                      setSignatureInputError(false);
                                      updateProducts(event);
                                  }}
                              />
                              <label key={`${product.id} label`}>
                                  {product.name}
                              </label>
                          </>
                      ))
                    : null}
            </SignProducts>
            {signatureInputError ? <p>Selecione todos os campos</p> : null}
        </SignPlan>
    );
}
