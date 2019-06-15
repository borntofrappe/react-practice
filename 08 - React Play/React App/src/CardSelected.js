import React from 'react';
import { Selected } from './style/components';

// render a div with the selected option
function CardSelected({selected}) {
  return (
    <Selected>{selected}</Selected>
  );
}

export default CardSelected;