import { currentUser } from "@clerk/nextjs/server";

import { db } from "./db";

export async function syncUser() {
  const user = await currentUser();

  if (!user) return null;

  const existingUser = await db.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (existingUser) {
    return existingUser;
  }

  return db.user.create({
    data: {
      clerkId: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: user.fullName,
      imageUrl: user.imageUrl,
    },
  });
}