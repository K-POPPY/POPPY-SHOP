import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import MainPage from './components/MainPage'
import ProductPage from './components/ProductPage';
import UploadPage from './components/UploadPage';
import './App.css'
// 이미지 업로드 미리보기 구현할수있는 프론트엔드 리액트 라이브러리
import "antd/dist/antd.min.css";
import { CloudUploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';


function App() {
  let navigate=useNavigate();

  return (
    <div className="App">
      <div id="header">
          <div id="header-area">
            <Link to="/"><img src="images/icons/logo.png" alt="로고" /></Link>
            <Button size="large" shape="round"  icon={<CloudUploadOutlined />} onClick={()=>navigate('/UploadPage')}>업로드</Button>
          </div>
      </div>         
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/UploadPage" element={<UploadPage></UploadPage>} />
        <Route path="/ProductPage/:id" element={<ProductPage></ProductPage>} />
      </Routes>
      <div id="footer">
            <a href="#">회사소개</a><a href="#">이용약관</a><a href="#">통신판매업:123-1234</a><a href="#">사업자등록번호:456-56-78951</a><a href=""></a>
        </div>         
    </div>
  );
}

export default App;


