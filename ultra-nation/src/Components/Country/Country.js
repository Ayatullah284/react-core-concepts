import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props)

    const name = props.country.name.common;
    const { flag, population, region } = props.country;
    const handleAddCountry = props.handleAddCountry;



    return (
        <div className='country'>
            <h3>{name}</h3>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Flag: {flag}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div >

    );
};

export default Country;