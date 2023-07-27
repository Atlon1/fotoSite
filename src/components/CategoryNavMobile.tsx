import React, {FC} from 'react';

import {FiX} from "react-icons/fi"

interface CategoryProps {
    setCatNavMobile: any
}

const CategoryNavMobile : FC<CategoryProps> = ({setCatNavMobile}) => {
    return (
        <div className='w-full h-full bg-primary p-8'>
            <div
                onClick={()=> setCatNavMobile(false)}
                className='flex justify-end mb-8 cursor-pointer'>
                <FiX className='text-3xl'/>
            </div>
            CategoryNavMobile
        </div>
    );
};

export default CategoryNavMobile;