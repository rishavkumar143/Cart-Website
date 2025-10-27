import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from "./Login.jsx";
import App from './App.jsx'
import Privacy from './Privacy.jsx';
import Conatct from './Contact.jsx';
import Help from './Help.jsx';

let approute= createBrowserRouter([
  {
    path:"/App",
    element:<App/>
  },
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/Privacy",
    element:<Privacy/>
  },
  {
    path:"/Contact",
    element:<Conatct/>
  },
  {
    path:"/Help",
    element:<Help/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={approute}>
  <App/>
</RouterProvider>
)