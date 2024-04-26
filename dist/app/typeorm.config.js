"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const dotenv = require("dotenv");
dotenv.config();
const config = {
    type: 'mysql',
    host: 'srv887.hstgr.io',
    port: 3306,
    username: 'u379300444_herbert_carlos',
    password: '41568106hB',
    database: 'u379300444_database_herbe',
    entities: [(0, path_1.join)(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=typeorm.config.js.map