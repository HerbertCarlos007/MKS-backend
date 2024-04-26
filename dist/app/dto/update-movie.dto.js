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
exports.UpdateMovieDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateMovieDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: true, type: () => String }, gender: { required: true, type: () => String }, releaseYear: { required: true, type: () => String } };
    }
}
exports.UpdateMovieDto = UpdateMovieDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do filme',
        example: 'Batman'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMovieDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descrição do filme',
        example: 'Batman luta com coringa para salvar a cidade'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMovieDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Gênero do filme',
        example: 'Ação'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMovieDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ano de lançamento',
        example: '2010'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateMovieDto.prototype, "releaseYear", void 0);
//# sourceMappingURL=update-movie.dto.js.map