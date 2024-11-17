// src/controllers/commentController.ts
import { Request, Response } from "express";
import { Comment } from "../model/comment";

// Mock database
let comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    content: "Great post!",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    postId: 1,
    content: "Very informative!",
    createdAt: new Date().toISOString(),
  },
];

// Get all comments for a specific post
export const getComments = (req: Request, res: Response): void => {
  const postId = parseInt(req.params.postId, 10);
  const filteredComments = comments.filter(
    (comment) => comment.postId === postId
  );
  res.status(200).json(filteredComments);
};

// Add a new comment
export const addComment = (req: Request, res: Response): void => {
  const { postId, content }: { postId: number; content: string } = req.body;

  if (!postId || !content) {
    res.status(400).json({ error: "PostId and content are required" });
    return;
  }

  const newComment: Comment = {
    id: comments.length + 1,
    postId,
    content,
    createdAt: new Date().toISOString(),
  };

  comments.push(newComment);
  res.status(201).json(newComment);
};
