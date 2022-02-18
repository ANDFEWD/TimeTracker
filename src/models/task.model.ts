import {Entity, model, property} from '@loopback/repository';

@model()
export class Task extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'string',
  })
  timeValue?: string;

  @property({
    type: 'string',
  })
  userId?: string;

  @property({
    type: 'string',
  })
  userName?: string;

  @property({
    type: 'string',
  })
  userEmail?: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;

  constructor(data?: Partial<Task>) {
    super(data);
  }
}

export interface TaskRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Task & TaskRelations;
