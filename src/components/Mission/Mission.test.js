import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Mission from './Mission';

it('Does it render correctly?', () => {
  const missTree = renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <Mission />
      </Provider>
    </React.StrictMode>,
  );

  expect(missTree).toMatchSnapshot();
});
