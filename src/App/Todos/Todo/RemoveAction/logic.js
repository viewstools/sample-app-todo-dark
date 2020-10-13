import View from './view.js'
import React from 'react'
import { useData } from 'Data/ViewsData.js'

export default function Logic(props) {
  let dataTodos = useData({
    context: 'todos',
    path: 'todos',
    viewPath: props.viewPath,
  })

  let dataTodo = useData({
    context: 'todo',
    path: 'todo.id',
    viewPath: props.viewPath,
  })

  return <View onClick={removeItem} viewPath={props.viewPath} />

  function removeItem() {
    dataTodos.onChange((next) => {
      delete next.todos.byId[dataTodo.value]
      next.todos.items = next.todos.items.filter(
        (item) => item !== dataTodo.value
      )
    })
  }
}
