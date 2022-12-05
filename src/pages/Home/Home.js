import {useEffect, useState} from "react"
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";
import ProductCard from "../../components/Home/ProductCard/ProductCard";

function Home(){







    const [products, setProducts]= useState([]);
    const[cartItem,setCartItem] = useState(0)

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((res)=> {
            res.forEach(o=>{
                o.qty=1
            })
            setProducts(res)
            
            // console.log(products.length);
        });
        
    },[])


    function notifyCartUpdate(){
        console.log("home is called")
        const items = localStorage.getItem("cart");
        if(items){
           const cart = JSON.parse(items);
           setCartItem(cart.length);
        }
    }

    return(
        <div>
            <Header cartItem={cartItem}/>
            <div>
               {/* <h2>{products.length}</h2> */}
               <div className="row">
               {products.map((product,i)=>(
                  <div className="col-3">
                      <ProductCard
                       item ={product} 
                       index={i}
                       notify={notifyCartUpdate}
                       />
                  </div>
               ))}
               </div>
            </div>
            <Footer />
        </div>
    
    );
}

export default Home;