import React from 'react'
import { useGetProductsQuery,useGetsingleProductQuery,useGetdeletedProductMutation ,useCreateProductMutation, useUpdateProductMutation} from './services/product'
import { useState } from 'react';

const App = () => {
  // const res = useGetProductsQuery();
  // const {data, isLoading}= useGetProductsQuery();
  // const[deleteProduct ,responseInfo]= useGetdeletedProductMutation();
  // const[createProduct, responseInfo]= useCreateProductMutation();
const[updateProduct, responseInfo]= useUpdateProductMutation();
 console.log(responseInfo);
 const updatepost ={
  id:1,
  title:"this is my updated title",
  body:"this is updated  body",
  userId:1,
  
   }

//  const newpost ={
// title:"this is new title",
// body:"this is new body",
// userId:1,

//  }
  const [input, setinput] = useState("")
  const{data:singleProduct,isLoading}= useGetsingleProductQuery(input);
  console.log("Data",singleProduct);
  
  if(isLoading){
    return <h1> wait for loading...</h1>
  }
 
  return (
    <>
    <h3> search products:</h3> 
      <input type="text"  onChange={(e)=>setinput(e.target.value)} />
    <h1>Here is the list of products:</h1>
    <div style={{marginLeft:"100px"}}>
   {singleProduct && singleProduct.products.map((item)=>{
    return <li><h2>{item.title}</h2>
     <img src={item.images[3]} alt="product images" style={{height:"400px", width:"400px", border:"2px solid black"} }/>
   <h3> Rs: {item.price}</h3>
  
   </li>
      
   })} 
   
 
    
  
   
   </div>


   <h1>Here is the list of products:</h1>
   {/* <button onClick={()=>{deleteProduct(2)}}>delete product</button> */}
   {/* <button onClick={()=>{createProduct(newpost)}}>create product</button> */}
   {/* <button onClick={()=>{updateProduct(updatepost)}}>update product</button> */}
  {/* //   <div style={{marginLeft:"100px"}}>
  //  {data && data.products.map((item)=>{ */}
  {/* //   return <li><h2>{item.title}</h2>
  //    <img src={item.images[3]} alt="product images" style={{height:"400px", width:"400px", border:"2px solid black"} }/>
  //  <h3> Rs: {item.price}</h3>
  
  //  </li> */}
      
  {/* //  })}   */}
   
 
    
  
   
  {/* //  </div> */}
    
    </>
  )
}

export default App