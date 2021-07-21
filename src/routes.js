import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import GerarPDF from './components/GerarPDF';
import MyDocument from './components/MyDocument';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={GerarPDF} />
                <Route path='/pdf' component={MyDocument} />
            </Switch>
        </BrowserRouter>
    );
}