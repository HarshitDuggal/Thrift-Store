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
                   <img className='side-wid' src="https://www.maxpixel.net/static/photo/1x/Shoert-Girl-Legs-Models-Black-And-White-1346767.jpg" alt='fashion1'/>
               </div>
               <div className='logomeg'>
                    <img className='logo' src={Logo}/>
               </div>
               <div className = 'img-side'>
                   <img className='side-wid'src="https://www.maxpixel.net/static/photo/1x/Shoert-Girl-Legs-Models-Black-And-White-1346767.jpg" alt='fashion1'/>
               </div>
           </div>
        </>
    );
}

export default Home;