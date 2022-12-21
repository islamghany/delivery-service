import "reflect-metadata";
import { DataSource } from "typeorm";
import { Biker } from "./entity/Bikers";
import { Order } from "./entity/Orders";
import { Sender } from "./entity/Sender";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5431,
  username: "root",
  password: "secret",
  database: "delivery",
  entities: [Sender, Order, Biker],
  synchronize: true, // remove on production
  logging: false,
});

export const senderRepository = AppDataSource.getRepository(Sender);
export const bikerRepository = AppDataSource.getRepository(Biker);
export const ordersRepository = AppDataSource.getRepository(Order);

export default AppDataSource;
