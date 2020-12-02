import React from 'react';
import PageRoutes from '../../Pages/routes';
import AuthenticationRoutes from '../../Authentication/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes/>
      <AuthenticationRoutes/>
    </>
  );
}
 
export default Routes;