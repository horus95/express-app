import { StoreEntity } from 'src/modules/store/store.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class StoreDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => StoreEntity)
  @JoinColumn({
    name: 'store_id',
    referencedColumnName: 'id',
  })
  @Column()
  store_id: number;

  @Column()
  profile_color: string;

  @Column()
  text_color: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
