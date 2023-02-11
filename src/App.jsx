import { useState } from 'react'
import ProductsReduce  from './components/ProductsReduce';
import ProductsFilter  from './components/ProductsFilter'; 
import ProductsSort from './components/ProductsSort'; 
import ProductsMap from './components/ProductsMap';

function App() {
  const [componentToShow, setComponentToShow] = useState('Reduce');

  const ProductsFilterHandler = () => {
    setComponentToShow('Filter');
  } 

  const ProductsReduceHandler = () => {
    setComponentToShow('Reduce');
  }  

  const ProductsMapHandler = () => {
    setComponentToShow('Map');
  }

  const ProductsSortHandler = () => {
    setComponentToShow('Sort');
  }

  return (
    <div className="App w-[50%] mx-auto"> 
      <nav className="flex justify-center gap-5">
        <p> Store Page</p>
      <button onClick={ProductsReduceHandler} className="relative px-6 py-3 font-bold text-white rounded-lg group">
          <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
          <span className="relative">Products Reduce</span> 
        </button>  

        <button onClick={ProductsMapHandler} className="relative px-6 py-3 font-bold text-white rounded-lg group">
          <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
          <span className="relative">Products Map</span> 
        </button>  

        <button onClick={ProductsSortHandler} className="relative px-6 py-3 font-bold text-white rounded-lg group">
          <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
          <span className="relative">Products Sort</span> 
        </button> 

        <button onClick={ProductsFilterHandler} className="relative px-6 py-3 font-bold text-white rounded-lg group">
          <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
          <span className="relative">Products Filter </span> 
        </button>
        
       
      </nav> 
      
      <section className='flex justify-center py-5'> 
        {componentToShow === 'Filter' && <ProductsFilter/>} 
        {componentToShow === 'Reduce' && <ProductsReduce/>} 
        {componentToShow === 'Sort' && <ProductsSort/>} 
        {componentToShow === 'Map' && <ProductsMap/>}
      </section>

    </div> //End of App
  )
}

export default App
