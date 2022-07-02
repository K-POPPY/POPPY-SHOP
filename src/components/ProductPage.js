import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductPage.css"

const ProductPage = ()=>{
    const {id} = useParams();
    const navigate = useNavigate();
    const css = {backgroundColor:'tomato',fontSize:25,margin:10,width:150,height:50,lineHeight:'45px',textAlign:'center',color:'#fff'}
    const [product,setProcuct]=useState(null);
    
    /* 컴포넌트가 업데이트 될때 한번만 실행 (무한루프X) */
    useEffect(()=>{
        axios.get(`https://d3534315-5e37-442a-853a-10fe524e3451.mock.pstmn.io/products/${id}`)
        .then((result)=>{setProcuct(result.data);})
        .catch((error)=>{console.error(error);})
    },[])

    console.log(product);
    if(product === null){
        return <h1>상품정보를 받고 있습니다.</h1>
    }

    return(
    <div id="body">
        <button onClick={()=>navigate(-1)} style={css}>Back</button>
        <div id='image-box'>
            <img src={`/${product.imgUrl}`} alt={product.name} />
        </div>
        <div id='profile-box'>
            <img src="/images/icons/avatar.png" alt={product.seller} className="product-avatar" />
            <span>{product.seller}</span>        
        </div>
        <div id='contents-box'>
            <div id='name'>{product.name}</div>
            <div id='price'>{product.price}원</div>
            <div id='createAt'>2022-06-26</div>
            <div id='description'>{product.discription} </div>
        </div>
    </div>
    )
}

export default ProductPage;