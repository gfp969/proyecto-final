import React, { Fragment, useState } from 'react'
import Home from '../pages/Home'
import axios from 'axios';
import Celebrities_list from './Celebrities_list';

const SearchBar = () => {

    const [celData, setCelData] = useState();
    const [celebrity, setCelebrity] = useState();

    function handleChange(e) {
        e.preventDefault();
        setCelebrity(e.target.value);
    }

    function getCelData() {
        const key = process.env.REACT_APP_KEY;
        const headers = { 'X-Api-Key': key }
        const url = `${process.env.REACT_APP_URL_NAME}=${celebrity}`;
        axios.get(url, { headers })
            .then(res => {
                setCelData(res.data);
            })
            .catch(err => { console.log(err) });
    }

    return (

        <div>
            <div class="input-group">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={handleChange}></input>
                <button type="button" class="btn btn-outline-primary" onClick={getCelData}>Search</button>
            </div>
            {celData ? (<Celebrities_list celebrities={celData} />) : (<Home />)}
        </div>

    )
}

export default SearchBar;