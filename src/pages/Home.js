import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

const Home = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading){
        return <div>Cargando...</div>
    }
    
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2> {user.name} </h2>
                <p>Correo electronico: {user.email} </p>
            </div>
        )
    )
}

export default Home