import { FindOneOptions, Repository } from 'typeorm';
import { UserEntity } from '../interfaces/users.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    store(data: CreateUserDto): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findOne(options: FindOneOptions<UserEntity>): Promise<UserEntity>;
    update(id: string, data: UpdateUserDto): Promise<UserEntity>;
    destroy(id: string): Promise<void>;
}
