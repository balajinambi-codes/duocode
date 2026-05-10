import { Router } from "express";

import prisma from "../lib/prisma";

const router = Router();

/*
  CREATE USER
*/
router.post(
  "/create",
  async (req, res) => {
    try {
      const {
        clerkId,
        email,
        name,
        imageUrl,
      } = req.body;

      // CHECK EXISTING
      const existing =
        await prisma.user.findUnique(
          {
            where: {
              clerkId,
            },
          }
        );

      if (existing) {
        return res.json(existing);
      }

      // CREATE USER
      const user =
        await prisma.user.create({
          data: {
            clerkId,
            email,
            name,
            imageUrl,
          },
        });

      res.json(user);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        error:
          "Failed to create user",
      });
    }
  }
);

/*
  GET USER
*/
router.get(
  "/:clerkId",
  async (req, res) => {
    try {
      const { clerkId } =
        req.params;

      const user =
        await prisma.user.findUnique(
          {
            where: {
              clerkId,
            },
          }
        );

      res.json(user);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        error:
          "Failed to fetch user",
      });
    }
  }
);

export default router;