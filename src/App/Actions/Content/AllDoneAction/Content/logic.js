import { useData } from 'Data/ViewsData.js';
import View from './view.js';
import React from 'react';

export default function Logic(props) {
  let data = useData({
    context: 'todos',
    path: 'todos',
  });

  let isSelected =
    data.value.items.length > 0 &&
    data.value.items.every((id) => data.value.byId[id].isCompleted);

  return <View isSelected={isSelected} onClick={onClick} />;

  function onClick() {
    data.onChange((next) => {
      next.todos.items.forEach((id) => {
        next.todos.byId[id].isCompleted = !isSelected;
      });
    });
  }
}
