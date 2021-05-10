import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

enum gender {
  'Male',
  'Female',
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  dob: Date;

  @Column({ nullable: true })
  gender: gender;

  @Column({ nullable: true })
  address: string;

  @Column('text', { nullable: true })
  token: string;

  @Column('text', { nullable: true })
  refresh_token: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: string;
}
