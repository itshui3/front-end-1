import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest} 
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    //TODO: confirm this path when login is finished.
                    return <Redirect to='/login' />
                }
            }} 
        />
    );
}
