import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import './Form.css';
import api from '../../api/axiosConfig';

const Form = ({ formType }) => {

    const refId = useRef();
    const refName = useRef();
    const refAge = useRef();
    const refCountry = useRef();

    const createData = (e) => {
        try {
            e.preventDefault();
            const response = api.post('/api/data',
                {
                    name: refName.current.value,
                    age: refAge.current.value,
                    country: refCountry.current.value
                }
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = (e) => {
        try {
            e.preventDefault();
            const response = api.patch('/api/data',
                {
                    id: refId.current.value,
                    name: refName.current.value,
                    age: refAge.current.value,
                    country: refCountry.current.value
                }
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='form'>
            {
                formType ?
                    (
                        <form className="create-form" onSubmit={createData}>
                            <label htmlFor="name" className="label">nombre</label>
                            <input id="name" className="input" ref={refName} type="text" />
                            <label htmlFor="age" className="label">edad</label>
                            <input id="age" className="input" ref={refAge} type="number" />
                            <label htmlFor="country" className="input">país</label>
                            <input id="country" className="input" ref={refCountry} type="text" />
                            <button className="button" type='submit'>crear</button>
                        </form>
                    ) :
                    <form className="update-form" onSubmit={updateData}>
                        <label htmlFor="id" className="label">identificador</label>
                        <input id="id" className="input" ref={refId} type="number" />
                        <label htmlFor="name" className="label">nombre</label>
                        <input id="name" className="input" ref={refName} type="text" />
                        <label htmlFor="age" className="label">edad</label>
                        <input id="age" className="input" ref={refAge} type="number" />
                        <label htmlFor="country" className="input">país</label>
                        <input id="country" className="input" ref={refCountry} type="text" />
                        <button className="button" type='submit'>actualizar</button>
                    </form>
            }
        </div>
    )

}

Form.propTypes = {
    formType: PropTypes.bool.isRequired
}

export default Form;
