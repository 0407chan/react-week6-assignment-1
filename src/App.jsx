import RestaurantsPage from './RestaurantsPage';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  const { location: { pathname } } = window;

  const PageComponent = {
    '/': HomePage,
    '/restaurants': RestaurantsPage,
    '/about': AboutPage,
  }[pathname] || NotFoundPage;

  return (
    <div>
      <PageComponent />
    </div>
  );
}
