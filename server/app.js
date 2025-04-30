const express = require('express');
const cookieParser = require('cookie-parser');
const categoryRoutes = require('./routes/category.routes.js');
const productRoutes = require('./routes/product.routes.js');
const userRoutes = require('./routes/user.routes.js');
const { ApiError } = require('./utils');
const cors = require('cors');

const app = express();

// CORS options to allow requests from frontend running on port 5500
const corsOptions = {
    origin: 'http://localhost:5173', // Allow only requests from this origin
    methods: 'GET,POST', // Allow only these methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
};

// Use CORS middleware with specified options
app.use(cors(corsOptions));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);

app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            success: err.success,
            statusCode: err.statusCode,
            message: err.message,  // Ensure message is included
            data: err.data,
            errors: err.errors,
        });
    } else {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

module.exports = app;