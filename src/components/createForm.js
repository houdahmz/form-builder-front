/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import formJSON from '../formElement.json';
import Element from './Element';
import { useDispatch, useSelector } from 'react-redux';
import { getFormById, updateFormById } from '../redux/actions/Profile';
import dataAxios from '../constants/axiosData';
import { FormContext } from '../FormContext';
import { FormControl, TextField } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    button: {
        margin: theme.spacing(1),
    }
}))
const id = localStorage.getItem('formId');

function Form(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [elements, setElements] = useState(null);
    useEffect(() => {
        dataAxios
            .get('/forms/' + id)
            .then((data) => {
                if (data.status == 200) {
                    setElements(data.data.pages[0]);
                    console.log(data)
                    // dispatch({
                    //   type: FORM_DATA,
                    //   payload: data.data,
                    // });
                }
            })
            .catch((error) => {
            })
    }, [])

    const { fields, title } = elements ?? {}
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(elements)
        dispatch(updateFormById(elements._id, elements))
    }
    const handleChange = (id, event) => {
        const newElements = { ...elements }
        newElements.fields.forEach(field => {
            const { type, name } = field;
            if (id === name) {
                switch (type) {
                    case 'checkbox':
                        field['value'] = event.target.checked;
                        break;

                    default:
                        field['value'] = event.target.value;
                        break;
                }


            }
            setElements(newElements)
        });
        console.log(elements)
    }
    console.log("elements", elements)
    return (
        <FormContext.Provider value={{ handleChange }}>
            <div className="App container" style={{ marginTop: "80px", marginBottom: "400px" }}>
                <h3 >{title}</h3>
                <form>
                    {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
                   
                    <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
            </div>
        </FormContext.Provider>
    );
}

export default Form;

