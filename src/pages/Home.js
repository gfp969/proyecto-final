import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Celebrities_list from '../components/Celebrities_list';

const Home = () => {

    const { user } = useAuth0();
    const [celebrity, setCelebrity] = useState([]);
    const key = process.env.REACT_APP_KEY;
    const headers = {
        'X-Api-Key': key
    }

    const nombre = 'Michael Jordan';
    const url = process.env.REACT_APP_URL_APP +'max_net_worth=30';

    useEffect(() => {
        axios.get(url, { headers })
            .then(res => {
                console.log(res.data);
                setCelebrity(res.data);
                console.log(celebrity);
            })
            .catch(error => { console.log(error) })
    }, [])

    return (
        <div>
            <h3>{user.name}</h3>
            <Celebrities_list celebrities={celebrity} />
        </div>
    )

}

export default Home;