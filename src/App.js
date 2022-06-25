import { Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import ProductPage from './components/ProductPage';
import UploadPage from './components/UploadPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/UploadPage" element={<UploadPage></UploadPage>} />
        <Route path="/ProductPage/:id" element={<ProductPage></ProductPage>} />
      </Routes>
    </div>
  );
}

export default App;


