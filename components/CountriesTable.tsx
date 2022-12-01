type Country = {
  name: string
  code: string
}

type CountriesTableProps = {
  countries: Country[]
}

export default function CountriesTable(countries: CountriesTableProps) {
  return (
    <div className='flex flex-col min-h-[104px]'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg dark:border-gray-800'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-800'>
              <thead className='bg-gray-50 dark:bg-gray-900'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400'
                  >
                    Country Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400'
                  >
                    Country Code
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-900'>
                {countries.countries.map((country) => (
                  <tr key={country.code}>
                    <td className='px-6 py-4 sm:whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200'>
                      {country.name}
                    </td>
                    <td className='px-6 py-4 sm:whitespace-nowrap text-sm text-gray-500 dark:text-gray-300'>
                      {country.code}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
