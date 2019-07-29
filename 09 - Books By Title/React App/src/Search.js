import React, { useState, useRef } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { Loader } from './css/components';

/* search component
form, allowing to type in the input and submit a search term
results, showing the books matching the search term
*/
function Search() {
  const [value, setValue] = useState(''); // stateful variable for the input element
  const inputRef = useRef(); // reference to the input element

  const [ results, setResults ] = useState(undefined); // stateful variable for the results fetched through the API

  // following the submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // set results to an empty string, to highlight the loading screen
    setResults('');

    // retrieve the value from the input element and build the URL for the API
    const { value: title } = inputRef.current;
    const url = `https://openlibrary.org/search.json?title=${title}&limit=8`

    // fetch the books at the proposed URL
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        // set the books in the matching variable
        const { docs: books } = json;
        // add an property to differentiate the href attribute of the use elements
        // this to differentiate the appearance of the svg describing the books
        books.forEach(book => book.useHref = `#book-${Math.ceil(Math.random() * 4)}`);
        setResults(books);
      })
      .catch(err => setResults(`${err}`)); // following an error include the error as a string in the stateful variable
  }

  return (
    <>
      <SearchForm
        value={value}
        setValue={setValue}
        inputRef={inputRef}
        handleSubmit={handleSubmit} />

        {/* results
        - by default, when undefined, render an empty string
        - when results is truthy (an array as fetched from the API call), render the search results through the matching component
        - else results is false/falsy (empty string), render the Loader component
        */}
        {
          results !== undefined
          ?
            results
            ?
            <SearchResults
              results={results}/>
            :
            <Loader>Searching...</Loader>
          :
          ''
        }
    </>
  );
}

export default Search;
