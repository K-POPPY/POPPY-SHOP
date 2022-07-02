import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Mainpage.css';
import axios from "axios";

const MainPage = () => {
    let [products,setProducts]=useState([]);
    const url="https://d3534315-5e37-442a-853a-10fe524e3451.mock.pstmn.io/products";
    
    useEffect(()=>{
        axios
        .get(url)
        .then((result)=>{
            products=result.data.products
            setProducts(products);            
        })
        .catch((error)=>{console.log(`통신실패:${error}`);
        });
    },[])

    return (
    <div>
        <div id="body">
            <div id="banner">
                <img src="images/banners/banner1.png" alt="" />
            </div>
            <h1>Products</h1>
            <div id="product-list">
                {products.map((product,idx)=>{
                    // console.log(product, idx);
                    return( 
                        <div className="product-card" key={idx}>
                            {/* products ${product.id}  */}
                            <Link className="product-link" to={`/ProductPage/${product.id}`}>
                                <div>
                                    <img className="product-img" src={product.imgUrl} alt={product.name} />
                                </div>
                            </Link>
                            <div className="product-contents">
                                <span className="product-name">{product.name}</span>
                                <span className="product-price">{product.price}원</span>
                                <div className="product-seller">
                                    <img src="images/icons/avatar.png" alt={product.seller} className="product-avatar" />
                                    <span>{product.seller}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
};

export default MainPage;