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
      <div className="mt-1 relative rounded-md drop-shadow-md">
        <input
          type="text"
          name="code-filter"
          id="code-filter"
          className="block w-full p-3 pr-10 rounded-md  placeholder-gray-400 focus:outline-none sm:text-sm dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
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
