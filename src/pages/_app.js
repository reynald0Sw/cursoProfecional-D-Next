import { ProviderAuth } from '@/hooks/useAuth';
import MainLayout from '@/layout /MainLayout';
import '@styles/tailwind.css';

function App({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  );
}
export default App;
