import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "employees" })
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  position!: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  salary!: number;

  @Column({ nullable: true })
  department?: string;

  @Column({ nullable: true })
  phone?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
