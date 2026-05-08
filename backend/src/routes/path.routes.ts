import { Router } from "express";

import { prisma } from "../lib/prisma";

const router = Router();

/*
  GET ALL LEARNING PATHS
*/
router.get("/", async (_req, res) => {
  try {
    const paths =
      await prisma.learningPath.findMany({
        include: {
          lessons: {
            orderBy: {
              order: "asc",
            },
          },
        },
      });

    return res.json(paths);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: "Failed to fetch paths",
    });
  }
});

export default router;