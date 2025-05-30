import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h3>Oops!!!</h3>
            <p>{error.statusText || error.message}</p>
            {
                error.status == 404 && <div>
                    <p>page not found please go back home</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;