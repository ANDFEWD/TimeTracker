"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApplication = void 0;
const testlab_1 = require("@loopback/testlab");
const __1 = require("../..");
async function setupApplication() {
    const app = new __1.TaskListApplication({
        rest: (0, testlab_1.givenHttpServerConfig)(),
    });
    await app.boot();
    /**
     * Override default config for DataSource for testing so we don't write
     * test data to file when using the memory connector.
     */
    app.bind('datasources.config.db').to({ name: 'db', connector: 'memory' });
    await app.start();
    const client = (0, testlab_1.createRestAppClient)(app);
    return { app, client };
}
exports.setupApplication = setupApplication;
//# sourceMappingURL=test-helper.js.map