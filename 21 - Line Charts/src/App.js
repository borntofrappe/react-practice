import React, { useState, useEffect } from 'react';
import LineChart from './LineChart';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-top: 1rem;
  }
`;

const Form = styled.form`
  color: hsl(207, 26%, 16%);

  background: hsl(0, 0%, 100%);
  box-shadow: 0 2px 10px -7px hsla(0, 0%, 0%, 0.8);
  padding: 28px 36px;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 1rem;
  }
`;

const Select = styled.select`
  font-family: inherit;
  font-size: 1.2rem;
  color: inherit;
  padding: 0.2rem 0.5rem;
`;


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
        setCountries(
          json.map(({ Country, Slug }) => ({
            country: Country,
            slug: Slug
          }))
        );
      });
  }, []);

  useEffect(() => {
    if (country) {
      fetch(`${url}/total/country/${country}/status/${status}`)
        .then(response => response.json())
        .then(json => {
          setData(
            json.map(({ Date, Cases }) => ({
              date: Date,
              cases: Cases
            }))
          );
        });
    }
  }, [country, status]);

  return (
    <Container>
      {countries.length > 0 ? (
        <Form onSubmit={e => e.preventDefault()}>
          <Label>
            Country
            <Select onInput={e => setCountry(e.target.value)}>
              <option>---</option>
              {countries.map(({ country, slug }) => (
                <option value={slug} key={slug}>
                  {country}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Status
            <Select onInput={e => setStatus(e.target.value)}>
              {statuses.map(status => (
                <option value={status} key={status}>
                  {status}
                </option>
              ))}
            </Select>
          </Label>
        </Form>
      ) : null}
      {data.length > 0 && (
        <LineChart country={country} status={status} data={data} />
      )}
    </Container>
  );
}


export default App;
