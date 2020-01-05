import React, { useState, useEffect, useRef } from 'react'
import Illustration from './Illustration.js'
import styled, {keyframes} from 'styled-components'
import { telephoneCheck } from './utils.js'

// fading animation for the list's items
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

// animate the background of the list through the pseudo element
// use the height as retrieved through useEffect
const List = styled.ul`
  margin-top: -2rem;
  padding: 1rem 3rem;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
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
    transition: 0.5s height cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index: -5;
  }
`

// animate the list items in order
// use the index and length properties passed through jsx to match the duration of the list's transition
const Item = styled.li`
  font-size: 0.9rem;
  letter-spacing: 1px;
  padding: 0.5rem 0.8rem;
  animation: ${fadeIn} 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) both;
  animation-delay: ${({index, length}) => `${index * 0.5 / length}s`};
  transition: background 0.25s ease-in-out;

  &:hover {
    background: hsl(220, 15%, 20%);
  }
`

function App() {
  const [isValid, setIsValid] = useState(false)
  const [phone, setPhone] = useState('')

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

  // for the animation, create a reference for the unordered list
  const ref = useRef()
  // variable describing the height of the list
  const [height, setHeight] = useState()

  // as the state of the input changes, update the boolean and the height
  useEffect(() => {
    setIsValid(telephoneCheck(phone));

    const list = ref.current;
    const { height } = list.getBoundingClientRect();
    setHeight(height);
  } , [phone, ref])

  return (
    <Card onSubmit={(e) => e.preventDefault()}>
      <Illustration isValid={isValid}/>
      <Label>
        US Phone
        <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </Label>
      <List ref={ref} height={height}>
        {/* show the hints only as the user types */}
        {phone && hints.map((hint, index, {length}) => <Item key={hint} index={index} length={length}>{hint}</Item>)}
      </List>
    </Card>

  );
}

export default App