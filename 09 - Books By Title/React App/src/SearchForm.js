import React from 'react';
import { Form, Label, Input, Button, Icon } from './css/components';

/* form component
- set inputRef to refer to the input element
- when typing in the input update the stateful variable **value**
- following the submit event call the function fetching the books with a title matching the value
*/
function SearchForm({ value, setValue, inputRef, handleSubmit }) {
  return(
    <Form onSubmit={handleSubmit} >
      {/* htmlFor given how **for** is a reserved word in JavaScript */}
        <Label htmlFor="title">Search by title</Label>
        <Input ref={inputRef} type="text" name="title" id="title" value={value} onChange={(e) => setValue(e.target.value)}/>

        <Button aria-describedby="search-book">
          <Icon viewBox="0 0 100 100" width="30" height="30">
              <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5">
                  <circle
                      cx="42"
                      cy="42"
                      r="25">
                  </circle>
                  <path
                      strokeLinecap="round"
                      d="M 67 67 l 15 15">
                  </path>
              </g>
          </Icon>
          <span hidden id="search-book">Search for book</span>
        </Button>
    </Form>
  )
}

export default SearchForm;