import {Button} from "@mui/material";
import {Outlet} from "react-router";
import React from "react";
import {signalRoutes} from "./signal";

export const CS696 = ()=>{
    return <div>
        {[{path:'/hmac/network-fundamentals', id: 'Network Fundamentals'}].map(({path, id}) => <Button key={path} href={path}>{id}</Button>)}
        <Outlet/>
    </div>
}