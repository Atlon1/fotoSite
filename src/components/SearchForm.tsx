import React, {useEffect, useState} from 'react';
import {FiSearch} from 'react-icons/fi'
import {useNavigate} from "react-router-dom"

const SearchForm = () => {
    const navigate = useNavigate()
    const [searchItem, setSearchItem] =useState('')
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(()=> {
        const timeout = setTimeout(()=>{
            setIsAnimating(false)
        },1000)
        return ()=> clearTimeout(timeout)
    })

    const handleSerachInput = (e : any) => {
        setSearchItem(e.target.value)
    }

    const handleSubmit = (e: any)=>{
        e.preventDefault()
        if (searchItem.length > 0){
            navigate(`fotoSite/search?query=${searchItem}`)
            // @ts-ignore
            document.querySelector('input').value = ''
            setSearchItem('')
        } else {
            setIsAnimating(true)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`${isAnimating ? 'animate-shake' : 'animate-none'} w-full relative`}>
            <input
                onChange={handleSerachInput}
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