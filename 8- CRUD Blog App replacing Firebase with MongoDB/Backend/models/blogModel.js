import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    username: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const blogModel = mongoose.models.blog || mongoose.model("blog", blogSchema);

export default blogModel;
