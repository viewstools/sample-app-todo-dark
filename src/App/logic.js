import { ViewsFlow } from 'Logic/ViewsFlow.js';
import { DataProvider } from 'Data/ViewsData.js';
import React from 'react';
import store from 'store2';
import View from './view.js';

let todos = store.get('todos')
  ? JSON.parse(store.get('todos'))
  : {
      todos: {
        items: [],
        byId: {},
        filter: 'all',
      },
    };

export default function Logic(props) {
  return (
    <ViewsFlow>
      <DataProvider context="todos" value={todos} onChange={onChange}>
        <View {...props} />
      </DataProvider>
    </ViewsFlow>
  );

  function onChange(next) {
    store.set('todos', JSON.stringify(next));
  }
}
