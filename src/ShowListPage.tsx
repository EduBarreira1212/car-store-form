import axios from "axios";
import { useEffect, useState } from "react";
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
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://apigenerator.dronahq.com/api/Pctzqml2/carForm");
                setList(response.data);
                setLoading(false);
            } catch (error) {
                console.log("error:", error);
            }
        };
        fetchData();
    }, [])

    const navigate = useNavigate();

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <Div>
            <button onClick={() => navigate("/form-page")}>Register a car</button>
        </Div>
    );
}

export default ShowListPage;