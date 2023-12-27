import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/layout'

// import '@/styles/globals.css'
import '@/styles/custom.css'
import '@/styles/theme.min.css'
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

//   return (

//     <Layout>
//       <Component {...pageProps} />
//     </Layout>

//   )
return getLayout(<Component {...pageProps} />);
 }
