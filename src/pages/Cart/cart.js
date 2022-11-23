import CartItem from "../../components/Cart/CartItem/CartItem";
import Header from "../../components/shared/Header/Header";
import {useEffect,useState} from 'react'



function Cart() {
    const [CartItems,setCartItems] = useState([])

   useEffect(()=>{
    fetch("cartItem.json")
    .then((res)=>res.json())
        .then((res)=>{
            setCartItems(res)
        });
   },[])


    return(
        <div>
            <Header />
            <div>
                {CartItems.map((carts)=>(
                    <CartItem cart={carts} />
                ))}
            </div>
        </div>
    );
}


export default Cart