import { useState } from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/styles/global.min.css'
import './assets/libs/slick-carousel/slick/slick.css'
import './assets/libs/slick-carousel/slick/slick-theme.css'
import './assets/libs/tiny-slider/dist/tiny-slider.css'
import './assets/libs/bootstrap-icons/font/bootstrap-icons.min.css'
import './assets/libs/feather-webfont/dist/feather-icons.css'
import './assets/libs/simplebar/dist/simplebar.min.css'

import store from './store/store';
import { Provider } from 'react-redux';

// import $ from 'jquery';
// window.$ = $; // Make jQuery globally available for plugins expecting $

// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'slick-carousel/slick/slick.min.js';
// import 'tiny-slider/dist/min/tiny-slider.js';

import './assets/libs/jquery/dist/jquery.min.js'
import './assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/libs/simplebar/dist/simplebar.min.js'

import './assets/js/theme.min.js'
import './assets/libs/jquery-countdown/dist/jquery.countdown.min.js'
import './assets/js/vendors/countdown.js'
import './assets/libs/slick-carousel/slick/slick.min.js'
import './assets/js/vendors/slick-slider.js'
import './assets/libs/tiny-slider/dist/min/tiny-slider.js'
import './assets/js/vendors/tns-slider.js'
import './assets/js/vendors/zoom.js'
import './assets/js/vendors/increment-value.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
