import express from "express";
import faqRoutes from "./routes/faqRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(
  {
    origin: "http://localhost:3000"
  }
));
app.use(rateLimiter);




app.use("/faq",  faqRoutes);

app.use("/products", productRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

//
