import { useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRocketsThunk } from './redux/rockets/rockets';
import { fetchDragons } from './redux/dragons/dragons';
import Header from './components/Header/Header';
import RocketsView from './components/RocketsView/RocketsView';
import Mission from './components/Mission/Mission';
import DragonsView from './components/DragonsView/DragonsView';
import MyProfile from './components/MyProfile/MyProfile';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsThunk());
    dispatch(fetchDragons());
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/rockets"
          index
          element={<RocketsView />}
        >
          Rockets
        </Route>
        <Route
          path="/missions"
          element={<Mission />}
        >
          Rockets
        </Route>
        <Route
          path="/dragons"
          element={<DragonsView />}
        >
          Rockets
        </Route>
        <Route
          path="/myprofile"
          element={<MyProfile />}
        >
          My Profile
        </Route>
        <Route
          path="/"
          element={<Navigate to="/rockets" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
