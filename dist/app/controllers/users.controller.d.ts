import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    index(): Promise<import("../interfaces/users.entity").UserEntity[]>;
    store(body: CreateUserDto): Promise<import("../interfaces/users.entity").UserEntity>;
    findOne(id: string): Promise<import("../interfaces/users.entity").UserEntity>;
    update(id: string, body: UpdateUserDto): Promise<import("../interfaces/users.entity").UserEntity>;
    delete(id: string): Promise<void>;
}
