import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductPage.css"
import dayjs from 'dayjs'; // 상품등록일 동적으로 수정
import {API_URL} from '../config/Constans.js';

const ProductPage = ()=>{
    const {id} = useParams();
    const navigate = useNavigate();
    const css = {backgroundColor:'tomato',fontSize:25,margin:10,width:150,height:50,lineHeight:'45px',textAlign:'center',color:'#fff'}
    const [product,setProcuct]=useState(null);
    
    /* 컴포넌트가 업데이트 될때 한번만 실행 (무한루프X) */
    useEffect(()=>{
        axios.get(`${API_URL}/${id}`)
        .then((result)=>{
            console.log(result);
            setProcuct(result.data.product);})
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
            <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
        </div>
        <div id='profile-box'>
            <img src="/images/icons/avatar.png" alt={product.seller} className="product-avatar" />
            <span>{product.seller}</span>        
        </div>
        <div id='contents-box'>
            <div id='name'>{product.name}</div>
            <div id='price'>{product.price}원</div>
            <div id='createAt'>{dayjs(product.createdAt).format('YYYY년 MM월 DD일')}</div>
            <pre id='description'>{product.description} </pre>
        </div>
    </div>
    )
}

export default ProductPage;