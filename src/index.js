import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/login';
import Home from './components/home';

import ProtectedRoute from './components/protectedRoute';

import "./style/style.css";


function Main() {
    return (
      <BrowserRouter>
                <Switch>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <ProtectedRoute exact path="/home" component={Home} />
                        <Route path="*" component={() => "404 Page Not Found"} />
                    </Switch>
                </Switch>
            </BrowserRouter>
    )
  }

ReactDOM.render(<Main />,document.getElementById('root'));
