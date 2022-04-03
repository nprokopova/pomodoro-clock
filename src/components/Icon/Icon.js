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

const Icon = ({ id, color}) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
   
      <Component color={color} strokeWidth = {2.5} size = {22} />
   
  );
};



export default Icon;
