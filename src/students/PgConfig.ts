import { DataSourceOptions } from "typeorm";

export const PgConfig: DataSourceOptions = {
  type: "postgres",
  url: "postgresql://neondb_owner:npg_9FK5scmLbDYH@ep-falling-waterfall-atsiheyd-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  synchronize: true, 
  entities: [__dirname + '/**/*.Entities{.ts,.js}'], 
};