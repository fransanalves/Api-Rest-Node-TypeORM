import { PrimaryColumn, Entity, Column } from 'typeorm';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;
  @Column({ nullable: false })
  nome: string;
  @Column({ nullable: true })
  email: string;
}
export { User };
