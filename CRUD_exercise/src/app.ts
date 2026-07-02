import express, { Request, Response } from "express";
import itemRoutes from "./routes/itemRoutes";

const app = express();

app.use(express.json());

app.use("/api/items", itemRoutes);


app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: "Route not found",
  });
});

export default app;