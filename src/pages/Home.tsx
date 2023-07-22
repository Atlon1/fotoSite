import React from 'react';

// @ts-ignore
import useFetch from '../hooks/useFetch'
import ProductSlider from "../components/ProductSlider";

const Home = () => {
    const  { data } = useFetch('/products?populate=*&filters[isNew]=true')

    return (
        <div className='mb-16'>
            <div className='container mx-auto'>
                <h2 className='h2 mb-6 text-center xl:text-left'>Lastest Products</h2>
            </div>
            <ProductSlider data = {data}/>
        </div>
    );
};

export default Home;