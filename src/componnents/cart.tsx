import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
interface Item {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: Rate;
  rate: string;
  totalQuantity: number;
}
interface Rate{
  rate:string
}
const CartItem:React.FC<Item> = props => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        image: props.image,
        title: props.title,
        price: props.price,
        rating: props.rating,
        rate: props.rate,
        quantity:props.totalQuantity
      })
    );
  
  };
  return (
    <div className="border-solid shadow-md xl:w-48 lg:w-48 md:w-48  sm:w-32 p-8 m-8 h-100">
      <img
        className="h-48 w-full object-cover md:h-60 md:w-48 "
        src={props.image}
      />
      <p className="text-sm text-center font-bold m-2 ">
        {props.title}
      </p>
      <p className="font-bold text-center text-red-600/100 m-2">
        {props.price} $
      </p>
      <p className="font-bold text-center text-green-600/100 m-2">
        {props.rating.rate} *
      </p>
      <div className="w-100 m-8">
        {" "}<button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-100 "
          onClick={addToCartHandler}
        >
          BUY
        </button>
      </div>
    </div>
  );
};

export default CartItem;
