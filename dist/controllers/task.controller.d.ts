import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Task } from '../models';
import { TaskRepository } from '../repositories';
export declare class TaskController {
    taskRepository: TaskRepository;
    constructor(taskRepository: TaskRepository);
    create(task: Omit<Task, 'id'>): Promise<Task>;
    findById(id: number, filter?: FilterExcludingWhere<Task>): Promise<Task>;
    find(filter?: Filter<Task>): Promise<Task[]>;
    replaceById(id: number, task: Task): Promise<void>;
    updateById(id: number, task: Task): Promise<void>;
    deleteById(id: number): Promise<void>;
    count(where?: Where<Task>): Promise<Count>;
    updateAll(task: Task, where?: Where<Task>): Promise<Count>;
}
