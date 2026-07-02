import { promises as fs } from "fs";
import path from "path";
import { User } from "../models/User"; 

const filePath = path.join(__dirname, "../../data.json");

const fileService = {



  async readItems(): Promise<User[]> {
    try {
      const data = await fs.readFile(filePath, "utf8");

      return JSON.parse(data) as User[];
    } catch (error: unknown) {
      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        (error as NodeJS.ErrnoException).code === "ENOENT"
      ) {
        await fs.writeFile(filePath, JSON.stringify([], null, 2), "utf8");
        return [];
      }

      if (error instanceof SyntaxError) {
        throw new Error("data.json contains invalid JSON.");
      }

      throw error;
    }
  },





  async writeItems(items: User[]): Promise<void> {

    await fs.writeFile(
        
      filePath,
      JSON.stringify(items, null, 2),
      "utf8"
    );
  },
};

export default fileService;