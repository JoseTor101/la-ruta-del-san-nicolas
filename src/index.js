import React from 'react';
import * as ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import './styles/index.css';

//pages
//import RootLayout from './pages/RootLayout';
import App from './App';
import Landing from './pages/Landing';
import Bundles from './pages/Bundles';
import Hosting from './pages/Hosting';
import About from './pages/About';
import ErrorPage from './pages/Error-page';

import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";


 /*path: '/',
    element: <RootLayout />, // Use RootLayout as the root element
    children: [*/

const router = createBrowserRouter([

      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/paquetes',
        element: <Bundles />,
      },
      {
        path: '/hospedajes',
        element: <Hosting />,
      },
      {
        path: '/contacto',
        element: <About />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
