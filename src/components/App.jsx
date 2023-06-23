import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const PageOne = lazy(() => import('../pages/PageOne'));
const PageTwo = lazy(() => import('../pages/PageTwo'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/page_1" element={<PageOne />} />
        <Route path="/page_2" element={<PageTwo />} />
      </Route>
    </Routes>
  );
};

export default App;

// компонент Routes є загальною обгорткою маршрутів, навіть якщо він єдиний
// компонент Layout містить в собі ті елементи, які є постійними на всіх сторінках
// lazy використовується разом із Suspenseп та отрібен для завантаження компонента тоді, коли він потрібен
