import express from "express";

import { prisma } from "../lib/prisma";

const router = express.Router();

/*
  CREATE LESSON
*/
router.post(
  "/create-lesson",
  async (req, res) => {
    try {
      const {
        title,
        description,
        content,
        slug,
        pathId,
      } = req.body;

      const lesson =
        await prisma.lesson.create({
          data: {
            title,

            description,

            content,

            slug,

            xp: 50,

            order: 1,

            pathId,
          },
        });

      res.json(lesson);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        error:
          "Failed to create lesson",
      });
    }
  }
);

export default router;