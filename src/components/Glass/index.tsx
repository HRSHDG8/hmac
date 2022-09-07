import {Card, styled} from "@mui/material";

// @ts-ignore
export const Glass = styled(Card, {shouldForwardProp: (prop) => prop !== "blur"})(({blur = 2}) => ({
    padding: 10,
    backgroundColor: 'transparent',
    backdropFilter: `blur(${blur}px)`,
}))