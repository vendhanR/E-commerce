import {useEffect, useState} from "react"
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";
import ProductCard from "../../components/Home/ProductCard/ProductCard";

function Home(){
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((res)=> {
            setProducts(res)
            
            console.log(products.length);
        });
        
    },[])

    return(
        <div>
            <Header />
            <div>
               {/* <h2>{products.length}</h2> */}
               <div className="row">
               {products.map((product,i)=>(
                  <div className="col-3">
                      <ProductCard item ={product} index={i}/>
                  </div>
               ))}
               </div>
            </div>
            <Footer />
        </div>
    
    );
}

export default Home;