import React, { useState, useEffect } from 'react'
import Illustration from './Illustration.js'
import styled from 'styled-components'
import { telephoneCheck } from './utils.js'

const Card = styled.form`
  width: 300px;

  background: hsl(220, 2%, 10%);
  color: hsl(30, 85%, 90%);
  padding: 2rem 3rem;
  & > * + * {
    margin-top: 1rem;
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
  padding: 0.2rem 0.8rem;
  background: hsl(0, 0%, 25%);
  outline: none;
  font-size: 1rem;

  &:focus {
    background: hsl(0, 0%, 15%);
  }
`

function App() {
  const [isValid, setIsValid] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => setIsValid(telephoneCheck(phone)) , [phone]);

  return (
    <Card onSubmit={(e) => e.preventDefault()}>
      <Illustration isValid={isValid}/>
      {/* <Label>
        First Name
        <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </Label>
      <Label>
        Last Name
        <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </Label> */}
      <Label>
        US Phone
        <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </Label>
    </Card>

  );
}

export default App