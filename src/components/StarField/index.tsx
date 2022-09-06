import StarfieldAnimation from './starfield'
import React, {FC, ReactElement} from "react";
import {Paper, styled} from "@mui/material";

const Content = styled(Paper)({
    width: 'calc(100vw - 20px)',
    height: 'calc(100vh - 30px)',
    padding: '15px 10px',
    background: `linear-gradient(45deg, #501a5c, #200042)`,
    borderRadius: '0px'
})

export const StarField:FC<{ children: ReactElement }> = ({children})=>{
    return <div
        style={{
            backgroundSize: 'stretch',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
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