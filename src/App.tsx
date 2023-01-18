import  { useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';
import Header from './componnents/header';
import Category from './componnents/category';
import Products from './componnents/Products';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(products)

  interface Item {
    id: string;
    image: string;
    title: string;
    price: string;
    rating: Rate;
    rate: string;
    quantity: number;
    category: string;
   
  }
  interface Rate{
    rate:string
  }
  async function doGetRequest() {
    setIsLoading(true);
    let res = await axios.get(`${process.env.REACT_APP_DOMAIN}/products`);

    let data = res.data;
    setProducts(data);
    setFilteredProducts(data)
  }
  const onChangeProduct = (text:string) => {
    if (text) {
      const filteredProduct = products.filter((p:Item) =>
        p.category.includes(text)
     
      );
      setFilteredProducts(filteredProduct)
    } else {
      setFilteredProducts(products)
    }
   
  }

  useEffect(
    () => {
      doGetRequest();
      setIsLoading(false);
      
    },
    []
  );
  return (
    <div>

      <Header/>
      <Category onChangeProduct={onChangeProduct} />
      <Products  filteredProducts={filteredProducts} isLoading={isLoading} />
    </div>
  );
}

export default App;
