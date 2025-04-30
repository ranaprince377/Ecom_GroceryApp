const express = require('express');
const cookieParser = require('cookie-parser');
const categoryRoutes = require('./routes/category.routes.js');
const productRoutes = require('./routes/product.routes.js');
const userRoutes = require('./routes/user.routes.js');
const { ApiError } = require('./utils');

const app = express();

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