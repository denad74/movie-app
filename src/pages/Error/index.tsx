import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img from '../../assets/images/not-found.svg';
import { RouteError } from './interfaces';

const Error = () => {
  const error = useRouteError() as RouteError;
  if (error.status === 404) {
    return (
      <div className="main">
        <div>
          <img src={img} alt="not found" />
          <h3>Page Not found!</h3>
          <p>We can not seem to find the page you are looking for</p>
          <Link className="link" to="/">
            Back To Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <h3>Something went wrong!</h3>
    </div>
  );
};

export default Error;
