import { StorePaymentMethodsEntity } from 'src/modules/store_payment_methods/store_payment_methods.entity';
import { StoreSubscriptionsEntity } from 'src/modules/store_subscriptions/store_subscriptions.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class StorePaymentsErrorsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => StoreSubscriptionsEntity)
  @JoinColumn({
    name: 'subscription_id',
    referencedColumnName: 'id',
  })
  @Column()
  subscription_id: number;

  @OneToOne((type) => StorePaymentMethodsEntity)
  @JoinColumn({
    name: 'payment_method_id',
    referencedColumnName: 'id',
  })
  @Column()
  payment_method_id: number;

  @Column()
  payment_date: Date;

  @Column()
  error_code: string;

  @Column()
  error_description: string;
}
