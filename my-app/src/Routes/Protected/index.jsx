import React from "react";

const ProtectedRoute = ({ children }) => {
  console.log(children);
  return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
