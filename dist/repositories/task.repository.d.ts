import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Task, TaskRelations } from '../models';
export declare class TaskRepository extends DefaultCrudRepository<Task, typeof Task.prototype.id, TaskRelations> {
    constructor(dataSource: MongoDbDataSource);
}
