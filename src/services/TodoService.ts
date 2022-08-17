import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ITodoItem} from "../models/todo-item";
import {todoSlice} from "../store/todos/TodoSlice";
import {ITodoPhoto} from "../models/todo-photo";

export const todoAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (build) => ({
    fetchAllTodos: build.query<ITodoItem[], number>({
      query: (limit: number = 5) => ({
        url: '/todos',
        params: {
          _limit: limit
        },
      }),
      async onQueryStarted(body, {dispatch, queryFulfilled}) {
        queryFulfilled.then(result => {
          const todos = result.data;
          dispatch(todoSlice.actions.init(todos));
        }).catch(error => {
          console.log('Todo fetch error: ' + error);
        })
      }
    }),
    fetchAllPhotos: build.query<ITodoPhoto[], number>({
      query: (limit: number = 1) => ({
        url: `/photos`,
        params: {
          _limit: limit
        },
      }),
      async onQueryStarted(body, {dispatch, queryFulfilled}) {
        queryFulfilled.catch(error => {
          console.log('Photo fetch error: ' + error);
        })
      }
    })
  })
})
