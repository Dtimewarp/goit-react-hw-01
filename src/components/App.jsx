import { useState } from 'react'
import './App.css'
import { Product } from './Product'


export function App() {
  return (
    <div>
      <h1>Products</h1>

      <Product />
      <Product />
      <Product />
    </div>
  );
}