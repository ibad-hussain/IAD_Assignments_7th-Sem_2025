import express from "express";
import { getAllBlogs, createBlog } from "../controllers/blogController.js";

const blogRouter = express.Router();

blogRouter.get('/all-blogs', getAllBlogs);
blogRouter.post('/create-blog', createBlog);

export default blogRouter;
