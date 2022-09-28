import StarfieldAnimation from './starfield'
import React, {FC, ReactElement} from "react";
import {Paper, styled} from "@mui/material";
import {useTheme} from "../../context/ThemeProvider";

const Content = styled(Paper)({
    width: '100vw',
    height: '100vh',
    borderRadius: '0px',
    background: 'transparent',
    overflowY: 'auto',
    position: 'absolute'
})

export const StarField: FC<{ children: ReactElement }> = ({children}) => {
    const { isLight } = useTheme()
    return <div
        style={{
            backgroundSize: 'stretch',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: isLight ? 'linear-gradient(45deg, rgb(196 196 196), rgb(141 89 230))' : `linear-gradient(45deg, #501a5c, #200042)`,
        }}
    >
        <StarfieldAnimation
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}
            isLight={isLight}
        />
        <Content>
            {children}
        </Content>
    </div>
}