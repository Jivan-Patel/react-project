import { useEffect, useState } from 'react'
import ProdCard from './ProdCard';

function FakeStore() {

    const [products, setProduct] = useState([]);
    const [filProducts, setFilProduct] = useState([]);
    const [search, updateSearch] = useState("");
    
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
        .then((res)=> res.json())
        .then((data)=>{
            setProduct(data)
        })
        .catch((error) => {
            console.log("Somethigs wents wrong");
            console.log(error);            
        })
       
    }, []);

    useEffect(()=>{
        
        if(search.trim() == "" ) {
            setFilProduct(products);
            return;
        }
        
        let filData = products.filter((prod)=> {
            if(prod.title.includes(search)) {
                return prod;
            }
        })
        console.log(filData);
        
        
        setFilProduct(filData)
    })

  return (
    <>        
        <div className="searchBox">
        <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => {
                updateSearch(e.target.value)
            }}
        />
        </div>

        

        <div className='prodContainer'>
        {filProducts.map((details, i) => (
            <ProdCard product ={details} key={i}/>
        ))}
        </div>
    </>
  )
}

export default FakeStore;
