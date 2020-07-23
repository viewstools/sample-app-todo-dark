import View from './view.js';
import React, { useState } from 'react';

export default function Logic(props) {
  let [flow, setFlowTo] = useState('ShowText');

  return (
    <View
      isFlowEditText={flow === 'EditText'}
      setFlowToEditText={() => setFlowTo('EditText')}
      isFlowShowText={flow === 'ShowText'}
      setFlowToShowText={() => setFlowTo('ShowText')}
    />
  );
}
