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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let MovieEntity = class MovieEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, gender: { required: true, type: () => String }, releaseYear: { required: true, type: () => String }, createdAt: { required: true, type: () => String }, updatedAt: { required: true, type: () => String }, deletedAt: { required: true, type: () => String } };
    }
};
exports.MovieEntity = MovieEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MovieEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MovieEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MovieEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MovieEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'release_year' }),
    __metadata("design:type", String)
], MovieEntity.prototype, "releaseYear", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", String)
], MovieEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated' }),
    __metadata("design:type", String)
], MovieEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", String)
], MovieEntity.prototype, "deletedAt", void 0);
exports.MovieEntity = MovieEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'movies' })
], MovieEntity);
//# sourceMappingURL=movies.entity.js.map