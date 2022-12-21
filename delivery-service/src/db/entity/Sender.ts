import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Order } from "./Orders";

@Entity()
export class Sender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "text",
    nullable: false,
  })
  name: string;

  @Column({
    type: "citext",
    nullable: false,
  })
  email: string;

  @Column({
    type: "citext",
    nullable: false,
  })
  @Column()
  password: string;

  @OneToMany(() => Order, (order) => order.sender)
  orders: Order[];
}
