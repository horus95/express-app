import { StorePaymentMethodsEntity } from 'src/modules/store_payment_methods/store_payment_methods.entity';
import { StoreSubscriptionsEntity } from 'src/modules/store_subscriptions/store_subscriptions.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
  Double,
} from 'typeorm';

@Entity()
export class StorePaymentsHistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany((type) => StoreSubscriptionsEntity)
  @JoinColumn({
    name: 'subscription_id',
    referencedColumnName: 'id',
  })
  @Column()
  subscription_id: number;

  @ManyToMany((type) => StorePaymentMethodsEntity)
  @JoinColumn({
    name: 'payment_method_id',
    referencedColumnName: 'id',
  })
  @Column()
  payment_method_id: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  payed_amount: number;

  @Column()
  payment_date: Date;

  @Column({ nullable: true })
  processor_id: string;

  @Column()
  transaction_id: string;

  @Column({ nullable: true })
  authorization_number: number;
}
