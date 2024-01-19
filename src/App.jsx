import { useState } from 'react'

import './App.css'
import Error from "./components/error.jsx";
import Layout from "./components/layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Starships from "./components/Starships/Starships.jsx";
import Planets from "./components/Planets/Planets.jsx";
import Characters from "./components/Characters/Characters.jsx";

function App() {

    const route = createBrowserRouter(
        [{
            path: "/",
            element: <Layout />,
            errorElement: <Error />,
            children: [
                {path: "/starships", element: <Starships/>},
                {path: "/planets", element: <Planets/>},
                {path: "/characters", element: <Characters/>}
            ]
        }]
    );

  return (
    <div>
        <RouterProvider router={route} />
    </div>
  )
}

export default App
