"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TaskController = class TaskController {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async create(task) {
        return this.taskRepository.create(task);
    }
    async findById(id, filter) {
        return this.taskRepository.findById(id, filter);
    }
    async find(filter) {
        return this.taskRepository.find(filter);
    }
    async replaceById(id, task) {
        await this.taskRepository.replaceById(id, task);
    }
    async updateById(id, task) {
        await this.taskRepository.updateById(id, task);
    }
    async deleteById(id) {
        await this.taskRepository.deleteById(id);
    }
    async count(where) {
        return this.taskRepository.count(where);
    }
    async updateAll(task, where) {
        return this.taskRepository.updateAll(task, where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/task', {
        responses: {
            '200': {
                description: 'Task model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Task) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Task, {
                    title: 'NewTask',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TaskController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/task/{id}', {
        responses: {
            '200': {
                description: 'Task model instance',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Task, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Task, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TaskController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/task', {
        responses: {
            '200': {
                description: 'Array of Task model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: (0, rest_1.getModelSchemaRef)(models_1.Task, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Task)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TaskController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/task/{id}', {
        responses: {
            '204': {
                description: 'Task PUT success',
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Task]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TaskController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/task/{id}', {
        responses: {
            '204': {
                description: 'Task PATCH success',
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Task, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Task]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TaskController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/task/{id}', {
        responses: {
            '204': {
                description: 'Task DELETE success',
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TaskController.prototype, "deleteById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/task/count', {
        responses: {
            '200': {
                description: 'Task model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Task)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TaskController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/task', {
        responses: {
            '200': {
                description: 'Task PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Task, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Task)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Task, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TaskController.prototype, "updateAll", null);
TaskController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.TaskRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.TaskRepository])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map