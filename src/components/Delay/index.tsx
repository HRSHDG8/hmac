import {FC, ReactElement, useEffect, useState} from "react";
import {Fade} from "@mui/material";

export const Delay: FC<{ time: number, children: ReactElement }> = ({time, children}) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const id = setTimeout(() => {
            setShow(true)
        }, time)

        return () => clearTimeout(id)

    }, [time])
    return <Fade in={show} timeout={1000}>
        {children}
    </Fade>
}