import { useState } from 'react';
import './home.css';
import Logo from '../../Asset/Logo.png';
const Home = (props) => {
    const products = props.data;
    // console.log(props,products);
    return (
        <>
           <div className='home'>
               {/* {products.products.map((product)=> {
                   return(
                       <div key = {product.id}>
                           <img src = {product.img}/>
                           <h3>{product.title}</h3>
                        </div>
                   )
               })} */}
               <div className = 'img-new'>
                   <img src="https://images.unsplash.com/photo-1459802071246-377c0346da93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=409&q=80" alt='fashion1'/>
               </div>
               <div className='logomeg'>
                    <img className='logo' src={Logo}/>
               </div>
               <div className = 'img-side'>
                   <img src="https://images.unsplash.com/photo-1459802071246-377c0346da93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=409&q=80" alt='fashion1'/>
               </div>
           </div>
        </>
    );
}

export default Home;