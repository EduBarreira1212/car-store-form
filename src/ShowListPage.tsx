import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Idatastate } from "./FormPage";
import Car from "./components/Car";

const Div = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ShowListPage = () => {
    const [list, setList] = useState<Idatastate[]>([]);
    const [textFilter, setTextFilter] = useState("");
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
            <input type="text" name="search" onChange={(e) => setTextFilter(e.target.value)}/>
            <ul>
                {list.map((car, index) => (
                    <li key={index}><Car>{car}</Car></li>
                ))}
            </ul>
            <button onClick={() => navigate("/form-page")}>Register a car</button>
        </Div>
    );
}

export default ShowListPage;