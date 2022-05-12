import { StatusEnum, CategoryEnum } from 'src/models/data.model';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.Suggestion,
  })
  status: string;

  @Column({
    type: 'enum',
    enum: CategoryEnum,
    default: CategoryEnum.Enhancement,
  })
  category: string;

  @Column({ default: 0 })
  upvotes: number;

  @Column('text', { default: '' })
  description: string;

  @Column({ default: 0 })
  comments: number;
}
