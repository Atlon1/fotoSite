import React, {useState} from 'react';
import {FiSearch} from 'react-icons/fi'
import {useNavigate} from "react-router-dom"

const SearchForm = () => {
    const navigate = useNavigate()
    const [searchItem, setSearchItem] =useState('')

    const handleSerachInput = (e : any) => {

    }

    return (
        <form className='w-full relative'>
            <input
                className='input'
                type='text'
                placeholder='Search for a product..'/>
            <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'>
                <FiSearch className='text-xl'/>
            </button>
        </form>

    );
};

export default SearchForm;