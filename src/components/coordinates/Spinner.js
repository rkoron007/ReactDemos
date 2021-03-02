import React from 'react';

export default function Spinner(props) {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.text}</div>
    </div>
  );
}

Spinner.defaultProps = { text: 'loading...' };
