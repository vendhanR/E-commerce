import CartItem from "../../components/Cart/CartItem/CartItem";
import Header from "../../components/shared/Header/Header";
import {useEffect,useState} from 'react'



function Cart() {
    const [CartItems,setCartItems] = useState([])
    let [totalPrice, setTotalPrice] = useState(0) 

   useEffect(()=>{
    fetch("cartItem.json")
    .then((res)=>res.json())
        .then((res)=>{
            setCartItems(res)
            updateTotalPrice(res)
        });
   },[])
   
   function updatePrice(item,newQuantity) {
       console.log(newQuantity);
       let items = CartItems
       let cartItemIndex = items.findIndex((i) => i.name === item.name)
       items[cartItemIndex].qty = newQuantity
       console.log(items)
       setCartItems(items)
       updateTotalPrice(items)
   }

   function updateTotalPrice(res) {
       let sum = 0
       for(let i=0;i<res.length; i++) {
           sum = sum + Number(res[i].price)*Number(res[i].qty)
       }
       console.log(sum)
       setTotalPrice(Math.ceil(sum))
   }

    return(
        <div>
            <Header />
            <h4 className="flex-end">Total Price:{totalPrice}</h4>
            <div>
                {CartItems.map((carts,index)=>(
                    <CartItem 
                    updatePrice={updatePrice}
                    cart={carts} 
                    key={index}
                    
                    />
                ))}
            </div>
        </div>
    );
}


export default Cart