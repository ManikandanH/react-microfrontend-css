import React, { Fragment } from 'react'
import { Header } from '../Header'
import { IntegrateComponent } from '../IntegrateComponent'
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <IntegrateComponent />
        </BrowserRouter>
    )
}