import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { Sample } from './Sample';
import { Auth } from '../pages/Auth';
import { LoadingScreen } from './LoadingScreen';
import { ProtectedRoute } from './ProtectedRoute';
import { AppContext } from '../Context/AppContext';
import { GlobalStyles } from '../styles/GlobalStyles';
import { useInitialState } from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <HelmetProvider context={{}}>
      <GlobalStyles />
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Suspense fallback={LoadingScreen}>
            <Switch>
              <ProtectedRoute exact path="/" component={Sample} />
              <Route exact path="/auth" component={Auth} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </AppContext.Provider>
    </HelmetProvider>
  );
};

export default App;
