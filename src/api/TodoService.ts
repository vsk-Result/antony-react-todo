import axios, {AxiosResponse} from "axios";
import {ITodoItem} from "../models/todo-item";

export default class TodoService {
  static async getTodos(): Promise<AxiosResponse<ITodoItem[]>> {
    return axios.get<ITodoItem[]>('https://jsonplaceholder.typicode.com/todos');
  }

  static async getImages(): Promise<AxiosResponse> {
    return axios.get('https://jsonplaceholder.typicode.com/photos');
  }
}
