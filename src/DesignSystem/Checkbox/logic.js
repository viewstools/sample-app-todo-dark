import View from './view.js';
import React from 'react';

export default function Logic(props) {
  return (
    <View
      {...props}
      onClick={() => {
        props.onClick(!props.isSelected);
      }}
    />
  );
}
