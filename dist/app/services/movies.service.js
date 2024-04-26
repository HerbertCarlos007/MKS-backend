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
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movies_entity_1 = require("../interfaces/movies.entity");
const typeorm_2 = require("typeorm");
let MoviesService = class MoviesService {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async store(data) {
        const movie = this.movieRepository.create(data);
        return await this.movieRepository.save(movie);
    }
    async findAll() {
        return await this.movieRepository.find();
    }
    async findOne(options) {
        try {
            return await this.movieRepository.findOneOrFail(options);
        }
        catch (error) {
            throw new common_1.NotAcceptableException(error.message);
        }
    }
    async update(id, data) {
        const movie = await this.movieRepository.findOneOrFail({
            where: { id }
        });
        this.movieRepository.merge(movie, data);
        return await this.movieRepository.save(movie);
    }
    async destroy(id) {
        await this.movieRepository.findOneOrFail({
            where: { id }
        });
        this.movieRepository.softDelete({ id });
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movies_entity_1.MovieEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MoviesService);
//# sourceMappingURL=movies.service.js.map