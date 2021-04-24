import React from 'react';
import { zeroPad } from './utils';

export default function Grid() {
  const demos = Array(31).fill().map((d, i) => ({
    id: Math.random(),
    url: i,
    label: `${zeroPad(i + 1)}.`,
  }));
  return (
    <main>
      {demos.map(({id, label, url}) => <a key={id} href={`/${url}`}>
        {label}
      </a>)}
    </main>
  )
}