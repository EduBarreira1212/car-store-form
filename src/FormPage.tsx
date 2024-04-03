import axios from "axios";
import { Field, Form, Formik } from "formik";
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

const FormFormik = styled(Form)`
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

    const handleSubmit = async () => {
        try{
            const response = await axios.post(
                "https://apigenerator.dronahq.com/api/Pctzqml2/carForm", 
                
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
            <Formik
                initialValues={{name: "", brand: "", category: "", price: 0, photo: ""}}
                onSubmit={handleSubmit}
            >
                <FormFormik>
                    <label htmlFor="car-name">Car name:</label>
                    <Field type="text" name="name" id="car-name" placeholder="Ex: F-150"/>
                    <label htmlFor="car-brand">Car Brand:</label>
                    <Field type="text" name="brand" id="car-brand" placeholder="Ex: Ford"/>
                    <label htmlFor="car-category">Car category:</label>
                    <Field as="select" name="category" id="car-category">
                        <option value="Pickup">Pickup</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Hatch">Hatch</option>
                        <option value="SUV">SUV</option>
                        <option value="Sport">Sport</option>
                    </Field>
                    <label htmlFor="car-price">Price:</label>
                    <Field type="number" name="price" id="car-price" placeholder="Ex: 50000"/>
                    <label htmlFor="car-photo">Car photo:</label>
                    <Field type="file" name="photo" id="car-photo"/>
                    <InputSub type="submit" value="Send"/>
                </FormFormik>
            </Formik>
        </Div>
    );
}

export default FormPage;