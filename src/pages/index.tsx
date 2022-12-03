import { gql } from "@apollo/client";
import Head from "next/head";
import { client } from "../apollo-client/config";
import CodeFilter from "../components/CodeFilter";
import CountriesTable from "../components/CountriesTable";
import ErrorMessage from "../components/ErrorMessage";
import { useCountriesFilter } from "../hooks";

interface Country {
  name: string;
  code: string;
}

interface Countries {
  countries: Country[];
}

export default function Home({ countries }: Countries) {
  const { filter, setFilter, filteredCountries } =
    useCountriesFilter(countries);

  return (
    <>
      <Head>
        <title>Hub88 Challenge</title>
        <meta name="description" content="Hub88 Frontend Developer Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-1 flex-col items-center justify-start">
        <div className="mt-[25vh] min-w-[40vw]">
          <CodeFilter filter={filter} setFilter={setFilter} />
          {filteredCountries.length > 0 ? (
            <CountriesTable countries={filteredCountries} />
          ) : (
            <ErrorMessage>No countries found.</ErrorMessage>
          )}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const query = gql`
    query {
      countries {
        name
        code
      }
    }
  `;

  const { data } = await client.query<Countries>({ query });

  return {
    props: {
      countries: data.countries,
    },
  };
}
