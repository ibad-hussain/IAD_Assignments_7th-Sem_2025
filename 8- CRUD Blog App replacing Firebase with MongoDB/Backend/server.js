import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();
const port = 4000;
connectDB();

const allowedOrigins = ['http://localhost:5173'];
app.use(express.json());
app.use(cors({ origin: allowedOrigins, credentials: true }));


// API Endpoints
app.get("/", (req, res) => {
    res.send("API working");
});

app.use("/api/blog", blogRouter);

app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});


app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
