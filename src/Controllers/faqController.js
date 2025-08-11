import FAQ from "../models/FAQ.js";

export async function getAllFAQs(req, res) {
  try {

    const faqs = await FAQ.find().sort({ createdAt: -1 }); // Sort by order - newesrt first
    res.status(200).json(faqs);
  } catch (error) {
    console.error("Error in getALLFAQs controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getFAQById(req, res) {
  try {
    const faq = await FAQ.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: "FAQ not found" });
    }
    res.status(200).json(faq);
  } catch (error) {
    console.error("Error in getFAQById controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createFAQ(req, res) {
  try {
    const { question, answer, type } = req.body;
    const newFAQ = new FAQ({ question, answer, type });
    await newFAQ.save();
    res.status(201).json({ message: "FAQ created successfully" });
  } catch (error) {
    console.error("Error in createFAQ controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateFAQ(req, res) {
  try {
    const { question, answer } = req.body;
    const updateFAQ = await FAQ.findByIdAndUpdate(
      req.params.id,
      { question, answer },
      { new: true }
    );
    if (!updateFAQ) {
      return res.status(404).json({ message: "FAQ not found" });
    }
    res
      .status(200)
      .json({ message: `FAQ with ID ${req.params.id} updated successfully` });
  } catch (error) {
    console.error("Error in updateFAQ controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteFAQ(req, res) {
  try {
    const deleteFAQ = await FAQ.findByIdAndDelete(req.params.id);
    if (!deleteFAQ) {
      return res.status(404).json({ message: "FAQ not found" });
    }
    res
      .status(200)
      .json({ message: `FAQ with ID ${req.params.id} deleted successfully` });
  } catch (error) {
    console.error("Error in deleteFAQ controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
