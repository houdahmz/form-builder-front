import React, { useState } from 'react';
import {
    Formik,
    Field,
    Form,
    ErrorMessage,
    FieldArray,
    useFormikContext,
    useField,
} from 'formik';
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    Container,
    FormControl,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import { useDispatch, useSelector } from 'react-redux';
import { createForm } from '../redux/actions/Profile';

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

const MyTextField = (props) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        <TextField
            {...props}
            {...field}
            helperText={errorText}
            error={!!errorText}
        />
    );
};

export const useInput = (initialValue) => {
    // const {formId, formField} = checkoutFormModel;

    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        bind: {
            value,
            onChange: (event) => {
                setValue(event.target.value);
            },
        },
    };
};

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.

const FriendList = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (

        <Box display='flex' flexDirection='column' style={{ marginTop: "80px", marginBottom: "400px" }}>
            <Card variant="outlined">

                <Formik
                    initialValues={{ pages: [{ title: '', description: '', fields: [{ label: '', placeholder: '', type: '', name: '', value: '', options: [{ label: '', value: '' }] }] }] }}
                    onSubmit={values => {
                        // setTimeout(() => {
                        //     alert(JSON.stringify(values, null, 2));
                        // }, 500),
                        dispatch(createForm(values))
                    }
                    }
                    render={({ values, setFieldValue }) => (
                        <Form>
                            <Box
                                pb={6}
                                py={{ xl: 8 }}
                                display='flex'
                                flex={1}
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'>
                                <h2 style={{ color: '#7141b1' }}>Create form builder with multiple pages</h2>
                            </Box>

                            <FieldArray name='pages'>
                                {({ insert, remove, push }) => (
                                    <Box
                                        pb={6}
                                        py={{ xl: 8 }}
                                        display='flex'
                                        flex={1}
                                        flexDirection='column'
                                        alignItems='center'
                                        justifyContent='center'>
                                        {values.pages.length > 0 &&
                                            values.pages.map((page, index) => (
                                                <Box lg={2} display='flex' flexDirection='rows' key={index}>
                                                    <Box className={classes.mainBox}>
                                                        <Box lg={2} display='flex' flexDirection='column'>
                                                            <Box mb={{ xs: 6, xl: 8 }}>
                                                                <MyTextField
                                                                    name={`pages.${index}.title`}
                                                                    label='Title page'
                                                                    className={classes.textField}
                                                                    variant='outlined'
                                                                    type='text'
                                                                />
                                                            </Box>
                                                            <Box mb={{ xs: 6, xl: 8 }}>
                                                                <MyTextField
                                                                    name={`pages.${index}.description`}
                                                                    label='Description page'
                                                                    className={classes.textField}
                                                                    variant='outlined'
                                                                    type='text'
                                                                />
                                                            </Box>

                                                            <FieldArray name={`pages.${index}.fields`}>
                                                                {({ insert, remove, push }) => (
                                                                    <Box>
                                                                        {page.fields.length > 0 &&
                                                                            page.fields.map((field, i) => (
                                                                                <Box lg={2} display='flex' flexDirection='rows' key={i}>
                                                                                    <Box className={classes.mainBox}>
                                                                                        <Box lg={2} display='flex' flexDirection='column'>
                                                                                            <Box mb={{ xs: 6, xl: 8 }}>
                                                                                                <MyTextField
                                                                                                    name={`pages.${index}.fields.${i}.label`}
                                                                                                    label='Field label'
                                                                                                    className={classes.textField}
                                                                                                    variant='outlined'
                                                                                                    type='text'
                                                                                                />
                                                                                            </Box>
                                                                                            <Box mb={{ xs: 6, xl: 8 }}>
                                                                                                <MyTextField
                                                                                                    name={`pages.${index}.fields.${i}.placeholder`}
                                                                                                    label='Field placeholder'
                                                                                                    className={classes.textField}
                                                                                                    variant='outlined'
                                                                                                    type='text'
                                                                                                />
                                                                                            </Box>
                                                                                        </Box>
                                                                                    </Box>
                                                                                    <Box className={classes.mainBox}>
                                                                                        <Box lg={2} display='flex' flexDirection='column'>
                                                                                            <Box mb={{ xs: 6, xl: 8 }}>
                                                                                                <FormControl variant='outlined' className={classes.textField}>
                                                                                                    <InputLabel
                                                                                                        id='demo-simple-select-outlined-label'
                                                                                                        className={classes.label}>
                                                                                                        Type
                                                                                                    </InputLabel>
                                                                                                    <Select
                                                                                                        defaultValue=''
                                                                                                        labelId='demo-simple-select-outlined-label'
                                                                                                        id='demo-simple-select-outlined'
                                                                                                        onChange={(e) => setFieldValue(`pages.${index}.fields.${i}.type`, e.target.value)}
                                                                                                        name={`pages.${index}.fields.${i}.type`}>

                                                                                                        <MenuItem value='text'>
                                                                                                            <em>text</em>
                                                                                                        </MenuItem>
                                                                                                        <MenuItem value='text'>
                                                                                                            <em>textra</em>
                                                                                                        </MenuItem>
                                                                                                        <MenuItem value='number'>
                                                                                                            <em>number</em>
                                                                                                        </MenuItem>
                                                                                                        <MenuItem value='email'>
                                                                                                            <em>email</em>
                                                                                                        </MenuItem>
                                                                                                        <MenuItem value='tel'>
                                                                                                            <em>phone</em>
                                                                                                        </MenuItem>
                                                                                                        <MenuItem value='file'>
                                                                                                            <em>file</em>
                                                                                                        </MenuItem>
                                                                                                        <MenuItem value='radio'>
                                                                                                            <em>radio</em>
                                                                                                        </MenuItem>
                                                                                                        <MenuItem value='checkbox'>
                                                                                                            <em>checkbox</em>
                                                                                                        </MenuItem>
                                                                                                        <MenuItem value='select'>
                                                                                                            <em>select</em>
                                                                                                        </MenuItem>
                                                                                                        <MenuItem value='url'>
                                                                                                            <em>url</em>
                                                                                                        </MenuItem>
                                                                                                        <MenuItem value='date'>
                                                                                                            <em>date</em>
                                                                                                        </MenuItem>
                                                                                                        <MenuItem value='time'>
                                                                                                            <em>time</em>
                                                                                                        </MenuItem>
                                                                                                    </Select>
                                                                                                </FormControl>
                                                                                            </Box>
                                                                                            <Box mb={{ xs: 6, xl: 8 }}>
                                                                                                <MyTextField
                                                                                                    name={`pages.${index}.fields.${i}.name`}
                                                                                                    label='field name'
                                                                                                    className={classes.textField}
                                                                                                    variant='outlined'
                                                                                                    type='text'
                                                                                                />
                                                                                            </Box>

                                                                                        </Box>
                                                                                    </Box>
                                                                                    {values.pages[index].fields[i].type == 'radio' || values.pages[index].fields[i].type == 'select' || values.pages[index].fields[i].type == 'checkbox' ?
                                                                                        <FieldArray name={`pages.${index}.fields.${i}.options`}>
                                                                                            {({ insert, remove, push }) => (
                                                                                                <Box>
                                                                                                    {field.options.length > 0 &&
                                                                                                        field.options.map((option, j) => (
                                                                                                            <Box lg={2} display='flex' flexDirection='rows' key={i}>
                                                                                                                <Box className={classes.mainBox}>
                                                                                                                    <Box lg={2} display='flex' flexDirection='column'>
                                                                                                                        <Box mb={{ xs: 6, xl: 8 }}>
                                                                                                                            <MyTextField
                                                                                                                                name={`pages.${index}.fields.${i}.options.${j}.label`}
                                                                                                                                label='Option label'
                                                                                                                                className={classes.textField}
                                                                                                                                variant='outlined'
                                                                                                                                type='text'
                                                                                                                            />
                                                                                                                        </Box>


                                                                                                                        <Box mb={{ xs: 6, xl: 8 }}>
                                                                                                                            <MyTextField
                                                                                                                                name={`pages.${index}.fields.${i}.options.${j}.value`}
                                                                                                                                label='Option value'
                                                                                                                                className={classes.textField}
                                                                                                                                variant='outlined'
                                                                                                                                type='text'
                                                                                                                            />
                                                                                                                        </Box>
                                                                                                                    </Box>
                                                                                                                </Box>
                                                                                                                <Box className={classes.mainBox}>
                                                                                                                    <Box lg={2} display='flex' flexDirection='column'>
                                                                                                                        <Fab
                                                                                                                            color='secondary'
                                                                                                                            aria-label='edit'
                                                                                                                            className={classes.fab}
                                                                                                                            onClick={() => remove(j)}>
                                                                                                                            <DeleteIcon />
                                                                                                                        </Fab>
                                                                                                                    </Box>
                                                                                                                </Box>
                                                                                                                <Box className={classes.mainBox}>
                                                                                                                    <Box lg={2} display='flex' flexDirection='column'>
                                                                                                                        <Fab
                                                                                                                            color='primary'
                                                                                                                            aria-label='add'
                                                                                                                            className={classes.fab}
                                                                                                                            onClick={() => push()}>
                                                                                                                            <AddIcon />
                                                                                                                        </Fab>
                                                                                                                    </Box>
                                                                                                                </Box>
                                                                                                            </Box>

                                                                                                        ))}
                                                                                                </Box>
                                                                                            )}
                                                                                        </FieldArray>
                                                                                        : null




                                                                                    }
                                                                                    <Box className={classes.mainBox}>
                                                                                        <Box lg={2} display='flex' flexDirection='column'>
                                                                                            <Fab
                                                                                                color='secondary'
                                                                                                aria-label='edit'
                                                                                                className={classes.fab}
                                                                                                onClick={() => remove(i)}>
                                                                                                <DeleteIcon />
                                                                                            </Fab>
                                                                                        </Box>
                                                                                    </Box>
                                                                                    <Box className={classes.mainBox}>
                                                                                        <Box lg={2} display='flex' flexDirection='column'>
                                                                                            <Fab
                                                                                                color='primary'
                                                                                                aria-label='add'
                                                                                                className={classes.fab}
                                                                                                onClick={() => push(field)}>
                                                                                                <AddIcon />
                                                                                            </Fab>
                                                                                        </Box>
                                                                                    </Box>
                                                                                </Box>

                                                                            ))}

                                                                    </Box>
                                                                )}
                                                            </FieldArray>
                                                            <Box lg={2} display='flex' flexDirection='rows'>
                                                                <Box className={classes.mainBox}>
                                                                    <Box lg={2} display='flex' flexDirection='column'>
                                                                        <Fab
                                                                            color='secondary'
                                                                            aria-label='edit'
                                                                            className={classes.fab}
                                                                            onClick={() => remove(index)}>
                                                                            <DeleteIcon />
                                                                        </Fab>
                                                                    </Box>
                                                                </Box>
                                                                <Box className={classes.mainBox}>
                                                                    <Box lg={2} display='flex' flexDirection='column'>
                                                                        <Fab
                                                                            color='primary'
                                                                            aria-label='add'
                                                                            className={classes.fab}
                                                                            onClick={() => push(page)}>
                                                                            <AddIcon />
                                                                        </Fab>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>

                                                </Box>
                                            ))}
                                    </Box>

                                )}
                            </FieldArray>
                            <Box
                                pb={6}
                                py={{ xl: 8 }}
                                display='flex'
                                flex={1}
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    className={classes.button}
                                    type='submit'>Submit
                                </Button>
                            </Box>
                        </Form>
                    )}
                />
            </Card>
        </Box>
    );
}
export default FriendList;