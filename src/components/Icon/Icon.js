import React from 'react';

import {
  RefreshCw,
  ChevronUp,
  ChevronDown,
  Power
} from 'react-feather';

const icons = {
  power: Power,
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  'refresh-cw':RefreshCw
};

const Icon = ({ id, color, strokeWidth, size}) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
      <Component color={color} strokeWidth = {strokeWidth} size = {size} />
  );
};



export default Icon;
