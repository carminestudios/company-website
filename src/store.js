import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import { routerReducer as routing } from 'react-router-redux';
import reducers from './reducers';

export default function configureStore( initialState = {} ) {
  const enhancer = compose(
    applyMiddleware( thunk ),
  );

  const rootReducer = combineReducers( {
    ...reducers,
    routing,
  } );


  const store = createStore( rootReducer, initialState, enhancer );

  return store;
}
