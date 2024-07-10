import axios from "axios";
import { useState } from "react";
function CardContainer(){
    const [productData,setProductData]= useState();
    async function apiData(){
        try {
            const jsonData= await axios.get("https://dummyjson.com/products")
            console.log(jsonData)
            productData(jsonData)
            
        } catch (error) {
            console.log("errorMassage")
            
        }
    }

    return <>
    <button onClick={apiData}>click</button>
 {
    //    productData.map((product)=>{
    //        return <Card/>
      //  })
    }
    </>
}
export default CardContainer;

