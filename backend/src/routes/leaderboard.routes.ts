import { Router } from "express";

import prisma from "../lib/prisma";

const router = Router();

/*
  GET LEADERBOARD
*/
router.get("/", async (_req, res) => {
  try {
    const users =
      await prisma.user.findMany({
        orderBy: {
          xp: "desc",
        },

        take: 50,

        select: {
          id: true,
          name: true,
          imageUrl: true,
          xp: true,
          level: true,
          streak: true,
        },
      });

    const leaderboard =
      users.map((user, index) => ({
        rank: index + 1,
        ...user,
      }));

    res.json(leaderboard);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error:
        "Failed to fetch leaderboard",
    });
  }
});

export default router;