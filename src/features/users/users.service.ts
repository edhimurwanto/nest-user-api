import { Injectable, NotFoundException } from '@nestjs/common';
import Users from './user.entity';

@Injectable()
export class UsersService {

    private users: Users[] = [
        {
            id: "01",
            name: "Edi M",
            age: 25,
            gender: 'MALE',
            username: "user1",
            password: "123456",
        }
    ];

    all(): Users[] {
        return this.users
    }

    findById(id: string): Users {

        const user: Users = this.users.find(user => user.id === id)

        if (!user) {
            throw new NotFoundException(null, 'User not found.')
        }

        return user

    }

    async findByUsername(username: string): Promise<Users | undefined> {
        return this.users.find(user => user.username === username)
    }

    create(user: Users): Users {
        this.users.push({ ...user, id: `${this.users.length}` })
        return user
    }

    update(user: Users): Users {
        const newUser = this.users.map(item => {
            if (item.id === user.id) {
                item = { ...user }
                return item
            } else {
                return item
            }
        })
        this.users = newUser

        return user
    }

    delete(id: string): void {
        const newUser = this.users.filter(user => user !== this.findById(id))
        this.users = newUser
    }

}
