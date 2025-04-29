import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';
import { StatusArgs } from './dto/args/status.args';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      description: 'Todo 1 description',
      done: false,
    },
    {
      id: 2,
      description: 'Todo 2 description',
      done: false,
    },
    {
      id: 3,
      description: 'Todo 3 description',
      done: false,
    },
  ];

  public get totalTodos(): number {
    return this.todos.length;
  }

  public get pendingTodos(): number {
    return this.todos.filter((todo) => !todo.done).length;
  }

  public get doneTodos(): number {
    return this.todos.filter((todo) => todo.done).length;
  }

  public findAll(statusArgs: StatusArgs): Todo[] {
    const { status } = statusArgs;
    if (status !== undefined) {
      return this.todos.filter((todo) => todo.done === status);
    }
    return this.todos;
  }

  public findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  public create(createTodoInput: CreateTodoInput): Todo {
    const todo = new Todo();
    todo.description = createTodoInput.description;
    todo.id = Math.max(...this.todos.map((todo) => todo.id), 0) + 1;
    this.todos.push(todo);
    return todo;
  }

  public update(updateTodoInput: UpdateTodoInput): Todo {
    const { id, description, done } = updateTodoInput;
    const todoToUpdate = this.findOne(id);

    if (description) {
      todoToUpdate.description = description;
    }

    if (done !== undefined) {
      todoToUpdate.done = done;
    }

    this.todos = this.todos.map((todo) =>
      todo.id === id ? todoToUpdate : todo,
    );

    return todoToUpdate;
  }

  public remove(id: number): boolean {
    this.findOne(id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return true;
  }
}
