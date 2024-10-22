import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import QuienesSomos from "../static-pages/QuienesSomos";
import Blog from "../static-pages/Blog";
import NotFound from "../static-pages/NotFound";
import PhoneContact from "../static-pages/PhoneContact";
import ComoFuncionaWeb from "../static-pages/ComoFuncionaWeb";
import Empleo from "../static-pages/Empleo";
import AyudaPreguntasFrecuentes from "../static-pages/AyudaPreguntasFrecuentes";
import AnunciateConNosotros from "../static-pages/AnunciateConNosotros";
import ContactarConAgente from "../static-pages/ContactarConAgente";
import TeLlamamos from "../static-pages/TeLlamamos";
import NuestrosServicios from "../static-pages/NuestrosServicios";
import NuestrosPrecios from "../static-pages/NuestrosPrecios";
import Home from "../static-pages/Home";


export const FooterRoute = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/quienessomos",
                element: <QuienesSomos />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/phonecontact",
                element: <PhoneContact />,
            },
            {
                path: "/comofuncionaweb",
                element: <ComoFuncionaWeb />,
            },
            {
                path: "/empleo",
                element: <Empleo />,
            },
            {
                path: "/ayudapreguntasfrecuentes",
                element: <AyudaPreguntasFrecuentes />,
            },
            {
                path: "/anunciateconnosotros",
                element: <AnunciateConNosotros />,
            },
            {
                path: "contactarconagente",
                element: <ContactarConAgente />,
            },
            {
                path: "tellamamos",
                element: <TeLlamamos />,
            },
            {
                path: "nuestrosservicios",
                element: <NuestrosServicios />
            },
            {
                path: "nuestrosprecios",
                element: <NuestrosPrecios />
            },            

        ],
    },
]);
