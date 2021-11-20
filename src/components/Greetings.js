import { useContext } from "react";
import UserContext from "../contexts/userContext";

export default function Greetings({ name }) {
    // const { userData } = useContext(UserContext);

    return <h1>{`Bom te ver por aqui, ${name}`}</h1>;
}
