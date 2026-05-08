import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // CLEAR OLD DATA
  await prisma.userProgress.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.learningPath.deleteMany();

  /*
    FRONTEND PATH
  */
  const frontend =
    await prisma.learningPath.create({
      data: {
        title: "Frontend Development",
        description:
          "Learn HTML, CSS, JavaScript and React.",

        icon: "🎨",

        lessons: {
          create: [
            {
              title: "Introduction to HTML",
              description:
                "Learn HTML basics and structure.",

              xp: 10,
              order: 1,
            },

            {
              title: "HTML Tags & Elements",
              description:
                "Learn headings, paragraphs and links.",

              xp: 15,
              order: 2,
            },

            {
              title: "CSS Fundamentals",
              description:
                "Learn styling with CSS.",

              xp: 20,
              order: 3,
            },

            {
              title: "Flexbox Layout",
              description:
                "Master modern layouts.",

              xp: 25,
              order: 4,
            },

            {
              title: "JavaScript Basics",
              description:
                "Variables, functions and logic.",

              xp: 30,
              order: 5,
            },
          ],
        },
      },
    });

  /*
    BACKEND PATH
  */
  await prisma.learningPath.create({
    data: {
      title: "Backend Development",
      description:
        "Learn Node.js, Express and databases.",

      icon: "⚙️",

      lessons: {
        create: [
          {
            title: "Introduction to Node.js",
            description:
              "Understand server-side JavaScript.",

            xp: 20,
            order: 1,
          },

          {
            title: "Express.js Basics",
            description:
              "Build APIs using Express.",

            xp: 25,
            order: 2,
          },

          {
            title: "REST APIs",
            description:
              "Create professional APIs.",

            xp: 30,
            order: 3,
          },

          {
            title: "PostgreSQL Basics",
            description:
              "Learn relational databases.",

            xp: 35,
            order: 4,
          },

          {
            title: "Prisma ORM",
            description:
              "Connect database using Prisma.",

            xp: 40,
            order: 5,
          },
        ],
      },
    },
  });

  /*
    FULL STACK PATH
  */
  await prisma.learningPath.create({
    data: {
      title: "Full Stack Development",
      description:
        "Become a complete full stack engineer.",

      icon: "🚀",

      lessons: {
        create: [
          {
            title: "Frontend + Backend Architecture",
            description:
              "Understand full stack systems.",

            xp: 50,
            order: 1,
          },

          {
            title: "Authentication Systems",
            description:
              "Learn secure authentication.",

            xp: 60,
            order: 2,
          },

          {
            title: "Deploy Full Stack Apps",
            description:
              "Deploy apps professionally.",

            xp: 70,
            order: 3,
          },
        ],
      },
    },
  });

  console.log(
    "🌱 Database seeded successfully"
  );
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });