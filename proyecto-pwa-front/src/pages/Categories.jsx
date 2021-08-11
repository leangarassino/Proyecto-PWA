import React, { useEffect, useState } from 'react';
import Card from '../components/cards/Card';
import { Grid, Container, Box, Typography } from '@material-ui/core';
import { GetPosts } from '../helpers/useAxios';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            let allCategories = await GetPosts('http://localhost:4000/api/categories');
            setCategories(allCategories);
            console.log(allCategories);
        };
        getCategories();
    }, []);

    return (
        <Box padding="2%">
            <Container>
                <Box textAlign="center">
                    <Typography variant="h2">Categorías</Typography>
                </Box>
                <Grid container item xs={12} display="flex" justifyContent="space-evenly">
                    {categories.map(allcategories => (
                        <Card
                            key={allcategories.id}
                            name={allcategories.name}
                            description={allcategories.description}
                            image={allcategories.image}
                        />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
