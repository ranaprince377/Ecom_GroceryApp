import AppInitializer from './AppInitializer.jsx';
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './store/store';
import { Provider } from 'react-redux';
import Layout from './components/Layout.jsx';

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
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
