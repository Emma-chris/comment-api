// src/routes/commentRoutes.ts
import { Router } from "express";
import { getComments, addComment } from "../controller/commentController";

const router = Router();

router.get("/:postId", getComments); // Get comments for a specific post
router.post("/", addComment); // Add a new comment

export default router;
