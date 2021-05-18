import React from 'react';
import Routes from './Routes'
import './styles/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)
function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
