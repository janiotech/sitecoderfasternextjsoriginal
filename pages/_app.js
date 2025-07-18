import '../styles/globals.css'
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
