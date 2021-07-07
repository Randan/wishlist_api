import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './schemas/user.scema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id);
  }

  @Post()
  create(@Body() data: UserDto): Promise<User> {
    return this.usersService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UserDto): Promise<User> {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(id);
  }
}
