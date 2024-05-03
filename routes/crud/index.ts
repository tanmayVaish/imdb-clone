import { Request, Response, Router } from 'express';
const router = Router();

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// ======================== Get ===========================

router.get("/get-movies", async (req: Request, res: Response) => {
  const results = await prisma.movie.findMany({
    skip: 3,
    take: 4,
  });

  res.status(200).json(results);
});

router.post("/add-movie", async (req: Request, res: Response) => {
  const { name, yor, plot, poster, producer, actors } = req.body;

  if (!name || !yor || !plot || !poster || !producer || !actors) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingMovie = await prisma.movie.findUnique({
    where: {
      name: name,
    } as Prisma.MovieWhereUniqueInput,
  });

  if (existingMovie) {
    res.status(400).json({ message: "Movie already exists" });
  }

  //! TODO: Add producer check

  try {
    const movie = await prisma.movie.create({
      data: {
        name: name,
        yearOfRelease: yor,
        plot: plot,
        poster: poster,
        producer: {
          connect: {
            id: producer,
          },
        },
        actors: {
          connect: actors,
        },
      },
    });

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error });
  }  
});

// ======================== Update ===========================

router.put("/update-movie", async (req: Request, res: Response) => {
  const { id, name, yor, plot, poster, producer, actors } = req.body;

  if(!id) return res.status(400).json({ message: "ID is required" });

  try {
  const movie = await prisma.movie.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      yearOfRelease: yor,
      plot: plot,
      poster: poster,
      producer: {
        connect: {
          id: producer,
        },
      },
      actors: {
        connect: actors,
      },
    },
  })
  res.status(200).json("Movie Updated Successfully");
} catch (error) {
  res.status(500).json({ message: error });
}
})

export default router;
