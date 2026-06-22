import { DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";

export const pgConfig: DataSourceOptions = {
  type: "postgres",
  url: "postgresql://neondb_owner:npg_9FK5scmLbDYH@ep-falling-waterfall-atsiheyd-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  port: 5432,
  entities: [User],
  synchronize: true,
};