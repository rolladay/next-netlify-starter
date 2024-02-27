import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>rolladay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Rolladay Home" />
        <p className="description">
          Sorry, I`m preparing service. please wait.. big a moment</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
