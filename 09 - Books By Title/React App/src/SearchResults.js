import React from 'react';
import { Section, Link, Details } from './css/components';

/* results component
cover the following instances:
1. results is a string (error message)
1. results is an empty array (no book found)
1. results is an array (books are found and stored in the array)
*/
function SearchResults({ results }) {
  return(
    <Section>
      {
        !Array.isArray(results)
        ?
        <h3>{results}</h3>
        :
        results.length === 0
        ?
        <h3>No matches found</h3>
        :
        // for each result add a link element to allow users to tab through the search results
        // ! remember to add the focus state alongside the hover state
        results.map(({title, author_name: author, first_publish_year: year, useHref}, index) => (
          <Link href="#" key={index} style={{ animationDelay: `${0.1 * index}s` }}>
            <svg viewBox="0 0 25 125" width="25" height="125">
                <use href={useHref}></use>
            </svg>
            <Details>
                <h1>{title.length > 45 ? `${title.substring(0, 45)}...` : title}</h1>
                <h2>{author || 'Unknown'}</h2>
                <p>{year || 'Unknown'}</p>
            </Details>
          </Link>
        ))
      }
    </Section>
  )
}

export default SearchResults;