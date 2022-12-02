import './CartItem.css'
import { useEffect, useState } from 'react';

function CartItem(props) {
  let [quantity,setQuantity] = useState(1)
  let [totalPrice,setTotalPrice] = useState(props.cart.price)

  useEffect(()=>{
   if(quantity > 0) {
    setTotalPrice(props.cart.price)
    console.log(props.cart.price)
   }
  },[props])



  function handleQuantityChange(newQuantity) {
      if(newQuantity > 0) {
        totalPrice=Number(props.cart.price)*newQuantity
        setQuantity(newQuantity)
        setTotalPrice(totalPrice)
        
      } else {
        totalPrice=0;
        setTotalPrice(totalPrice);
        setQuantity(0);
      }
    props.updatePrice(props.cart,newQuantity)
  }


    return(
    <div className='body'>
      <div className='cart'>
      <div className='cart-heading'>
        <h4>Shopping cart</h4>
      </div>
      <div className='cart-row'>
        <div className='col-md-4 image'>
          <img src={props.cart.image} className="img-fluid rounded-start" alt="..."></img>
        </div>
        <div className='col-md-8 '>
              <div className='right-side'>
                <div className='product-title'>
                      <div className='detail'> {props.cart.title}</div>
                      <div className='ms-auto'>
                      <button className='btn btn-danger'onClick={() => handleQuantityChange(quantity===1?0:quantity-1)}>-</button>
                      <button className='btn btn-primary'>{quantity}</button>
                      <button className='btn btn-success' onClick={()=>handleQuantityChange(quantity+1)}>+</button>
                      </div>
                      <div className='ms-auto'> &#8377;{totalPrice}</div>
                </div>
                <div className='in-stock'><p>in stock</p></div>
                <p>Eligible For FREE Shippping</p>
                <div>
                  <input type="checkbox" /> This will be gift
                </div>
                <div className='oty-to-seemore'>
                  {/* <select>
                    <option>Qty:1</option>
                    <option>Qty:2</option>
                    <option>Qty:3</option>
                    <option>Qty:4</option>
                    <option>Qty:5</option>
                    <option>Qty:6</option>
                  </select> */}
                  <button onClick={()=>{props.delete(props.index)}}>Delete</button>
                  <div>Save For Leter</div>
                  <div>See more like this</div>
                </div>
              </div>
        </div>
      </div>
      <div className='cart-Bottom'>
         <h5 className='sub-total'>Subtotal = {totalPrice}&#8377;</h5> 
      </div>
      </div>
    </div>
    );
}

export default CartItem;