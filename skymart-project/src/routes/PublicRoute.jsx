import React from 'react'
import { useContext } from 'react';
import { Outlet , Navigate} from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PublicRoute = () => {
   const {loggedInUsers}= useContext(AuthContext);

    

    if(loggedInUsers){
        return <Navigate to={"/main"}/>
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PublicRoute
