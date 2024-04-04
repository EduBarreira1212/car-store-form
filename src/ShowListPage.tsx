import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ShowListPage = () => {
    const navigate = useNavigate();
    return (
        <Div>
            <button onClick={() => navigate("/form-page")}>Register a car</button>
        </Div>
    );
}

export default ShowListPage;