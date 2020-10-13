import { useData } from 'Data/ViewsData.js'
import React from 'react'
import View from './view.js'

export default function Logic(props) {
  let data = useData({
    context: 'todo',
    path: 'todo.isCompleted',
    viewPath: props.viewPath,
  })

  return <View isCompleted={data.value} viewPath={props.viewPath} />
}
