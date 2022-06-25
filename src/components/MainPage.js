import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Mainpage.css';
import axios from "axios";


const MainPage = () => {
    let [products,setProducts]=useState([]);
    const url="https://5849f6d9-5832-4a47-a177-93e7837fbfa3.mock.pstmn.io/produscts";
    
    useEffect(()=>{
        axios
        .get(url)
        .then((result)=>{
            products=result.data.products
            setProducts(products);
            console.log(products);
        })
        .catch((error)=>{console.log(`통신실패:${error}`);
        });
    },[])

    return (
    <div>
        <div id="header">
            <div id="header-area">
                <img src="images/icons/logo.png" alt="" />
            </div>
        </div>    
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
                            <Link className="product-link" to={`/ProductPage/${idx}}`}>
                                <div>
                                    <img className="product-img" src={product.imgUrl} alt={product.name} />
                                </div>
                            </Link>
                            <div className="product-contents">
                                <span className="product-name">{product.name}</span>
                                <span className="product-price">{product.price}</span>
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
        <div id="footer">
            <a href="#">회사소개</a><a href="#">이용약관</a><a href="#">통신판매업:123-1234</a><a href="#">사업자등록번호:456-56-78951</a><a href=""></a>
        </div>         
    </div>
    )
};

export default MainPage;