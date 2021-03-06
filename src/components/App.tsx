import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { Layout } from './Layout';
import { Auth } from '../pages/Auth';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { LoadingScreen } from './LoadingScreen';
import { ProtectedRoute } from './ProtectedRoute';
import { AppContext } from '../Context/AppContext';
import { GlobalStyles } from '../styles/GlobalStyles';
import { useInitialState } from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <HelmetProvider>
      <GlobalStyles />
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Suspense fallback={LoadingScreen}>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/auth" component={Auth} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Layout>
          </Suspense>
        </BrowserRouter>
      </AppContext.Provider>
    </HelmetProvider>
  );
};

export default App;
