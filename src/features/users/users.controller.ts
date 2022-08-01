import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Users from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get(':id')
  getUser(@Param('id') id: string): Promise<Users> {
    return this.usersService.findById(id);
  }

  @Get()
  allUser(): Promise<Users[]> {
    return this.usersService.findAll()
  }

  @Post()
  create(@Body() user: Users): Promise<Users> {
    return this.usersService.create(user)
  }

  @Put()
  update(@Body() user: Users): Promise<Users> {
    return this.usersService.update(user)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.usersService.delete(id)
  }
}
