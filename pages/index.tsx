import Head from 'next/head'
import CountriesContainer from '../components/CountriesContainer'

export default function Home() {
  return (
    <div className='px-8'>
      <Head>
        <title>Hub88 Challenge</title>
        <meta name='description' content='Hub88 Frontend Developer Challenge' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen py-16 flex-1 flex flex-col justify-center items-center'>
        <CountriesContainer />
      </main>
    </div>
  )
}
