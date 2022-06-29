import { StoreEntity } from 'src/modules/store/store.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class StorePaymentMethodsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany((type) => StoreEntity)
  @JoinColumn({
    name: 'store_id',
    referencedColumnName: 'id',
  })
  @Column()
  store_id: number;

  @Column()
  card_token: string;

  @Column()
  card_number: string;

  @Column()
  card_name: string;

  @Column()
  account_number: string;

  @Column()
  current_payment_method: number;

  @Column()
  status: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
