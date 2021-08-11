import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Link, Typography, Icon } from '@material-ui/core';
import { Link as LinkFooter } from 'react-router-dom';
import styled from 'styled-components';
import { LinkedIn, Instagram, Twitter, Facebook } from '@material-ui/icons';

const StyledImgIcon = styled.img`
    width: 3vh;
    margin-right: 3vh;
`;
const StyledLink = styled(LinkFooter)`
    color: inherit;
    text-decoration: inherit;
`;

const useStyles = makeStyles({
    text: {
        textAlign: 'center',
        color: '#FFFFFF',
        padding: '3%',
    },
    marginText: {
        marginBottom: '3vh',
    },
    links: {
        marginBottom: '1vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
    },
    links2: {
        marginBottom: '3vh',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    marginright: {
        marginRight: '3vh',
    },
});

export default function Footer() {
    const classes = useStyles();
    return (
        <StyledFooter>
            <Box className={classes.text}>
                <Container>
                    <Grid container item xs={12}>
                        <Grid item xs={12}>
                            <Box textAlign="center" className={classes.marginText}>
                                <Typography variant="h5"> Sigamos conectados </Typography>
                            </Box>
                            <Grid item xs={12} className={classes.marginText}>
                                <Box className={classes.links2}>
                                    <Icon className={classes.marginright}>
                                        <Facebook />
                                    </Icon>
                                    <Link to="#" color="inherit">
                                        <StyledLink
                                            to={{
                                                pathname: 'https://www.facebook.com',
                                            }}
                                            target="_blank">
                                            Facebook
                                        </StyledLink>
                                    </Link>
                                </Box>
                                <Box className={classes.links2}>
                                    <Icon className={classes.marginright}>
                                        <LinkedIn />
                                    </Icon>
                                    <Link to="#" color="inherit">
                                        <StyledLink
                                            to={{
                                                pathname: 'https://www.linkedin.com',
                                            }}
                                            target="_blank">
                                            LinkedIn
                                        </StyledLink>
                                    </Link>
                                </Box>
                                {/* <IconButton size="small"><LinkedIn className={classes.icon} /></IconButton>
                                <IconButton size="small"></IconButton>
                                <IconButton size="small"><Twitter className={classes.icon}/></IconButton>  */}
                                <Box className={classes.links2}>
                                    <Icon className={classes.marginright}>
                                        <Instagram />
                                    </Icon>
                                    <Link color="inherit">
                                        <StyledLink
                                            to={{
                                                pathname: 'https://www.instagram.com',
                                            }}
                                            target="_blank">
                                            Instagram
                                        </StyledLink>
                                    </Link>
                                </Box>
                                <Box className={classes.links2}>
                                    <Icon className={classes.marginright}>
                                        <Twitter />
                                    </Icon>
                                    <Link color="inherit">
                                        <StyledLink
                                            to={{
                                                pathname: 'https://www.twitter.com',
                                            }}
                                            target="_blank"
                                        >
                                            Twitter
                                        </StyledLink>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Grid item xs={12}>
                    <Box marginTop="5vh">
                        <Typography variant="h6">Filmoteca © 2021</Typography>
                    </Box>
                </Grid>
            </Box>
        </StyledFooter>
    );
}
const StyledFooter = styled.div`
    background-color: #c61919;
`;
