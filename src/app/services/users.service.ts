import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { UserEntity } from '../interfaces/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }
    
    async store(data: CreateUserDto) {
        const user = this.userRepository.create(data)
        return await this.userRepository.save(user)
    }

    async findAll() {
        return await this.userRepository.find({
            select: ['id', 'name', 'email']
        })
    }

    async findOne(options: FindOneOptions<UserEntity>) {
        try {
            return await this.userRepository.findOneOrFail(options)
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }

   async update(id: string, data: UpdateUserDto) {
    const user = await this.userRepository.findOneOrFail({
        where: {id}
    })
    
    this.userRepository.merge(user, data)
    return await this.userRepository.save(user)
   }
    
    async destroy(id: string) {
        await this.userRepository.findOneOrFail({
            where: {id}
        })
        this.userRepository.softDelete({id})
     }
}
