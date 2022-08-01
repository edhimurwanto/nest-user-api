import {
    BaseEntity as TypeOrmBaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm'

export default class BaseEntity extends TypeOrmBaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @CreateDateColumn()
    createdAt?: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt?: Date;

    @DeleteDateColumn()
    public deletedAt?: Date

}