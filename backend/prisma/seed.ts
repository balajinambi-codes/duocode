import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // CLEAR OLD DATA
  await prisma.lessonProgress.deleteMany();

  await prisma.lesson.deleteMany();

  await prisma.learningPath.deleteMany();

  /*
    FRONTEND FOUNDATIONS
  */
  await prisma.learningPath.create({
    data: {
      title: "Frontend Foundations",

      description:
        "Master HTML, CSS and JavaScript fundamentals.",

      icon: "Code",

      type: "foundation",

      stackKey: "frontend-foundations",

      lessons: {
        create: [
          {
            title: "HTML Introduction",

            slug: "html-introduction",

            description:
              "Learn the basics of HTML.",

            content: `
# HTML Introduction

HTML stands for HyperText Markup Language.

HTML is used to create webpages.

HTML describes the structure of webpages using elements.
            `,

            exampleCode: `
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>

    <p>My first webpage.</p>
  </body>
</html>
            `,

            xp: 50,

            order: 1,
          },

          {
            title: "HTML Headings",

            slug: "html-headings",

            description:
              "Learn heading tags in HTML.",

            content: `
# HTML Headings

HTML headings are defined using h1 to h6 tags.

h1 is the largest heading.
            `,

            exampleCode: `
<h1>Main Heading</h1>

<h2>Sub Heading</h2>

<h3>Small Heading</h3>
            `,

            xp: 60,

            order: 2,
          },

          {
            title: "HTML Paragraphs",

            slug: "html-paragraphs",

            description:
              "Learn paragraphs in HTML.",

            content: `
# HTML Paragraphs

Paragraphs are defined using the p tag.
            `,

            exampleCode: `
<p>This is a paragraph.</p>

<p>This is another paragraph.</p>
            `,

            xp: 70,

            order: 3,
          },

          {
            title: "CSS Fundamentals",

            slug: "css-fundamentals",

            description:
              "Learn CSS styling.",

            content: `
# CSS Fundamentals

CSS is used to style webpages.

CSS controls colors, spacing and layouts.
            `,

            exampleCode: `
body {
  background: #f5f5f5;
}

h1 {
  color: green;
}
            `,

            xp: 80,

            order: 4,
          },

          {
            title: "Flexbox Layout",

            slug: "flexbox-layout",

            description:
              "Learn Flexbox layouts.",

            content: `
# Flexbox

Flexbox helps create responsive layouts.
            `,

            exampleCode: `
.container {
  display: flex;

  gap: 20px;
}
            `,

            xp: 90,

            order: 5,
          },

          {
            title: "JavaScript Basics",

            slug: "javascript-basics",

            description:
              "Learn JavaScript fundamentals.",

            content: `
# JavaScript Basics

JavaScript adds interactivity to webpages.
            `,

            exampleCode: `
const name = "Balaji";

console.log(name);
            `,

            xp: 100,

            order: 6,
          },

          {
            title: "DOM Manipulation",

            slug: "dom-manipulation",

            description:
              "Learn DOM interactions.",

            content: `
# DOM Manipulation

JavaScript can modify webpage elements dynamically.
            `,

            exampleCode: `
document
  .querySelector("h1")
  .innerText = "Hello";
            `,

            xp: 120,

            order: 7,
          },
        ],
      },
    },
  });

  /*
    MERN STACK
  */
  await prisma.learningPath.create({
    data: {
      title: "MERN Full Stack",

      description:
        "MongoDB, Express, React and Node.js.",

      icon: "Layers",

      type: "specialization",

      stackKey: "mern",

      lessons: {
        create: [
          {
            title: "Introduction to Node.js",

            slug: "intro-nodejs",

            description:
              "Learn Node.js basics.",

            content: `
# Node.js

Node.js allows JavaScript to run on servers.
            `,

            exampleCode: `
console.log("Hello Node");
            `,

            xp: 120,

            order: 1,
          },

          {
            title: "Express.js Basics",

            slug: "express-basics",

            description:
              "Learn Express fundamentals.",

            content: `
# Express.js

Express is a Node.js backend framework.
            `,

            exampleCode: `
import express from "express";

const app = express();
            `,

            xp: 140,

            order: 2,
          },

          {
            title: "REST APIs",

            slug: "rest-apis",

            description:
              "Build APIs with Express.",

            content: `
# REST APIs

REST APIs allow frontend and backend communication.
            `,

            exampleCode: `
app.get("/", (req, res) => {
  res.send("Hello");
});
            `,

            xp: 160,

            order: 3,
          },
        ],
      },
    },
  });

  /*
    NEXT.JS FULL STACK
  */
  await prisma.learningPath.create({
    data: {
      title: "Next.js Full Stack",

      description:
        "Build full stack apps using Next.js.",

      icon: "Rocket",

      type: "specialization",

      stackKey: "nextjs",

      lessons: {
        create: [
          {
            title: "Next.js Introduction",

            slug: "nextjs-introduction",

            description:
              "Learn Next.js basics.",

            content: `
# Next.js

Next.js is a React framework for full stack applications.
            `,

            exampleCode: `
export default function Home() {
  return <h1>Hello</h1>;
}
            `,

            xp: 150,

            order: 1,
          },

          {
            title: "App Router",

            slug: "nextjs-app-router",

            description:
              "Learn App Router.",

            content: `
# App Router

App Router enables nested layouts and routing.
            `,

            exampleCode: `
app/dashboard/page.tsx
            `,

            xp: 170,

            order: 2,
          },
        ],
      },
    },
  });

  /*
    PYTHON FULL STACK
  */
  await prisma.learningPath.create({
    data: {
      title: "Python Full Stack",

      description:
        "Learn Python backend development.",

      icon: "Database",

      type: "specialization",

      stackKey: "python",

      lessons: {
        create: [
          {
            title: "Python Basics",

            slug: "python-basics",

            description:
              "Learn Python fundamentals.",

            content: `
# Python Basics

Python is a beginner-friendly programming language.
            `,

            exampleCode: `
print("Hello Python")
            `,

            xp: 130,

            order: 1,
          },
        ],
      },
    },
  });

  /*
    JAVA FULL STACK
  */
  await prisma.learningPath.create({
    data: {
      title: "Java Full Stack",

      description:
        "Learn Java backend systems.",

      icon: "Cpu",

      type: "specialization",

      stackKey: "java",

      lessons: {
        create: [
          {
            title: "Java Introduction",

            slug: "java-introduction",

            description:
              "Learn Java basics.",

            content: `
# Java Basics

Java is widely used in enterprise applications.
            `,

            exampleCode: `
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello");
  }
}
            `,

            xp: 140,

            order: 1,
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
  .catch((error) => {
    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });