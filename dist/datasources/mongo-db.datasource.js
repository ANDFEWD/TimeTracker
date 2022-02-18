"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'mongoDb',
    connector: 'mongodb',
    url: (_a = process.env.DB_URL) !== null && _a !== void 0 ? _a : '',
    host: (_b = process.env.DB_HOST) !== null && _b !== void 0 ? _b : '',
    port: (_c = process.env.DB_PORT) !== null && _c !== void 0 ? _c : '',
    user: (_d = process.env.DB_USER) !== null && _d !== void 0 ? _d : '',
    password: (_e = process.env.DB_PASS) !== null && _e !== void 0 ? _e : '',
    database: (_f = process.env.DB_NAME) !== null && _f !== void 0 ? _f : '',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MongoDbDataSource = class MongoDbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MongoDbDataSource.dataSourceName = 'mongoDb';
MongoDbDataSource.defaultConfig = config;
MongoDbDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.mongoDb', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], MongoDbDataSource);
exports.MongoDbDataSource = MongoDbDataSource;
//# sourceMappingURL=mongo-db.datasource.js.map