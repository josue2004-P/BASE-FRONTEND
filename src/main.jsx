import ReactDOM from 'react-dom/client';

import {  HashRouter } from "react-router-dom";
import AppRouter from "./modules/router/AppRouter"
import { Provider } from "react-redux";
import { store } from "./store";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

    <Provider store={store}>
      <HashRouter>
        <AppRouter/>
      </HashRouter>
    </Provider>

  // </React.StrictMode>
)
