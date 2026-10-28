import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price!: number;

  @Column({ default: 0 })
  stock!: number;

  @Column({ nullable: true })
  category?: string;

  @Column({ nullable: true })
  image_url?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
