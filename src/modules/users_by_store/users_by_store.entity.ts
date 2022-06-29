import { StoreEntity } from 'src/modules/store/store.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class UsersByStoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => StoreEntity)
  @JoinColumn({
    name: 'store_id',
    referencedColumnName: 'id',
  })
  @Column()
  store_id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: 1 })
  role: number;

  @Column({ default: 1 })
  status: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
}
