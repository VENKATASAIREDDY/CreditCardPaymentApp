import { applyMiddleware, createStore}  from 'redux';
import RootReducers  from './Reducers/RootReducers';
import thunk from 'redux-thunk'; 

/**
 * Create and return the Redux 'store' 
 * that holds the complete state tree of the app
 */
export default function configureStore() {
  return createStore(
    RootReducers,
    applyMiddleware(thunk)
  );
};