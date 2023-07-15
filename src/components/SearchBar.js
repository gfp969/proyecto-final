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
            .catch(err => {console.log(err)});
    }

    return (
        <Fragment>
            <div>
                <nav>
                    <div className="search">
                        <input type='text' placeholder='search...' onChange={handleChange}></input>
                        <button className='search-btn' onClick={getCelData}>Search</button>
                    </div>
                </nav>
                {celData ? (<Celebrities_list celebrities={celData} />): (<Home />)}
            </div>
        </Fragment>
    )
}

export default SearchBar;