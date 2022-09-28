import React from 'react';
import {ThemeProvider} from "./context/ThemeProvider";
// import {StarField} from "./components/StarField";
// import {Portfolio} from "./components/Portfolio";
// import {BitPlane} from "./bitplane";
import {Signal} from "./signal";
import {Route, Routes} from 'react-router-dom'
import {CS696} from "./CS696";
import {ThemeSwitch} from "./components/ThemeSwitch";
import {PacketErrorRate, RxSignalStrength, UpperBound} from "./signal/components";


function App() {
    return (
        <ThemeProvider>
            {/*<StarField>*/}
            {/*    <Portfolio/>*/}
            {/*</StarField>*/}
            <>
                {/*<RouterProvider router={router}/>*/}
                <Routes>
                    <Route path={'/hmac'} element={<CS696/>}>
                        <Route path={'/hmac/network-fundamentals'} element={<Signal/>}>
                            <Route path={'/hmac/network-fundamentals/rx-signal-strength'}
                                   element={<RxSignalStrength/>}/>
                            <Route path={'/hmac/network-fundamentals/theoretical-upper-bound'} element={<UpperBound/>}/>
                            <Route path={'/hmac/network-fundamentals/packet-error-rate'} element={<PacketErrorRate/>}/>
                        </Route>
                    </Route>
                </Routes>
                <ThemeSwitch/>
            </>
        </ThemeProvider>
    );
}

export default App;
