import React from 'react';

// component to inject the icon created through a symbol element
// render the svg icon using the href passed as props
const Icon = ({href, size = 100}) =>
<svg className={href} width={size} height={size}>
  <use href={`#${href}`}/>
</svg>;

export default Icon;