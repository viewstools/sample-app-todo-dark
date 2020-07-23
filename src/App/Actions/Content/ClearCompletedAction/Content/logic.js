import View from './view.js';
import React from 'react';
import { useData } from 'Data/ViewsData.js';

export default function Logic(props) {
  let dataTodos = useData({
    context: 'todos',
    path: 'todos',
  });

  // return dataTodos.value.items.filter(
  //   (id) => dataTodos.value.byId[id].isCompleted
  // ).length > 0 ? (
  return <View onClick={removeAllCompletedItems} />;
  // ) : null;

  function removeAllCompletedItems() {
    dataTodos.onChange((next) => {
      next.todos.items
        .filter((item) => next.todos?.byId[item]?.isCompleted)
        .map((id) => {
          delete next.todos.byId[id];
          return (next.todos.items = next.todos.items.filter(
            (item) => item !== id
          ));
        });
    });
  }
}
