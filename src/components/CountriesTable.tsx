interface Country {
  name: string;
  code: string;
}

interface CountriesTableProps {
  countries: Country[];
}

export default function CountriesTable(countries: CountriesTableProps) {
  return (
    <div className="flex min-h-[104px] flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow dark:border-gray-800 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr className="flex">
                  <th
                    scope="col"
                    className="flex flex-grow px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                  >
                    Country Name
                  </th>
                  <th
                    scope="col"
                    className="flex px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                  >
                    Country Code
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-900 dark:bg-gray-800">
                {countries.countries.map((country) => (
                  <tr key={country.code} className="flex flex-row">
                    <td className="flex flex-grow px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-200 sm:whitespace-nowrap">
                      {country.name}
                    </td>
                    <td className="mr-20 flex px-6 py-4 text-sm text-gray-500 dark:text-gray-300 sm:whitespace-nowrap">
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
  );
}
