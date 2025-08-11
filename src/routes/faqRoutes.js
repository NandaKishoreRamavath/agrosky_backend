import express from "express";
import { getAllFAQs, getFAQById,  createFAQ, updateFAQ, deleteFAQ } from "../Controllers/faqController.js";

const router = express.Router();

router.get('/', getAllFAQs);

router.get('/:id', getFAQById);

router.post('/', createFAQ);

router.put('/:id', updateFAQ);

router.delete('/:id', deleteFAQ);

export default router;