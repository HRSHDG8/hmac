import React from "react";
import ScrollTo from "react-scroll-into-view";
import {Button, styled} from "@mui/material";

const NavS = styled('nav')({
    "position": "fixed",
    "top": "0",
    "textAlign": "center"
})
const JumpText = styled('li')({
    "marginBottom": "10px",
    "display": "block",
    "fontSize": "16px",
    "fontWeight": "700"
})

const ButtonS = styled(Button)({
    "padding": "15px 30px",
    "fontSize": "20px",
    "fontWeight": "900",
    "color": "#f50057",
    "border": "2px solid #f50057",
    "cursor": "pointer",
    "width": "max-content",
    "transition": "0.25s ease",
    "outline": "none",
    "& : hover": {
        "borderRadius": "25px"
    }
})


export const Nav = () => (
    <NavS>
        <ul>
            <JumpText>Jump to:</JumpText>
            {['intro', 'about'].map(card => (
                <li key={card}>
                    <ScrollTo selector={`#card${card}`}>
                        <ButtonS>Card {card}</ButtonS>
                    </ScrollTo>
                </li>
            ))}
        </ul>
    </NavS>
);