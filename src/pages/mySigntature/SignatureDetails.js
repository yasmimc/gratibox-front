import dayjs from "dayjs";
import { Deliveries, Products } from "./styles";

export default function SignatureDetails({ userPlan }) {
    return (
        <>
            <Deliveries>
                <p>
                    <span className="label">Plano: </span>
                    {userPlan?.planName}
                </p>
                <p>
                    <span className="label">Data de assinatura: </span>
                    {dayjs(userPlan?.date).format("DD/MM/YYYY")}
                </p>
                <p>
                    <span className="label">Próximas entregas:</span>
                    <li>{dayjs(userPlan?.startDate).format("DD/MM/YYYY")}</li>
                    <li>
                        {dayjs(userPlan?.startDate)
                            .add(userPlan?.planPeriod, "days")
                            .format("DD/MM/YYYY")}
                    </li>
                    <li>
                        {dayjs(userPlan?.startDate)
                            .add(userPlan?.planPeriod * 2, "days")
                            .format("DD/MM/YYYY")}
                    </li>
                </p>
            </Deliveries>
            <Products>
                {userPlan?.products?.map((product, index) => (
                    <p key={index}>{product}</p>
                ))}
            </Products>
        </>
    );
}
