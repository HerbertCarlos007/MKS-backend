"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../interfaces/users.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async store(data) {
        const user = this.userRepository.create(data);
        return await this.userRepository.save(user);
    }
    async findAll() {
        const users = await this.userRepository.find({
            select: ['id', 'name', 'email']
        });
        console.log('from database');
        return users;
    }
    async findOne(options) {
        try {
            return await this.userRepository.findOneOrFail(options);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async update(id, data) {
        const user = await this.userRepository.findOneOrFail({
            where: { id }
        });
        this.userRepository.merge(user, data);
        return await this.userRepository.save(user);
    }
    async destroy(id) {
        await this.userRepository.findOneOrFail({
            where: { id }
        });
        this.userRepository.softDelete({ id });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(users_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map