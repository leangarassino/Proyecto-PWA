import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Categories from '../pages/Categories';
import Films from '../pages/Films';
import {Login} from '../pages/Login'
import {Register} from '../pages/Register'

export const RouterApp = () => {
    return (
        <Router>
            <StyledContainer>
                <Header />
            </StyledContainer>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Categories />
                        <Films />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                </Switch>
            </main>
            <StyledContainerFooter>
                <Footer />
            </StyledContainerFooter>
        </Router>
    );
};

const StyledContainer = styled.div`
    width: 100%;
    position: relative;
`;
const StyledContainerFooter = styled.div`
    width: 100%;
`;
