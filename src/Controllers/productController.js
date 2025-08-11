import Product from "../models/Product.js";

export async function  getAllProducts(req,res) {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    }catch(error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function  createProduct(req, res) {
    try{
        const { name, imgUrl } = req.body;
        const newProduct = new Product({ name, imgUrl });
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully" });
    }catch(error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function updateProduct(req, res){
    try {
        const { name, imgUrl } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { name, imgUrl }, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: `Product with ID ${req.params.id} updated successfully` });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deleteProduct(req, res){
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: `Product with ID ${req.params.id} deleted successfully` });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
