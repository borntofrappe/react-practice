import React, { useState, useEffect, useRef } from 'react'
import Illustration from './Illustration.js'
import styled, {keyframes} from 'styled-components'
import { telephoneCheck } from './utils.js'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`


const Card = styled.form`
  width: 300px;
  background: hsl(220, 15%, 15%);
  box-shadow: 0 0 10px -5px hsl(220, 15%, 5%);
  color: hsl(30, 85%, 95%);
  padding: 2rem 3rem;
  position: relative;
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
    outline: 1px solid hsl(0, 0%, 8%);
  }
`

const List = styled.ul`
  margin-top: -2rem;
  padding: 1rem 3.8rem;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  line-height: 2;
  color: hsl(30, 85%, 100%);
  z-index: 5;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${({height}) => `${height}px`};
    background: hsl(220, 15%, 15%);
    transition: 0.5s height cubic-bezier(0.445, 0.05, 0.55, 0.95);
    z-index: -5;
  }
`

const Item = styled.li`
  font-size: 0.9rem;
  letter-spacing: 1px;
  animation: ${fadeIn} 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) both;
  animation-delay: ${({index, length}) => `${index * 0.5 / length}s`};
`

function App() {
  const [isValid, setIsValid] = useState(false)
  const [phone, setPhone] = useState('')
  const listRef = useRef()
  const [height, setHeight] = useState()

  // list of valid US phone numbers
  // shown below the input
  const hints = [
    "555-555-5555",
    "(555)555-5555",
    "(555) 555-5555",
    "555 555 5555",
    "5555555555",
    "1 555 555 5555"
  ];

  // as state of the input changes, update the boolean to describe a valid/invalid phone number
  useEffect(() => {
    setIsValid(telephoneCheck(phone));
    const list = listRef.current;
    const { height } = list.getBoundingClientRect();
    setHeight(height);
    console.log(height);
  } , [phone, listRef])

  return (
    <Card onSubmit={(e) => e.preventDefault()}>
      <Illustration isValid={isValid}/>
      <Label>
        US Phone
        <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </Label>
      {/* show the hints only as the user types */}
      <List ref={listRef} height={height}>
        {phone && hints.map((hint, index, {length}) => <Item key={hint} index={index} length={length}>{hint}</Item>)}
      </List>
    </Card>

  );
}

export default App