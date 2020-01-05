import React, { useState, useEffect } from 'react'
import Illustration from './Illustration.js'
import styled from 'styled-components'
import { telephoneCheck } from './utils.js'

const Card = styled.form`
  width: 300px;
  border-radius: 0.5rem;
  background: hsl(220, 15%, 15%);
  box-shadow: 0 0 10px -2px hsla(220, 15%, 5%, 0.5);
  color: hsl(30, 85%, 90%);
  padding: 2rem 3rem;
  & > * + * {
    margin-top: 1.5rem;
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: hsl(0, 0%, 80%);
  line-height: 2;
`

const Input = styled.input`
  width: 100%;
  border: none;
  font-family: inherit;
  color: inherit;
  padding: 0.35rem 0.8rem;
  background: hsl(0, 0%, 10%);
  font-size: 1rem;

  &:focus {
    outline: 1px solid hsl(0, 0%, 4%);
  }

`

function App() {
  const [isValid, setIsValid] = useState(false)
  const [phone, setPhone] = useState('')

  // as state of the input changes, update the boolean to describe a valid/invalid phone number
  useEffect(() => setIsValid(telephoneCheck(phone)) , [phone]);

  return (
    <Card onSubmit={(e) => e.preventDefault()}>
      <Illustration isValid={isValid}/>
      <Label>
        US Phone
        <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </Label>
    </Card>

  );
}

export default App