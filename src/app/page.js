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
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
      
            <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.title}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.thumbline}</p>
                      <p className="mt-1 text-sm text-gray-500">{product.category}</p> {/* Tambahan category di sini */}
                    </div>
                    <p className="text-sm font-medium text-gray-900">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

