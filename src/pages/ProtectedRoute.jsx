import React, { useEffect } from "react";
import useAuth from "../hooks/use-Auth";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  /*
  useEffect is execute after component is mount, so before check isAuthenticated it will try to
   render children in a split second then it will try to navigate. but when it will try to render childer 
   it will create bug 
  */
  //   return children;
  return <>{isAuthenticated ? children : null}</>;
}

export default ProtectedRoute;
