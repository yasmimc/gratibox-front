import styled from "styled-components";

export default function InputErrorMsg({ children }) {
    return <Msg>{children}</Msg>;
}

const Msg = styled.p`
    color: blwhiteack;
    background-color: white;
    opacity: 0.7;
    border-radius: 10px;
    /* border: 1px solid #604848; */
    padding: 5px;
    text-align: center;
    width: 100%;
`;
