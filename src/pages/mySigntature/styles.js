import styled from "styled-components";
import { PageContainer as Container } from "../../components/PageContainer";
import { Button } from "../../components/Button";

const PageContainer = styled(Container)`
    padding-bottom: 0;

    h1 {
        width: 100%;
    }
    h3 {
        margin-top: 22px;
        width: 100%;
    }
`;

const MySignatureDetails = styled.div`
    background: #ffffff;
    border-radius: 10px;
    width: 356px;
    height: 382px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-top: 10px;

    img {
        width: 100%;
        height: 40%;
        object-fit: cover;
        border-radius: 10px;
    }

    p {
        font-weight: 700;
        font-size: 18px;
        padding: 0 16px;
        color: #e63c80;
    }

    .label {
        color: #4d65a8;
    }
`;

const RateButton = styled(Button)`
    width: 237px;
    height: 56px;
    font-weight: 500;
    font-size: 24px;

    margin-top: 20px;
`;

const NextPageButton = styled(RateButton)``;

const Deliveries = styled.div`
    p {
        margin-top: 5px;
    }
    li {
        list-style-type: none;
        padding-left: 20px;
    }
`;

const Products = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    p {
        font-size: 17px;
        font-weight: 400;
    }
`;

const SignPlan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    select,
    div,
    input {
        border: none;
        padding: 12px;

        color: #4d65a8;

        width: 290px;
        font-weight: 700;
        font-size: 18px;

        background: rgba(224, 209, 237, 0.62);
        border-radius: 5px;

        margin-top: 5px;
    }

    input::placeholder {
        color: #4d65a8;
    }
`;

const SignProducts = styled.div`
    p {
        padding: 0;
        color: #4d65a8;
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 15px;
    }
    label {
        margin-right: 40px;
    }
    input[type="checkbox"] {
        width: 20px;
        height: 20px;
        border: 0;
    }
    input[type="checkbox"]:after {
    }
`;

const Address = styled.div`
    padding: 0 !important;
    background: initial !important;
    margin-top: 0 !important;

    input {
        width: calc(60% - 5px);
    }

    select {
        width: 40%;
        margin-left: 5px;
    }
`;

export {
    PageContainer,
    MySignatureDetails,
    RateButton,
    NextPageButton,
    Deliveries,
    Products,
    SignPlan,
    SignProducts,
    Address,
};
