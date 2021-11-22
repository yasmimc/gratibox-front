import { Address, SignPlan } from "./styles";

export default function SecondStepSignPlan({
    setAddressInfo,
    addressInfo,
    setSignatureInputError,
    signatureInputError,
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
                    setSignatureInputError(false);
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
                    setSignatureInputError(false);
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
                    setSignatureInputError(false);
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
                        setSignatureInputError(false);
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
                        setSignatureInputError(false);
                    }}
                >
                    <option value="" disabled selected>
                        Estado
                    </option>
                    <option value="MG">MG</option>
                    <option value="SP">SP</option>
                    <option value="RJ">RJ</option>
                </select>
                {signatureInputError ? <p>Selecione todos os campos</p> : null}
            </Address>
        </SignPlan>
    );
}
