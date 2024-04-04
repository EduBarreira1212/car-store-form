import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormPage from './FormPage';
import ShowListPage from './ShowListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowListPage/>,
  },
  {
    path: "/form-page",
    element: <FormPage/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
