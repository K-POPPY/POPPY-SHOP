import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./UploadPage.css"
import {API_URL} from '../config/Constans.js';
import axios from "axios";
import { Form, Divider, Input, InputNumber, Button, Upload, message } from "antd";
const { TextArea } = Input;

const UploadPage = () => {
    const navigate = useNavigate();

    // 처음에는 null을 할당
    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = (values) => {
        axios.post(`${API_URL}/products`, {
            name: values.name,
            description: values.description,
            seller: values.seller,
            imageUrl: imageUrl,
            price: parseInt(values.price),
        })
            .then((result) => {
                navigate('/', { replace: true });
            }).catch((error)=>{
                console.error(error);
                message.error(`상품등록시 에러가 발생했습니다. ${(error.message)}`)
            })
    };

    const onChageImg = (info) => {
        // 업로드 상태에 따른 분기문
        if (info.file.status === "uploading") {
            return;
        }
        if (info.file.status === "done") {
            const response = info.file.response;
            const imageUrl = response.imageUrl;
            //파일업로드가 완료 되면 setImageUrl 속성에 imageUrl 을 할당
            setImageUrl(imageUrl);
        }
    };

    return (
        <div id="body">
            <div id="load-container">
                <Form name="uploadForm" onFinish={onSubmit}>
                    <Form.Item name="upload" label={<div className="uplod-lable">상품사진</div>}>
                        <Upload name="image" action={`${API_URL}/image`} listType="picture" showUploadList={false} onChange={onChageImg}>
                            {imageUrl ? (
                                <img id="upload-img" src={`${API_URL}/${imageUrl}`} />
                            ) : (
                                <div id="upload-img-placeholder">
                                    <img src="/images/icons/camera.png" />
                                    <span>이미지를 업로드해주세요.</span>
                                </div>
                            )}
                        </Upload>
                    </Form.Item>
                    <Divider />
                    <Form.Item label={<div className="upload-lavel">판매자명</div>} name="seller" rules={[{ required: true, message: "판매자명을 입력해주세요." }]}>
                        <Input className="upload-name" size="large" placeholder="판매자명을 입력해주세요." />
                    </Form.Item>
                    <Divider />
                    <Form.Item label={<div className="upload-label">상품명</div>} name="name" rules={[{ required: true, message: "상품명을 입력해주세요." }]}>
                        <Input className="upload-name" size="large" placeholder="상품명을 입력해주세요." />
                    </Form.Item>
                    <Divider />
                    <Form.Item label={<div className="upload-label">판매가</div>} name="price" rules={[{ required: true, message: "판매가를 입력해주세요." }]}>
                        <InputNumber className="upload-price" size="large" min={0} defaultValue={0} />
                    </Form.Item>
                    <Divider />
                    <Form.Item label={<div className="upload-label">상품설명</div>} name="description" rules={[{ required: true, message: "상품설명을 입력해주세요." }]}>
                        <TextArea size="large" id="product-description" showCount maxLength={300} placeholder="상품설명을 입력해주세요." />
                    </Form.Item>
                    <Divider />
                    <Form.Item>
                        <Button type="primary" id="submit-button" size="large" htmlType="submit-button">상품등록하기</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default UploadPage;