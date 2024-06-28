import React from 'react';
import * as ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import './styles/index.css';

//pages
import App from './App';
import Landing from './pages/Landing';
import Bundles from './pages/Bundles';
import About from './pages/About';
import ErrorPage from './pages/Error-page';

import {
createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/paquetes",
    element: <Bundles/>,
  },
  {
    path: "/hospedajes",
    element: <About/>,
  },  
  {
    path: "/contacto",
    element: <About/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/*<App />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
