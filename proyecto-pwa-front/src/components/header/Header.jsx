import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button, Box} from '@material-ui/core';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: '#c61919',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    background: {
        backgroundColor: '#c61919',
    },
}));


export default function ButtonAppBar() {
    const classes = useStyles();
    const history = useHistory()
    const handleLogin = () => {
        history.push('/login')
    }
    const handleRegister = () => {
        history.push('/register')
    }
    const handleHome = () => {
        history.push('/')
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.background}>
                <Toolbar >
                    <Box className={classes.title}>
                    <Button onClick={handleHome} color="inherit" >
                    <Typography variant="h5">
                     Filmoteca
                    </Typography>
                    </Button>
                    </Box>
                    <Button onClick={handleLogin} color="inherit">Login</Button>
                    <Button onClick={handleRegister} color="inherit">Registrarse</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
