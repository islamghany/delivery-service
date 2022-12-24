import "reflect-metadata";
import { DataSource } from "typeorm";
import { Biker } from "./entity/Bikers";
import { Order } from "./entity/Orders";
import { Sender } from "./entity/Sender";

// postgresql://root:secret@localhost:5431/delivery?sslmode=disable

const AppDataSource = new DataSource({
  migrationsTableName: "migrations",
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "root",
  password: "islamghany",
  database: "delivery",
  entities: [Sender, Order, Biker],
  migrations: ["./migrations/**/*{.ts,.js}"],
  synchronize: true,
  logging: false,
});

export const senderRepository = AppDataSource.getRepository(Sender);
export const bikerRepository = AppDataSource.getRepository(Biker);
export const ordersRepository = AppDataSource.getRepository(Order);

export { AppDataSource };
