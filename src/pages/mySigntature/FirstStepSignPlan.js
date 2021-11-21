import { useState } from "react";
import { SignPlan, SignProducts } from "./styles";

export default function FirstStepSignPlan({
    setSignatureInfo,
    signatureInfo,
    setSignatureInputError,
    updateProducts,
    signatureInputError,
}) {
    const [type, setType] = useState("text");
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
                <option value="Mensal">Mensal</option>
                <option value="Semanal">Semanal</option>
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
