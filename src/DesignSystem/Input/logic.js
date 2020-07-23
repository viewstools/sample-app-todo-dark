import View from './view.js';
import React, { useEffect, useRef, useState } from 'react';

export default function Logic(props) {
  let input = useRef();
  let [isFocusedManual, setIsFocusedManual] = useState(false);

  function onKeyUp(event) {
    if (props.onKeyUp) {
      props.onKeyUp(event);
    } else if (event.key === 'Enter' && typeof props.onSubmit === 'function') {
      props.onSubmit();
    }
  }

  function onChange(event) {
    props.onChange(
      props.type === 'number'
        ? props.isInteger
          ? parseInt(event.target.value, 10)
          : parseFloat(event.target.value, 10)
        : event.target.value
    );
  }

  function onFocus(event) {
    setIsFocusedManual(true);

    if (props.onFocusSelectAll) {
      input.current.select();
    }

    if (typeof props.onFocus === 'function') {
      props.onFocus(event);
    }
  }
  useEffect(() => {
    if (props.onFocusSelectAll) {
      input.current.select();
    }
  }, []); // eslint-disable-line
  // once

  function onBlur(event) {
    setIsFocusedManual(false);

    if (typeof props.onBlur === 'function') {
      props.onBlur(event);
    }
  }

  return (
    <View
      {...props}
      isFocusedManual={isFocusedManual}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyUp={onKeyUp}
      onChange={onChange}
      input={input}
    />
  );
}
