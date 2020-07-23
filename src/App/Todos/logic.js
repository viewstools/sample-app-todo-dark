import View from './view.js';
import React from 'react';
// import { useSetFlowTo, normalizePath } from 'Logic/ViewsFlow.js'
import { useData } from 'Data/ViewsData.js';
import { DataProvider } from 'Data/ViewsData.js';
import { isNotEmpty } from 'Data/validate.js';

export default function Logic(props) {
  let data = useData({
    context: 'todos',
    path: 'todos',
  });

  return data.value.items
    .filter((id) => {
      switch (data.value.filter) {
        case 'completed':
          return data.value?.byId[id]?.isCompleted;
        case 'active':
          return !data.value?.byId[id]?.isCompleted;
        default:
          return true;
      }
    })
    .map((item) => {
      return (
        <DataProvider
          context="todo"
          value={{ todo: data.value.byId[item] }}
          key={item}
          onChange={onChange}
        >
          <View />
        </DataProvider>
      );

      function onChange(editTodo) {
        if (!isNotEmpty(editTodo.todo.text)) return false;
        data.onChange((next) => {
          next.todos.byId[editTodo.todo.id].text = editTodo.todo.text;
          next.todos.byId[editTodo.todo.id].isCompleted =
            editTodo.todo.isCompleted;
        });
      }
    });
}
