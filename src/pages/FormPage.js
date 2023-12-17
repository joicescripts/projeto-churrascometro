import '../App.css';
import React from 'react';
import Form from '../components/Form';
import Title from '../components/Title';


const FormPage = () => {
    return (
        <div className="App">
            <div className="container">
                <Title />
                <Form />
            </div>
        </div>
    )
}
export default FormPage;