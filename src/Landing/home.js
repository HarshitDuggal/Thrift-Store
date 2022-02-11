import { useState } from 'react';
const Home = (props) => {
    const products = props.data;
    // console.log(props,products);
    return (
        <>
           <div className='home'>
               {products.products.map((product)=> {
                   return(
                       <div key = {product.id}>
                           <img src = {product.img}/>
                           <h3>{product.title}</h3>
                        </div>
                   )
               })}
           </div>
        </>
    );
}

export default Home;