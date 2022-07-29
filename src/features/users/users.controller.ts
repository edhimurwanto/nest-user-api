import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Users from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get(':id')
  getUser(@Param('id') id: string): Users {
    return this.usersService.get(id);
  }

  @Get()
  allUser(): Users[] {
    return this.usersService.all()
  }

  @Post()
  create(@Body() user: Users): Users {
    return this.usersService.create(user)
  }

  @Put()
  update(@Body() user: Users): Users {
    return this.usersService.update(user)
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.usersService.delete(id)
  }
}
