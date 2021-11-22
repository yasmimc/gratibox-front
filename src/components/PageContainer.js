import styled from "styled-components";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

export function PageContainer({ children }) {
    const { userData, logOut } = useContext(UserContext);

    return (
        <Container>
            {userData ? <LogOutButton onClick={logOut} /> : null}
            {children}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #6d7ce4;

    padding: 60px 25px;

    h1 {
        font-weight: 500;
        font-size: 28px;
        color: white;
        margin-top: 50px;
    }

    h3 {
        margin-top: 40px;
        font-weight: 300;
        font-size: 18px;
        color: white;
    }
`;

const LogOutButton = styled(RiLogoutCircleRFill)`
    position: fixed;
    top: 0;
    right: 0;
    color: white;
    font-size: 40px;
    margin: 20px;
`;
