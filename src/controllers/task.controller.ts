import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {Task} from '../models';
import {TaskRepository} from '../repositories';

@authenticate('jwt')
export class TaskController {
  constructor(
    @repository(TaskRepository)
    public taskRepository: TaskRepository,
  ) {}

  @post('/task', {
    responses: {
      '200': {
        description: 'Task model instance',
        content: {'application/json': {schema: getModelSchemaRef(Task)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Task, {
            title: 'NewTask',
            exclude: ['id'],
          }),
        },
      },
    })
    task: Omit<Task, 'id'>,
  ): Promise<Task> {
    return this.taskRepository.create(task);
  }

  @get('/task/{id}', {
    responses: {
      '200': {
        description: 'Task model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Task, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Task, {exclude: 'where'}) filter?: FilterExcludingWhere<Task>,
  ): Promise<Task> {
    return this.taskRepository.findById(id, filter);
  }

  @get('/task', {
    responses: {
      '200': {
        description: 'Array of Task model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Task, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(@param.filter(Task) filter?: Filter<Task>): Promise<Task[]> {
    return this.taskRepository.find(filter);
  }

  @put('/task/{id}', {
    responses: {
      '204': {
        description: 'Task PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() task: Task,
  ): Promise<void> {
    await this.taskRepository.replaceById(id, task);
  }

  @patch('/task/{id}', {
    responses: {
      '204': {
        description: 'Task PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Task, {partial: true}),
        },
      },
    })
    task: Task,
  ): Promise<void> {
    await this.taskRepository.updateById(id, task);
  }

  @del('/task/{id}', {
    responses: {
      '204': {
        description: 'Task DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.taskRepository.deleteById(id);
  }

  @get('/task/count', {
    responses: {
      '200': {
        description: 'Task model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(@param.where(Task) where?: Where<Task>): Promise<Count> {
    return this.taskRepository.count(where);
  }

  @patch('/task', {
    responses: {
      '200': {
        description: 'Task PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Task, {partial: true}),
        },
      },
    })
    task: Task,
    @param.where(Task) where?: Where<Task>,
  ): Promise<Count> {
    return this.taskRepository.updateAll(task, where);
  }
}
