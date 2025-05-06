import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.js';
import AddProductPage from './pages/AddProductPage.js';

import './assets/importCss.js';
import './assets/vendor.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='add-product' element={<AddProductPage />} />
          <Route
            path='*'
            element={
              <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>404</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <a href='/' style={{ color: 'blue', textDecoration: 'underline' }}>
                  Go back to Home
                </a>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
