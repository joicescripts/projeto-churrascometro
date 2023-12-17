import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import axios from 'axios';
import Client from '../model/Client';
import Banner from './Banner';

const Form = () => {
    const [state, setState] = useState({nome: '', email: '', postalCode:'', optIn: false});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const app = Router();
        app.post('/leads', async (req, res) => {
            const { nome, email, postalCode, optIn } = req.body;
            const newClient = new Client({ nome, email, postalCode, optIn });

            try {
                const response = await axios.get(`https://churrascometro-api.vercel.app/leads/${email}`);
                if (response.data) {
                    res.status(400).json('Lead já existe!');
                } else {
                    newClient.save()
                    .then(() => res.status(200).json('Lead cadastrado!'), console.log('Lead cadastrado!'))
                    .catch(err => res.status(400).json('Erro: ' + err));
                }
            } catch (error) {
                res.status(500).json('Erro ao buscar lead: ' + error);
            }
        });
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState({
            ...state,
            [id]: value
        });
    }

    const [errors, setErrors] = useState({nome: '', email: '', postalCode:'', optIn: ''});

    const handleBlur = (e) => {
        const { id, value } = e.target;
        let errorMsg = '';

        switch (id) {
            case 'nome':
                const nameRegex = /^[a-zA-ZÀ-ú]+$/;
                errorMsg = !nameRegex.test(value) ? 'Nome inválido' : '';
                break;
            case 'email':
                const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
                errorMsg = !emailRegex.test(value) ? 'Email inválido' : '';
                break;
            case 'postalCode':
                const cepRegex = /^\d{8}$/;
                errorMsg = !cepRegex.test(value) ? 'CEP inválido' : '';
                break;
            case 'optIn':
                errorMsg = !state.optIn ? 'Por favor, aceite os termos de consentimento!' : '';
                break;
            default:
                break;
        }

        setErrors({ ...errors, [id]: errorMsg });
    }

    return (
        <>
        <div className="calculator">
            <div className="row">
                <div className="input-form-group">
                    <Banner page="FormPage" />
                    <form>
                    <input type="text" id="nome" onBlur={handleBlur} placeholder="Digite seu nome" className="input-form" required/>
                    {errors.nome && <p className='input-error'>{errors.nome}</p>}

                    <input type="email" id="email" onBlur={handleBlur} placeholder="Digite seu email" className="input-form" required/>
                    {errors.email && <p className='input-error'>{errors.email}</p>}

                    <input type="number" id="postalCode" onBlur={handleBlur} placeholder="Digite seu CEP" className="input-form" required/>
                    {errors.postalCode && <p className='input-error'>{errors.postalCode}</p>}

                    <input type="checkbox" id="optIn" name="consentInput" checked={state.optIn} onChange={handleChange} onBlur={handleBlur} required/>
                    {errors.optIn && <p className='input-error'>{errors.optIn}</p>}
                    <label htmlFor="optIn" id="consentLabel">Eu concordo em receber comunicações da Churrascometro</label>

                    <button className="default-button" type="submit" onSubmit={handleSubmit}>Cadastrar</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div id="nav-container">
                    <Link to="/">
                        <button id="skip-register default-button">Início</button>
                        </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Form;