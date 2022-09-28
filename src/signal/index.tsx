import {Outlet, RouteObject} from "react-router";
import {PacketErrorRate, RxSignalStrength, UpperBound} from "./components";
import React, {FC} from "react";
import {Button} from "@mui/material";

export const signalRoutes: RouteObject[] = [{
    path: '/hmac/network-fundamentals/rx-signal-strength',
    element: <RxSignalStrength/>,
    id: 'Rx Signal Strength'
}, {
    path: '/hmac/network-fundamentals/theoretical-upper-bound',
    element: <UpperBound/>,
    id: 'Theoretical Upper Bound'
}, {
    path: '/hmac/network-fundamentals/packet-error-rate',
    element: <PacketErrorRate/>,
    id: 'Packet Error Rate'
}]

export const Signal: FC = () => {
    return <div>
        {signalRoutes.map(({path, id}) => <Button key={path} href={path}>{id}</Button>)}
        <Outlet/>
    </div>
}