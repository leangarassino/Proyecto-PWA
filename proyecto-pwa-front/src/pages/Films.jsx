import React, { useState, useEffect } from 'react';
import Card from '../components/cards/Card';
import { Grid, Container, Box, Typography } from '@material-ui/core';
import { GetPosts } from '../helpers/useAxios';

export default function Films() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const getFilms = async () => {
            let allFilms = await GetPosts('http://localhost:4000/api/films');
            setFilms(allFilms);
            console.log(allFilms);
        };
        getFilms();
    }, []);

    return (
        <Box marginBottom="2vh" padding="2%">
            <Container>
                <Box textAlign="center">
                    <Typography variant="h2">Films</Typography>
                </Box>
                <Grid container item xs={12} display="flex" justifyContent="space-evenly">
                    {films.map(allFilms => (
                        <Card key={allFilms.id} name={allFilms.name} sinopsis={allFilms.sinopsis} image={allFilms.image} />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
