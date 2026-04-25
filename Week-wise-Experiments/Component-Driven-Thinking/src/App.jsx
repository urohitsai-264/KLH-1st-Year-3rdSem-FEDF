import { useState } from 'react'
import ProductCard from './components/ProductCard'
import './App.css'

function App() {
 
  return (
    <div>
      <h1>My Store</h1>
      <ProductCard name="Motorola" price={27500} image="Phone.png"/>
      <ProductCard name="MSI" price={75000} image="Laptop.png"/>
      </div>
  );
}
export default App
      