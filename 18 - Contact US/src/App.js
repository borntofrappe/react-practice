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
    margin-top: 0.5rem;
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8rem;
  letter-spacing: 1px;
`

const Input = styled.input`
  width: 100%;
  border: none;
  font-family: inherit;
  color: inherit;
  padding: 0.2rem 0.8rem;
  background: hsl(0, 0%, 20%);
  outline: none;
  font-size: 1rem;

  &:focus {
    background: hsl(0, 0%, 30%);
  }
`

function App() {
  const [showFlag, setShowFlag] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => setShowFlag(telephoneCheck(phone)) , [phone]);

  return (
    <Card>
      <Illustration showFlag={showFlag}/>
      <Label>
        Name
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </Label>
      <Label>
        Email
        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </Label>
      <Label>
        Phone
        <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </Label>
    </Card>
  );
}

export default App