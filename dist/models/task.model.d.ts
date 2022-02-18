import { Entity } from '@loopback/repository';
export declare class Task extends Entity {
    id?: number;
    title: string;
    desc?: string;
    timeValue?: string;
    userId?: string;
    userName?: string;
    userEmail?: string;
    isComplete?: boolean;
    constructor(data?: Partial<Task>);
}
export interface TaskRelations {
}
export declare type TodoWithRelations = Task & TaskRelations;
