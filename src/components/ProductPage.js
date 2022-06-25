import { useParams } from "react-router-dom"

const ProductPage = ()=>{
    const {id} = useParams();

    return(
    <div>
        <h1> {id}번째 상품페이지 </h1>        
        <p>{id}번째 상품입니다.</p>
    </div>
    )
}

export default ProductPage;