import React, { useState } from 'react';
import styled from 'styled-components';
import {data} from './data.js';
import Illustration from './Illustration.js';

const Root = styled.div`
  max-width: 400px;
  width: 90vw;
  margin: 1rem auto;
  text-align: center;

  & > * + * {
    margin-top: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  padding: 0.5rem 0.75rem;
  font-weight: 700;
  position: relative;
  border-radius: 2px;
  background: hsl(0, 0%, 100%);
  border: 1px solid hsl(0, 0%, 20%);
`
const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const Select = styled.select`
    margin: 1rem 0;
    padding: 0.5rem 0.75rem;
    font-weight: 700;
    border-radius: 2px;
    background: hsl(0, 0%, 100%);
    border: 1px solid hsl(0, 0%, 20%);
`;

function App() {
  const [selection, setSelection] = useState(data[0]);
  const [showValue, setShowValue] = useState(false);

  return (
    <Root>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Select name="dates" onInput={() => console.log('input')}>
          {data.map(({date}) => date).map(date => <option key={date} value={date}>{date}</option>)}
        </Select>

        <Label>
          {showValue ? 'Actual Value' : 'Expected Value'}
          <Input aria-label="Toggle value" onInput={() => setShowValue(!showValue)} type="checkbox"/>
        </Label>

      </Form>

      <Illustration
        date={selection.date}
        value={selection.value}
        average={selection.average}
        showValue={showValue} />
    </Root>
  );
}

export default App;
