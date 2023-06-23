import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>FOOTER</footer>
    </div>
  );
};

export default Layout;

// Suspense потрібен для управління асинхронним завантаженням компонентів
// Outlet потрібен для позначення місця рендеру вкладених марщрутів
