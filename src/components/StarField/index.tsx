import StarfieldAnimation from './starfield'
import React, {FC, ReactElement} from "react";
import {Paper, styled} from "@mui/material";

const Content = styled(Paper)({
    width: '100vw',
    height: '100vh',
    borderRadius: '0px',
    background: 'transparent',
    overflowY: 'auto',
    position: 'absolute'
})

export const StarField: FC<{ children: ReactElement }> = ({children}) => {
    return <div
        style={{
            backgroundSize: 'stretch',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: `linear-gradient(45deg, #501a5c, #200042)`,
        }}
    >
        <StarfieldAnimation
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}
        />
        <Content>
            {children}
        </Content>
    </div>
}