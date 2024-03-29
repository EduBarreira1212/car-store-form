import styled from "styled-components";

const Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Div = styled(Style)`
    
`;

const Form = styled(Style)`
    gap: 0.75vh;
`;

const FormPage = () => {
    return (
        <Div>
            <h1>Car store form</h1>
            <Form>
                <label htmlFor="car-name">Car name:</label>
                <input type="text" name="name" id="car-name" placeholder="Ex: F-150" required/>
                <label>Car Brand:</label>
                <input type="text" name="brand" id="car-brand" placeholder="Ex: Ford" required/>
                <label>Car category:</label>
                <select name="category" id="car-category" required>
                    <option value="Pickup">Pickup</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatch">Hatch</option>
                    <option value="SUV">SUV</option>
                    <option value="Sport">Sport</option>
                </select>
                <label>Price:</label>
                <input type="number" name="price" id="car-price" placeholder="Ex: 50000" required/>
                <label>Car photo:</label>
                <input type="file" name="photo" id="car-photo" required/>
                <input type="submit" value="Send"/>
            </Form>
        </Div>
    );
}

export default FormPage;