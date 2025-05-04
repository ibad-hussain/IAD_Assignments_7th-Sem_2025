import blogModel from '../models/blogModel.js';


export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find().sort({ date: -1 });

        res.status(200).json({
            success: true,
            message: "All blogs sent",
            blogs
        });

    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching blogs" });
    }
};


export const createBlog = async (req, res) => {

    const { username, title, content } = req.body;
    if (!username || !title || !content) {
        return res.status(400).json({ success: false, message: "Invalid input" });
    }

    try {
        const blog = new blogModel({
            username,
            title,
            content,
        });
        await blog.save();
        
        res.status(200).json({
            success: true,
            message: "Blog created",
            blog
        });

    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating blog" });
    }
};
