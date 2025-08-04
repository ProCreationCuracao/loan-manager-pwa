// File: src/pages/_app.js
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout><Component {...pageProps} /></Layout>
    </ThemeProvider>
  );
}