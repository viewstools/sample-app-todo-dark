import { DataProvider, useData } from 'Data/ViewsData.js';
import { isNotEmpty } from 'Data/validate.js';
import React, { useState } from 'react';
import View from './view.js';

export default function Logic(props) {
  let data = useData({ context: 'todos', path: 'todos' });
  let [value, setValue] = useState({ todo: { text: '' } });

  return (
    <DataProvider context="todo" value={value} onSubmit={onSubmit}>
      <View />
    </DataProvider>
  );

  async function onSubmit(newtodo) {
    if (!isNotEmpty(newtodo.todo.text)) return true;

    data.onChange((next) => {
      let todo = { text: newtodo.todo.text, id: Date.now() };
      next.todos.items.push(todo.id);
      next.todos.byId[todo.id] = todo;
    });

    setImmediate(() => {
      setValue({ todo: { text: '' } });
    });

    // TODO We need to use setImmediate because Views' DataProvider is blocking
    // updates to the context's value when you're submitting.
    //
    // We need to address it at some point in the morpher, here is some code
    // on how it could change for later:
    //
    // async function onSubmit(args) {
    //   if (isSubmitting.current) return;
    //   isSubmitting.current = true;

    //   try {
    //     let res = await props.onSubmit(state, args);
    //     isSubmitting.current = false;

    //     if (typeof res === 'function') {
    //       shouldCallOnChange.current = false;
    //       dispatch({ type: RESET_FN, fn: res });
    //     }
    //   } catch (error) {
    //     isSubmitting.current = false;
    //     dispatch({ type: FORCE_REQUIRED });
    //   }
    // }

    // case RESET_FN: {
    //   action.fn(draft, set, get);
    //   delete draft._forceRequired
    //   break;
    // }

    // return next => {
    //   console.log('next', next)
    //   next.todo.text = ''
    // }
  }
}
