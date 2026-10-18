import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import HeaderComp from "./Components/Header.tsx";
import NavBarComp from "./Components/NavBar.tsx";
import FooterComp from "./Components/Footer.tsx";
import MainComp from "./Components/Main_Content.tsx";
import Root from "./Components/Root";


export default function App() {

    const router = createBrowserRouter(
        [
            {path: "*", Component: Root},
        ]
    )

  return (
    <>
        <div className="">
            <HeaderComp/>
            <div className="content">
                <RouterProvider router={router}/>
                <MainComp/>
            </div>

            <FooterComp/>
        </div>

    </>
  )
}


