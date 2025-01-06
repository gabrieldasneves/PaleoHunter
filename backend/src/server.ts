import { PrismaClient } from "@prisma/client";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { authenticateToken } from "./middlewares/jwtMiddleware";
import { prisma } from "./database/prisma";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

app.get("/registers", authenticateToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const records = await prisma.record.findMany({
      where: { userId },
    });

    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve records" });
  }
});

app.post("/register", authenticateToken, async (req, res) => {
  const { title, description, latitude, longitude, images } = req.body;
  const userId = req.user.id;

  try {
    const newRecord = await prisma.record.create({
      data: {
        title,
        description,
        latitude,
        longitude,
        images,
        userId,
      },
    });
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: "Error creating register" });
  }
});

app.get("/registers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const record = await prisma.record.findUnique({
      where: { id: parseInt(id) },
    });
    if (record) {
      res.status(200).json(record);
    } else {
      res.status(404).json({ error: "register not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve register" });
  }
});
