import express from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  getBlogsByTopic,
  updateBlog,
  deleteBlog,
  searchBlogs,
} from '../controllers/blogController.js';

import { protect } from '../middleware/authMiddleware.js'; // ⬅️ Import this

const router = express.Router();


router.get('/', getAllBlogs);
router.get('/topics', getBlogsByTopic);

router.get("/search", searchBlogs);

router.get("/:id", getBlogById);

router.post('/', protect, createBlog);
router.put('/:id', protect, updateBlog);     
router.delete('/:id', protect, deleteBlog);  

export default router;
