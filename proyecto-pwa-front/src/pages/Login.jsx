import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Grid, Box } from '@material-ui/core';
import axios from 'axios';
import useCustomForm from '../helpers/useCustomForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useHistory} from 'react-router-dom'

const schema = yup.object().shape({
    email: yup.string().required('Email es obligatorio'),
    password: yup.string().required('Password es obligatorio'),
});

export const Login = () => {
    const [values, handlerInput] = useCustomForm();
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);
    const history = useHistory()

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const login = async () => {
        try {
            const user = (await axios.post(`http://localhost:4000/api/users/login`, values));
            setResult(user);
            console.log(user)
        } catch (err) {
            setError(true);
        }
    };

    return (
        <Box margin="2vh" padding="3%">
            <Grid Container align="center">
                    <form>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                type="text"
                                aria-describedby="email-helper"
                                onChange={handlerInput}
                                name="email"
                                {...register("email")}></Input>
                            <FormHelperText id="email-helper">Tu email personal</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="pwd">Password</InputLabel>
                            <Input
                                type="text"
                                aria-decribedby="password-helper"
                                onChange={handlerInput}
                                name="password"
                                {...register("password")}></Input>
                            <FormHelperText id="password-helper">Debe tener 6 caracteres</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Box marginTop="2vh">
                        <Grid item md={12} marginBottom="2vh">
                            <Button variant="contained" color="primary" onClick={handleSubmit(login)}>
                                Iniciar Sesión
                            </Button>
                        </Grid>
                    </Box>
                    </form>
            </Grid>
        </Box>
    );
};
