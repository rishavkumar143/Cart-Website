import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";
import App from './App.jsx';
import Privacy from './Privacy.jsx';
import Contact from './Contact.jsx';
import Help from './Help.jsx';
import Signup from './Signup.jsx';

const approute = createBrowserRouter([
  {
    path: "/app",
    element: <App />
  },
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/privacy",
    element: <Privacy />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/help",
    element: <Help />
  },
  {
    path:"/Signup",
    element:<Signup/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={approute} />
  </React.StrictMode>
);
