import React, {FC} from 'react';
import {FiX} from "react-icons/fi";
import {Link} from 'react-router-dom';
import useFetch from "../hooks/useFetch";

interface CategoryProps {
    setCatNavMobile: any
}

type Category = {
    id: number
    attributes: {
        title: string
    }
}

const CategoryNavMobile: FC<CategoryProps> = ({setCatNavMobile}) => {

    const {data} = useFetch('/categories')


    return (
        <div className='w-[50vw] h-full bg-primary p-8'>
            <div
                onClick={() => setCatNavMobile(false)}
                className='flex justify-end mb-8 cursor-pointer'>
                <FiX className='text-3xl'/>
            </div>
            <div className='flex flex-col gap-y-8'>
                {(data as unknown as any)?.map((category: Category) => {
                    return <Link
                        className='uppercase font-medium'
                        to={`fotoSite/products/${category.id}`}
                        key={category.id}
                    >
                        {category.attributes.title} Cameras
                    </Link>
                })}
            </div>
        </div>
    );
};

export default CategoryNavMobile;