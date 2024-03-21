'use client'
import React, { useState, useEffect } from 'react';
import Card from './component/Card';
import Image from 'next/image';
import { Container } from 'postcss';

const Home = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
        try {
          const response = await fetch('https://dummyjson.com/products');
          const data = await response.json();
          setProducts(data.products); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
        <div className="grid grid-cols-5 gap-5 h-32"> 
       
        {products.map(product => (
          <div key={product.id}>
            
            <img src={product.thumbnail} width={300} height={300} /> 
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        ))}
        <Card/>
      </div>
    );
  };
  
export default Home;

// async function getProducts() {
//     const response = await fetch('https://dummyjson.com/products')
//     const data = await response.json()
//     return data
// }


// export default async function Home() {
//     const products = await getProducts()
//     console.log(products)
//     return (
//        <CardList/>
//     )
// }

