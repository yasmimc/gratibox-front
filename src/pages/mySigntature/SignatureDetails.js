import dayjs from "dayjs";
import { Deliveries, Products } from "./styles";

export default function SignatureDetails({ userPlan, planType }) {
    function businessDay(date) {
        console.log(date);
        if (dayjs(date).day() === 6)
            return dayjs(dayjs(date).add(2, "days").format());

        if (dayjs(date).day() === 0)
            return dayjs(dayjs(date).add(1, "days").format());

        return dayjs(date).format();
    }

    function weekday(number) {
        if (number === 1) return "Segunda";
        if (number === 3) return "Quarta";
        if (number === 5) return "Sexta";
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
                    {dayjs(userPlan?.date).format("DD/MM/YYYY")}
                </p>
                <p>
                    <span className="label">Dia recorrente: </span>
                    {planType === "Mensal"
                        ? `Dia ${dayjs(userPlan?.startDate).date()}`
                        : weekday(dayjs(userPlan?.startDate).day())}
                </p>
                <p>
                    <span className="label">Próximas entregas:</span>
                    <li>{dayjs(userPlan?.startDate).format("DD/MM/YYYY")}</li>
                    {planType === "Mensal" ? (
                        <>
                            <li>
                                {dayjs(
                                    businessDay(
                                        dayjs(userPlan?.startDate)
                                            .set(
                                                "month",
                                                dayjs(
                                                    userPlan?.startDate
                                                ).month() + 1
                                            )
                                            .format()
                                    )
                                ).format("DD/MM/YYYY")}
                            </li>
                            <li>
                                {dayjs(
                                    businessDay(
                                        dayjs(userPlan?.startDate)
                                            .set(
                                                "month",
                                                dayjs(
                                                    userPlan?.startDate
                                                ).month() + 2
                                            )
                                            .format()
                                    )
                                ).format("DD/MM/YYYY")}
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                {dayjs(
                                    businessDay(
                                        dayjs(userPlan?.startDate)
                                            .add(7, "days")
                                            .format()
                                    )
                                ).format("DD/MM/YYYY")}
                            </li>
                            <li>
                                {dayjs(
                                    businessDay(
                                        dayjs(userPlan?.startDate)
                                            .add(14, "days")
                                            .format()
                                    )
                                ).format("DD/MM/YYYY")}
                            </li>
                        </>
                    )}
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
