import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Oops! Page not found</p>
        <Link to="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
