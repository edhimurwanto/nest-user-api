import BaseEntity from 'src/shared/entities/base.entity'
import { Entity, Column } from 'typeorm'

@Entity()
export default class Users extends BaseEntity {

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    gender: string

    @Column({ unique: true })
    username: string

    @Column()
    password?: string
}