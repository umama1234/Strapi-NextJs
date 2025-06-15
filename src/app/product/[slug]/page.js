"use client"

import React, { useState} from 'react';
import { useEffect } from 'react';
import DetailCard from '../../../components/DetailCard';

export default function DetailPage({ params }) {



    const { slug } = React.use(params);    
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data.data[0]); // Access the first product from the response
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [slug]);



    return(
        <>
        <DetailCard 
        key={product.id}
        product={product}
        />
        </>
    )
}