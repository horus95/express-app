import { StoreEntity } from 'src/modules/store/store.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

@Entity()
export class StoreSubscriptionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany((type) => StoreEntity)
  @JoinColumn({
    name: 'store_id',
    referencedColumnName: 'id',
  })
  @Column()
  store_id: number;


  @Column({nullable:true})
  expiration_date: Date;

  @Column()
  status: number;

  @Column({nullable:true})
  cancelled_at: Date;
}
