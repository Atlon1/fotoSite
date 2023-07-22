import React from 'react';

interface ProductSliderProps {
    data : any
}

const ProductSlider: React.FC<ProductSliderProps> = ({data}) => {
    console.log(data)
    return (
        <div>
            ProductSlider
        </div>
    );
};

export default ProductSlider;