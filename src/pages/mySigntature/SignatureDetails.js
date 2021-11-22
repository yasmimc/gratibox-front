import dayjs from "dayjs";
import { Deliveries, Products } from "./styles";

export default function SignatureDetails({ userPlan }) {
    function businessDay(date) {
        if (dayjs(date).day() === 6)
            return dayjs(dayjs(date).add(2, "days").format());

        if (dayjs(date).day() === 0)
            return dayjs(dayjs(date).add(1, "days").format());

        return dayjs(date).format();
    }

    return (
        <>
            <Deliveries>
                <p>
                    <span className="label">Plano: </span>
                    {userPlan?.planName}
                </p>
                <p>
                    <span className="label">Data de assinatura: </span>
                    {dayjs(businessDay(userPlan?.date)).format("DD/MM/YYYY")}
                </p>
                <p>
                    <span className="label">Próximas entregas:</span>
                    <li>{dayjs(userPlan?.startDate).format("DD/MM/YYYY")}</li>
                    <li>
                        {dayjs(
                            businessDay(
                                dayjs(userPlan?.startDate)
                                    .add(userPlan?.planPeriod, "days")
                                    .format()
                            )
                        ).format("DD/MM/YYYY")}
                    </li>
                    <li>
                        {dayjs(
                            businessDay(
                                dayjs(userPlan?.startDate)
                                    .add(userPlan?.planPeriod * 2, "days")
                                    .format()
                            )
                        ).format("DD/MM/YYYY")}
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
