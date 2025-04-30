const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            variant: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductVariant', // Reference to the ProductVariant model
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    payment: {
        method: {
            type: String,
            enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery'],
            required: true
        },
        transactionId: {
            type: String
        },
        status: {
            type: String,
            enum: ['Pending', 'Completed', 'Failed'],
            default: 'Pending'
        }
    },
    shippingAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true, index: true },
        state: { type: String, required: true, index: true },
        zip: { type: String, required: true, index: true },
        country: { type: String, required: true, index: true }
    },
    deliveredAt: {
        type: Date
    }
}, {timestamps: true});

// Indexing for better query performance
orderSchema.index({ "shippingAddress.city": 1 });
orderSchema.index({ "shippingAddress.state": 1 });
orderSchema.index({ "shippingAddress.zip": 1 });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
