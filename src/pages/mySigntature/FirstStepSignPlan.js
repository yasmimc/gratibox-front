import dayjs from "dayjs";
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
    const [plans, setPlans] = useState([]);
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const { validateToken, planType, setPlanType } = useContext(UserContext);

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
                    setPlanType(
                        event.target.options[
                            event.target.options.selectedIndex
                        ].getAttribute("name")
                    );
                    setSignatureInputError(false);
                }}
            >
                <option value="" disabled selected>
                    Plano
                </option>
                {plans.length > 0 ? (
                    plans.map((plan) => (
                        <option key={plan.id} value={plan.id} name={plan.name}>
                            {plan.name}
                        </option>
                    ))
                ) : (
                    <option key="0" value="" disabled>
                        Nenhum plano encontrado
                    </option>
                )}
            </select>
            <select
                name="deliveryDate"
                id="deliveryDate"
                onChange={(event) => {
                    setSignatureInfo({
                        ...signatureInfo,
                        startDate: event.target.value,
                    });
                    setSignatureInputError(false);
                }}
            >
                <option value="" disabled selected>
                    Entrega
                </option>
                {!signatureInfo.plan ? (
                    <option key="0" value="" disabled>
                        Escolha um plano primeiro
                    </option>
                ) : null}
                {planType === "Mensal" ? (
                    <>
                        <option
                            key="0"
                            value={
                                dayjs().date() > 1
                                    ? dayjs()
                                          .set("date", 1)
                                          .set("month", dayjs().month() + 1)
                                          .format()
                                    : dayjs().set("date", 1).format()
                            }
                        >
                            Dia 01
                        </option>
                        <option
                            key="1"
                            value={
                                dayjs().date() > 10
                                    ? dayjs()
                                          .set("date", 10)
                                          .set("month", dayjs().month() + 1)
                                          .format()
                                    : dayjs().set("date", 10).format()
                            }
                        >
                            Dia 10
                        </option>
                        <option
                            key="2"
                            value={
                                dayjs().date() > 20
                                    ? dayjs()
                                          .set("date", 20)
                                          .set("month", dayjs().month() + 1)
                                          .format()
                                    : dayjs().set("date", 20).format()
                            }
                        >
                            Dia 20
                        </option>
                    </>
                ) : null}
                {planType === "Semanal" ? (
                    <>
                        <option
                            key="0"
                            value={
                                dayjs().day() > 1
                                    ? dayjs()
                                          .set("day", 1)
                                          .add("date", 7)
                                          .format()
                                    : dayjs().set("day", 1).format()
                            }
                        >
                            Segunda
                        </option>
                        <option
                            key="1"
                            value={
                                dayjs().day() > 3
                                    ? dayjs()
                                          .set("day", 3)
                                          .add("date", 7)
                                          .format()
                                    : dayjs().set("day", 3).format()
                            }
                        >
                            Quarta
                        </option>
                        <option
                            key="2"
                            value={
                                dayjs().day() > 5
                                    ? dayjs()
                                          .set("day", 5)
                                          .add("date", 7)
                                          .format()
                                    : dayjs().set("day", 5).format()
                            }
                        >
                            Sexta
                        </option>
                    </>
                ) : null}
            </select>
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
