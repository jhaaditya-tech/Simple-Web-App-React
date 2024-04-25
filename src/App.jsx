
import {Fragment } from 'react';

import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples/Examples.jsx';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </Fragment>
  );
}

export default App;
