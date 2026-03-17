import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  @Exclude() // This will exclude password from responses
  password: string;

  @Column({ default: 'user' })
  role: string; // 'user' or 'admin'

  @Column({ nullable: true })
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations will be added later
  // @OneToMany(() => Cart, cart => cart.user)
  // carts: Cart[];
  
  // @OneToMany(() => Order, order => order.user)
  // orders: Order[];
}