import React from 'react';
import 'default-passive-events';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';
import { Provider as ReduxProvider } from 'react-redux';
import listReducer from './store/listReducer';
import Router from './routes/Route';
import './App.css';

const store = createStore(
  combineReducers({ list: listReducer }),
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));
function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <DndProvider backend={HTML5Backend}>
          <Router />
        </DndProvider>
      </ReduxProvider>
    </div>
  );
}

export default App;
