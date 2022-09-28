import {useTheme} from "../../context/ThemeProvider";
import {DarkMode, LightMode} from "@mui/icons-material";

export const ThemeSwitch = () => {
    const {toggleTheme, isLight} = useTheme()

    return <div style={{position: "absolute", bottom: 30, right: 30, cursor: "pointer"}} onClick={toggleTheme}>
        {isLight ? <DarkMode/> : <LightMode/>}
    </div>
}