const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
                ref: 'ProductVariant', // References specific variant (size, color)
                required: false // Optional if product has no variants
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
        required: true,
        default: 0
    }
}, {timestamps: true});

// Update totalAmount before saving the cart
cartSchema.pre('save', function (next) {
    this.totalAmount = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    next();
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
