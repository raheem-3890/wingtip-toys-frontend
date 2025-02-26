import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <div className="flex align-items-center justify-content-center max-h-screen ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg mb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="p-button p-component p-button-rounded p-button-outlined"
          onClick={(e) => {
            e.preventDefault();
            history.push("/");
          }}
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
