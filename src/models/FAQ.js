import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer :{
        type: String,
        required: true,
    },
    type: {
    type: String,
    enum: ['product', 'service', 'general'],
    default: 'general',
  },
},
// {timestamps: true} // Automatically adds createdAt and updatedAt fields
);

const FAQ = mongoose.model('FAQ', faqSchema);

export default FAQ;