import { CountriesEntity } from 'src/modules/countries/countries.entity';
import { StoreCatagoriesEntity } from 'src/modules/stores_categories/stores_categories.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity()
export class StoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => StoreCatagoriesEntity)
  @JoinColumn({
    name: 'store_category_id',
    referencedColumnName: 'id',
  })
  @Column()
  store_category_id: number;

  @ManyToOne((type) => CountriesEntity)
  @JoinColumn({
    name: 'country_id',
    referencedColumnName: 'id',
  })
  @Column()
  country_id: number;

  @Column({
    unique: true,
  })
  contact_email: string;

  @Column({
    unique: true,
  })
  contact_phone: string;

  @Column({ default: 1 })
  status: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
