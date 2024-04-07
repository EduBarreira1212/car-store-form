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

const Input = styled.input`
    padding: 0.5vw;
    width: 10vw;
    border-radius: 1vw;
    border: 0.10vw solid #ccc;
    font-size: 16px;
    margin-top: 2vh;

    &:focus{
        border-color: #4CAF50;
        outline: none;
    }
`;

const Ul = styled.ul`
    list-style: none;
    padding: 0;
`;

const Li = styled.li`
    background-color: red;
    padding: 0.5vh 1vw;
    text-align: center;
    border-radius: 1vw;
    margin-top: 2vh;
`;

const RegisterBtn = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 4vh;
    margin-bottom: 3vh;
    cursor: pointer;
    border-radius: 1vw;
    transition: background-color 0.3s;

    &:hover{
        background-color: #45a049;
    }
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
            <Input type="text" name="search" onChange={(e) => setTextFilter(e.target.value)}/>
            <Ul>
                {list
                .filter((car) => car.name.includes(textFilter))
                .map((car, index) => (
                    <Li key={index}><Car>{car}</Car></Li>
                ))}
            </Ul>
            <RegisterBtn onClick={() => navigate("/form-page")}>Register a car</RegisterBtn>
        </Div>
    );
}

export default ShowListPage;