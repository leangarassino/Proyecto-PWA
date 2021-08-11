import React from 'react'
import { FormControl, InputLabel, Input, FormHelperText, Button, Grid, Box } from '@material-ui/core'

export const LoginUser = () => {
    return (
        <Box margin="2vh" padding="3%">
        <Grid Container align="center">
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
                Iniciar Sesión
            </Button>
            </Grid>
            </Box>
        </Grid>
        </Box>
    )
}
