import { useState } from "react";
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

    const [data, setdata] = useState<Idatastate>({
        name: "",
        brand: "",
        category: "",
        price: 0,
        photo: undefined
    });
    
    const [disabled, setDisabled] = useState<boolean>(true);

    return (
        <Div>
            <h1>Car store form</h1>
            <Form>
                <label htmlFor="car-name">Car name:</label>
                <input type="text" value={data.name} name="name" id="car-name" placeholder="Ex: F-150" required/>
                <label>Car Brand:</label>
                <input type="text" value={data.brand} name="brand" id="car-brand" placeholder="Ex: Ford" required/>
                <label>Car category:</label>
                <select value={data.category} name="category" id="car-category" required>
                    <option value="Pickup">Pickup</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatch">Hatch</option>
                    <option value="SUV">SUV</option>
                    <option value="Sport">Sport</option>
                </select>
                <label>Price:</label>
                <input type="number" value={data.price} name="price" id="car-price" placeholder="Ex: 50000" required/>
                <label>Car photo:</label>
                <input type="file" value={data.photo} name="photo" id="car-photo" required/>
                <input type="submit" value="Send" disabled={disabled}/>
            </Form>
        </Div>
    );
}

export default FormPage;