import View from './view.js';
import React from 'react';
// import { useSetFlowTo, normalizePath } from 'Logic/ViewsFlow.js'
// import { useData } from 'Data/ViewsData.js'
import { DataProvider } from 'Data/ViewsData.js';

let value = {
  today: {
    date: new Date(),
  },
};

export default function Logic(props) {
  // let data = useData({
  //   context: 'thing',
  //   path: 'thing.json[path].to.field'
  // })

  // let setFlowTo = useSetFlowTo()

  // function onClick() {
  //   setFlowTo(normalizePath(props.viewPath, 'View/Inside')) // '../ViewUp'
  // }

  return (
    <DataProvider context="today" value={value}>
      <View />
    </DataProvider>
  );
  //
  // async function onSubmit(next) {
  //   // you need to make isInvalid
  //   // if (isInvalid(next.stuff)) return false
  //
  //   console.log(next)
  // }
  //
  // DataProvider also takes an onChange prop. You rarely need it.
  // function onChange(next, change) {
  //   console.log('stuff change', next)
  //   // change is a change function to do tweak values based off the change
  // }
}
