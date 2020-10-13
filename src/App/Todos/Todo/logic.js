import View from './view.js'
import React from 'react'
import { useData } from 'Data/ViewsData.js'
import { DataProvider } from 'Data/ViewsData.js'
import { isNotEmpty } from 'Data/validate.js'

export default function Logic(props) {
  let data = useData({
    context: 'todos',
    path: `todos.byId[${props.item.id}]`,
    viewPath: props.viewPath,
  })

  return (
    <DataProvider
      context="todo"
      value={{ todo: data.value }}
      onChange={onChange}
      viewPath={props.viewPath}
    >
      <View viewPath={props.viewPath} />
    </DataProvider>
  )

  function onChange(editTodo) {
    if (!isNotEmpty(editTodo.todo.text)) return

    data.onChange((next) => {
      next.todos.byId[editTodo.todo.id].text = editTodo.todo.text
      next.todos.byId[editTodo.todo.id].isCompleted = editTodo.todo.isCompleted
    })
  }
}
