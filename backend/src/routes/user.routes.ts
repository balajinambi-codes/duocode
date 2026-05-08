import { Router } from "express";

import { prisma } from "../lib/prisma";

const router = Router();

/*
  CREATE USER
*/
router.post("/create", async (req, res) => {
  try {
    const {
      clerkId,
      email,
      name,
      imageUrl,
    } = req.body;

    const existingUser =
      await prisma.user.findUnique({
        where: {
          clerkId,
        },
      });

    if (existingUser) {
      return res.json(existingUser);
    }

    const user = await prisma.user.create({
      data: {
        clerkId,
        email,
        name,
        imageUrl,
      },
    });

    return res.json(user);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: "Failed to create user",
    });
  }
});

/*
  GET USERS
*/
router.get("/", async (_req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        xp: "desc",
      },
    });

    return res.json(users);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: "Failed to fetch users",
    });
  }
});

export default router;