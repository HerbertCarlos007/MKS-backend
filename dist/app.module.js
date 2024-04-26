"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./modules/users.module");
const auth_module_1 = require("./modules/auth.module");
const auth_service_1 = require("./app/services/auth.service");
const auth_controller_1 = require("./app/controllers/auth.controller");
const jwt_1 = require("@nestjs/jwt");
const movies_module_1 = require("./modules/movies.module");
const core_1 = require("@nestjs/core");
const movies_controller_1 = require("./app/controllers/movies.controller");
const users_controller_1 = require("./app/controllers/users.controller");
const typeorm_config_1 = require("./app/typeorm.config");
const cache_manager_1 = require("@nestjs/cache-manager");
const cache_manager_redis_yet_1 = require("cache-manager-redis-yet");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            movies_module_1.MoviesModule,
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.default),
            cache_manager_1.CacheModule.register({
                ttl: 300,
                store: cache_manager_redis_yet_1.redisStore,
                host: process.env.REDIS_HOST,
                port: process.env.REDIS_PORT,
            }),
        ],
        providers: [auth_service_1.AuthService, jwt_1.JwtService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: cache_manager_1.CacheInterceptor
            }
        ],
        controllers: [auth_controller_1.AuthController, movies_controller_1.MoviesController, users_controller_1.UsersController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map