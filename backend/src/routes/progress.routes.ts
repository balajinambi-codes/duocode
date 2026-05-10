import { Router } from "express";

import prisma from "../lib/prisma";

const router = Router();



/*
  COMPLETE LESSON
*/
router.post(
  "/complete",
  async (req, res) => {
    try {
      const {
        userId,
        lessonId,
      } = req.body;

      if (!userId || !lessonId) {
        return res.status(400).json({
          error:
            "Missing required fields",
        });
      }

      // FIND LESSON
      const lesson =
        await prisma.lesson.findUnique(
          {
            where: {
              id: lessonId,
            },
          }
        );

      if (!lesson) {
        return res.status(404).json({
          error:
            "Lesson not found",
        });
      }

      // EXISTING PROGRESS
      const existing =
        await prisma.lessonProgress.findFirst(
          {
            where: {
              userId,
              lessonId,
            },
          }
        );

      // ALREADY COMPLETED
      if (existing?.completed) {
        return res.json({
          success: true,
          alreadyCompleted: true,
        });
      }

      // CREATE PROGRESS
      await prisma.lessonProgress.create(
        {
          data: {
            userId,
            lessonId,
            completed: true,
          },
        }
      );

      // UPDATE XP
      const updatedUser =
        await prisma.user.update({
          where: {
            id: userId,
          },

          data: {
            xp: {
              increment: lesson.xp,
            },
          },
        });

      res.json({
        success: true,

        xpEarned: lesson.xp,

        totalXp: updatedUser.xp,

        previousLevel:
          updatedUser.level,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        error:
          "Failed to complete lesson",
      });
    }
  }
);

/*
  GET USER PROGRESS
*/
router.get(
  "/:userId",
  async (req, res) => {
    try {
      const { userId } =
        req.params;

      const progress =
        await prisma.lessonProgress.findMany(
          {
            where: {
              userId,
            },

            include: {
              lesson: true,
            },
          }
        );

      res.json(progress);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        error:
          "Failed to fetch progress",
      });
    }
  }
);



export default router;