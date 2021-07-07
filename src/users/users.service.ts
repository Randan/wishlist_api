import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user.scema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async create(data: UserDto): Promise<User> {
    const newUser = new this.userModel(data);

    return newUser.save();
  }

  async update(id: string, data: UserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }
}
