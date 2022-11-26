import React from 'react';
import { Provider } from 'react-redux';
import Greetings from "./components/greeting";
import store from './redux/configureStore';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Greetings />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
