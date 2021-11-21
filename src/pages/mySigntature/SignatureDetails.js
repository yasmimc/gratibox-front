import { Deliveries, Products } from "./styles";

export default function SignatureDetails() {
    return (
        <>
            <Deliveries>
                <p>
                    <span className="label">Plano: </span>
                    @tipo_de_plano
                </p>
                <p>
                    <span className="label">Data de assinatura:</span>
                    dd/mm/aa
                </p>
                <p>
                    <span className="label">Próximas entregas:</span>
                    <li>dd/mm/aa</li>
                    <li>dd/mm/aa</li>
                    <li>dd/mm/aa</li>
                </p>
            </Deliveries>
            <Products>
                <p>Chás</p>
                <p>Produtos organicos</p>
                <p>Incensos</p>
            </Products>
        </>
    );
}
