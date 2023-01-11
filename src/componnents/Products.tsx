
import _, { range } from "lodash";
import React, {  useState } from "react";
import { paginate } from "../utils/paginate";
import CartItem from "./cart";
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
const Products:React.FC<{isLoading:boolean,filteredProducts:Item[]}> = (props) => {
 
  const [currentPage,setCurrentPage]=useState(1);
  const [perPage,]=useState(5);

  const totalProducts = props.filteredProducts.length;

  const pageCount = Math.ceil(totalProducts / perPage);
 
  const pages = range(1, pageCount + 1);
  let productsPage = paginate(props.filteredProducts, currentPage, perPage);

  const onChangePage = (page:number) => {

      setCurrentPage(page);

    
  };

  if (props.isLoading) {
    return (
      <section className="flex justify-center w-100">
        <p>LOADING...</p>
      </section>
    );
  }
  const productsList = productsPage.map(product =>
    <CartItem
      key={product.id}
      id={product.id}
      title={product.title}
     rate={product.rating.rate}
      price={product.price}
      image={product.image}
      rating={product.rating}
      totalQuantity={1}
    />
  );
  return (
    <div>
      <div className="flex flex-wrap  align-center justify-center  p-8">
       {productsList}
      </div>
      <div className="flex  align-center justify-center ">
        <ul className="flex  align-center justify-center  p-2">
          {pages.map((p:number,index:number) =>
            <li className="p-2 cursor-pointer" key={index}>
              <a onClick={() => onChangePage(p)}>
                {p}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Products;
