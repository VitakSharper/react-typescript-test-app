import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/navbar.component";
import TodosPage from "./pages/TodosPage.component";
import AboutPage from "./pages/AboutPage.component";


const App: React.FC = () => {


    return (
        <BrowserRouter>
            <Navbar/>
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={TodosPage}/>
                    <Route path='/about' component={AboutPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default App;
