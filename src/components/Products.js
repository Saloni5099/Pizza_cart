import { useState,useEffect } from 'react';
const Products = () => {
  const [products,setProducts] =useState([]);
  useEffect(()=>{

  },[products,])
  return (
    <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8">Products</h1>
        <div className="grid grid-cols-5 my-8 gap-24">
          <div>
            <img src = "/images/pepperoni.png" alt="pizza"/>
            <div className="text-center">
              <h2 className="text-lg font-bold my-8">Pepperoni</h2>
              <span className="bg-gray-400 py-1 rounded-full text-sm px-4">Small</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Rs 500</span>
              <button className="px-6 py-2 rounded-full font-bold mt-4 bg-blue-500 hover:bg-blue-600">Add</button>
            </div>
          </div>
          <div>
            <img className="py-1" style ={{height:200}} src = "/images/veronese.png" alt="pizza"/>
            <div className="text-center">
              <h2 className="text-lg font-bold my-8">Veronese</h2>
              <span className="bg-gray-400 py-1 rounded-full text-sm px-4">Small</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Rs 500</span>
              <button className="px-6 py-2 rounded-full font-bold mt-4 bg-blue-500 hover:bg-blue-600">Add</button>
            </div>
          </div>
          <div>
            <img className="py-1"style={{height:200}} src = "/images/chicken_pizza.png" alt="pizza"/>
            <div className="text-center">
              <h2 className="text-lg font-bold my-8">Chicken</h2>
              <span className="bg-gray-400 py-1 rounded-full text-sm px-4">Small</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Rs 500</span>
              <button className="px-6 py-2 rounded-full font-bold mt-4 bg-blue-500 hover:bg-blue-600">Add</button>
            </div>
          </div>
          <div>
            <img className="py-1"style={{height:200}}src = "/images/veg_pizza.png" alt="pizza"/>
            <div className="text-center">
              <h2 className="text-lg font-bold my-8">Veggies</h2>
              <span className="bg-gray-400 py-1 rounded-full text-sm px-4">Small</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Rs 500</span>
              <button className="px-6 py-2 rounded-full font-bold mt-4 bg-blue-500 hover:bg-blue-600">Add</button>
            </div>
          </div>
          <div>
            <img className="py-1"style={{height:200}}src = "/images/four_cheese_pizza.png" alt="pizza"/>
            <div className="text-center">
              <h2 className="text-lg font-bold my-8">FourCheese</h2>
              <span className="bg-gray-400 py-1 rounded-full text-sm px-4">Small</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Rs 500</span>
              <button className="px-6 py-2 rounded-full font-bold mt-4 bg-blue-500 hover:bg-blue-600">Add</button>
            </div>
          </div>
          <div>
            <img className="py-9"src = "/images/Bar_style.png" alt="pizza"/>
            <div className="text-center">
              <h2 className="text-lg font-bold my-8">BarStyle</h2>
              <span className="bg-gray-400 py-1 rounded-full text-sm px-4">Small</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Rs 500</span>
              <button className="px-6 py-2 rounded-full font-bold mt-4 bg-blue-500 hover:bg-blue-600">Add</button>
            </div>
          </div>
          <div>
            <img className="height-45"src = "/images/caramel_pizza.png" alt="pizza"/>
            <div className="text-center">
              <h2 className="text-lg font-bold my-8">Caramel</h2>
              <span className="bg-gray-400 py-1 rounded-full text-sm px-4">Small</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Rs 500</span>
              <button className="px-6 py-2 rounded-full font-bold mt-4 bg-blue-500 hover:bg-blue-600">Add</button>
            </div>
          </div>
          <div>
            <img className="py-9"src = "/images/carbonara.png" alt="pizza"/>
            <div className="text-center">
              <h2 className="text-lg font-bold my-8">Carbonara</h2>
              <span className="bg-gray-400 py-1 rounded-full text-sm px-4">Small</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Rs 500</span>
              <button className="px-6 py-2 rounded-full font-bold mt-4 bg-blue-500 hover:bg-blue-600">Add</button>
            </div>
          </div>
          
          
          <div>
            <img className ="py-2.5" src = "/images/mexican.png" alt="pizza"/>
            <div className="text-center">
              <h2 className="text-lg font-bold my-8">Mexican</h2>
              <span className="bg-gray-400 py-1 rounded-full text-sm px-4">Small</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Rs 500</span>
              <button className="px-6 py-2 rounded-full font-bold mt-4 bg-blue-500 hover:bg-blue-600">Add</button>
            </div>
          </div>
          <div>
            <img className=" py-7 " src = "/images/pineapple.png" alt="pizza"/>
            <div className="text-center">
              <h2 className="text-lg font-bold my-8">Pineapple</h2>
              <span className="bg-gray-400 py-1 rounded-full text-sm px-4">Small</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Rs 500</span>
              <button className="px-6 py-2 rounded-full font-bold mt-4 bg-blue-500 hover:bg-blue-600">Add</button>
            </div>
          </div>
          
          
        </div>
    </div>
  )
}
export default Products;
