"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const dotenv = require("dotenv");
dotenv.config();
const config = {
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [(0, path_1.join)(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=typeorm.config.js.map