import React from 'react';
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem("currentUser") 
            ? (JSON.parse(localStorage.getItem("currentUser")).userId===props.match.params.userId) 
                ? <Component {...props} />
                    :(JSON.parse(localStorage.getItem("currentUser")).role==="USER") 
                    ? <Redirect to='/'/>
                        : <Redirect to={`/admin/home/${JSON.parse(localStorage.getItem("currentUser")).userId}`}/>
            : <Redirect to='/' />
    )} />
)

export default GuardedRoute;