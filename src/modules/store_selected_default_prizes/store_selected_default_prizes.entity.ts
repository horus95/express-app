import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { DefaultPrizesOptionsEntity } from '../default_prizes_options/default_prizes_options.entity';
import { StoreEntity } from '../store/store.entity';

@Entity()
export class StoreSelectedDefaultPrizesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => StoreEntity)
  @JoinColumn({
    name: 'store_id',
    referencedColumnName: 'id',
  })
  @Column()
  store_id: number;

  @ManyToOne((type) => DefaultPrizesOptionsEntity)
  @JoinColumn({
    name: 'prize_id',
    referencedColumnName: 'id',
  })
  @Column()
  prize_id: number;
}
