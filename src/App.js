import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Rocket from './components/Rocket/Rocket';
import Mission from './components/Mission/Mission';

const App = () => (
  <Router>
    <Navigation />

    <Routes>
      <Route
        path="/rockets"
        index
        element={(
          <ul>
            <li key="uidisd"><Rocket /></li>
          </ul>
        )}
      >
        Rockets
      </Route>
      <Route
        path="/missions"
        element={(
          <ul>
            <li key="uidrisd"><Mission /></li>
          </ul>
        )}
      >
        Rockets
      </Route>
      <Route
        path="/"
        element={<Navigate to="/rockets" />}
      />
    </Routes>
  </Router>
);

export default App;
