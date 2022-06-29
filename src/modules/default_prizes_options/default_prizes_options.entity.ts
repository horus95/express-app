import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { PrizesEntity } from '../prizes/prizes.entity';

@Entity()
export class DefaultPrizesOptionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => PrizesEntity)
  @JoinColumn({
    name: 'prize_id',
    referencedColumnName: 'id',
  })
  @Column()
  prize_id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column()
  status: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
