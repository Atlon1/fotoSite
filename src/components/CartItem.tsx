import React, {FC} from 'react';
import { Link } from 'react-router-dom'

interface Item{
    item: any
}

const CartItem: FC<Item> = ({item}) => {
    return (
        <div className='flex'>
            <Link to={''}>
                <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}/>
            </Link>
        </div>
    );
};

export default CartItem;