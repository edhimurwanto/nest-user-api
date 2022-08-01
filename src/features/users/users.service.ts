import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import Users from './user.entity';
import hashUtil from 'src/shared/utils/hash.util';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) { }

    findAll(): Promise<Users[]> {
        return this.usersRepository.find()
    }

    findById(id: string): Promise<Users> {

        return this.usersRepository.findOneBy({
            id
        })

    }

    findByUsername(username: string): Promise<Users> {
        return this.usersRepository.findOneBy({
            username
        })
    }

    async create(user: Users): Promise<Users> {
        user.password = await hashUtil.hash(user.password)
        return this.usersRepository.save(user)
    }

    async update(user: Users): Promise<Users> {
        const findUser = await this.findById(user.id)
        user.password = await hashUtil.hash(user.password)
        return this.usersRepository.save({ ...findUser, ...user })
    }

    async delete(id: string): Promise<void> {
        const findUser = await this.findById(id)
        if (findUser) {
            await this.usersRepository.softDelete({
                id
            })
        }

    }

}
