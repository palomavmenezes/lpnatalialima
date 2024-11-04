import type { AppProps } from 'next/app';
import Head from 'next/head';
import "../assets/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Natália Lima</title>
        <meta name="description" content="Consultoria de Marketing Digital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        {/* Adicione aqui o componente de cabeçalho global, se houver */}
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        {/* Adicione aqui o componente de rodapé global, se houver */}
      </footer>
    </>
  );
}
