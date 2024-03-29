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
        photo: undefined
    });
    
    const [disabled, setDisabled] = useState<boolean>(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setData({...data, [name]: value});
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setData({...data, category: event.target.value});
    }

    return (
        <Div>
            <h1>Car store form</h1>
            <Form>
                <label htmlFor="car-name">Car name:</label>
                <input type="text" value={data.name} onChange={handleChange} name="name" id="car-name" placeholder="Ex: F-150" required/>
                <label>Car Brand:</label>
                <input type="text" value={data.brand} onChange={handleChange} name="brand" id="car-brand" placeholder="Ex: Ford" required/>
                <label>Car category:</label>
                <select value={data.category} onChange={handleSelectChange} name="category" id="car-category" required>
                    <option value="Pickup">Pickup</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatch">Hatch</option>
                    <option value="SUV">SUV</option>
                    <option value="Sport">Sport</option>
                </select>
                <label>Price:</label>
                <input type="number" value={data.price} onChange={handleChange} name="price" id="car-price" placeholder="Ex: 50000" required/>
                <label>Car photo:</label>
                <input type="file" value={data.photo} onChange={handleChange} name="photo" id="car-photo" required/>
                <input type="submit" value="Send" disabled={disabled}/>
            </Form>
        </Div>
    );
}

export default FormPage;