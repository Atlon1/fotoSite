import React from 'react';

import useFetch from "../hooks/useFetch";
import {Link} from 'react-router-dom'

type Category = {
    id: number
    attributes: {
        title: string
    }
}


const CategoryNav: React.FC = () => {

    const {data} = useFetch('/categories')


    return (
        <aside className='hidden xl:flex'>
            <div className='bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>
                <div
                    className='bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center'>Browse
                    Categories
                </div>
                <div className='flex flex-col gap-y-6 justify-center'>
                    {(data as unknown as any)?.map((category: Category) => (
                        <Link
                            className='cursor-pointer uppercase'
                            to={`/products/${category.id}`}
                            key={category.id}>
                            {category.attributes.title}
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default CategoryNav;