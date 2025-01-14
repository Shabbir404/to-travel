import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from 'postcss';
import Home from './Components/Home/Home';
import OutletRoot from './Components/Root/OutletRoot';
import Booking from './Components/Booking/Booking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletRoot></OutletRoot>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/booking',
        element: <Booking></Booking>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
