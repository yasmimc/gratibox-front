import { Address, SignPlan } from "./styles";

export default function SecondStepSignPlan({
    setAddressInfo,
    addressInfo,
    setSubscriptionInputError,
    subscriptionInputError,
}) {
    return (
        <SignPlan>
            <input
                type="text"
                placeholder="Nome completo"
                onChange={(event) => {
                    setAddressInfo({
                        ...addressInfo,
                        userFullName: event.target.value,
                    });
                    setSubscriptionInputError(false);
                }}
            />
            <input
                type="text"
                placeholder="Endereço de entrega"
                onChange={(event) => {
                    setAddressInfo({
                        ...addressInfo,
                        deliveryAddress: event.target.value,
                    });
                    setSubscriptionInputError(false);
                }}
            />
            <input
                type="text"
                placeholder="CEP"
                onChange={(event) => {
                    setAddressInfo({
                        ...addressInfo,
                        cep: event.target.value.replace("-", ""),
                    });
                    setSubscriptionInputError(false);
                }}
            />
            <Address>
                <input
                    type="text"
                    placeholder="Cidade"
                    onChange={(event) => {
                        setAddressInfo({
                            ...addressInfo,
                            city: event.target.value,
                        });
                        setSubscriptionInputError(false);
                    }}
                />
                <select
                    name="estado"
                    id="estado"
                    onChange={(event) => {
                        setAddressInfo({
                            ...addressInfo,
                            state: event.target.value,
                        });
                        setSubscriptionInputError(false);
                    }}
                >
                    <option value="" disabled selected>
                        Estado
                    </option>
                    <option value="MG">MG</option>
                    <option value="SP">SP</option>
                    <option value="RJ">RJ</option>
                </select>
                {subscriptionInputError ? (
                    <p>Selecione todos os campos</p>
                ) : null}
            </Address>
        </SignPlan>
    );
}
