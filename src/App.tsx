import React from 'react';
import {ThemeProvider} from "./context/ThemeProvider";
// import {StarField} from "./components/StarField";
// import {Portfolio} from "./components/Portfolio";
// import {BitPlane} from "./bitplane";
import {Signal, signalRoutes} from "./signal";
import {createBrowserRouter as createRouter, RouterProvider} from 'react-router-dom'
import {CS696} from "./CS696";

const router = createRouter([
    {
        path: '/hmac',
        element: <CS696/>,
        children: [{
            path: '/hmac/network-fundamentals',
            element: <Signal/>,
            children: signalRoutes
        }]
    }

])

function App() {
    return (
        <ThemeProvider>
            {/*<StarField>*/}
            {/*    <Portfolio/>*/}
            {/*</StarField>*/}

            <RouterProvider router={router}/>
        </ThemeProvider>
    );
}

export default App;
