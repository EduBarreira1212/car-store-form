import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import * as Yup from 'yup';

const Style = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Div = styled.div`
    ${Style}
    height: 100vh;
`;

const FormFormik = styled(Form)`
    ${Style}
    gap: 0.75vh;
`;

const InputFormik = styled(Field)`
    padding: 10px;
    width: 100%;
    border: 0.10vw solid #ccc;
    border-radius: 5px;
`;

const InputSelect = styled(Field)`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23333"><path d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 0.10vw top 50%;
    background-size: 20px;
    padding: 1vh 5vw 1vh 0.5vw;
`;

const InputSub = styled.input`
    font-size: 16px;
    margin-top: 4vh;
    margin-bottom: 4vh;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 1vw;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover{
        background-color: #45a049;
    }
`;

const ErrorMessages = styled(ErrorMessage)`
    color: #ff0000;
    font-size: 15px;
    margin-top: 5px;
`;

export interface Idatastate {
    name: string
    brand: string
    category: string
    price: number
    photo: any
}

const ProductSchema = Yup.object().shape({
    name: Yup.string().required().matches(/^[a-zA-Z0-9\s]+$/, "Cannot contain special characters"),
    brand: Yup.string().required().matches(/^[a-zA-Z0-9\s]+$/, "Cannot contain special characters"),
    category: Yup.string().required(),
    price: Yup.number().required().positive("The number needs to be bigger than zero"),
    photo: Yup.string().required()
})

const FormPage = () => {

    const navigate = useNavigate();

    const handleSubmit = async (formvalues: Idatastate) => {
        try{
            const response = await axios.post(
                "https://apigenerator.dronahq.com/api/Pctzqml2/carForm", 
                formvalues
            );
            console.log('Resposta da API:', response.data);
            navigate("/");
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
                validationSchema={ProductSchema}
                onSubmit={(values) => {handleSubmit(values)}}
            >
                <FormFormik>
                    <label htmlFor="car-name">Car name:</label>
                    <InputFormik type="text" name="name" id="car-name" placeholder="Ex: F-150"/>
                    <ErrorMessages name="name" component="div"/>
                    <label htmlFor="car-brand">Car Brand:</label>
                    <InputFormik type="text" name="brand" id="car-brand" placeholder="Ex: Ford"/>
                    <ErrorMessages name="brand" component="div"/>
                    <label htmlFor="car-category">Car category:</label>
                    <InputSelect as="select" name="category" id="car-category">
                        <option value="Pickup">Pickup</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Hatch">Hatch</option>
                        <option value="SUV">SUV</option>
                        <option value="Sport">Sport</option>
                    </InputSelect>
                    <ErrorMessages name="category" component="div"/>
                    <label htmlFor="car-price">Price:</label>
                    <InputFormik type="number" name="price" id="car-price" placeholder="Ex: 50000"/>
                    <ErrorMessages name="price" component="div"/>
                    <label htmlFor="car-photo">Car photo:</label>
                    <InputFormik type="file" name="photo" id="car-photo"/>
                    <ErrorMessages name="photo" component="div"/>
                    <InputSub type="submit" value="Send"/>
                </FormFormik>
            </Formik>
        </Div>
    );
}

export default FormPage;