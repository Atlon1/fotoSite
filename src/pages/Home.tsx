import React from 'react';

// @ts-ignore
import useFetch from '../hooks/useFetch'

const Home = () => {
    const  { data } = useFetch('/products?populate=*')

    console.log(data)
    return (
        <div>
            Home
        </div>
    );
};

export default Home;