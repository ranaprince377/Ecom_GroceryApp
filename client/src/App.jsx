import AppInitializer from './AppInitializer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './store/store';
import { Provider } from 'react-redux';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';

import './assets/styles';
import './assets/js/vendor.js';


function App() {
  return (
    <Provider store={store}>
      <AppInitializer />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="category/:catSlug/cid/:catId" element={<ProductsPage />} />
            <Route path="category/:catSlug/cid/:catId/sid/:subCatId" element={<ProductsPage />} />
            <Route path="product/:slug/pid/:productId" element={<ProductDetailsPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
