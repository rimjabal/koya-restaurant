import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * A wrapper for routes that should only be accessible to authenticated users.
 * If the user is not authenticated, they will be redirected to the login page.
 */
const ProtectedRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Check if the user is authenticated
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    setIsAuthenticated(isAdminLoggedIn === 'true');
  }, []);

  // Show nothing while we're checking authentication
  if (isAuthenticated === null) {
    return null;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // Render the protected component if authenticated
  return element;
};

export default ProtectedRoute;
