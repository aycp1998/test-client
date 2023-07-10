import React, { useState } from 'react';
import "./FormContainer.css";
import Form from '../../component/form/Form';

const FormContainer = () => {

    const [formType, setFormType] = useState(true);

    return (
        <div className='form-container'>
            <div className='title-buttons'>
                <h1 className='title'>¿Qué quieres hacer?</h1>
                <div className="buttons">
                    <button className="button" onClick={() => setFormType(true)}>crear datos</button>
                    <button className="button" onClick={() => setFormType(false)}>actualizar datos</button>
                </div>
            </div>
            <div className='form'>
                <Form
                    formType={formType}
                />
            </div>
        </div>
    )

}

export default FormContainer;
