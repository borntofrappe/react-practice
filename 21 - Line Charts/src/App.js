import React, { useState, useEffect } from 'react';
import LineChart from './LineChart';

function App() {
  const url = "https://api.covid19api.com";
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();
  const statuses = ["confirmed", "deaths", "recovered"];
  const [status, setStatus] = useState(statuses[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}/countries`)
      .then(response => response.json())
      .then(json => {
        setCountries(json.map(({Country, Slug}) => ({
          country: Country,
          slug: Slug,
        })));
      });
  }, []);

  useEffect(() => {
    if(country) {
      fetch(`${url}/total/country/${country}/status/${status}`)
        .then(response => response.json())
        .then(json => {
          setData(json.map(({Date, Cases}) => ({
            date: Date,
            cases: Cases,
          })))
        });
    }
  }, [country, status]);

  return (
    <>
      {
        countries.length > 0 ?
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Select country
          <select onInput={(e) => setCountry(e.target.value)}>
            <option>---</option>
            {
            countries.map(({country, slug}) => <option value={slug} key={slug}>{country}</option>)
            }
          </select>
        </label>
        <label>
          Select status
          <select onInput={(e) => setStatus(e.target.value)}>
            {
              statuses.map(status => <option value={status} key={status}>{status}</option>)
            }
          </select>
        </label>
    </form>
        : null
      }
    {
      data.length > 0 &&
      <LineChart data={data} />
    }

    </>
  );
}

export default App;
