import React from 'react'
import { useContext } from 'react';
import { Outlet , Navigate} from 'react-router';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = () => {

    const {loggedInUsers}= useContext(AuthContext);

    

    if(!loggedInUsers){
        return <Navigate to={"/"}/>
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectedRoute
