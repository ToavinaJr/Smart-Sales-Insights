import { Injectable } from '@nestjs/common';
import { TodoInterface } from './types/TodoInterface';

@Injectable()
export class TodoService {
  private todos: TodoInterface[] = [
    { id: 0, title: 'MAmafa trano', completed: false },
  ];
  private idCounter: number = 0;

  findAll(): TodoInterface[] {
    return this.todos;
  }

  findOne(id: number): TodoInterface {
    return this.todos.find((todo) => todo.id === id);
  }

  create(todo: Omit<TodoInterface, 'id'>): TodoInterface {
    this.idCounter = this.idCounter + 1;
    const newTodo = { id: this.idCounter, ...todo };
    this.todos.push(newTodo);
    return newTodo;
  }

  delete(id: number): TodoInterface[] {
    const newTodoList = this.todos.filter((todo) => todo.id !== id);
    this.todos = newTodoList;

    return newTodoList;
  }
}
