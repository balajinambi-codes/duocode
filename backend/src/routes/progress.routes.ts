import { Router } from "express";

import { prisma } from "../lib/prisma";

const router = Router();

/*
  COMPLETE LESSON
*/
router.post("/complete", async (req, res) => {
  try {
    const {
      clerkId,
      lessonId,
    } = req.body;

    // FIND USER
    const user =
      await prisma.user.findUnique({
        where: {
          clerkId,
        },
      });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // FIND LESSON
    const lesson =
      await prisma.lesson.findUnique({
        where: {
          id: lessonId,
        },
      });

    if (!lesson) {
      return res.status(404).json({
        error: "Lesson not found",
      });
    }

    // CHECK IF ALREADY COMPLETED
    const existing =
      await prisma.userProgress.findUnique({
        where: {
          userId_lessonId: {
            userId: user.id,
            lessonId,
          },
        },
      });

    if (existing) {
      return res.json({
        success: true,
        alreadyCompleted: true,
      });
    }

    // SAVE PROGRESS
    await prisma.userProgress.create({
      data: {
        userId: user.id,
        lessonId,
        completed: true,
      },
    });

    // ADD XP
    const updatedUser =
      await prisma.user.update({
        where: {
          id: user.id,
        },

        data: {
          xp: {
            increment: lesson.xp,
          },

          level: Math.floor(
            (user.xp + lesson.xp) / 100
          ) + 1,
        },
      });

    return res.json({
      success: true,
      xpEarned: lesson.xp,
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: "Failed to complete lesson",
    });
  }
});

/*
  GET USER PROGRESS
*/
router.get("/:clerkId", async (req, res) => {
  try {
    const { clerkId } = req.params;

    const user =
      await prisma.user.findUnique({
        where: {
          clerkId,
        },
      });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    const progress =
      await prisma.userProgress.findMany({
        where: {
          userId: user.id,
        },
      });

    return res.json(progress);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: "Failed to fetch progress",
    });
  }
});

export default router;