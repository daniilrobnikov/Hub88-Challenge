interface CodeFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export default function CodeFilter({ filter, setFilter }: CodeFilterProps) {
  return (
    <div className="my-8">
      <label
        htmlFor="code-filter"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Country Code
      </label>
      <div className="relative mt-1 rounded-md drop-shadow-md">
        <input
          type="text"
          name="code-filter"
          id="code-filter"
          className="block w-full rounded-md p-3 pr-10  placeholder-gray-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-600 sm:text-sm"
          placeholder="Enter country code"
          value={filter}
          onChange={(e) => setFilter(e.target.value.toUpperCase())}
          aria-invalid="true"
          aria-describedby="code-filter-error"
        />
      </div>
    </div>
  );
}
