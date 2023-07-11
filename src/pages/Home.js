import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const key = process.env.REACT_APP_KEY;
    const headers = {
        'X-Api-Key': key
    }

    const nombre = 'Michael Jordan';
    const url = process.env.REACT_APP_URL_APP + nombre;

    useEffect(() => {
        axios.get(url, { headers })
            .then(res => { console.log(res.data) })
            .catch(error => { console.log(error) })
    }, [])

    if (isLoading) {
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

export default Home;