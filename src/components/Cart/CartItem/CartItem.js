import './CartItem.css'

function CartItem(values) {
    return(

    <div className='body'>
      <div className='cart'>
      <div className='cart-heading'>
        <h4>Shopping cart</h4>
      </div>
      <div className='cart-row'>
        <div className='col-md-4 image'>
          <img src={values.cart.image} class="img-fluid rounded-start" alt="..."></img>
        </div>
        <div className='col-md-8 '>
              <div className='right-side'>
                <div className='product-title'>
                      <div> {values.cart.detail}</div>
                      <div className='ms-auto'> &#8377;17000</div>
                </div>
                <div className='in-stock'><p>in stock</p></div>
                <p>Eligible For FREE Shippping</p>
                <div>
                  <input type="checkbox" /> This will be gift
                </div>
                <div className='oty-to-seemore'>
                  <select>
                    <option>Qty: 1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                  <div>Delete</div>
                  <div>Save For Leter</div>
                  <div>See more like this</div>
                </div>
              </div>
        </div>
      </div>
      <div className='cart-Bottom'>
         <h5 className=''>Subtotal (2 items):&#8377;2,798.00</h5> 
      </div>
      </div>
    </div>
    );
}

export default CartItem;