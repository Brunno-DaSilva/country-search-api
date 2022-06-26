import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404 Page not Found</h1>
      <Link to="/">Back to The Home Page</Link>
    </div>
  );
};

export default Error;
