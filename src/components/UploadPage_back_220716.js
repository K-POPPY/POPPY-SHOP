import { useState } from "react";
import { Form, Divider, Input, InputNumber, Button, Upload } from "antd";
import "./UploadPage.css"
const { TextArea } = Input;

const UploadPage = ()=>{
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = (values) => {
        console.log("이것은 벨류", values);
    };

    const onChageImg = (info) => {
        // 업로드 상태에 따른 분기문
        if(info.file.status === "uploading"){
            return;
        }
        if(info.file.jstatus === "done"){
            const response=info.file.response;
            const imageUrl=response.imageUrl;
            //파일업로드가 완료 되면 setImageUrl 속성에 imageUrl 을 할당
			setImageUrl(imageUrl);
        }
    };

    return(
        <div id="body">
            <div id="load-container">
                <Form name="uploadForm" onFinish={onSubmit}>
                    <Form.Item name="upload" label={<div className="uplod-lable">상품사진</div>}>
                       <Upload name="image" listType="picture" showUploadList={false} onChange={onChageImg} action="http://localhost:8080/image"> {/* 경로의 /image는 postman>upliadimage의 key값임 */}
                            {imageUrl ? (
                                <imag id="upload-img" src={`http://localhost:8080/image/${imageUrl}`}  />
                            ) : (
                                <div id="upload-img-placeholder">
                                    <img src="/images/icons/camera.png" alt="camera" />
                                    <p>이미지를 업로드해주세요.</p>
                                </div>
                            ) }
                            
                        </Upload>
                    </Form.Item>
                    <Divider />
                    <Form.Item label={<div className="upload-lavel">판매자명</div>} name="seller" rules={[{required: true, message:"판매자명을 입력해주세요."}]}>
                        <Input className="upload-name" size="large" placeholder="판매자명을 입력해주세요." />
                    </Form.Item>
                    <Divider />
                    <Form.Item label={<div className="upload-label">상품명</div>} name="name" rules={[{required:true, message:"상품명을 입력해주세요."}]}>
                        <Input className="upload-name" size="large" placeholder="상품명을 입력해주세요." />
                    </Form.Item>
                    <Divider />
                    <Form.Item label={<div className="upload-label">판매가</div>} name="price" rules={[{required:true, message:"판매가를 입력해주세요."}]}>
                        <InputNumber className="upload-price" size="large" min={0} defaultValue={0} />
                    </Form.Item>
                    <Divider />
                    <Form.Item label={<div className="upload-label">상품설명</div>} name="description" rules={[{required:true, message:"상품설명을 입력해주세요."}]}>
                        <TextArea size="large" id="product-description" showCount maxLength={300} placeholder="상품설명을 입력해주세요." />
                    </Form.Item>
                    <Divider />
                    <Form.Item>
                        <Button type="primary" id="submit-button" size="large" htmlType="submit-button">상품등록하기</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )}

export default UploadPage;