import { FormControl, makeStyles, TextField } from '@material-ui/core';
import { useField } from 'formik';
import React, { useContext, useState } from 'react'
import { FormContext } from '../../FormContext';
const useStyles = makeStyles((theme) => ({
    logo: {
        height: 24,
    },
    root: {
        marginTop: '100px'
    },
    mainBox: {
        paddingTop: '20px',
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: '50px',
        justifyContent: 'space-around',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 0,
        },
    },
    container: {
        // border: 'solid',
        // borderColor: '#e8e6e6',
        // borderWidth: '1px',
        padding: theme.spacing(10),
        backgroundColor: 'white',
        marginTop: '30px',
        [theme.breakpoints.down('xs')]: { padding: 0, paddingTop: 30 },
    },
    card: {
        maxWidth: 576,
        width: '100%',
        textAlign: 'center',
        padding: 24,
        overflow: 'hidden',
        boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        [theme.breakpoints.up('lg')]: {
            padding: 32,
        },
        [theme.breakpoints.up('xl')]: {
            padding: '48px 64px',
        },
    },
    textField: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        width: '80%',
        backgroundColor: '#3e17a9',
        color: 'white',
    },
    submitButton: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(0),
    },
    fab: {
        margin: theme.spacing(1),
        // width:'100%'
    },
}));

const Input = ({ name, label, placeholder, value, type }) => {
    const { handleChange } = useContext(FormContext)
    const classes = useStyles();

    return (
        <div className="mb-3">
            {/* <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
            <input type={type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder={placeholder ? placeholder : ''}
                value={value}
                onChange={event => handleChange(name, event)}
            /> */}
            
                <TextField
                    name={name}
                    label={label}
                    value={value}
                    className={classes.textField}
                    onChange={event => handleChange(name, event)}
                    variant='outlined'
                    type={type}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
        </div>
    )
}

export default Input
