import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
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

const ProductSchema = Yup.object().shape({
    name: Yup.string().required().matches(/^[a-zA-Z0-9\s]+$/),
    brand: Yup.string().required().matches(/^[a-zA-Z0-9\s]+$/),
    category: Yup.string().required(),
    price: Yup.number().required().positive(),
    photo: Yup.string().required()
})

const FormPage = () => {

    const handleSubmit = async (formvalues: Idatastate) => {
        try{
            const response = await axios.post(
                "https://apigenerator.dronahq.com/api/Pctzqml2/carForm", 
                formvalues
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
                validationSchema={ProductSchema}
                onSubmit={(values) => {handleSubmit(values)}}
            >
                <FormFormik>
                    <label htmlFor="car-name">Car name:</label>
                    <Field type="text" name="name" id="car-name" placeholder="Ex: F-150"/>
                    <ErrorMessage name="name" component="div"/>
                    <label htmlFor="car-brand">Car Brand:</label>
                    <Field type="text" name="brand" id="car-brand" placeholder="Ex: Ford"/>
                    <ErrorMessage name="brand" component="div"/>
                    <label htmlFor="car-category">Car category:</label>
                    <Field as="select" name="category" id="car-category">
                        <option value="Pickup">Pickup</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Hatch">Hatch</option>
                        <option value="SUV">SUV</option>
                        <option value="Sport">Sport</option>
                    </Field>
                    <ErrorMessage name="category" component="div"/>
                    <label htmlFor="car-price">Price:</label>
                    <Field type="number" name="price" id="car-price" placeholder="Ex: 50000"/>
                    <ErrorMessage name="price" component="div"/>
                    <label htmlFor="car-photo">Car photo:</label>
                    <Field type="file" name="photo" id="car-photo"/>
                    <ErrorMessage name="photo" component="div"/>
                    <InputSub type="submit" value="Send"/>
                </FormFormik>
            </Formik>
        </Div>
    );
}

export default FormPage;