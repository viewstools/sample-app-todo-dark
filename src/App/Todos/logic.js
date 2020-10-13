import View from './view.js'
import React from 'react'
import { useData } from 'Data/ViewsData.js'

export default function Logic(props) {
  let data = useData({
    context: 'todos',
    path: 'todos',
  })

  let value = data.value.items
    .filter((id) => {
      switch (data.value.filter) {
        case 'completed':
          return data.value?.byId[id]?.isCompleted
        case 'active':
          return !data.value?.byId[id]?.isCompleted
        default:
          return true
      }
    })
    .map((id) => ({ id }))

  return <View value={value} viewPath={props.viewPath} />
}
