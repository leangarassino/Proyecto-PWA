import React from 'react'
import { Box, Grid, Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

export const Register = () => {
    return (
        <Box margin="2vh" padding="3%">
        <Grid Container align="center">
            <Grid item md={12}>
            <FormControl>
                <InputLabel htmlFor="name">Nombre</InputLabel>
                <Input id="name" type="name" aria-describedby="name-helper"></Input>
                <FormHelperText id="name-helper">Ingresa tu nombre</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item md={12}>
            <FormControl>
                <InputLabel htmlFor="lastName">Apellido</InputLabel>
                <Input id="lastName" type="lastName" aria-decribedby="lastName-helper"></Input>
                <FormHelperText id="lastName-helper">Ingresa tu apellido</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item md={12}>
            <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" type="email" aria-describedby="email-helper"></Input>
                <FormHelperText id="email-helper">Tu email personal</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item md={12}>
            <FormControl>
                <InputLabel htmlFor="pwd">Password</InputLabel>
                <Input id="pwd" type="password" aria-decribedby="password-helper"></Input>
                <FormHelperText id="password-helper">Debe tener 6 caracteres</FormHelperText>
            </FormControl>
            </Grid>
            <Box marginTop="2vh">
            <Grid item md={12} marginBottom="2vh">
            <Button variant="contained" color="primary">
                Registrarse
            </Button>
            </Grid>
            </Box>
        </Grid>
        </Box>
    )
}
