import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { TodoInterface } from './types/TodoInterface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  findAll(): TodoInterface[] {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): TodoInterface {
    return this.todoService.findOne(+id);
  }

  @Post()
  create(@Body() todo: Omit<TodoInterface, 'id'>): TodoInterface {
    return this.todoService.create(todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string): TodoInterface[] {
    return this.todoService.delete(+id);
  }
}
