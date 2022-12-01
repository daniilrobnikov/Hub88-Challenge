import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import CodeFilter from './CodeFilter'
import CountriesTable from './CountriesTable'
import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'

const COUNTRIES_QUERY = gql`
  query ($code: String) {
    countries(filter: { code: { regex: $code } }) {
      name
      code
    }
  }
`

export default function CountriesContainer() {
  const [filter, setFilter] = useState('')
  const { loading, error, data } = useQuery(COUNTRIES_QUERY, {
    variables: { code: filter },
  })

  return (
    <div className='min-w-[326px]'>
      <CodeFilter filter={filter} setFilter={setFilter} />
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage>Error: {error.message}</ErrorMessage>
      ) : data.countries.length === 0 ? (
        <ErrorMessage>No countries found.</ErrorMessage>
      ) : (
        <CountriesTable countries={data.countries} />
      )}
    </div>
  )
}
