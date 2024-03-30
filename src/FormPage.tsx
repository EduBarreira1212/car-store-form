import axios from "axios";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Style = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Div = styled.div`
    ${Style}
`;

const Form = styled.form`
    ${Style}
    gap: 0.75vh;
`;

const InputSub = styled.input`
    height: 4vh;
    width: 9vw;
    font-size: larger;
    margin-top: 2vh;
`;

interface Idatastate {
    name: string
    brand: string
    category: string
    price: number
    photo: any
}

const FormPage = () => {

    const [data, setData] = useState<Idatastate>({
        name: "",
        brand: "",
        category: "",
        price: 0,
        photo: ""
    });
    
    const [disabled, setDisabled] = useState<boolean>(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setData({...data, [name]: value});
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setData({...data, category: event.target.value});
    }

    useEffect(() => {
        setDisabled(!(!!data.name && !!data.brand && !!data.category && !!data.price && !!data.photo));
    }, [data]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const response = await axios.post(
                "https://apigenerator.dronahq.com/api/Pctzqml2/carForm", 
                data
            );
            console.log('Resposta da API:', response.data);
        }
        catch{
            console.log("Error fetching data", Error);
        }
    }

    return (
        <Div>
            <h1>Car store form</h1>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="car-name">Car name:</label>
                <input type="text" value={data.name} onChange={handleChange} name="name" id="car-name" placeholder="Ex: F-150"/>
                <label>Car Brand:</label>
                <input type="text" value={data.brand} onChange={handleChange} name="brand" id="car-brand" placeholder="Ex: Ford"/>
                <label>Car category:</label>
                <select value={data.category} onChange={handleSelectChange} name="category" id="car-category">
                    <option value="Pickup">Pickup</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatch">Hatch</option>
                    <option value="SUV">SUV</option>
                    <option value="Sport">Sport</option>
                </select>
                <label>Price:</label>
                <input type="number" value={data.price} onChange={handleChange} name="price" id="car-price" placeholder="Ex: 50000"/>
                <label>Car photo:</label>
                <input type="file" value={data.photo} onChange={handleChange} name="photo" id="car-photo"/>
                <InputSub type="submit" value="Send" disabled={disabled}/>
            </Form>
        </Div>
    );
}

export default FormPage;