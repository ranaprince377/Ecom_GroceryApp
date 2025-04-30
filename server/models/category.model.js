const mongoose = require('mongoose');
const slugify = require('slugify');

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    slug: { 
        type: String, 
        // required: true, 
        trim: true, 
        unique: true,
        lowercase: true
    },
    thumbnail: { 
        type: String, 
        trim: true 
    }
}, { timestamps: true });

categorySchema.pre('save', async function(next){
    if(this.name){
        let baseSlug = slugify(this.name, { lower: true, strict: true });
        let slug = baseSlug;
        let count = 1;

        // Check for existing slug and generate a unique one
        while (await this.constructor.exists({ slug })) {
            slug = `${baseSlug}-${count}`;
            count++;
        }

        this.slug = slug;
    }

    next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;