import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {

    const { user } = useAuth0();
    const [celebrity, setCelebrity] = useState([]);
    const key = process.env.REACT_APP_KEY;
    const headers = {
        'X-Api-Key': key
    }

    const nombre = 'Michael Jordan';
    const url = process.env.REACT_APP_URL_APP + nombre;

    useEffect(() => {
        axios.get(url, { headers })
            .then(res => {
                console.log(res.data)
                setCelebrity(res.data)
                console.log(celebrity)
            })
            .catch(error => { console.log(error) })
    }, [])

    return (
        <div>
            <div>
                <h2> {user.name} </h2>
            </div>
            <div>
                {celebrity.map(cel => {
                    return (
                        <Fragment>
                            <h4>{cel.name}</h4>
                            <h4>{cel.age}</h4>
                            {cel.occupation.map(prof => {
                                return (
                                    <p>{prof}</p>
                                )
                            })}
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )

}

export default Home;