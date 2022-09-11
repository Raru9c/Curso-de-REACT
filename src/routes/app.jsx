import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx';


const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Layout>
                <Route exact path="/login" component= {Login}/>
                <Route exact path="/recovery-password" component= {RecoveryPassword}/>
                <Route exact path="/" component= {Home}/>
                <Route component= {NotFound}/>
            </Layout>
        </Switch>
        </BrowserRouter>
         
    );
}

export default App;